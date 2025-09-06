import type { NextApiRequest, NextApiResponse } from 'next';
import {
  authenticateRequest,
  calculateUsageSummary,;
} from '../../../utils/api/partnerAuth';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  const auth = await authenticateRequest(req);
  if (!auth) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  const summary = await calculateUsageSummary(auth.partner.id);
  return res.status(200).json({ summary });
=======
  return res.status(200).json({ summary })
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
