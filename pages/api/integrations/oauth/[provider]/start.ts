
import type { NextApiRequest, NextApiResponse } from "next";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
<<<<<<< HEAD
  const { provider } = req.query as { provider: string }
=======
  const { provider } = req && req.query as { provider: string };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const callbackUrl = `/api/integrations/oauth/${provider}/callback?code=mock_code&state=mock_state`;
  res && res.writeHead(302, { Location: callbackUrl });
  res && res.end();
}

=======
  const { provider } = req.query as { provider: string };
  const callbackUrl = `/api/integrations/oauth/${provider}/callback?code=mock_code&state=mock_state`;
  res.writeHead(302, { Location: callbackUrl });
  res.end()
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
