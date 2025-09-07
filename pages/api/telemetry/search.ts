import { NextApiRequest, NextApiResponse } from 'next';

const memoryStore: { q: string, ts: number }[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const { q } = req.query;
      
      if (q && typeof q === 'string') {
        memoryStore.push({ q: q.trim(), ts: Date.now() });
      }

      res.status(200).json({ success: true, searches: memoryStore });
    } catch (error) {
      console.error('Telemetry search error:', error);
      res.status(500).json({ error: 'Failed to fetch search telemetry' });
    }
  } else if (req.method === 'POST') {
    try {
      const { query } = req.body || {};
      
      if (!query || typeof query !== 'string') {
        return res.status(400).json({ error: 'Query is required' });
      }

      memoryStore.push({ q: query.trim(), ts: Date.now() });
      res.status(200).json({ success: true, message: 'Search telemetry recorded' });
    } catch (error) {
      console.error('Telemetry search recording error:', error);
      res.status(500).json({ error: 'Failed to record search telemetry' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}