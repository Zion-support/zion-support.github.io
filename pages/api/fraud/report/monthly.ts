import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { month, year } = req.query;
    
    const currentDate = new Date();
    const reportMonth = month ? parseInt(month as string, 10) : currentDate.getMonth() + 1;
    const reportYear = year ? parseInt(year as string, 10) : currentDate.getFullYear();

    // Mock monthly fraud report
    const report = {
      period: {
        month: reportMonth,
        year: reportYear
      },
      summary: {
        totalCases: 25,
        resolvedCases: 20,
        pendingCases: 5,
        highSeverity: 3,
        mediumSeverity: 12,
        lowSeverity: 10
      },
      trends: {
        casesByDay: Array.from({ length: 30 }, (_, i) => ({
          day: i + 1,
          cases: Math.floor(Math.random() * 5)
        })),
        resolutionRate: 0.8,
        averageResolutionTime: '2.5 days'
      },
      topThreats: [
        { type: 'payment_fraud', count: 8 },
        { type: 'account_takeover', count: 5 },
        { type: 'suspicious_activity', count: 12 }
      ]
    };

    res.status(200).json({
      success: true,
      report
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate monthly report' });
  }
}