import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      // Placeholder for opt-out settings retrieval
      const settings = {
        optOut: false,
        userId: ''
      };
      res.status(200).json({ success: true, settings });
    } catch (error) {
      console.error('Opt-out settings error:', error);
      res.status(500).json({ error: 'Failed to fetch opt-out settings' });
    }
  } else if (req.method === 'POST') {
    try {
      const { userId, optOut } = req.body || {};
      
      if (!userId || typeof optOut !== 'boolean') {
        return res.status(400).json({ error: 'Missing userId or optOut' });
      }

      // Placeholder for opt-out settings update
      res.status(200).json({ success: true, message: 'Opt-out settings updated' });
    } catch (error) {
      console.error('Opt-out settings update error:', error);
      res.status(500).json({ error: 'Failed to update opt-out settings' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}