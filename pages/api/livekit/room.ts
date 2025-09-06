import type { NextApiRequest, NextApiResponse } from 'next';
import { RoomServiceClient, CreateRoomOptions } from 'livekit-server-sdk';
const LIVEKIT_API_KEY = $2;
const LIVEKIT_API_SECRET = $2;
const LIVEKIT_HOST = $2;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader($2);
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { projectId, preferredName } = req.body || {},

    if (!projectId) {
      return res.status(400).json({ error: 'Missing projectId' })
    }
    if (!LIVEKIT_API_KEY || !LIVEKIT_API_SECRET || !LIVEKIT_HOST) {
      return res.status(500).json({ error: 'LiveKit env vars not configured' })
    }

    const date = new Date($2);
    const pad = (n: number) => String(n).padStart($2);
    const roomName = $2;
    // Attempt to create or ensure the room exists
    try {
      const roomService = new RoomServiceClient($2);
      const opts: CreateRoomOptions = $2;
        emptyTimeout: 60 * 10, // 10 minutes
        maxParticipants: 24,
        metadata: JSON.stringify({ projectId, createdBy: preferredName || 'host' })},
      await roomService.createRoom(opts).catch(() => Promise.resolve())
    } catch (e) {
      // In some deployments without server access, proceed with computed room name
      console.warn('Room create skipped or failed, proceeding with roomName only')
    }

    return res.status(200).json({ roomName })
  } catch (err: any) {
    console.error($2);
    return res.status(500).json({ error: 'Failed to create room' })
  }
}