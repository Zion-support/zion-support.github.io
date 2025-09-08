import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { userId, amlResult, flags, riskScore } = req.body || {};
    
    const profile = {
      userId,
      amlStatus: amlResult?.status === 'clear' ? 'clear' : amlResult?.status === 'match' ? 'match' : 'review',
      flags: Array.from(flags || []),
      riskScore: riskScore || 0
    };
    
    res.status(200).json({ message: 'KYC submit endpoint', profile });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}