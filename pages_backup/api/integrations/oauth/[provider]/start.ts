origin/cursor/automate-test-improve-and-merge-code-2533
  const { provider } = req.query as { provider: string };
  const callbackUrl = `/api/integrations/oauth/${provider}/callback?code=mock_code&state=mock_state`;
  res.writeHead(302, { Location: callbackUrl });
res.end();

}
origin/cursor/automate-test-improve-and-merge-code-2533
