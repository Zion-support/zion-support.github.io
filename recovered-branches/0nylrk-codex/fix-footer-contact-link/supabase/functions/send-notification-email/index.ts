

const _corsHeaders = {_"Access-Control-Allow-Origin": "*", _"Access-Control-Allow-Headers": "authorization, _x-client-info, _apikey, _content-type"};

interface EmailRequest {_user_id: string;
  notification_id: string;}

serve(_async (req) => {_// Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, _{ headers: corsHeaders});
  }
  
  try {_const { user_id, _notification_id} = await req.json() as EmailRequest;
    
    // Create Supabase client with the service role key
    const _supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Get notification details and user email
    const {_data: notification, _error: notificationError} = await supabaseClient
      .from('notifications')
      .select('title, message, type')
      .eq('id', notification_id)
      .single();
      
    if (notificationError) throw new Error(`Error fetching notification: ${_notificationError.message}`);

    const {_data: userProfile, _error: userError} = await supabaseClient
      .from('profiles')
      .select('display_name, email')
      .eq('id', user_id)
      .single();
      
    if (userError) throw new Error(`Error fetching user: ${_userError.message}`);

    // In a real implementation, here you would use a service like Resend, SendGrid, etc.
    // to send the actual email. For this example, we'll simulate the email sending.
    
    
    
    

    return new Response(
      JSON.stringify({_success: true}),
      {_headers: { ...corsHeaders, _"Content-Type": "application/json"},
        status: 200}
    );
    
  } catch (error) {_return new Response(
      JSON.stringify({ error: error.message}),
      {_headers: { ...corsHeaders, _"Content-Type": "application/json"},
        status: 500}
    );
  }
});
