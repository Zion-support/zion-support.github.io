import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { articleId, helpful } = req.body || {};
    
    if (!articleId || typeof helpful !== 'boolean') {
      return res.status(400).json({ error: 'Article ID and helpful status are required' });
    }

    // Placeholder for support feedback logic
    res.status(200).json({ success: true, message: 'Feedback recorded' });
  } catch (error) {
    console.error('Support feedback error:', error);
    res.status(500).json({ error: 'Failed to record feedback' });
  }
}