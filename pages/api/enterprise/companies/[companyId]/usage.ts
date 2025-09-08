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

    // Mock usage data
    const usage = {
      companyId,
      period: 'current_month',
      apiCalls: 15000,
      storageUsed: '2.5GB',
      users: 25,
      lastUpdated: new Date().toISOString()
    };

    res.status(200).json({
      success: true,
      usage
    });
  } catch (error: any) {
    res.status(500).json({
      error: error?.message || 'Failed to retrieve usage data'
    });
  }
}