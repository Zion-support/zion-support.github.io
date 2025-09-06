import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { status, limit = '50', offset = '0' } = req.query;

    // Mock fraud list
    const fraudReports = [
      {
        id: '1',
        userId: 'user-123',
        type: 'suspicious_activity',
        status: 'pending',
        severity: 'high',
        createdAt: new Date().toISOString()
      },
      {
        id: '2',
        userId: 'user-456',
        type: 'fake_profile',
        status: 'resolved',
        severity: 'medium',
        createdAt: new Date().toISOString()
      }
    ];

    const filteredReports = status 
      ? fraudReports.filter(report => report.status === status)
      : fraudReports;

    res.status(200).json({
      success: true,
      reports: filteredReports,
      total: filteredReports.length,
      limit: parseInt(limit as string),
      offset: parseInt(offset as string)
    });
  } catch (error: any) {
    res.status(500).json({
      error: error?.message || 'Failed to retrieve fraud reports'
    });
  }
}