import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { roomName, participantName } = req.body;
    
    if (!roomName || !participantName) {
      return res.status(400).json({ error: 'Room name and participant name are required' });
    }

    // Mock room creation
    const room = {
      id: Date.now().toString(),
      name: roomName,
      participantName,
      createdAt: new Date().toISOString(),
      status: 'active',
      participants: [participantName]
    };

    res.status(200).json(room);
  } catch (error) {
    console.error('LiveKit room error:', error);
    res.status(500).json({ error: 'Failed to create room' });
  }
}