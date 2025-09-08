import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { year, month } = req.query;

    // Mock monthly fraud report
    const report = {
      period: {
        year: year || new Date().getFullYear(),
        month: month || new Date().getMonth() + 1
      },
      summary: {
        totalReports: 150,
        resolved: 120,
        pending: 25,
        falsePositives: 5
      },
      trends: {
        suspiciousActivity: 45,
        fakeProfiles: 30,
        paymentFraud: 20,
        other: 55
      },
      generatedAt: new Date().toISOString()
    };

    res.status(200).json({
      success: true,
      report
    });
  } catch (error: any) {
    res.status(500).json({
      error: error?.message || 'Failed to generate monthly report'
    });
  }
}