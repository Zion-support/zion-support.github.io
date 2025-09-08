import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    // Mock homepage content
    const content = {
      hero: {
        title: 'Welcome to Zion Tech Group',
        subtitle: 'Building the future of technology',
        cta: 'Get Started'
      },
      features: [
        {
          title: 'AI-Powered Solutions',
          description: 'Leverage cutting-edge AI technology'
        },
        {
          title: 'Enterprise Ready',
          description: 'Scalable solutions for businesses'
        },
        {
          title: 'Developer Friendly',
          description: 'Easy integration and documentation'
        }
      ],
      lastUpdated: new Date().toISOString()
    };

    res.status(200).json({
      success: true,
      content
    });
  } catch (error: any) {
    res.status(500).json({
      error: error?.message || 'Failed to retrieve homepage content'
    });
  }
}