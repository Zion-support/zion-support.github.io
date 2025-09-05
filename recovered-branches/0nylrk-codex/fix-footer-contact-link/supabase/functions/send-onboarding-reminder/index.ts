

const _resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const _supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const _supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

const _corsHeaders = {_"Access-Control-Allow-Origin": "*", _"Access-Control-Allow-Headers":
    "authorization, _x-client-info, _apikey, _content-type"};

interface ReminderPayload {_user_id: string;
  missing_milestone: string;
  role: string;}

serve(_async (req: Request) => {_// Handle CORS
  if (req.method === "OPTIONS") {
    return new Response(null, _{
      status: 204, _headers: corsHeaders});
  }
  
  try {_const _supabase = createClient(
      supabaseUrl, _supabaseServiceKey
    );
    
    const _payload = await req.json() as ReminderPayload;
    const { user_id, _missing_milestone, _role} = payload;
    
    if (!user_id || !missing_milestone || !role) {_return new Response(
        JSON.stringify({ error: "Missing required fields"}),
        {_status: 400, _headers: { "Content-Type": "application/json", _...corsHeaders}}
      );
    }
    
    // Get user data
    const {_data: userData, _error: userError} = await supabase
      .from("profiles")
      .select("email, display_name")
      .eq("id", user_id)
      .single();
    
    if (userError || !userData) {_return new Response(
        JSON.stringify({ error: "User not found", _details: userError}),
        {_status: 404, _headers: { "Content-Type": "application/json", _...corsHeaders}}
      );
    }
    
    // Create message based on role and missing milestone
    const _milestoneMessages = {_talent: {
        profile_completed: "complete your profile to get discovered by clients", _skills_added: "add your skills to get better job matches", _availability_set: "set your availability to help clients know when you can work"},
      client: {_job_posted: "post your first job to start finding talent", _match_viewed: "check out your AI-matched talent suggestions", _talent_invited: "invite talent to speed up your hiring process"}};
    
    const _name = userData.display_name || "there";
    const _action = milestoneMessages[role as keyof typeof milestoneMessages]?.[
      missing_milestone as keyof (typeof milestoneMessages)["talent" | "client"]
    ] || "complete your next step";
    
    // Send email
    const {_data: emailData, _error: emailError} = await resend.emails.send({_from: "Zion AI Marketplace <notifications@zion.ai>", _to: userData.email, _subject: "Complete your next step on Zion AI Marketplace", _html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Hi ${name},</h2>
          <p>You're making great progress in setting up your ${_role} profile on Zion AI Marketplace!</p>
          <p>Your next step is to <strong>${_action}</strong>.</p>
          <p>This will help you get the most out of the platform and connect with the right opportunities.</p>
          <div style="margin: 30px 0;">
            <a href="https://zion.ai/dashboard" style="background-color: #9b87f5; color: white; padding: 12px 20px; text-decoration: none; border-radius: 4px; font-weight: bold;">
              Continue my setup
            </a>
          </div>
          <p>The Zion AI Marketplace Team</p>
        </div>
      `});
    
    if (emailError) {_return new Response(
        JSON.stringify({ error: "Failed to send email", _details: emailError}),
        {_status: 500, _headers: { "Content-Type": "application/json", _...corsHeaders}}
      );
    }
    
    // Create notification in database
    const {_data: notification, _error: notificationError} = await supabase.rpc(
      "create_notification",
      {_user_id: user_id, _title: "Complete your next step", _message: `Don't forget to ${action} to get the most out of Zion AI Marketplace.`,
        _type: "onboarding"}
    );
    
    if (notificationError) {}
    
    return new Response(
      JSON.stringify({_message: "Reminder sent successfully", _notification_id: notification}),
      {_status: 200, _headers: { "Content-Type": "application/json", _...corsHeaders}}
    );
  } catch (error) {_return new Response(
      JSON.stringify({ error: "Internal server error", _details: error.message}),
      {_status: 500, _headers: { "Content-Type": "application/json", _...corsHeaders}}
    );
  }
});
