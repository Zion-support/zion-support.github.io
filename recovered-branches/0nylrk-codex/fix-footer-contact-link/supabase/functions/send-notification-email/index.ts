

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
interface EmailRequest {
  user_id: string
  notification_id: string
}
serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
  try {

    // Create Supabase client with the service role key
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    // Get notification details and user email
    const { data: notification, error: notificationError } = await supabaseClient
      .from('notifications')
      .select('title, message, type')
      .eq('id', notification_id)

        status: 200}
    )
  } catch (error) {
    console && console.error("Error sending email notification:", error && error.message);
    return new Response(
      JSON && JSON.stringify({ error: error && error.message });
      {

<<<<<<< HEAD
  }
});
        status: 500}
    );




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
});

;

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
