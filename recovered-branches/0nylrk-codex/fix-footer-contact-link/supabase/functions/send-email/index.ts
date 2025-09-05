

const _corsHeaders = {_"Access-Control-Allow-Origin": "*", _"Access-Control-Allow-Headers": "authorization, _x-client-info, _apikey, _content-type"};

const _resend = new Resend(Deno.env.get("RESEND_API_KEY"));

serve(_async (req) => {_if (req.method === "OPTIONS") {
    return new Response(null, _{ headers: corsHeaders});
  }

  try {_const { to, _subject, _html} = await req.json();

    const _emailResponse = await resend.emails.send({_from: "Lovable <onboarding@resend.dev>", _to: [to], _subject, _html});

    return new Response(JSON.stringify(emailResponse), {_headers: { ...corsHeaders, _"Content-Type": "application/json"},
      status: 200});
  } catch (error) {_return new Response(JSON.stringify({ error: error.message}), {_headers: { ...corsHeaders, _"Content-Type": "application/json"},
      status: 500});
  }
});
