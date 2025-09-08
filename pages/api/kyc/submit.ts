import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { userId, amlResult, flags, riskScore } = req.body;

    if (!userId) {
      return res.status(400).json({ error: 'User ID is required' });
    }

    // Mock KYC submission processing
    const profile = {
      userId,
      amlStatus: amlResult?.status === 'clear' ? 'clear' : amlResult?.status === 'match' ? 'match' : 'review',
      flags: Array.from(flags || []),
      riskScore: riskScore || 0,
      status: 'submitted',
      submittedAt: new Date().toISOString()
    };

    res.status(200).json({
      success: true,
      profile
    });
  } catch (error: any) {
    res.status(500).json({
      error: error?.message || 'Failed to submit KYC'
    });
  }
}