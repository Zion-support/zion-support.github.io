import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { companyId } = req.query;

    if (!companyId || typeof companyId !== 'string') {
      return res.status(400).json({ error: 'Company ID is required' });
    }

    // Mock activity data
    const activities = [
      {
        id: '1',
        type: 'user_login',
        description: 'User logged in',
        timestamp: new Date().toISOString(),
        userId: 'user-123'
      },
      {
        id: '2',
        type: 'api_call',
        description: 'API endpoint accessed',
        timestamp: new Date().toISOString(),
        userId: 'user-456'
      }
    ];

    res.status(200).json({
      success: true,
      companyId,
      activities
    });
  } catch (error: any) {
    res.status(500).json({
      error: error?.message || 'Failed to retrieve company activity'
    });
  }
}