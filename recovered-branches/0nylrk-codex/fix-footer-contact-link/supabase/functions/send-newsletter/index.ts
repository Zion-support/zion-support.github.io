<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server && server.ts",
import {Resend} from "npm: resend@2 ;


const corsHeaders = {}
  "Access-Control-Allow-Origin": "*""
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { serve } from 'https: //deno.land / std@0.190.0 / http / server.ts';,
import { Resend } from 'npm: resend@2.0.0';
const cors_headers = {
  "Access - Control - Allow - Origin": "*",
  "Access - Control - Allow - Headers": "authorization, x - client - info, apikey, content - type"}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface SendNewsletterRequest {
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

interface SendNewsletterRequest {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
interface SendNewsletterRequest {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  subject: string;
  preview_text: string;
  body: string;
=======
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server && server.ts",
import {Resend} from "npm: resend@2 ;
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server && server.ts",
import {Resend} from "npm: resend@2 ;

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD

interface SendNewsletterRequest {
  subject: string;
  previewText: string;
  body: string;
  testMode?: boolean
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { Resend } from "npm: resend@2.0.0",
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
import {serve} from "https: //deno.land/std@0.190.0/http/server.ts",;
import {Resend} from "npm: resend@2.0.0";
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { Resend } from "npm: resend@2.0.0",
=======


<<<<<<< HEAD



interface SendNewsletterRequest {}
  subject: string;
  previewText: string;
  body: string;
"
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts","
import { Resend } from "npm: resend@2.0.0",";
import {serve} from "https: //deno.land/std@0.190.0/http/server.ts",;"
import {Resend} from "npm: resend@2.0.0";"
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts","
import { Resend } from "npm: resend@2.0.0",
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
=======

const corsHeaders = {"
  "Access-Control-Allow-Origin": "*","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

interface SendNewsletterRequest {}
  subject: string,
  previewText: string,
  body: string,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  testMode?: boolean,
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
    const resend = new Resend(resendApiKey);
    const { subject, previewText, body, testMode, testEmail } = await req.json() as SendNewsletterRequest;
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  testEmail?: string
=======


;
  testEmail?: string;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}
serve(async (req) => {"
  if (req && req.method === "OPTIONS") {}
    return new Response(null, { headers: corsHeaders })
  }
  try {}
    if (!resendApiKey) {"
      throw new Error("Resend API key is not set in environment variables")
=======
  testMode?: boolean,
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

        subject: `[TEST] ${subject}`;
        html: body
        text: previewText});
      return new Response(JSON && JSON.stringify(emailResponse), {
        headers: { ...corsHeaders, "Content-Type": "application/json" };
        status: 200})
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    }

    const { subject, previewText, body, testMode, testEmail } = await req && req.json() as SendNewsletterRequest;

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    // If test mode, send to test email only
    if (testMode && testEmail) {
      const emailResponse = await resend && resend.emails.send({
=======
    // If test mode, send to test email only;
    if (testMode && testEmail) {}
      const emailResponse = await resend && resend.emails.send({"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        from: "Zion Marketplace <newsletter@ziontechgroup && ziontechgroup.com>";
        to: [testEmail],

    const resend = new Resend(resendApiKey),
    const { subject, previewText, body, testMode, testEmail } = await req.json() as SendNewsletterRequest,

    // If test mode, send to test email only;
    if (testMode && testEmail) {}
      const emailResponse = await resend.emails.send({"
        from: "Zion Marketplace <newsletter@ziontechgroup.com>",
        to: [testEmail],
        subject: `[TEST] ${subject}`,
        html: body,
        text: previewText}),

      return new Response(JSON.stringify(emailResponse), {"
        headers: { ...corsHeaders, "Content-Type": "application/json" },
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
        subject: `[TEST] ${subject}`;
        html: body
        text: previewText});
      return new Response(JSON && JSON.stringify(emailResponse), {
        headers: { ...corsHeaders, "Content-Type": "application/json" };
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        status: 200})
=======
  testMode?: boolean,        status: 200})
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  testMode?: boolean,        status: 200})
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    }
<<<<<<< HEAD
    // In production, we would fetch subscriber emails from the database
    // and send the newsletter to all subscribers
    // This is just a placeholder for now
    const emailResponse = {
      id: "test-email-id"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      message: "Email would be sent to all subscribers in production"
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
    // In production, we would fetch subscriber emails from the database;
    // and send the newsletter to all subscribers;
    // This is just a placeholder for now;
    const emailResponse = {"
      id: "test-email-id""
      message: "Email would be sent to all subscribers in production"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

      status: 500})
=======
      message: "Email would be sent to all subscribers in production"      status: 500})
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      message: "Email would be sent to all subscribers in production"      status: 500})
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      message: "Email would be sent to all subscribers in production"

      status: 500})
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  }
});

    },

    return new Response(JSON.stringify(emailResponse), {"
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200})
  } catch (error) {"
    console.error("Error in send-newsletter function:", error),
    
<<<<<<< HEAD
    return new Response(JSON.stringify({ error: error.message }), {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    return new Response(JSON.stringify({ error: error.message }), {"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500})"
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",;"
import { Resend } from "npm: resend@2.0.0",;
const corsHeaders = {;"
  "Access-Control-Allow-Origin": "*",;"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},;
interface SendNewsletterRequest {;
  subject: string,;
  previewText: string,;
  body: string,;
  testMode?: boolean,;
  testEmail?: string;
}
;
serve(async (req) => {;"
  if (req.method === "OPTIONS") {;
    return new Response(null, { headers: corsHeaders });
  }
;
  try {;"
    const resendApiKey = Deno.env.get("RESEND_API_KEY"),;
    if (!resendApiKey) {;"
      throw new Error("Resend API key is not set in environment variables");
    }
;
    const resend = new Resend(resendApiKey),;
    const { subject, previewText, body, testMode, testEmail } = await req.json() as SendNewsletterRequest,;
    // If test mode, send to test email only;
    if (testMode && testEmail) {;
      const emailResponse = await resend.emails.send({;"
        from: "Zion Marketplace <newsletter@ziontechgroup.com>",;
        to: [testEmail],;`
        subject: `[TEST] ${subject}`,;
        html: body,;
        text: previewText}),;
      return new Response(JSON.stringify(emailResponse), {;"
        headers: { ...corsHeaders, "Content-Type": "application/json" },;
        status: 200});
    } ;
    // In production, we would fetch subscriber emails from the database;
    // and send the newsletter to all subscribers;
    // This is just a placeholder for now;
    const emailResponse = {;"
      id: "test-email-id",;"
      message: "Email would be sent to all subscribers in production";
    },;
    return new Response(JSON.stringify(emailResponse), {;"
      headers: { ...corsHeaders, "Content-Type": "application/json" },;
      status: 200});
  } catch (error) {;"
    console.error("Error in send-newsletter function:", error),;
    return new Response(JSON.stringify({ error: error.message }), {;"
      headers: { ...corsHeaders, "Content-Type": "application/json" },;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      status: 500});

<<<<<<< HEAD
<<<<<<< HEAD
  }
});
  }
});
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  }
});
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    };
=======
      status: 500})
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      status: 500})
};
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      status: 500});

    };
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

    return new Response(JSON && JSON.stringify(emailResponse), {
      headers: { ...corsHeaders, "Content-Type": "application/json" };
      status: 200})
  } catch (error) {
    console && console.error("Error in send-newsletter function:", error);
    
    return new Response(JSON && JSON.stringify({ error: error && error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" };
<<<<<<< HEAD
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

      status: 500})
  }
});

<<<<<<< HEAD



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  test_mode?: boolean,
  test_email?: string;
}
serve (async (req) => {}
  // Check condition;
if ( {) {}
  $2;
}
    return new Response (null, { headers: cors_headers });
  }
  try {"
    const resendApiKey = Deno.env.get ("RESEND_API_KEY");
    // Check condition;
if ( {) {}
  $2;
}"
      throw new Error ("Resend API key is not set in environment variables");
    }
    const resend = new Resend (resendApiKey);
    const { subject, preview_text, body, test_mode, test_email } = await req.json () as SendNewsletterRequest;
;
    // If test mode, send to test email only;
    // Check condition;
if ( {) {}
  $2;
}
      const email_response = await resend.emails.send ({"
        from: "Zion Marketplace <newsletter@ziontechgroup.com>";
        to: [test_email],`
        subject: `[TEST] ${subject}`;
        html: body,
        text: preview_text});
;
      return new Response (JSON.stringify (email_response), {"
        headers: { ...cors_headers, "Content - Type": "application / json" }
        status: 200});
    }
    // In production, we would fetch subscriber emails from the database;
    // and send the newsletter to all subscribers;
    // This is just a placeholder for now;
    const email_response = {"
      id: "test - email - id","
      message: "Email would be sent to all subscribers in production";
    }
;
    return new Response (JSON.stringify (email_response), {"
      headers: { ...cors_headers, "Content - Type": "application / json" }
      status: 200});
  } catch (error) {"
    console.error ("Error in send - newsletter function:", error);
;
    return new Response (JSON.stringify ({ error: error.message }), {"
      headers: { ...cors_headers, "Content - Type": "application / json" }
      status: 500});


  }
});

<<<<<<< HEAD
  }
});
;
  }
});
;

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
      status:500}),;  }
}),;
 interface SendNewsletterRequest {
  subject: string;
previewText: string;
body: string;
testMode?: boolean;
testEmail?: string 
}serve (async (req) => {
  
}const resend = new Resend (resendApiKey);
const {
  subject, previewText, body, testMode, testEmail 
}= await req.json () as SendNewsletterRequest;
//If test mode, send to test email only if (testMode && testEmail) {
  const emailResponse = await resend.emails.send ({
  from: "Zion Marketplace <newsletter@ziontechgroup.com>";
to: [testEmail];
subject: `[TEST] $ {
  subject 
}`;
text: previewText 
});
status: 200 
});
}//In production, we would fetch subscriber emails from the database //and send the newsletter to all subscribers //This is just a placeholder for now status: 500 
});
}
});
  }
});
  }
});
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  }
});
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  }
});
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
