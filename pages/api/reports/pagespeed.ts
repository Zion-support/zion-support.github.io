import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    // Mock PageSpeed report - replace with actual PageSpeed API
    const pagespeedReport = {
      performance: 85,
      accessibility: 92,
      bestPractices: 88,
      seo: 95,
      lastChecked: new Date().toISOString(),
      recommendations: [
        'Optimize images',
        'Minify CSS and JavaScript',
        'Enable compression'
      ]
    };
    
    res.status(200).json(pagespeedReport);
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to read PageSpeed report' });
  }
}