
  }
;
  try {;
    const { to, subject, html } = await req.json(),;
;
    const emailResponse = await resend.emails.send({;
      from:"Lovable <onboarding@resend.dev>",;
      to:[to],;
      subject,;
      html}),;
;
    return new Response(JSON.stringify(emailResponse), {;
      headers:{ ...corsHeaders, "Content-Type":"application/json" },;
      status:200}),;
  } catch (error) {;
    return new Response(JSON.stringify({ error:error.message }), {;
      headers:{ ...corsHeaders, "Content-Type":"application/json" },;
      status:500}),;  }
}),;

}try {
  const {
  to, subject, html
}= await req.json ();
const emailResponse = await resend.emails.send ({
  from: "Lovable <onboarding@resend.dev>";
to: [to];
subject;
html
});
return new Response (JSON.stringify (emailResponse), {
  status: 500
});
}
});

