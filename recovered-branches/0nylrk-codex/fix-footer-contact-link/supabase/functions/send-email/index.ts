
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { Resend } from "npm: resend@2.0.0",
const corsHeaders = {,
  "Access-Control-Allow-Origin": "*",
const resend = new Resend(Deno.env.get("RESEND_API_KEY")),
serve(async (req) => {,
  if (req.method === "OPTIONS") {,
    return new Response(null, { headers: corsHeaders }),
  }
,
  try {,
    const { to, subject, html } = await req.json(),
    const emailResponse = await resend.emails.send({,
      from: "Lovable <onboarding@resend.dev>",
      to: [to],
      subject
  }
}),
}})