import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Return source map information
    res.status(200).json({
      success: true,
      message: 'Source map endpoint active'
    });
  } catch (error) {
    res.status(500).json({ error: 'Source map generation failed' });
  }
}