import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { month, year } = req.query;
    
    // Mock monthly fraud report
    const report = {
      month: month || new Date().getMonth() + 1,
      year: year || new Date().getFullYear(),
      totalFrauds: 25,
      safe: 15,
      suspicious: 8,
      dangerous: 2,
      trends: {
        increase: 5.2,
        topTypes: ['phishing', 'malware', 'scam']
      }
    };

    res.status(200).json(report);
  } catch (error) {
    console.error('Monthly fraud report error:', error);
    res.status(500).json({ error: 'Failed to generate monthly report' });
  }
}