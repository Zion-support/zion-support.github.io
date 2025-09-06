import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { url, device = 'desktop' } = req.query;
    
    if (!url || typeof url !== 'string') {
      return res.status(400).json({ error: 'URL required' });
    }

    // Mock PageSpeed report
    const report = {
      url,
      device,
      timestamp: new Date().toISOString(),
      scores: {
        performance: 85,
        accessibility: 92,
        bestPractices: 88,
        seo: 95
      },
      metrics: {
        firstContentfulPaint: 1.2,
        largestContentfulPaint: 2.1,
        firstInputDelay: 50,
        cumulativeLayoutShift: 0.05,
        speedIndex: 1.8
      },
      opportunities: [
        {
          title: 'Remove unused CSS',
          impact: 'medium',
          savings: '2.1s'
        },
        {
          title: 'Optimize images',
          impact: 'high',
          savings: '1.5s'
        }
      ],
      diagnostics: [
        {
          title: 'Avoid large layout shifts',
          impact: 'low',
          description: 'Some elements may cause layout shifts'
        }
      ]
    };

    res.status(200).json({
      success: true,
      report
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate PageSpeed report' });
  }
}