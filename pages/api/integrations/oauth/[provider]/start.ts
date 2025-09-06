import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { provider } = req.query as { provider: string };
  const callbackUrl = `/api/integrations/oauth/${provider}/callback?code=mock_code&state=mock_state`;
  res.writeHead(302, { Location: callbackUrl });
<<<<<<< HEAD
<<<<<<< HEAD
  res.end();
=======
  res.end()
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  res.end()
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
