
<<<<<<< HEAD
<<<<<<< HEAD

import {serve} from "https: //deno.land/std@0.190.0/http/server.ts"
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2";
const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
=======
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2",
=======
import {serve} from "https: //deno.land/std@0.190.0/http/server.ts",;
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2";
=======
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
<<<<<<< HEAD
    const { user_id, notification_id } = await req.json() as EmailRequest;
=======
    const { user_id, notification_id } = await req.json() as EmailRequest,
    
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    // Create Supabase client with the service role key
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
<<<<<<< HEAD
    );
=======
    ),

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    // Get notification details and user email
    const { data: notification, error: notificationError } = await supabaseClient
      .from('notifications')
      .select('title, message, type')
      .eq('id', notification_id)
<<<<<<< HEAD
      .single();
    if (notificationError) throw new Error(`Error fetching notification: ${notificationError.message}`);
=======
      .single(),
      
    if (notificationError) throw new Error(`Error fetching notification: ${notificationError.message}`),

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    const { data: userProfile, error: userError } = await supabaseClient
      .from('profiles')
      .select('display_name, email')
      .eq('id', user_id)
<<<<<<< HEAD
      .single();
    if (userError) throw new Error(`Error fetching user: ${userError.message}`);
    // In a real implementation, here you would use a service like Resend, SendGrid, etc.
    // to send the actual email. For this example, we'll simulate the email sending.
    console.log(`Email would be sent to ${userProfile.email}`);
    console.log(`Subject: ${notification.title}`);
    console.log(`Body: ${notification.message}`);
    console.log(`Type: ${notification.type}`);
=======
      .single(),
      
    if (userError) throw new Error(`Error fetching user: ${userError.message}`),

    // In a real implementation, here you would use a service like Resend, SendGrid, etc.
    // to send the actual email. For this example, we'll simulate the email sending.
    // // // console.log(`Email would be sent to ${userProfile.email}`),
    // // // console.log(`Subject: ${notification.title}`),
    // // // console.log(`Body: ${notification.message}`),
    // // // console.log(`Type: ${notification.type}`),

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    return new Response(
      JSON.stringify({ success: true }),
      {
<<<<<<< HEAD
        headers: { ...corsHeaders, "Content-Type": "application/json" }
=======
        headers: { ...corsHeaders, "Content-Type": "application/json" },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        status: 200}
    )
  } catch (error) {
    console.error("Error sending email notification:", error.message),
    return new Response(
      JSON.stringify({ error: error.message }),
      {
<<<<<<< HEAD
<<<<<<< HEAD
        headers: { ...corsHeaders, "Content-Type": "application/json" }
        status: 500}
    )
  }
});

=======
        headers: { ...corsHeaders, "Content-Type": "application/json" };
        status: 500}
    )
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
        headers: { ...corsHeaders, "Content-Type": "application/json" },
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",;
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2",;
const corsHeaders = {;
  "Access-Control-Allow-Origin": "*",;
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},;
interface EmailRequest {;
  user_id: string,;
  notification_id: string;
}
;
serve(async (req) => {;
  // Handle CORS preflight requests;
  if (req.method === "OPTIONS") {;
    return new Response(null, { headers: corsHeaders });
  }
;
  try {;
    const { user_id, notification_id } = await req.json() as EmailRequest,;
    // Create Supabase client with the service role key;
    const supabaseClient = createClient(;
      Deno.env.get("SUPABASE_URL") ?? "",;
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
    ),;
    // Get notification details and user email;
    const { data: notification, error: notificationError } = await supabaseClient;
      .from('notifications');
      .select('title, message, type');
      .eq('id', notification_id);
      .single(),;
    if (notificationError) throw new Error(`Error fetching notification: ${notificationError.message}`),;
    const { data: userProfile, error: userError } = await supabaseClient;
      .from('profiles');
      .select('display_name, email');
      .eq('id', user_id);
      .single(),;
    if (userError) throw new Error(`Error fetching user: ${userError.message}`),;
    // In a real implementation, here you would use a service like Resend, SendGrid, etc.;
    // to send the actual email. For this example, we'll simulate the email sending.;
    // // // console.log(`Email would be sent to ${userProfile.email}`),;
    // // // console.log(`Subject: ${notification.title}`),;
    // // // console.log(`Body: ${notification.message}`),;
    // // // console.log(`Type: ${notification.type}`),;
    return new Response(;
      JSON.stringify({ success: true }),;
      {;
        headers: { ...corsHeaders, "Content-Type": "application/json" },;
        status: 200}
    );
  } catch (error) {;
    console.error("Error sending email notification:", error.message),;
    return new Response(;
      JSON.stringify({ error: error.message }),;
      {;
        headers: { ...corsHeaders, "Content-Type": "application/json" },;
        status: 500}
    );
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
});
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
