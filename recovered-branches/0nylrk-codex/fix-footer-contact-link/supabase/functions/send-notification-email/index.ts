
<<<<<<< HEAD
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
=======

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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    ),
=======
      Deno.env.get(&quot;SUPABASE_URL&quot;) ?? "&quot;,
      Deno.env.get(&quot;SUPABASE_SERVICE_ROLE_KEY&quot;) ?? "&quot;
    );
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

    // Get notification details and user email
    const {_data: notification, _error: notificationError} = await supabaseClient
      .from('notifications')
      .select('title, message, type')
      .eq('id', notification_id)
      .single(),
      
<<<<<<< HEAD
    if (notificationError) throw new Error(`Error fetching notification: ${notificationError.message}`),
=======
    if (notificationError) throw new Error(`Error fetching notification: ${_notificationError.message}`);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    const {_data: userProfile, _error: userError} = await supabaseClient
      .from('profiles')
      .select('display_name, email')
      .eq('id', user_id)
      .single(),
      
<<<<<<< HEAD
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
=======
    if (userError) throw new Error(`Error fetching user: ${_userError.message}`);

    // In a real implementation, here you would use a service like Resend, SendGrid, etc.
    // to send the actual email. For this example, we'll simulate the email sending.
    
    
    
    

    return new Response(
      JSON.stringify({_success: true}),
      {_headers: { ...corsHeaders, _"Content-Type": "application/json"},
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        status: 200}
    )
    
<<<<<<< HEAD
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
=======
  } catch (error) {_return new Response(
      JSON.stringify({ error: error.message}),
      {_headers: { ...corsHeaders, _"Content-Type": "application/json"},
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        status: 500}
    )
  }
}),
