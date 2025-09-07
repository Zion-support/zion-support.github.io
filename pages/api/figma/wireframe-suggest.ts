<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
=======

    res.status(405).json({
      error: 'Method not allowed'
    });
    return;
>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a

  try {
    const { screenName, role } = req.body || {};
    if (!screenName) {
      return res.status(400).json({
        error: 'screenName is required'
      });
    }

    // TODO: Implement wireframe suggestion logic
    const suggestion = {
      screenName,
      role: role || 'user',
      components: [
        { type: 'header', content: 'Navigation header' },
        { type: 'main', content: 'Main content area' },
        { type: 'footer', content: 'Footer with links' }
      ],
      layout: 'vertical',
      wireframe: 'Basic wireframe structure'
    };

    res.status(200).json(suggestion);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}