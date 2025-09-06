import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  res.status(200).json({ message: 'API endpoint' });
=======
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { status = 'all' } = req.query;
    
    // Mock link report
    const links = [
      {
        url: 'https://example.com',
        status: 'active',
        statusCode: 200,
        responseTime: 150,
        lastChecked: '2024-01-20T10:00:00Z',
        page: '/about'
      },
      {
        url: 'https://broken-link.com',
        status: 'broken',
        statusCode: 404,
        responseTime: 0,
        lastChecked: '2024-01-20T10:00:00Z',
        page: '/contact'
      },
      {
        url: 'https://slow-site.com',
        status: 'slow',
        statusCode: 200,
        responseTime: 5000,
        lastChecked: '2024-01-20T10:00:00Z',
        page: '/services'
      }
    ];

    let filteredLinks = links;
    if (status !== 'all') {
      filteredLinks = links.filter(link => link.status === status);
    }

    const summary = {
      total: links.length,
      active: links.filter(link => link.status === 'active').length,
      broken: links.filter(link => link.status === 'broken').length,
      slow: links.filter(link => link.status === 'slow').length,
      averageResponseTime: links.reduce((sum, link) => sum + link.responseTime, 0) / links.length
    };

    res.status(200).json({
      success: true,
      links: filteredLinks,
      summary
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve link report' });
  }
>>>>>>> 66a141f7564c1d624743830be150a784a04b806b
}