

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

interface EmailRequest {
  user_id: string
  notification_id: string
}
serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
  try {

    // Create Supabase client with the service role key
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""

    // Get notification details and user email
    const { data: notification, error: notificationError } = await supabaseClient
      .from('notifications')
      .select('title, message, type')
      .eq('id', notification_id)

    const { data: userProfile, error: userError } = await supabaseClient
      .from('profiles')
      .select('display_name, email')
      .eq('id', user_id)

    return new Response(
      JSON.stringify({ success: true }),
      {

        status: 200}
    )
  } catch (error) {
    console.error("Error sending email notification:", error.message),
    return new Response(
      JSON.stringify({ error: error.message }),
      {

  }
});
