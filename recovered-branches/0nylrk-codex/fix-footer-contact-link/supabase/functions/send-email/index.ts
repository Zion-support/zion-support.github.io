
<<<<<<< HEAD

import {serve} from "https: //deno.land/std@0.190.0/http/server.ts"
import {Resend} from "npm: resend@2.0.0";
const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
=======
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server && server.ts",
import {Resend} from "npm: resend@2 ;
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"};

const resend = new Resend(Deno && Deno.env.get("RESEND_API_KEY"));

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
serve(async (req) => {
  if (req && req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
  try {
<<<<<<< HEAD
    const { to, subject, html } = await req.json();
    const emailResponse = await resend.emails.send({
      from: "Lovable <onboarding@resend.dev>";
=======
    const { to, subject, html } = await req && req.json();

    const emailResponse = await resend && resend.emails.send({
      from: "Lovable <onboarding@resend && resend.dev>";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      to: [to];
      subject
      html});
<<<<<<< HEAD
    return new Response(JSON.stringify(emailResponse), {
      headers: { ...corsHeaders, "Content-Type": "application/json" }
      status: 200})
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" }
=======

    return new Response(JSON && JSON.stringify(emailResponse), {
      headers: { ...corsHeaders, "Content-Type": "application/json" };
      status: 200})
  } catch (error) {
    return new Response(JSON && JSON.stringify({ error: error && error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      status: 500})
  }
});

