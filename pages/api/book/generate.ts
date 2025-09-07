import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { title, topic, chapters } = req.body;
    
    if (!title || !topic || !chapters) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Placeholder for book generation logic
    const drafted = [];
    res.status(200).json({ success: true, chapters: drafted });
  } catch (error) {
    console.error('Book generation error:', error);
    res.status(500).json({ error: 'Failed to generate book' });
  }
}