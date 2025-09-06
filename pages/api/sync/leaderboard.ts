import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { entityKey, subjectId, score, category, period, rank } = req.body;
    
    if (!entityKey || !subjectId || score === undefined) {
      return res.status(400).json({ error: 'Entity key, subject ID, and score required' });
    }

    // Mock leaderboard entry
    const entry = {
      id: `entry-${Date.now()}`,
      entityKey,
      subjectId,
      score,
      category: category || 'general',
      period: period || 'monthly',
      rank: rank || 0,
      createdAt: new Date().toISOString(),
      status: 'active'
    };

    res.status(200).json({
      success: true,
      entry
    });
  } catch (error) {
    res.status(500).json({ error: 'Leaderboard entry failed' });
  }
}