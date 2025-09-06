import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    // Mock SEO report - replace with actual SEO analysis
    const seoReport = {
      score: 88,
      titleTags: 95,
      metaDescriptions: 90,
      headings: 85,
      images: 92,
      lastChecked: new Date().toISOString(),
      issues: [
        'Missing alt text on 3 images',
        'Title tag too long on 2 pages'
      ]
    };
    
    res.status(200).json(seoReport);
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to read SEO report' });
  }
}