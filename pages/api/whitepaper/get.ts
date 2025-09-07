import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { id } = req.query;
    
    if (!id || Array.isArray(id)) {
      return res.status(400).json({ error: 'Missing or invalid ID' });
    }

    // Placeholder for whitepaper retrieval logic
    const entry = {
      id,
      markdown: '# Sample Whitepaper\n\nThis is a sample whitepaper.',
      public: true,
      createdAt: new Date().toISOString()
    };

    res.status(200).json({ success: true, entry });
  } catch (error) {
    console.error('Whitepaper retrieval error:', error);
    res.status(500).json({ error: 'Failed to retrieve whitepaper' });
  }
}