
import { serve } from &quot;https://deno.land/std@0.190.0/http/server.ts&quot;;
import { createClient } from &quot;https://esm.sh/@supabase/supabase-js@2&quot;;
import { Configuration, OpenAIApi } from &quot;https://esm.sh/openai@3.2.1&quot;;

const corsHeaders = {
  &quot;Access-Control-Allow-Origin&quot;: &quot;*&quot;,
  &quot;Access-Control-Allow-Headers&quot;: &quot;authorization, x-client-info, apikey, content-type&quot;};

interface HireRequest {
  talent: {
    id: string;
    full_name: string;
    professional_title: string;
    email?: string;
  };
  requester: {
    name: string;
    email: string;
    id?: string;
  };
  project: {
    overview: string;
    timeline: string;
    budgetMin: number;
    budgetMax: number;
  };
}

interface EnhancedContent {
  summary: string;
  projectType: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === &quot;OPTIONS&quot;) {
    return new Response(null, { headers: corsHeaders });
  }
  
  try {
    const supabase = createClient(
      Deno.env.get(&quot;SUPABASE_URL&quot;) ?? "&quot;,
      Deno.env.get(&quot;SUPABASE_SERVICE_ROLE_KEY&quot;) ?? "&quot;
    );
    
    const requestData: HireRequest = await req.json();
    const { talent, requester, project } = requestData;
    
    // Format budget for display
    const budgetDisplay = `$${project.budgetMin.toLocaleString()} - $${project.budgetMax.toLocaleString()}`;
    
    // 1. Optional: Enhance content with AI
    let enhancedContent: EnhancedContent | null = null;
    
    const openAiKey = Deno.env.get(&quot;OPENAI_API_KEY&quot;);
    if (openAiKey) {
      try {
        const configuration = new Configuration({
          apiKey: openAiKey});
        const openai = new OpenAIApi(configuration);
        
        const prompt = `
          Project Overview: &quot;${project.overview}&quot;
          
          Please provide:
          1. A brief summary of this project (max 100 characters)
          2. Classify this project into one category (e.g., &quot;AI Development&quot;, &quot;Cloud Migration&quot;, &quot;Web Design&quot;, etc.)
          
          Format your response as JSON:
          {
            &quot;summary&quot;: &quot;Brief summary here&quot;,
            &quot;projectType&quot;: &quot;Project type here&quot;
          }
        `;
        
        const completion = await openai.createCompletion({
          model: &quot;gpt-3.5-turbo-instruct&quot;,
          prompt,
          max_tokens: 150,
          temperature: 0.3});
        
        const responseText = completion.data.choices[0]?.text || "&quot;;
        
        try {
          // Extract JSON from the response
          const jsonMatch = responseText.match(/\{[\s\S]*\}/);
          if (jsonMatch) {
            enhancedContent = JSON.parse(jsonMatch[0]);
            // console.log(&quot;Enhanced content generated:&quot;, enhancedContent);
          }
        } catch (jsonError) {
          console.error(&quot;Error parsing AI response:&quot;, jsonError);
          // Continue without enhanced content
        }
      } catch (aiError) {
        console.error(&quot;Error generating enhanced content:&quot;, aiError);
        // Continue without enhanced content
      }
    }
    
    // 2. Store the request in the database
    const { data: requestRecord, error: requestError } = await supabase
      .from('hire_requests')
      .insert([
        {
          talent_id: talent.id,
          requester_id: requester.id || null, // May be null if user is not authenticated
          requester_name: requester.name,
          requester_email: requester.email,
          project_overview: project.overview,
          project_summary: enhancedContent?.summary || null,
          project_type: enhancedContent?.projectType || null,
          timeline: project.timeline,
          budget_min: project.budgetMin,
          budget_max: project.budgetMax,
          budget_display: budgetDisplay,
          status: 'new',
          expiry_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
        }
      ])
      .select();
      
    if (requestError) {
      throw new Error(`Error storing hire request: ${requestError.message}`);
    }
    
    // 3. Create notification for the admin
    // Fetch admin users
    const { data: adminUsers, error: adminError } = await supabase
      .from('profiles')
      .select('id')
      .eq('user_type', 'admin')
      .limit(1);
      
    if (adminError) {
      console.error(&quot;Error fetching admin users:&quot;, adminError);
    }
    
    let adminId: string | undefined = undefined;
    
    // Create notification for admin (if any found)
    if (adminUsers && adminUsers.length > 0) {
      adminId = adminUsers[0].id;
      
      const adminNotificationContent = {
        title: `New hiring request for ${talent.full_name}`,
        message: `${requester.name} (${requester.email}) wants to hire ${talent.full_name} for a project with budget ${budgetDisplay}.`,
        type: &quot;hire_request&quot;,
        related_id: requestRecord[0].id
      };
      
      const { error: notificationError } = await supabase
        .rpc('create_notification', {
          _user_id: adminId,
          _title: adminNotificationContent.title,
          _message: adminNotificationContent.message,
          _type: adminNotificationContent.type,
          _related_id: adminNotificationContent.related_id
        });
        
      if (notificationError) {
        console.error(&quot;Error creating admin notification:&quot;, notificationError);
      }
    }
    
    // 4. Send email notification to talent
    if (talent.email) {
      // In a real implementation, this would call your email sending function
      const emailResponse = await supabase.functions.invoke('send-email', {
        body: {
          to: talent.email,
          subject: `New Project Request from ${requester.name}`,
          html: `
            <h1>You've Received a New Project Request</h1>
            <p>Hello ${talent.full_name},</p>
            <p>You have received a new project request from ${requester.name} (${requester.email}).</p>
            <h2>Project Details</h2>
            <p><strong>Budget:</strong> ${budgetDisplay}</p>
            <p><strong>Timeline:</strong> ${project.timeline}</p>
            <p><strong>Overview:</strong></p>
            <p>${project.overview}</p>
            ${enhancedContent?.summary ? `<p><strong>Summary:</strong> ${enhancedContent.summary}</p>` : ''}
            ${enhancedContent?.projectType ? `<p><strong>Project Type:</strong> ${enhancedContent.projectType}</p>` : ''}
            <p>Please log in to your Zion AI Marketplace account to respond to this request.</p>
            <p>Best regards,<br>The Zion AI Marketplace Team</p>
          `}});
      
      // console.log(&quot;Email sending result:&quot;, emailResponse);
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: &quot;Hire request processed successfully&quot;,
        request_id: requestRecord[0].id
      }),
      {
        headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json&quot; },
        status: 200}
    );
  } catch (error) {
    console.error(&quot;Error processing hire request:&quot;, error.message);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: &quot;Failed to process hire request&quot;,
        error: error.message 
      }),
      {
        headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json" },
        status: 500}
    );
  }
});
