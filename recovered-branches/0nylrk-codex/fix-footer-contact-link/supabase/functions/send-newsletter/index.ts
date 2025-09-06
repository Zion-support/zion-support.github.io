
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import {serve} from "https: //deno.land/std@0.190.0/http/server.ts"
import {Resend} from "npm: resend@2.0.0";
const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
interface SendNewsletterRequest {
  subject: string;
  previewText: string;
  body: string;
  testMode?: boolean
=======
=======
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server && server.ts",
import {Resend} from "npm: resend@2 ;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
=======
import { serve } from 'https: //deno.land / std@0.190.0 / http / server.ts';,
import { Resend } from 'npm: resend@2.0.0';
const cors_headers = {
  "Access - Control - Allow - Origin": "*",
  "Access - Control - Allow - Headers": "authorization, x - client - info, apikey, content - type"}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
interface SendNewsletterRequest {
  subject: string;
  preview_text: string;
  body: string;



>>>>>>> main
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { Resend } from "npm: resend@2.0.0",
=======
import {serve} from "https: //deno.land/std@0.190.0/http/server.ts",;
import {Resend} from "npm: resend@2.0.0";
=======
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { Resend } from "npm: resend@2.0.0",
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


>>>>>>> main
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

interface SendNewsletterRequest {
  subject: string,
  previewText: string,
  body: string,
  testMode?: boolean,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
<<<<<<< HEAD
  testEmail?: string
}
serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
  try {
    const resendApiKey = Deno.env.get("RESEND_API_KEY"),
    if (!resendApiKey) {
      throw new Error("Resend API key is not set in environment variables")
    }
<<<<<<< HEAD
    const resend = new Resend(resendApiKey);
    const { subject, previewText, body, testMode, testEmail } = await req.json() as SendNewsletterRequest;
    // If test mode, send to test email only
    if (testMode && testEmail) {
      const emailResponse = await resend.emails.send({
        from: "Zion Marketplace <newsletter@ziontechgroup.com>";
        to: [testEmail]
        subject: `[TEST] ${subject}`;
        html: body
        text: previewText});
      return new Response(JSON.stringify(emailResponse), {
        headers: { ...corsHeaders, "Content-Type": "application/json" }
=======

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  testEmail?: string
}
serve(async (req) => {
  if (req && req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
  try {
    const resendApiKey = Deno && Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      throw new Error("Resend API key is not set in environment variables")
    }

    const { subject, previewText, body, testMode, testEmail } = await req && req.json() as SendNewsletterRequest;

    // If test mode, send to test email only
    if (testMode && testEmail) {
      const emailResponse = await resend && resend.emails.send({
        from: "Zion Marketplace <newsletter@ziontechgroup && ziontechgroup.com>";
        to: [testEmail],

        subject: `[TEST] ${subject}`;
        html: body
        text: previewText});


      return new Response(JSON && JSON.stringify(emailResponse), {
        headers: { ...corsHeaders, "Content-Type": "application/json" };

=======


>>>>>>> main
    const resend = new Resend(resendApiKey),
    const { subject, previewText, body, testMode, testEmail } = await req.json() as SendNewsletterRequest,

    // If test mode, send to test email only
    if (testMode && testEmail) {
      const emailResponse = await resend.emails.send({
        from: "Zion Marketplace <newsletter@ziontechgroup.com>",
        to: [testEmail],
        subject: `[TEST] ${subject}`,
        html: body,
        text: previewText}),

      return new Response(JSON.stringify(emailResponse), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
        status: 200})
    }
    // In production, we would fetch subscriber emails from the database
    // and send the newsletter to all subscribers
    // This is just a placeholder for now
    const emailResponse = {
      id: "test-email-id"
      message: "Email would be sent to all subscribers in production"
<<<<<<< HEAD
<<<<<<< HEAD
    }
    return new Response(JSON.stringify(emailResponse), {
      headers: { ...corsHeaders, "Content-Type": "application/json" }
      status: 200})
  } catch (error) {
    console.error("Error in send-newsletter function:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" }
=======

    };

    return new Response(JSON && JSON.stringify(emailResponse), {
      headers: { ...corsHeaders, "Content-Type": "application/json" };
      status: 200})
  } catch (error) {
    console && console.error("Error in send-newsletter function:", error);
    
    return new Response(JSON && JSON.stringify({ error: error && error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" };

>>>>>>> main
      status: 500})
  }
});

=======
<<<<<<< HEAD
=======
  test_mode?: boolean,
  test_email?: string;
}
serve (async (req) => {
  // Check condition
if ( {) {
  $2
}
    return new Response (null, { headers: cors_headers });
  }
  try {
    const resendApiKey = Deno.env.get ("RESEND_API_KEY");
    // Check condition
if ( {) {
  $2
}
      throw new Error ("Resend API key is not set in environment variables");
    }
    const resend = new Resend (resendApiKey);
    const { subject, preview_text, body, test_mode, test_email } = await req.json () as SendNewsletterRequest;
;
    // If test mode, send to test email only;
    // Check condition
if ( {) {
  $2
}
      const email_response = await resend.emails.send ({
        from: "Zion Marketplace <newsletter@ziontechgroup.com>";
        to: [test_email],
        subject: `[TEST] ${subject}`;
        html: body,
        text: preview_text});
;
      return new Response (JSON.stringify (email_response), {
        headers: { ...cors_headers, "Content - Type": "application / json" }
        status: 200});
    }
    // In production, we would fetch subscriber emails from the database;
    // and send the newsletter to all subscribers;
    // This is just a placeholder for now;
    const email_response = {
      id: "test - email - id",
      message: "Email would be sent to all subscribers in production";
    }
;
    return new Response (JSON.stringify (email_response), {
      headers: { ...cors_headers, "Content - Type": "application / json" }
      status: 200});
  } catch (error) {
    console.error ("Error in send - newsletter function:", error);
;
    return new Response (JSON.stringify ({ error: error.message }), {
      headers: { ...cors_headers, "Content - Type": "application / json" }
      status: 500});
=======

>>>>>>> main
    },

    return new Response(JSON.stringify(emailResponse), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200})
  } catch (error) {
    console.error("Error in send-newsletter function:", error),
    
    return new Response(JSON.stringify({ error: error.message }), {
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
      headers: { ...corsHeaders, "Content-Type": "application/json" };
      status: 500})
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500})
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",;
import { Resend } from "npm: resend@2.0.0",;
const corsHeaders = {;
  "Access-Control-Allow-Origin": "*",;
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},;
interface SendNewsletterRequest {;
  subject: string,;
  previewText: string,;
  body: string,;
  testMode?: boolean,;
  testEmail?: string;
}
;
serve(async (req) => {;
  if (req.method === "OPTIONS") {;
    return new Response(null, { headers: corsHeaders });
  }
;
  try {;
    const resendApiKey = Deno.env.get("RESEND_API_KEY"),;
    if (!resendApiKey) {;
      throw new Error("Resend API key is not set in environment variables");
    }
;
    const resend = new Resend(resendApiKey),;
    const { subject, previewText, body, testMode, testEmail } = await req.json() as SendNewsletterRequest,;
    // If test mode, send to test email only;
    if (testMode && testEmail) {;
      const emailResponse = await resend.emails.send({;
        from: "Zion Marketplace <newsletter@ziontechgroup.com>",;
        to: [testEmail],;
        subject: `[TEST] ${subject}`,;
        html: body,;
        text: previewText}),;
      return new Response(JSON.stringify(emailResponse), {;
        headers: { ...corsHeaders, "Content-Type": "application/json" },;
        status: 200});
    } ;
    // In production, we would fetch subscriber emails from the database;
    // and send the newsletter to all subscribers;
    // This is just a placeholder for now;
    const emailResponse = {;
      id: "test-email-id",;
      message: "Email would be sent to all subscribers in production";
    },;
    return new Response(JSON.stringify(emailResponse), {;
      headers: { ...corsHeaders, "Content-Type": "application/json" },;
      status: 200});
  } catch (error) {;
    console.error("Error in send-newsletter function:", error),;
    return new Response(JSON.stringify({ error: error.message }), {;
      headers: { ...corsHeaders, "Content-Type": "application/json" },;
      status: 500});
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
});
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
});
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> main
