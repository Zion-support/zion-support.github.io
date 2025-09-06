import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { status, severity, limit = '50' } = req.query;
    
    // Mock fraud cases
    const fraudCases = [
      {
        id: 'fraud-1',
        type: 'suspicious_activity',
        severity: 'high',
        status: 'investigating',
        description: 'Unusual login pattern detected',
        createdAt: new Date().toISOString()
      },
      {
        id: 'fraud-2',
        type: 'payment_fraud',
        severity: 'medium',
        status: 'resolved',
        description: 'Suspicious payment attempt',
        createdAt: new Date().toISOString()
      }
    ];

    // Filter by status and severity if provided
    let filteredCases = fraudCases;
    if (status) {
      filteredCases = filteredCases.filter(case_ => case_.status === status);
    }
    if (severity) {
      filteredCases = filteredCases.filter(case_ => case_.severity === severity);
    }

    // Apply limit
    const limitNum = parseInt(limit as string, 10);
    filteredCases = filteredCases.slice(0, limitNum);

    res.status(200).json({
      success: true,
      cases: filteredCases,
      total: filteredCases.length
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve fraud cases' });
  }
}