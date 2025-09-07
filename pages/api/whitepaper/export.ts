import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { markdown, token_name } = req.body || {};
    
    if (!markdown || !token_name) {
      return res.status(400).json({ error: 'Markdown and token name are required' });
    }

    // Placeholder for whitepaper export logic
    res.status(200).json({ success: true, message: 'Whitepaper exported' });
  } catch (error) {
    console.error('Whitepaper export error:', error);
    res.status(500).json({ error: 'Failed to export whitepaper' });
  }
}