import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST');
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  const { talentId, action } = req.body || {};
  if (!talentId || !['AcceptDeclineNegotiate'].includes(action)) {
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST')
    return res.status(405).json({ error: 'Method Not Allowed' })
  }
  const { talentId, action } = req.body |{}
  if (!talentId |!['AcceptDeclineNegotiate'].includes(action)) {
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
    return res.status(400).json({ error: 'Invalid payload' })
  }
  // Placeholder for persistence, echo the response for now
<<<<<<< HEAD
  const payload = null;
=======
  const payload = { talentId, action, at: new Date().toISOString() }
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  return res.status(200).json({ ok: true, data: payload })
}