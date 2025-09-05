 
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
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 
}
});
