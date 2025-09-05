
import { serve } from &quot;https://deno.land/std@0.190.0/http/server.ts&quot;;
import { Resend } from &quot;npm:resend@2.0.0&quot;;

const corsHeaders = {
  &quot;Access-Control-Allow-Origin&quot;: &quot;*&quot;,
  &quot;Access-Control-Allow-Headers&quot;: &quot;authorization, x-client-info, apikey, content-type&quot;};

const resend = new Resend(Deno.env.get(&quot;RESEND_API_KEY&quot;));

serve(async (req) => {
  if (req.method === &quot;OPTIONS&quot;) {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { to, subject, html } = await req.json();

    const emailResponse = await resend.emails.send({
      from: &quot;Lovable <onboarding@resend.dev>&quot;,
      to: [to],
      subject,
      html});

    return new Response(JSON.stringify(emailResponse), {
      headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json&quot; },
      status: 200});
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json&quot; },
      status: 500});
  }
});
