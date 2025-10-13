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
const resend = new Resend(Deno.env.get("RESEND_API_KEY"))"
serve(async (req) => {
  // TODO: Add properties
}
  // TODO: Add properties
}
  if (req.method === "OPTIONS") {"
    return new Response(null, { headers: corsHeaders })
  }
  try {;
const { to, subject, html } = await req.json();
const emailResponse = await resend.emails.send({
  // TODO: Add properties
}
  // TODO: Add properties
}
      from: "Lovable <onboarding@resend.dev>","
      to: [to],
      subject,
      html})
    return new Response(JSON.stringify(emailResponse), {
  // TODO: Add properties
}
  // TODO: Add properties
}
      headers: { ...corsHeaders, "Content-Type": "application/json" },"
      status: 200})
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    return new Response(JSON.stringify({ error: error.message }), {
  // TODO: Add properties
}
  // TODO: Add properties
}
      headers: { ...corsHeaders, "Content-Type": "application/json" },"
      status: 500})
      html,
    })
    return new Response(JSON.stringify(emailResponse), {
  // TODO: Add properties
}
  // TODO: Add properties
}
      headers: { ...corsHeaders, "Content-Type": "application/json" },"
      status: 200,
    })
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    return new Response(JSON.stringify({ error: error.message }), {
  // TODO: Add properties
}
  // TODO: Add properties
}
      headers: { ...corsHeaders, "Content-Type": "application/json" },"
      status: 500,
    })
  }
})