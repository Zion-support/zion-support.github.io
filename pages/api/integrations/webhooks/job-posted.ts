import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { jobData } = req.body || {};
    
    if (!jobData) {
      return res.status(400).json({ error: 'Job data is required' });
    }

    // Placeholder for job posted webhook logic
    res.status(200).json({ success: true, message: 'Job posted webhook processed' });
  } catch (error) {
    console.error('Job posted webhook error:', error);
    res.status(500).json({ error: 'Failed to process job posted webhook' });
  }
}