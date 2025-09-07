import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { question, context } = req.body || {};
    
    if (!question) {
      return res.status(400).json({ error: 'Question is required' });
    }

    // Placeholder for learning coach logic
    const response = {
      text: 'Tip: Break complex topics into small steps. Revisit objectives and test your understanding with quick quizzes.',
      suggestions: ['Review the basics', 'Practice with examples', 'Ask for clarification']
    };

    res.status(200).json({ success: true, response });
  } catch (error) {
    console.error('Learning coach error:', error);
    res.status(500).json({ error: 'Failed to process learning coach request' });
  }
}