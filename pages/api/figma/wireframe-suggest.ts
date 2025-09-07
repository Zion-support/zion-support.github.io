import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { screenName, role = 'Talent' } = req.body || {};
    
    if (!screenName) {
      return res.status(400).json({ error: 'Screen name is required' });
    }

    // Placeholder for wireframe suggestion logic
    const suggestion = {
      screenName,
      role,
      layout: 'Placeholder wireframe layout',
      sections: ['Header', 'Main Content', 'Footer'],
      actions: ['Primary Action', 'Secondary Action']
    };

    res.status(200).json({ success: true, suggestion });
  } catch (error) {
    console.error('Wireframe suggestion error:', error);
    res.status(500).json({ error: 'Failed to generate wireframe suggestion' });
  }
}