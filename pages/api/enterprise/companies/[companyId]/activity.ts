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
      { id: '1', type: 'user_login', timestamp: new Date().toISOString() },
      { id: '2', type: 'file_upload', timestamp: new Date().toISOString() }
    ];

    res.status(200).json(activities);
  } catch (error) {
    console.error('Company activity error:', error);
    res.status(500).json({ error: 'Failed to get company activity' });
  }
}