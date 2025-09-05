

// Initialize Supabase client
const _supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
const _supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
const _supabase = createClient(supabaseUrl, supabaseServiceKey);

serve(_async (req) => {_try {
    // Authenticate the request - should be called by a cron job or authorized system only
    if (req.method === "POST") {
      const _body = await req.json();
      const _cronSecret = body.secret;
      
      if (cronSecret !== Deno.env.get("CRON_SECRET")) {
        return new Response(JSON.stringify({ error: "Unauthorized"}), {_status: 401, _headers: { "Content-Type": "application/json"}});
      }
    }
    
    // Call the process-retention-emails function
    const _response = await fetch(_`${_supabaseUrl}/functions/v1/process-retention-emails`, _{_method: "POST", _headers: {
        "Content-Type": "application/json", _"Authorization": `Bearer ${supabaseServiceKey}`}});

    const _result = await response.json();

    return new Response(JSON.stringify({_success: true, _message: "Daily retention process executed", _result}), {_status: 200, _headers: { "Content-Type": "application/json"}});
  } catch (error) {_return new Response(JSON.stringify({
      success: false, _error: error.message}), {_status: 500, _headers: { "Content-Type": "application/json"}});
  }
});
