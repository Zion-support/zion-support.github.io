<<<<<<< HEAD
<<<<<<< HEAD
=======
import type { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Invalid request" });
  const { userId, amount, reason } = req.body || {}
  if (!userId || typeof amount !== "number") return res.status(400).json({ error: "Invalid request" });
  try {
<<<<<<< HEAD
    const tx = issueTokens(userId, Math.floor(amount), reason || "admin_issue"),
    return res.status(200).json({ tx })

=======
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'POST') {
      res.setHeader('Allow', ['POST']);
      return res.status(405).end('Method Not Allowed');
    }
    
    res.status(200).json({ token: 'issued' });
  } catch (err: any) {
    return res.status(400).json({
      error: err.message
    });
  }
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
    const tx = issueTokens(userId, Math.floor(amount), reason || "admin_issue");
    return res.status(200).json({ tx });
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
