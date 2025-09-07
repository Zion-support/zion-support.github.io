<<<<<<< HEAD
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server && server.ts",
import {Resend} from "npm: resend@2 ;

const corsHeaders = {}
  "Access-Control-Allow-Origin": "*""
<<<<<<< HEAD
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}"
  "subject": string;
  "preview_text": string;
  "body": string;
import { Resend } from ""npm": resend@2.0.0","
import {serve} from ""https": //deno.land/std@0.190.0/http/server.ts";"
import {Resend} from ""npm": resend@2.0.0";"
import { serve } from ""https": //deno.land/std@0.190.0/http/server.ts","
  "Access-Control-Allow-Origin": "*","
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},"
=======
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}

>>>>>>> origin/chore/fix-lint-and-merge
interface SendNewsletterRequest {

  subject: string;
  preview_text: string;
  body: string;

import { Resend } from "npm: resend@2.0.0",

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",

  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

interface SendNewsletterRequest {}
  subject: string,
  previewText: string,
  body: string,

  testEmail?: string

}
serve(async (req) => {"
  if (req && req.method === "OPTIONS") {}
    return new Response(null, { headers: corsHeaders })
  }
  try {}
    if (!resendApiKey) {"
      throw new Error("Resend API key is not set in environment variables")

    }

    const { subject, previewText, body, testMode, testEmail } = await req && req.json() as SendNewsletterRequest;

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

        status: 200})

    }

      status: 500})

  }
});

    },

=======
<<<<<<< HEAD
=======
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server && server.ts",
import {Resend} from "npm: resend@2 ;

import { serve } from "https: //deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm: resend@2.0.0";
const corsHeaders = $2;
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

<<<<<<< HEAD
interface SendNewsletterRequest {
  subject: string,
  previewText: string,
  body: string,
  testMode?: boolean,
  testEmail?: string
}

interface SendNewsletterRequest {
  subject: string,
  previewText: string,
  body: string,
  testMode?: boolean,
  testEmail?: string
}
serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders})
  }
  try {
    const resendApiKey = Deno.env.get($2);
    if (!resendApiKey) {
      throw new Error("Resend API key is not set in environment variables")
    }

    const resend = new Resend($2);
    const { subject, previewText, body, testMode, testEmail } = await req.json() as SendNewsletterRequest,

    // If test mode, send to test email only
    if (testMode && testEmail) {
      const emailResponse = await resend.emails.send($2);
      return new Response(JSON.stringify(emailResponse), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200})
    } 
    
    // In production, we would fetch subscriber emails from the database
    // and send the newsletter to all subscribers
    // This is just a placeholder for now
    const emailResponse = $2;
      message: "Email would be sent to all subscribers in production"
    },

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server && server.ts",
import {Resend} from "npm: resend@2 ;

const corsHeaders = {}
  "Access-Control-Allow-Origin": "*""
<<<<<<< HEAD
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}"
  "subject": string;
  "preview_text": string;
  "body": string;
import { Resend } from ""npm": resend@2.0.0","
import {serve} from ""https": //deno.land/std@0.190.0/http/server.ts";"
import {Resend} from ""npm": resend@2.0.0";"
import { serve } from ""https": //deno.land/std@0.190.0/http/server.ts","
  "Access-Control-Allow-Origin": "*","
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},"
=======
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}

>>>>>>> origin/chore/fix-lint-and-merge
interface SendNewsletterRequest {

  subject: string;
  preview_text: string;
  body: string;

<<<<<<< HEAD
import { Resend } from "npm: resend@2.0.0",
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { Resend } from "npm: resend@2.0.0",
import {serve} from "https: //deno.land/std@0.190.0/http/server.ts",;
import {Resend} from "npm: resend@2.0.0";
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { Resend } from "npm: resend@2.0.0",
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",

  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

interface SendNewsletterRequest {}
  subject: string,
  previewText: string,
  body: string,
<<<<<<< HEAD

=======
  testMode?: boolean,
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  testEmail?: string

}
serve(async (req) => {"
  if (req && req.method === "OPTIONS") {}
    return new Response(null, { headers: corsHeaders })
  }
<<<<<<< HEAD
  try {}
    if (!resendApiKey) {"
=======
  try {
    const resendApiKey = Deno && Deno.env.get("RESEND_API_KEY");
<<<<<<< HEAD
  testEmail?: string
}
serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
  try {
    const resendApiKey = Deno.env.get("RESEND_API_KEY"),
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    if (!resendApiKey) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      throw new Error("Resend API key is not set in environment variables")

    }

    const { subject, previewText, body, testMode, testEmail } = await req && req.json() as SendNewsletterRequest;
<<<<<<< HEAD
=======

<<<<<<< HEAD
        from: "Zion Marketplace <newsletter@ziontechgroup && ziontechgroup.com>";
        to: [testEmail],

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    // If test mode, send to test email only
    if (testMode && testEmail) {
      const emailResponse = await resend && resend.emails.send({
        from: "Zion Marketplace <newsletter@ziontechgroup && ziontechgroup.com>";
        to: [testEmail],

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
        subject: `[TEST] ${subject}`;
        html: body
        text: previewText});


      return new Response(JSON && JSON.stringify(emailResponse), {
        headers: { ...corsHeaders, "Content-Type": "application/json" };

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
        subject: `[TEST] ${subject}`;
        html: body
        text: previewText});
      return new Response(JSON && JSON.stringify(emailResponse), {
        headers: { ...corsHeaders, "Content-Type": "application/json" };
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        status: 200})

    }
<<<<<<< HEAD

      status: 500})

  }
});

    },

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    return new Response(JSON.stringify(emailResponse), {"
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200})
  } catch (error) {"
    console.error("Error in send-newsletter function:", error),

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
=======
=======
    // In production, we would fetch subscriber emails from the database
    // and send the newsletter to all subscribers
    // This is just a placeholder for now
    const emailResponse = {
      id: "test-email-id"
      message: "Email would be sent to all subscribers in production"
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

    };

    return new Response(JSON && JSON.stringify(emailResponse), {
      headers: { ...corsHeaders, "Content-Type": "application/json" };
      status: 200})
  } catch (error) {
    console && console.error("Error in send-newsletter function:", error);
    
    return new Response(JSON && JSON.stringify({ error: error && error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" };

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      status: 500})
  }
});

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  }
<<<<<<< HEAD
});
  }
});
;
import { serve } from ""https"://deno.land/std@0.190.0/http/server.ts",;"
import { Resend } from ""npm":resend@2.0.0",;"
;
  "Access-Control-Allow-Origin":"*",;"
  "Access-Control-Allow-Headers":"authorization, x-client-info, apikey, content-type"},;"
