import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { userId, optOut } = req.body;

      if (!userId) {
        return res.status(400).json({ error: 'User ID is required' });
      }

      // Mock opt-out setting
      const result = {
        userId,
        optOut: optOut || false,
        updatedAt: new Date().toISOString()
      };

      res.status(200).json({
        success: true,
        result
      });
    } catch (error: any) {
      res.status(500).json({
        error: error?.message || 'Failed to update opt-out setting'
      });
    }
  } else if (req.method === 'GET') {
    try {
      const { userId } = req.query;

      if (!userId) {
        return res.status(400).json({ error: 'User ID is required' });
      }

      // Mock opt-out status
      const status = {
        userId,
        optOut: false,
        lastUpdated: new Date().toISOString()
      };

      res.status(200).json({
        success: true,
        status
      });
    } catch (error: any) {
      res.status(500).json({
        error: error?.message || 'Failed to retrieve opt-out status'
      });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).end('Method Not Allowed');
  }
}