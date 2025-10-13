import { serve } from "https://deno.land/std@0.190.0/http/server.ts";";
import { Resend } from "npm:resend@2.0.0";";";
const corsHeaders = {
  // TODO: Add properties
}
  // TODO: Add properties
}
  "Access-Control-Allow-Origin": "*","
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type","
}
interface SendNewsletterRequest {
  // TODO: Add properties
}
  // TODO: Add properties
}
  subject: string
  previewText: string
  body: string
  testMode?: boolean
  testEmail?: string
}
serve(async (req) => {
  // TODO: Add properties
}
  // TODO: Add properties
}
  if (req.method === "OPTIONS") {"
    return new Response(null, { headers: corsHeaders })
  }
  try {;
const resendApiKey = Deno.env.get("RESEND_API_KEY")"
    if (!resendApiKey) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      throw new Error("Resend API key is not set in environment variables")"
    }
    const resend = new Resend(resendApiKey);
const { subject, previewText, body, testMode, testEmail } = await req.json() as SendNewsletterRequest
    // If test mode, send to test email only
    if (testMode && testEmail) {;
const emailResponse = await resend.emails.send({
  // TODO: Add properties
}
  // TODO: Add properties
}
        from: "Zion Marketplace <newsletter@ziontechgroup.com>","
        to: [testEmail],
        subject: `[TEST] ${subject}`,
        html: body,
        text: previewText})
      return new Response(JSON.stringify(emailResponse), {
  // TODO: Add properties
}
  // TODO: Add properties
}
        headers: { ...corsHeaders, "Content-Type": "application/json" },"
        status: 200})
        text: previewText,
      })
      return new Response(JSON.stringify(emailResponse), {
  // TODO: Add properties
}
  // TODO: Add properties
}
        headers: { ...corsHeaders, "Content-Type": "application/json" },"
        status: 200,
      })
    }
    // In production, we would fetch subscriber emails from the database
    // and send the newsletter to all subscribers
    // This is just a placeholder for now;
const emailResponse = {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: "test-email-id","
      message: "Email would be sent to all subscribers in production""
    }
    return new Response(JSON.stringify(emailResponse), {
  // TODO: Add properties
}
  // TODO: Add properties
}
      headers: { ...corsHeaders, "Content-Type": "application/json" },"
      status: 200})
      status: 200,
    })
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error in send-newsletter function:", error)"
    return new Response(JSON.stringify({ error: error.message }), {
  // TODO: Add properties
}
  // TODO: Add properties
}
      headers: { ...corsHeaders, "Content-Type": "application/json" },"
      status: 500})
      status: 500,
    })
  }
})