import type { NextApiRequest, NextApiResponse } from 'next';
import { RoomServiceClient, CreateRoomOptions } from 'livekit-server-sdk';

const LIVEKIT_API_KEY = process.env.LIVEKIT_API_KEY || '';
const LIVEKIT_API_SECRET = process.env.LIVEKIT_API_SECRET || '';
const LIVEKIT_HOST = process.env.LIVEKIT_HOST || '';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { roomName, maxParticipants = 10 } = req.body;

    if (!roomName) {
      return res.status(400).json({ error: 'Room name is required' });
    }

    const roomService = new RoomServiceClient(LIVEKIT_HOST, LIVEKIT_API_KEY, LIVEKIT_API_SECRET);

    const options: CreateRoomOptions = {
      name: roomName,
      maxParticipants,
      emptyTimeout: 300, // 5 minutes
      maxDuration: 3600, // 1 hour
    };

    const room = await roomService.createRoom(options);

    res.status(200).json({
      success: true,
      room: {
        name: room.name,
        sid: room.sid,
        maxParticipants: room.maxParticipants,
        emptyTimeout: room.emptyTimeout,
        maxDuration: room.maxDuration,
      },
    });
  } catch (error: any) {
    console.error('Error creating room:', error);
    res.status(500).json({ error: 'Failed to create room' });
  }
}