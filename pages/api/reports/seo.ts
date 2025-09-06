import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { url } = req.query;
    
    if (!url || typeof url !== 'string') {
      return res.status(400).json({ error: 'URL required' });
    }

    // Mock SEO report
    const report = {
      url,
      timestamp: new Date().toISOString(),
      score: 78,
      issues: [
        {
          type: 'warning',
          title: 'Missing meta description',
          description: 'Add a meta description to improve search engine visibility',
          impact: 'medium'
        },
        {
          type: 'error',
          title: 'Missing alt text on images',
          description: 'Add alt text to images for better accessibility',
          impact: 'high'
        },
        {
          type: 'info',
          title: 'Good heading structure',
          description: 'Page has proper heading hierarchy',
          impact: 'positive'
        }
      ],
      recommendations: [
        'Add structured data markup',
        'Improve page loading speed',
        'Optimize for mobile devices',
        'Add more internal links'
      ],
      metrics: {
        titleLength: 45,
        descriptionLength: 155,
        headingCount: 6,
        imageCount: 12,
        linkCount: 25,
        wordCount: 850
      }
    };

    res.status(200).json({
      success: true,
      report
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate SEO report' });
  }
}