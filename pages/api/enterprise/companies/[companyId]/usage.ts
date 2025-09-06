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
      apiCalls: 1500,
      storageUsed: '2.5GB',
      users: 25,
      period: '2024-01-01 to 2024-01-31'
    };

    res.status(200).json(usage);
  } catch (error) {
    console.error('Company usage error:', error);
    res.status(500).json({ error: 'Failed to get company usage' });
  }
}