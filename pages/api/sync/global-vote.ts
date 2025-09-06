import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { proposalId, title, votes, userId } = req.body;
    
    if (!proposalId || !title || !votes) {
      return res.status(400).json({ error: 'Proposal ID, title, and votes required' });
    }

    // Mock global vote
    const vote = {
      id: `vote-${Date.now()}`,
      proposalId,
      title,
      votes,
      userId: userId || 'anonymous',
      votedAt: new Date().toISOString(),
      status: 'recorded'
    };

    res.status(200).json({
      success: true,
      vote
    });
  } catch (error) {
    res.status(500).json({ error: 'Global vote failed' });
  }
}