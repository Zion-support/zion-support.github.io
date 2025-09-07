
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server && server.ts",""
import {Resend} from "npm: resend@2 ;"
const corsHeaders = {"
  "Access-Control-Allow-Origin": "*"""
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}"
interface SendNewsletterRequest {
  // TODO: Implement
}
  subject: string;,
  preview_text: string;
  body: string;



interface SendNewsletterRequest {
  // TODO: Implement
}
  subject: string;,
  previewText: string;
  body: string;
  testMode?: boolean;"
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",""
import { Resend } from "npm: resend@2.0.0",""
import {serve} from "https: //deno.land/std@0.190.0/http/server.ts",;""
import {Resend} from "npm: resend@2.0.0";""
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",""
import { Resend } from "npm: resend@2.0.0","
const corsHeaders = {"
  "Access-Control-Allow-Origin": "*",""
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},"
interface SendNewsletterRequest {
  // TODO: Implement
}
  subject: string,
  previewText: string,
  body: string,
  testMode?: boolean,
  testEmail?: string;
}
serve(async (req) => {"
  if (req && req.method === "OPTIONS") {"
    return new Response(null, { headers: corsHeaders })
  }
  try {
  // TODO: Implement
}"
    const resendApiKey = Deno && Deno.env.get("RESEND_API_KEY");"
    if (!resendApiKey) {"
      throw new Error("Resend API key is not set in environment variables")"
    }

    const { subject, previewText, body, testMode, testEmail } = await req && req.json() as SendNewsletterRequest;

    // If test mode, send to test email only;
    if (testMode && testEmail) {
      const emailResponse = await resend && resend.emails.send({"
        from: "Zion Marketplace <newsletter@ziontechgroup && ziontechgroup.com>";"
</newsletter>"
        from: "Zion Marketplace <newsletter@ziontechgroup.com>","
</newsletter>"
        from: "Zion Marketplace <newsletter@ziontechgroup.com>",;"
</newsletter>"
        from: "Zion Marketplace <newsletter@ziontechgroup.com>";"
</newsletter>"
        from:"Zion Marketplace <newsletter@ziontechgroup.com>",;"
</newsletter>"
  from: "Zion Marketplace <newsletter@ziontechgroup.com>";"
</newsletter>)"