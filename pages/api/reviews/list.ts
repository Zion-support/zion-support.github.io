import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { targetType, targetId, limit = '20', offset = '0' } = req.query;

    // Mock reviews list
    const reviews = [
      {
        id: '1',
        projectId: 'proj-123',
        fromRole: 'client',
        toRole: 'talent',
        rating: 5,
        comment: 'Excellent work, highly recommended!',
        approved: true,
        createdAt: new Date().toISOString()
      },
      {
        id: '2',
        projectId: 'proj-456',
        fromRole: 'talent',
        toRole: 'client',
        rating: 4,
        comment: 'Great client to work with, clear communication.',
        approved: true,
        createdAt: new Date().toISOString()
      }
    ];

    res.status(200).json({
      success: true,
      reviews,
      total: reviews.length,
      limit: parseInt(limit as string),
      offset: parseInt(offset as string)
    });
  } catch (error: any) {
    res.status(500).json({
      error: error?.message || 'Failed to retrieve reviews'
    });
  }
}