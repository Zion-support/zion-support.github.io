import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { code } = req.query;
    if (!code || typeof code !== 'string') {
      return res.status(400).json({ error: 'Invalid ISBN code' });
    }

    // Placeholder for barcode generation
    res.status(200).json({ success: true, message: 'Barcode generation not implemented' });
  } catch (error) {
    console.error('Barcode generation error:', error);
    res.status(500).json({ error: 'Failed to generate barcode' });
  }
}