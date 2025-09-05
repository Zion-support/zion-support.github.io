
<<<<<<< HEAD
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { Resend } from "npm: resend@2.0.0",
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},
=======
import { serve } from &quot;https://deno.land/std@0.190.0/http/server.ts&quot;;
import { Resend } from &quot;npm:resend@2.0.0&quot;;

const corsHeaders = {
  &quot;Access-Control-Allow-Origin&quot;: &quot;*&quot;,
  &quot;Access-Control-Allow-Headers&quot;: &quot;authorization, x-client-info, apikey, content-type&quot;};
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

interface SendNewsletterRequest {
  subject: string,
  previewText: string,
  body: string,
  testMode?: boolean,
  testEmail?: string
}

serve(async (req) => {
<<<<<<< HEAD
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const resendApiKey = Deno.env.get("RESEND_API_KEY"),
    if (!resendApiKey) {
      throw new Error("Resend API key is not set in environment variables")
=======
  if (req.method === &quot;OPTIONS&quot;) {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const resendApiKey = Deno.env.get(&quot;RESEND_API_KEY&quot;);
    if (!resendApiKey) {
      throw new Error(&quot;Resend API key is not set in environment variables&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }

    const resend = new Resend(resendApiKey),
    const { subject, previewText, body, testMode, testEmail } = await req.json() as SendNewsletterRequest,

    // If test mode, send to test email only
    if (testMode && testEmail) {
      const emailResponse = await resend.emails.send({
        from: &quot;Zion Marketplace <newsletter@ziontechgroup.com>&quot;,
        to: [testEmail],
        subject: `[TEST] ${subject}`,
        html: body,
        text: previewText}),

      return new Response(JSON.stringify(emailResponse), {
<<<<<<< HEAD
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200})
=======
        headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json&quot; },
        status: 200});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } 
    
    // In production, we would fetch subscriber emails from the database
    // and send the newsletter to all subscribers
    // This is just a placeholder for now
    const emailResponse = {
<<<<<<< HEAD
      id: "test-email-id",
      message: "Email would be sent to all subscribers in production"
    },

    return new Response(JSON.stringify(emailResponse), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200})
  } catch (error) {
    console.error("Error in send-newsletter function:", error),
    
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500})
=======
      id: &quot;test-email-id&quot;,
      message: &quot;Email would be sent to all subscribers in production&quot;
    };

    return new Response(JSON.stringify(emailResponse), {
      headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json&quot; },
      status: 200});
  } catch (error) {
    console.error(&quot;Error in send-newsletter function:&quot;, error);
    
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json&quot; },
      status: 500});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }
}),
