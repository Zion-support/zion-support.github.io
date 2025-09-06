<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  const { provider } = req.query as { provider: string },
  const callbackUrl = null;
  res.end()
}
=======
import type { NextApiRequest, NextApiResponse } from "next";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { provider } = req.query as { provider: string }
  const callbackUrl = `/api/integrations/oauth/${provider}/callback?code=mock_code&state=mock_state`;
  res.writeHead(302, { Location: callbackUrl });
  res.end();
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
  const { provider } = req.query as { provider: string };
  const callbackUrl = `/api/integrations/oauth/${provider}/callback?code=mock_code&state=mock_state`;
  res.writeHead(302, { Location: callbackUrl });
  res.end();
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
