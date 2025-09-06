import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { id } = req.query;
    
    if (!id || typeof id !== 'string') {
      return res.status(400).json({ error: 'Dispute ID is required' });
    }

    // Mock file download
    const fileContent = `Dispute ${id} documentation`;
    const buffer = Buffer.from(fileContent, 'utf8');
    
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Disposition', `attachment; filename="dispute-${id}.txt"`);
    res.setHeader('Content-Length', buffer.length);
    
    res.status(200).send(buffer);
  } catch (error) {
    console.error('Dispute download error:', error);
    res.status(500).json({ error: 'Failed to download dispute' });
  }
}