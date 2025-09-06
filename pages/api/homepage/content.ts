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
        title: 'Welcome to Zion OS',
        subtitle: 'Advanced automation and AI-powered solutions',
        cta: 'Get Started'
      },
      features: [
        {
          title: 'AI Automation',
          description: 'Intelligent automation for your business processes'
        },
        {
          title: 'Security',
          description: 'Enterprise-grade security and fraud detection'
        },
        {
          title: 'Integration',
          description: 'Seamless integration with your existing tools'
        }
      ],
      stats: {
        users: 10000,
        projects: 500,
        uptime: '99.9%'
      }
    };

    res.status(200).json(content);
  } catch (error) {
    console.error('Homepage content error:', error);
    res.status(500).json({ error: 'Failed to get homepage content' });
  }
}