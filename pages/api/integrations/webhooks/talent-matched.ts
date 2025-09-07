import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { talentData, jobData } = req.body || {};
    
    if (!talentData || !jobData) {
      return res.status(400).json({ error: 'Talent data and job data are required' });
    }

    // Placeholder for talent matched webhook logic
    res.status(200).json({ success: true, message: 'Talent matched webhook processed' });
  } catch (error) {
    console.error('Talent matched webhook error:', error);
    res.status(500).json({ error: 'Failed to process talent matched webhook' });
  }
}