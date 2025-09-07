import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { talentData } = req.body || {};
    
    if (!talentData) {
      return res.status(400).json({ error: 'Talent data is required' });
    }

    // Placeholder for talent hired webhook logic
    res.status(200).json({ success: true, message: 'Talent hired webhook processed' });
  } catch (error) {
    console.error('Talent hired webhook error:', error);
    res.status(500).json({ error: 'Failed to process talent hired webhook' });
  }
}