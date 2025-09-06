
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  const { question, context } = req.body;

  if (!question) {
    return res.status(400).json({ error: 'Question is required' });
  }

  try {
    // Mock AI coach response
    const responses = [
      'Great question! Let me help you understand this concept better.',
      'That is an interesting point. Here is how I would approach this:',
      'I can see you are thinking about this deeply. Let me provide some guidance.',
      'Excellent! This shows you are engaging with the material. Here is my advice:',
      'I understand your confusion. Let me break this down for you:'
    ];

    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    
    res.status(200).json({
      response: randomResponse,
      suggestions: [
        'Review the course materials again',
        'Try the practice exercises',
        'Ask specific questions about unclear concepts',
        'Connect with other learners in the community'
      ],
      tip: 'Tip: Break complex topics into small steps. Revisit objectives and test your understanding with quick quizzes.'
    });
  } catch (e: any) {
    return res.status(500).json({ error: e?.message ?? 'Coach error' });
  }
}

