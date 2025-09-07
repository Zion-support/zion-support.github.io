import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { sessionId, eventType, payload } = req.body as { 
      sessionId: string; 
      eventType: string; 
      payload?: any 
    };
    
    if (!sessionId || !eventType) {
      return res.status(400).json({ error: 'Session ID and event type are required' });
    }

    // Placeholder for support session logic
    res.status(200).json({ success: true, message: 'Support session event recorded' });
  } catch (error) {
    console.error('Support session error:', error);
    res.status(500).json({ error: 'Failed to process support session' });
  }
}