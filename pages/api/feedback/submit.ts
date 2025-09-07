import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { response_id, rating, comment, page_path, ai_model } = req.body || {};
    
    if (!response_id || !rating) {
      return res.status(400).json({ error: 'Response ID and rating are required' });
    }

    // Placeholder for feedback submission logic
    const feedback = {
      id: `feedback-${Date.now()}`,
      response_id,
      rating,
      comment: comment || '',
      page_path: page_path || '',
      ai_model: ai_model || '',
      createdAt: new Date().toISOString()
    };

    res.status(201).json({ success: true, feedback });
  } catch (error) {
    console.error('Feedback submission error:', error);
    res.status(500).json({ error: 'Failed to submit feedback' });
  }
}