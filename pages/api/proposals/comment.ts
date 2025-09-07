import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { proposalId, comment, userId } = req.body || {};
    
    if (!proposalId || !comment || !userId) {
      return res.status(400).json({ error: 'Proposal ID, comment, and user ID are required' });
    }

    // Placeholder for proposal comment logic
    res.status(201).json({ success: true, message: 'Comment added' });
  } catch (error) {
    console.error('Proposal comment error:', error);
    res.status(500).json({ error: 'Failed to add comment' });
  }
}