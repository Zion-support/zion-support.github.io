import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { talentId, fromLocation, toLocation, reason } = req.body || {};
    
    if (!talentId || !fromLocation || !toLocation) {
      return res.status(400).json({ error: 'Talent ID, from location, and to location are required' });
    }

    // Placeholder for talent mobility logic
    res.status(200).json({ success: true, message: 'Talent mobility event recorded' });
  } catch (error) {
    console.error('Talent mobility error:', error);
    res.status(500).json({ error: 'Failed to record talent mobility event' });
  }
}