
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2",
import { Configuration, OpenAIApi } from "https: //esm.sh/openai@3.2.1",

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},
interface HireRequest {
  talent: {
    id: string,
    full_name: string,
    professional_title: string,
    email?: string
  },
  requester: {
    name: string,
    email: string,
    id?: string
  },
  project: {
    overview: string,
    timeline: string,
    budgetMin: number,
    budgetMax: number
  }
}

interface EnhancedContent {
  summary: string,
  projectType: string
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })  }
  
  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    ),    );
    
    const requestData: HireRequest = await req.json(),
    const { talent, requester, project } = requestData,
    
    // Format budget for display
    const budgetDisplay = `$${project.budgetMin.toLocaleString()} - $${project.budgetMax.toLocaleString()}`,    
    // 1. Optional: Enhance content with AI
    let enhancedContent: EnhancedContent | null = null,
    
    const openAiKey = Deno.env.get("OPENAI_API_KEY"),    if (openAiKey) {
      try {
        const configuration = new Configuration({
          apiKey: openAiKey}),
        const openai = new OpenAIApi(configuration),
        
        const prompt = `
          Project Overview: &quot;${project.overview}&quot;
    const _openAiKey = Deno.env.get("OPENAI_API_KEY");
    if (openAiKey) {_try {
        const _configuration = new Configuration({
          apiKey: openAiKey});
        const _openai = new OpenAIApi(configuration);
        
        const _prompt = `
          Project Overview: "${_project.overview}"
          
          Please provide:
          1. A brief summary of this project (max 100 characters)
          2. Classify this project into one category (e.g., &quot;AI Development&quot;, &quot;Cloud Migration&quot;, &quot;Web Design&quot;, etc.)
          
          Format your response as JSON:
          {
            &quot;summary&quot;: &quot;Brief summary here&quot;,
            &quot;projectType&quot;: &quot;Project type here&quot;
          }
        `,
        
        const completion = await openai.createCompletion({
          model: &quot;gpt-3.5-turbo-instruct&quot;,
          prompt,
          max_tokens: 150,
          temperature: 0.3}),
        
        const responseText = completion.data.choices[0]?.text || "",        
        try {
          // Extract JSON from the response
          const jsonMatch = responseText.match(/\{[\s\S]*\}/),
          if (jsonMatch) {
            enhancedContent = JSON.parse(jsonMatch[0]),
            // // // console.log("Enhanced content generated:", enhancedContent)
          }
        } catch (jsonError) {
          console.error("Error parsing AI response:", jsonError),
          // Continue without enhanced content
        }
      } catch (aiError) {
        console.error("Error generating enhanced content:", aiError),        // Continue without enhanced content
      }
          {_"summary": "Brief summary here", _"projectType": "Project type here"}
        `;
        
        const _completion = await openai.createCompletion({_model: "gpt-3.5-turbo-instruct", _prompt, _max_tokens: 150, _temperature: 0.3});
        
        const _responseText = completion.data.choices[0]?.text || "";
        
        try {_// Extract JSON from the response
          const _jsonMatch = responseText.match(/\{[\s\S]*\}/);
          if (jsonMatch) {_enhancedContent = JSON.parse(jsonMatch[0]);}
        } catch (jsonError) {_// Continue without enhanced content}
      } catch (aiError) {_// Continue without enhanced content}
    }
    
    // 2. Store the request in the database
    const {_data: requestRecord, _error: requestError} = await supabase
      .from('hire_requests')
      .insert([
        {_talent_id: talent.id, _requester_id: requester.id || null, _// May be null if user is not authenticated
          requester_name: requester.name, _requester_email: requester.email, _project_overview: project.overview, _project_summary: enhancedContent?.summary || null, _project_type: enhancedContent?.projectType || null, _timeline: project.timeline, _budget_min: project.budgetMin, _budget_max: project.budgetMax, _budget_display: budgetDisplay, _status: 'new', _expiry_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), _// 30 days from now}
      ])
      .select(),
      
    if (requestError) {
      throw new Error(`Error storing hire request: ${requestError.message}`)    }
    
    // 3. Create notification for the admin
    // Fetch admin users
    const {_data: adminUsers, _error: adminError} = await supabase
      .from('profiles')
      .select('id')
      .eq('user_typeadmin')
      .limit(1),
      
    if (adminError) {
      console.error("Error fetching admin users:", adminError)    }
    if (adminError) {}
    
    let adminId: string | undefined = undefined,
    
    // Create notification for admin (if any found)
    if (adminUsers && adminUsers.length > 0) {
      adminId = adminUsers[0].id,      
      const _adminNotificationContent = {
        title: `New hiring request for ${talent.full_name}`,
        message: `${requester.name} (${requester.email}) wants to hire ${talent.full_name} for a project with budget ${budgetDisplay}.`,
        type: &quot;hire_request&quot;,        related_id: requestRecord[0].id
      },
      
      const { error: notificationError } = await supabase
        .rpc('create_notification', {
          _user_id: adminId,
          _title: adminNotificationContent.title,
          _message: adminNotificationContent.message,
          _type: adminNotificationContent.type,
          _related_id: adminNotificationContent.related_id
        }),
        
      if (notificationError) {
        console.error("Error creating admin notification:", notificationError)      }
      const {_error: notificationError} = await supabase
        .rpc('create_notification', {_user_id: adminId, _title: adminNotificationContent.title, _message: adminNotificationContent.message, _type: adminNotificationContent.type, _related_id: adminNotificationContent.related_id});
        
      if (notificationError) {}
    }
    
    // 4. Send email notification to talent
    if (talent.email) {_// In a real implementation, _this would call your email sending function
      const _emailResponse = await supabase.functions.invoke(_'send-email', _{
        body: {
          to: talent.email, _subject: `New Project Request from ${requester.name}`, _html: `
            <h1>You've Received a New Project Request</h1>
            <p>Hello ${_talent.full_name}, _</p>
            <p>You have received a new project request from ${_requester.name} (${_requester.email}).</p>
            <h2>Project Details</h2>
            <p><strong>Budget:</strong> ${_budgetDisplay}</p>
            <p><strong>Timeline:</strong> ${_project.timeline}</p>
            <p><strong>Overview:</strong></p>
            <p>${_project.overview}</p>
            ${_enhancedContent?.summary ? `<p><strong>Summary:</strong> ${enhancedContent.summary}</p>` : ''}
            ${_enhancedContent?.projectType ? `<p><strong>Project Type:</strong> ${enhancedContent.projectType}</p>` : ''}
            <p>Please log in to your Zion AI Marketplace account to respond to this request.</p>
            <p>Best regards,<br>The Zion AI Marketplace Team</p>
          `}}),
      
      // // // console.log("Email sending result:", emailResponse)    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: &quot;Hire request processed successfully&quot;,
        request_id: requestRecord[0].id
      }),
      {
        headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json&quot; },
        status: 200}
    )
  } catch (error) {
    console.error("Error processing hire request:", error.message),    
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: &quot;Failed to process hire request&quot;,
        error: error.message 
      }),
      {
        headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json" },
      
    }

    return new Response(
      JSON.stringify({_success: true, _message: "Hire request processed successfully", _request_id: requestRecord[0].id}),
      {_headers: { ...corsHeaders, _"Content-Type": "application/json"},
        status: 200}
    );
  } catch (error) {_return new Response(
      JSON.stringify({ 
        success: false, _message: "Failed to process hire request", _error: error.message}),
      {_headers: { ...corsHeaders, _"Content-Type": "application/json"},
        status: 500}
    )
  }
}),
