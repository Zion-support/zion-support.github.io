

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
        text: previewText});

      return new Response(JSON.stringify(emailResponse), {_headers: { ...corsHeaders, _"Content-Type": "application/json"},
        status: 200});
    } 
    
    // In production, we would fetch subscriber emails from the database
    // and send the newsletter to all subscribers
    // This is just a placeholder for now
    const _emailResponse = {_id: "test-email-id", _message: "Email would be sent to all subscribers in production"};

    return new Response(JSON.stringify(emailResponse), {_headers: { ...corsHeaders, _"Content-Type": "application/json"},
      status: 200});
  } catch (error) {_return new Response(JSON.stringify({ error: error.message}), {_headers: { ...corsHeaders, _"Content-Type": "application/json"},
      status: 500});
  }
});
