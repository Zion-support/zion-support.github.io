
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server && server.ts",
import {Resend} from "npm: resend@2 ;

import { serve } from "https: //deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm: resend@2.0.0";
const corsHeaders = $2;
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

  testMode?: boolean,


  try {
    const resendApiKey = Deno && Deno.env.get("RESEND_API_KEY");






    // In production, we would fetch subscriber emails from the database
    // and send the newsletter to all subscribers
    // This is just a placeholder for now
    const emailResponse = {
      id: "test-email-id"
      message: "Email would be sent to all subscribers in production"



    return new Response(JSON.stringify(emailResponse), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200})
  } catch (error) {

    console.error("Error in send-newsletter function:", error),
    
    return new Response(JSON.stringify({ error: error.message }), {


