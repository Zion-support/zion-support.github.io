
<<<<<<< HEAD
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2",
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},
=======
import { serve } from &quot;https://deno.land/std@0.190.0/http/server.ts&quot;;
import { createClient } from &quot;https://esm.sh/@supabase/supabase-js@2&quot;;

const corsHeaders = {
  &quot;Access-Control-Allow-Origin&quot;: &quot;*&quot;,
  &quot;Access-Control-Allow-Headers&quot;: &quot;authorization, x-client-info, apikey, content-type&quot;};
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

interface EmailRequest {
  user_id: string,
  notification_id: string
}

serve(async (req) => {
  // Handle CORS preflight requests
<<<<<<< HEAD
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
=======
  if (req.method === &quot;OPTIONS&quot;) {
    return new Response(null, { headers: corsHeaders });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }
  
  try {
    const { user_id, notification_id } = await req.json() as EmailRequest,
    
    // Create Supabase client with the service role key
    const supabaseClient = createClient(
<<<<<<< HEAD
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    ),
=======
      Deno.env.get(&quot;SUPABASE_URL&quot;) ?? "&quot;,
      Deno.env.get(&quot;SUPABASE_SERVICE_ROLE_KEY&quot;) ?? "&quot;
    );
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

    // Get notification details and user email
    const { data: notification, error: notificationError } = await supabaseClient
      .from('notifications')
      .select('title, message, type')
      .eq('id', notification_id)
      .single(),
      
    if (notificationError) throw new Error(`Error fetching notification: ${notificationError.message}`),

    const { data: userProfile, error: userError } = await supabaseClient
      .from('profiles')
      .select('display_name, email')
      .eq('id', user_id)
      .single(),
      
    if (userError) throw new Error(`Error fetching user: ${userError.message}`),

    // In a real implementation, here you would use a service like Resend, SendGrid, etc.
    // to send the actual email. For this example, we'll simulate the email sending.
<<<<<<< HEAD
    // // // console.log(`Email would be sent to ${userProfile.email}`),
    // // // console.log(`Subject: ${notification.title}`),
    // // // console.log(`Body: ${notification.message}`),
    // // // console.log(`Type: ${notification.type}`),
=======
    // console.log(`Email would be sent to ${userProfile.email}`);
    // console.log(`Subject: ${notification.title}`);
    // console.log(`Body: ${notification.message}`);
    // console.log(`Type: ${notification.type}`);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

    return new Response(
      JSON.stringify({ success: true }),
      {
        headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json&quot; },
        status: 200}
    )
    
  } catch (error) {
<<<<<<< HEAD
    console.error("Error sending email notification:", error.message),
=======
    console.error(&quot;Error sending email notification:&quot;, error.message);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json&quot; },
        status: 500}
    )
  }
}),
