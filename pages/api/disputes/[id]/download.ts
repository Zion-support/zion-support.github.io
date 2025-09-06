import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { id } = req.query;

    if (!id || typeof id !== 'string') {
      return res.status(400).json({ error: 'Dispute ID is required' });
    }

    // Mock file download
    const fileName = `dispute-${id}-evidence.pdf`;
    const fileContent = Buffer.from('Mock PDF content');

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
    res.setHeader('Content-Length', fileContent.length);

    res.status(200).send(fileContent);
  } catch (error: any) {
    res.status(500).json({
      error: error?.message || 'Failed to download dispute file'
    });
  }
}