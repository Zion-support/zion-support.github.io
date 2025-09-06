import { NextApiRequest, NextApiResponse } from 'next';
import { writeAll } from '../../../utils/feedback/store';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { feedback } = req.body;
    
    if (!feedback || !Array.isArray(feedback)) {
      return res.status(400).json({ error: 'Invalid feedback data' });
    }

    // Process feedback data
    const rows = feedback.map((item, index) => ({
      id: item.id || (Date.now() + index).toString(),
      type: item.type || 'general',
      message: item.message || '',
      rating: item.rating || 0,
      timestamp: item.timestamp || new Date().toISOString()
    }));

    writeAll(rows);
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Feedback submit error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}