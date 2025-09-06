
=======
  
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ae4e
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
  // Security headers
    "camera=(), microphone=(), geolocation=()",
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  );
=======
;
  // CSP header;
  response.headers.set (
    "Content - Security - Policy",
    "default - src 'self'; script - src 'self' 'unsafe - eval' 'unsafe - inline'; style - src 'self' 'unsafe - inline'; img - src 'self' data: https:; font - src 'self' data:; connect - src 'self' https:;",
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  );

  return response;
=======
    return response;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ae4e
}
>>>>>>> origin/automation-improvements-final

=======
return response;
}
export const config = {
=======
export const config = {
  matcher: ["/((?!api | _next / static | _next / image | favicon.ico).*)"],
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