;
interface SendNewsletterRequest {;
  }
  "subject":string,;
  "previewText":string,;
  "body":string,;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    },

>>>>>>> merged-prs-20250907-203621
    return new Response(JSON.stringify(emailResponse), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200})
  } catch (error) {
<<<<<<< HEAD
=======
    console.error("Error in send-newsletter function:", error),
    
    return new Response(JSON.stringify({ error: error.message }), {
<<<<<<< HEAD
      headers: { ...corsHeaders, "Content-Type": "application/json" };
      status: 500})
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

    };
    return new Response(JSON && JSON.stringify(emailResponse), {
      headers: { ...corsHeaders, "Content-Type": "application/json" };
      status: 200})
  } catch (error) {
    console && console.error("Error in send-newsletter function:", error);
    return new Response(JSON && JSON.stringify({ error: error && error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" };
      status: 500})
  }
});
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

    },

    return new Response(JSON.stringify(emailResponse), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200})
  } catch (error) {
    console.error("Error in send-newsletter function:", error),
    
    return new Response(JSON.stringify({ error: error.message }), {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  }
});
;
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  testMode?:boolean,;
  testEmail?:string;
}
;
serve(async (req) => {;
<<<<<<< HEAD
  }
  if (req.method === "OPTIONS") {;"
    }
    return new Response(null, { "headers":corsHeaders }),;
  }
;
  try {;
    }
    if (!resendApiKey) {;
      }
      throw new Error("Resend API key is not set in environment variables"),;"
    }
;
;
    // If test mode, send to test email only;
    if (testMode && testEmail) {;
      }
        }
        "from":"Zion Marketplace <newsletter@ziontechgroup.com>",;"
        "to":[testEmail],;
        "subject":`[TEST] ${subject}`,;`        "html":body,;
        "text":previewText}),;
;
      return new Response(JSON.stringify(emailResponse), {;
        }
        "headers":{ ...corsHeaders, "Content-Type":"application/json" },;"
        "status":200}),;
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    } ;
    ;
    // In production, we would fetch subscriber emails from the database;
    // and send the newsletter to all subscribers;
    // This is just a placeholder for now;
<<<<<<< HEAD
      }
      "id":"test-email-id",;"
      "message":"Email would be sent to all subscribers in production";"
    },;
;
    return new Response(JSON.stringify(emailResponse), {;
      }
      "headers":{ ...corsHeaders, "Content-Type":"application/json" },;"
      "status":200}),;
  } catch (error) {;
    }
    console.error("Error in send-newsletter "function":", error),;"
    ;
    return new Response(JSON.stringify({ "error":error.message }), {;
      }
      "headers":{ ...corsHeaders, "Content-Type":"application/json" },;"
      "status":500}),;  }
}),;
 interface SendNewsletterRequest {
  }
  "subject": string;
"previewText": string;
"body": string;
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
testMode?: boolean;
testEmail?: string 
}serve (async (req) => {
  
}const resend = new Resend (resendApiKey);
const {
<<<<<<< HEAD
  }
  subject, previewText, body, testMode, testEmail 
}= await req.json () as SendNewsletterRequest;
//If test mode, send to test email only if (testMode && testEmail) {
  }
  const emailResponse = await resend.emails.send ({
  }
  "from": "Zion Marketplace <newsletter@ziontechgroup.com>";"
"to": [testEmail];
"subject": `[TEST] $ {`  }
  subject 
}`;`
"text": previewText 
});
"status": 200 
});
}//In production, we would fetch subscriber emails from the database //and send the newsletter to all subscribers //This is just a placeholder for now "status": 500 
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
});
}
});
  }
});
  }
});
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
    console.error($2);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500})
  }
}),
=======
});
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
