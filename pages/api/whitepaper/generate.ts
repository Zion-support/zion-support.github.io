import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { title, description, sections } = req.body || {};
    
    if (!title || !description) {
      return res.status(400).json({ error: 'Title and description are required' });
    }

    // Placeholder for whitepaper generation logic
    const whitepaper = {
      id: `wp_${Date.now()}`,
      title,
      description,
      sections: sections || [],
      status: 'draft',
      createdAt: new Date().toISOString()
    };

    res.status(200).json({ success: true, whitepaper });
  } catch (error) {
    console.error('Whitepaper generation error:', error);
    res.status(500).json({ error: 'Failed to generate whitepaper' });
  }
}