import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { proposalId, vote, userId } = req.body || {};
    
    if (!proposalId || !vote || !userId) {
      return res.status(400).json({ error: 'Proposal ID, vote, and user ID are required' });
    }

    // Placeholder for global vote logic
    res.status(200).json({ success: true, message: 'Global vote recorded' });
  } catch (error) {
    console.error('Global vote error:', error);
    res.status(500).json({ error: 'Failed to record global vote' });
  }
}