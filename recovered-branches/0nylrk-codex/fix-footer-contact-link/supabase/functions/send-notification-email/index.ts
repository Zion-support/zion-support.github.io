
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2";
const corsHeaders = $2;
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

interface EmailRequest {
  user_id: string,
  notification_id: string}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders})
  }
  try {
    const { user_id, notification_id } = await req.json() as EmailRequest,
    
    // Create Supabase client with the service role key
    const supabaseClient = $2;
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    ),

    // Get notification details and user email
    const { data: notification, error: notificationError} = await supabaseClient
      .from('notifications')
      .select('title, message, type')
      .eq('id', notification_id)
      .single($2);
    if (notificationError) throw new Error($2);
    const { data: userProfile, error: userError} = await supabaseClient
      .from('profiles')
      .select('display_name, email')
      .eq('id', user_id)
      .single($2);
    if (userError) throw new Error($2);
    // In a real implementation, here you would use a service like Resend, SendGrid, etc.
    // to send the actual email. For this example, we'll simulate the email sending.
    console.log($2);
    console.log($2);
    console.log($2);
    console.log($2);
    return new Response($2);
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" }
        status: 200}
    )
    
  } catch (error) {
    console.error($2);
    return new Response($2);
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" }
        status: 500}
    )
  }
}),
