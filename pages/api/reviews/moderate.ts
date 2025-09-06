import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { reviewId, action, updates, moderatorId } = req.body;
    
    if (!reviewId || !action) {
      return res.status(400).json({ error: 'Review ID and action required' });
    }

    const validActions = ['approve', 'remove', 'edit'];
    if (!validActions.includes(action)) {
      return res.status(400).json({ error: 'Invalid action' });
    }

    // Mock review moderation
    const moderation = {
      id: `moderation-${Date.now()}`,
      reviewId,
      action,
      updates: updates || {},
      moderatorId: moderatorId || 'system',
      moderatedAt: new Date().toISOString(),
      status: 'completed'
    };

    res.status(200).json({
      success: true,
      moderation
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to moderate review' });
  }
}