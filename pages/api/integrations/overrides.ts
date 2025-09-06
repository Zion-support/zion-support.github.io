import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET' && req.method !== 'POST') {
    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    if (req.method === 'GET') {
      // Get integration overrides
      const overrides = [
        {
          id: '1',
          providerId: 'github',
          field: 'rate_limit',
          value: '5000',
          enabled: true
        },
        {
          id: '2',
          providerId: 'slack',
          field: 'timeout',
          value: '30',
          enabled: false
        }
      ];

      res.status(200).json(overrides);
    } else if (req.method === 'POST') {
      // Create or update override
      const { providerId, field, value, enabled } = req.body;
      
      if (!providerId || !field || !value) {
        return res.status(400).json({ error: 'Provider ID, field, and value are required' });
      }

      const override = {
        id: Date.now().toString(),
        providerId,
        field,
        value,
        enabled: enabled || true,
        createdAt: new Date().toISOString()
      };

      res.status(201).json(override);
    }
  } catch (error) {
    console.error('Integration overrides error:', error);
    res.status(500).json({ error: 'Failed to process integration overrides' });
  }
}