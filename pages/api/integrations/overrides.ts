import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const { providerId } = req.query;

      // Mock integration overrides
      const overrides = [
        {
          id: '1',
          providerId: providerId || 'all',
          field: 'sync_frequency',
          value: 'hourly',
          createdAt: new Date().toISOString()
        },
        {
          id: '2',
          providerId: providerId || 'all',
          field: 'retry_attempts',
          value: '3',
          createdAt: new Date().toISOString()
        }
      ];

      res.status(200).json({
        success: true,
        overrides
      });
    } catch (error: any) {
      res.status(500).json({
        error: error?.message || 'Failed to retrieve overrides'
      });
    }
  } else if (req.method === 'POST') {
    try {
      const { providerId, field, value } = req.body;

      if (!providerId || !field || !value) {
        return res.status(400).json({ error: 'ProviderId, field, and value are required' });
      }

      // Mock override creation
      const override = {
        id: Date.now().toString(),
        providerId,
        field,
        value,
        createdAt: new Date().toISOString()
      };

      res.status(201).json({
        success: true,
        override
      });
    } catch (error: any) {
      res.status(500).json({
        error: error?.message || 'Failed to create override'
      });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).end('Method Not Allowed');
  }
}