import type { NextApiRequest, NextApiResponse } from 'next';

import { getSessionFromReq, isInternalAgentRequest } from '../../../utils/adminAuth';
import { createSessionCookie } from '../../../utils/auth-utils';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const session = getSessionFromReq(req);
  const internal = isInternalAgentRequest(req);

  if (!session && !internal) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { role } = req.body || {};

  if (!role) {
    return res.status(400).json({ error: 'Role required' });
  }

  const cookie = createSessionCookie({
    email: session?.email || 'admin',
    role,
    twofaVerified: true,
  });

  res.setHeader('Set-Cookie', cookie);
  res.status(200).json({ ok: true });
}