

// Initialize Supabase client
const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "",
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
const supabase = createClient(supabaseUrl, supabaseServiceKey),

serve(async (req) => {
  try {
    // Authenticate the request - should be called by a cron job or authorized system only
    if (req.method === "POST") {

      if (cronSecret !== Deno.env.get("CRON_SECRET")) {
        return new Response(JSON.stringify({ error: "Unauthorized" }), {
          status: 401
          headers: { "Content-Type": "application/json" }})
      }
    }
    // Call the process-retention-emails function
    const response = await fetch(`${supabaseUrl}/functions/v1/process-retention-emails`, {
      method: "POST",
      headers: {

      result}), {
      status: 200
      headers: { "Content-Type": "application/json" }})
  } catch (error) {

    return new Response(JSON.stringify({
      success: false
      error: error.message}), {
      status: 500
      headers: { "Content-Type": "application/json" }})

  }
});
