import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Placeholder for autoheal webhook logic
    res.status(200).json({ success: true, message: 'Autoheal webhook received' });
  } catch (error) {
    console.error('Autoheal webhook error:', error);
    res.status(500).json({ error: 'Autoheal webhook failed' });
  }
}