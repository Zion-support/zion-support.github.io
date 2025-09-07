import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { talentId, action } = req.body || {};
    
    if (!talentId || !['Accept', 'Decline', 'Negotiate'].includes(action)) {
      return res.status(400).json({ error: 'Talent ID and valid action are required' });
    }

    // Placeholder for talent response log logic
    res.status(200).json({ success: true, message: 'Talent response logged' });
  } catch (error) {
    console.error('Talent response log error:', error);
    res.status(500).json({ error: 'Failed to log talent response' });
  }
}