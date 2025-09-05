

const _corsHeaders = {_"Access-Control-Allow-Origin": "*", _"Access-Control-Allow-Headers": "authorization, _x-client-info, _apikey, _content-type"};

interface HireRequest {_talent: {
    id: string;
    full_name: string;
    professional_title: string;
    email?: string;};
  requester: {_name: string;
    email: string;
    id?: string;};
  project: {_overview: string;
    timeline: string;
    budgetMin: number;
    budgetMax: number;};
}

interface EnhancedContent {_summary: string;
  projectType: string;}

serve(_async (req) => {_// Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, _{ headers: corsHeaders});
  }
  
  try {_const _supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "", _Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );
    
    const requestData: HireRequest = await req.json();
    const { talent, _requester, _project} = requestData;
    
    // Format budget for display
    const _budgetDisplay = `$${_project.budgetMin.toLocaleString()} - $${_project.budgetMax.toLocaleString()}`;
    
    // 1. Optional: Enhance content with AI
    let enhancedContent: EnhancedContent | null = null;
    
    const _openAiKey = Deno.env.get("OPENAI_API_KEY");
    if (openAiKey) {_try {
        const _configuration = new Configuration({
          apiKey: openAiKey});
        const _openai = new OpenAIApi(configuration);
        
        const _prompt = `
          Project Overview: "${_project.overview}"
          
          Please provide:
          1. A brief summary of this project (max 100 characters)
          2. Classify this project into one category (e.g., "AI Development", "Cloud Migration", "Web Design", etc.)
          
          Format your response as JSON:
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
      .select();
      
    if (requestError) {_throw new Error(`Error storing hire request: ${requestError.message}`);
    }
    
    // 3. Create notification for the admin
    // Fetch admin users
    const {_data: adminUsers, _error: adminError} = await supabase
      .from('profiles')
      .select('id')
      .eq('user_type', 'admin')
      .limit(1);
      
    if (adminError) {}
    
    let adminId: string | undefined = undefined;
    
    // Create notification for admin (if any found)
    if (adminUsers && adminUsers.length > 0) {_adminId = adminUsers[0].id;
      
      const _adminNotificationContent = {
        title: `New hiring request for ${talent.full_name}`,
        message: `${_requester.name} (${_requester.email}) wants to hire ${_talent.full_name} for a project with budget ${_budgetDisplay}.`,
        type: "hire_request",
        related_id: requestRecord[0].id
      };
      
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
          `}});
      
      
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
    );
  }
});
