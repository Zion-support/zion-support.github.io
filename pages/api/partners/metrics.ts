import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { partnerCode } = req.query;

    // Mock partner metrics
    const metrics = {
      partnerCode: partnerCode || 'PARTNER001',
      totalReferrals: 25,
      activeReferrals: 18,
      completedReferrals: 7,
      totalRevenue: 50000,
      monthlyRevenue: 8500,
      conversionRate: 0.28,
      lastUpdated: new Date().toISOString()
    };

    res.status(200).json({
      success: true,
      metrics
    });
  } catch (error: any) {
    res.status(500).json({
      error: error?.message || 'Failed to retrieve partner metrics'
    });
  }
}