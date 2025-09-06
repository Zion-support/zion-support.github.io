<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { issueTokens } from '../../../../utils/token/service';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
  const { userId, amount, reason } = req.body || {};
  if (!userId || typeof amount !== 'number')
    return res.status(400).json({ error: 'userId and amount required' });
  try {
    const tx = issueTokens(userId, Math.floor(amount), reason || 'admin_issue');
    return res.status(200).json({ tx });
=======
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'POST') {
      res.setHeader('Allow', ['POST']);
      return res.status(405).end('Method Not Allowed');
    }
    
    res.status(200).json({ token: 'issued' });
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
  } catch (err: any) {
    return res.status(400).json({
      error: err.message
    });
  }
}
