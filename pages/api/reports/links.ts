import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    // Mock links report - replace with actual link checking logic
    const linksReport = {
      totalLinks: 150,
      brokenLinks: 3,
      externalLinks: 45,
      internalLinks: 105,
      lastChecked: new Date().toISOString(),
      brokenLinksList: [
        { url: 'https://example.com/broken1', status: 404 },
        { url: 'https://example.com/broken2', status: 500 },
        { url: 'https://example.com/broken3', status: 403 }
      ]
    };
    
    res.status(200).json(linksReport);
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to read links report' });
  }
}