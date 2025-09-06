import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { companyId } = req.query;
    
    if (!companyId || typeof companyId !== 'string') {
      return res.status(400).json({ error: 'Company ID required' });
    }

    // Mock activity data
    const activities = [
      {
        id: 'activity-1',
        type: 'user_login',
        timestamp: new Date().toISOString(),
        description: 'User logged in'
      }
    ];

    res.status(200).json({
      success: true,
      companyId,
      activities
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve activity' });
  }
}