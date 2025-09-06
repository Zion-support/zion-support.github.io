import { NextApiRequest, NextApiResponse } from 'next';
import { RoomServiceClient } from 'livekit-server-sdk';

const roomService = new RoomServiceClient(
  process.env.LIVEKIT_URL!,
  process.env.LIVEKIT_API_KEY!,
  process.env.LIVEKIT_API_SECRET!
);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { projectId, preferredName } = req.body;
    
    if (!projectId) {
      return res.status(400).json({ error: 'Project ID is required' });
    }

    const roomName = `room-${projectId}-${Date.now()}`;
    
    const opts = {
      name: roomName,
      emptyTimeout: 10 * 60, // 10 minutes
      maxParticipants: 10,
      metadata: JSON.stringify({ 
        projectId, 
        createdBy: preferredName || 'host' 
      })
    };
    
    await roomService.createRoom(opts).catch(() => Promise.resolve());
    
    res.status(200).json({ 
      roomName, 
      url: `${process.env.LIVEKIT_URL}/room/${roomName}` 
    });
  } catch (e: any) {
    console.error('Room creation error:', e);
    return res.status(500).json({ error: 'Failed to create room' });
  }
}