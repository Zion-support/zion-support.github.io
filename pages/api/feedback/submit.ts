import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { feedback, userId, category } = req.body;

    if (!feedback || !userId) {
      return res.status(400).json({ error: 'Feedback and userId are required' });
    }

    // Mock feedback submission
    const submission = {
      id: Date.now().toString(),
      feedback,
      userId,
      category: category || 'general',
      submittedAt: new Date().toISOString(),
      status: 'received'
    };

    res.status(201).json({
      success: true,
      submission
    });
  } catch (error: any) {
    res.status(500).json({
      error: error?.message || 'Failed to submit feedback'
    });
  }
}