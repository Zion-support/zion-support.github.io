import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { roomName, participantName, participantIdentity } = req.body;
    
    if (!roomName || !participantName) {
      return res.status(400).json({ error: 'Room name and participant name are required' });
    }

    // Mock token generation
    const token = {
      token: `mock_token_${Date.now()}`,
      roomName,
      participantName,
      participantIdentity: participantIdentity || participantName,
      expiresAt: new Date(Date.now() + 3600000).toISOString(), // 1 hour
      permissions: ['publish', 'subscribe']
    };

    res.status(200).json(token);
  } catch (error) {
    console.error('LiveKit token error:', error);
    res.status(500).json({ error: 'Failed to generate token' });
  }
}