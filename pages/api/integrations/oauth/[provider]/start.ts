<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { provider } = req.query as { provider: string };
  const callbackUrl = `${req.headers.origin}/api/integrations/oauth/${provider}/callback`;
  
  // TODO: Implement actual OAuth flow
  res.writeHead(302, { Location: callbackUrl });
  res.end();
=======

>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
}