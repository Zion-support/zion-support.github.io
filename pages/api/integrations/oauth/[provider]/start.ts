import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { provider } = req.query as { provider: string };
  const callbackUrl = `/api/integrations/oauth/${provider}/callback?code=mock_code&state=mock_state`;
  res.writeHead(302, { Location: callbackUrl });
<<<<<<< HEAD
  res.end();
=======
  res.end();
}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
