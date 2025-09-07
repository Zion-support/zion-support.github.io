<<<<<<< HEAD


    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  const { talentId, action } = req.body || {},
  if (!talentId || !['AcceptDeclineNegotiate'].includes(action)) {
    return res.status(400).json({ error: 'Invalid payload' })
  }

  // Placeholder for persistence, echo the response for now

  const payload = { talentId, action, at: new Date().toISOString() }

  return res.status(200).json({ ok: true, data: payload })

=======
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json({ message: 'Endpoint working' });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
