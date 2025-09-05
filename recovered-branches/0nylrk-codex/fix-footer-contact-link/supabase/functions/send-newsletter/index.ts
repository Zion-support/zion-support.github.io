
<<<<<<< HEAD
import { serve } from "https://deno.land/std@0.190.0/http/server.ts",;
import { Resend } from "npm:resend@2.0.0",;
;
const corsHeaders = {;
  "Access-Control-Allow-Origin":"*",;
  "Access-Control-Allow-Headers":"authorization, x-client-info, apikey, content-type"},;
;
interface SendNewsletterRequest {;
  subject:string,;
  previewText:string,;
  body:string,;
  testMode?:boolean,;
  testEmail?:string;
}
;
serve(async (req) => {;
  if (req.method === "OPTIONS") {;
    return new Response(null, { headers:corsHeaders }),;
  }
;
  try {;
    const resendApiKey = Deno.env.get("RESEND_API_KEY"),;
    if (!resendApiKey) {;
      throw new Error("Resend API key is not set in environment variables"),;
    }
;
    const resend = new Resend(resendApiKey),;
    const { subject, previewText, body, testMode, testEmail } = await req.json() as SendNewsletterRequest,;
;
    // If test mode, send to test email only;
    if (testMode && testEmail) {;
      const emailResponse = await resend.emails.send({;
        from:"Zion Marketplace <newsletter@ziontechgroup.com>",;
        to:[testEmail],;
        subject:`[TEST] ${subject}`,;
        html:body,;
        text:previewText}),;
;
      return new Response(JSON.stringify(emailResponse), {;
        headers:{ ...corsHeaders, "Content-Type":"application/json" },;
        status:200}),;
    } ;
    ;
    // In production, we would fetch subscriber emails from the database;
    // and send the newsletter to all subscribers;
    // This is just a placeholder for now;
    const emailResponse = {;
      id:"test-email-id",;
      message:"Email would be sent to all subscribers in production";
    },;
;
    return new Response(JSON.stringify(emailResponse), {;
      headers:{ ...corsHeaders, "Content-Type":"application/json" },;
      status:200}),;
  } catch (error) {;
    console.error("Error in send-newsletter function:", error),;
    ;
    return new Response(JSON.stringify({ error:error.message }), {;
      headers:{ ...corsHeaders, "Content-Type":"application/json" },;
      status:500}),;
=======
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { Resend } from "npm: resend@2.0.0",
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},
interface SendNewsletterRequest {
  subject: string,
  previewText: string,
  body: string,
  testMode?: boolean,
  testEmail?: string
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const resendApiKey = Deno.env.get("RESEND_API_KEY"),
    if (!resendApiKey) {
      throw new Error("Resend API key is not set in environment variables")    }

    const resend = new Resend(resendApiKey),
    const { subject, previewText, body, testMode, testEmail } = await req.json() as SendNewsletterRequest,

    // If test mode, send to test email only
    if (testMode && testEmail) {
      const emailResponse = await resend.emails.send({
        from: &quot;Zion Marketplace <newsletter@ziontechgroup.com>&quot;,
        to: [testEmail],
        subject: `[TEST] ${subject}`,

const _corsHeaders = {_"Access-Control-Allow-Origin": "*", _"Access-Control-Allow-Headers": "authorization, _x-client-info, _apikey, _content-type"};

interface SendNewsletterRequest {_subject: string;
  previewText: string;
  body: string;
  testMode?: boolean;
  testEmail?: string;}

serve(_async (req) => {_if (req.method === "OPTIONS") {
    return new Response(null, _{ headers: corsHeaders});
  }

  try {_const _resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      throw new Error("Resend API key is not set in environment variables");}

    const _resend = new Resend(resendApiKey);
    const {_subject, _previewText, _body, _testMode, _testEmail} = await req.json() as SendNewsletterRequest;

    // If test mode, send to test email only
    if (testMode && testEmail) {_const _emailResponse = await resend.emails.send({
        from: "Zion Marketplace <newsletter@ziontechgroup.com>", _to: [testEmail], _subject: `[TEST] ${subject}`,
        html: body,
        text: previewText}),

      return new Response(JSON.stringify(emailResponse), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200})        status: 200});
    } 
    
    // In production, we would fetch subscriber emails from the database
    // and send the newsletter to all subscribers
    // This is just a placeholder for now
    const emailResponse = {
      id: "test-email-id",
      message: "Email would be sent to all subscribers in production"
    },

    return new Response(JSON.stringify(emailResponse) {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200})
  } catch (error) {
    console.error("Error in send-newsletter function:", error),
    
    return new Response(JSON.stringify({ error: error.message }) {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500})      status: 500});
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
  }
}),;
