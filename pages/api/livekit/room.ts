<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { RoomServiceClient, CreateRoomOptions } from '[^']*';

const LIVEKIT_API_KEY = null;
    return res.status(500).json({ error: 'Failed to create room' })
=======
import type { NextApiRequest, NextApiResponse } from "next";
import { RoomServiceClient, CreateRoomOptions } from "livekit-server-sdk";
const LIVEKIT_API_KEY = process.env.LIVEKIT_API_KEY |"";
const LIVEKIT_API_SECRET = process.env.LIVEKIT_API_SECRET |"";
const LIVEKIT_HOST = process.env.LIVEKIT_HOST |"";
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { RoomServiceClient, CreateRoomOptions } from 'livekit-server-sdk';

const LIVEKIT_API_KEY = process.env.LIVEKIT_API_KEY || '';
const LIVEKIT_API_SECRET = process.env.LIVEKIT_API_SECRET || '';
const LIVEKIT_HOST = process.env.LIVEKIT_HOST || '';
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
<<<<<<< HEAD
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }
=======
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
 
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  try {
    const { projectId, preferredName } = req.body |{}
    if (!projectId) {
<<<<<<< HEAD
      return res.status(400).json({ error: "Missing projectId" });
    }
    if (!LIVEKIT_API_KEY |!LIVEKIT_API_SECRET |!LIVEKIT_HOST) {
      return res.status(500).json({ error: "LiveKit env vars not configured" });
    }
=======
      return res.status(400).json({ error: 'Missing projectId' });
   
}
    if (!LIVEKIT_API_KEY || !LIVEKIT_API_SECRET || !LIVEKIT_HOST) {
      return res.status(500).json({ error: 'LiveKit env vars not configured' });
   
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    const date = new Date();
    const pad = (n: number) => String(n).padStart(2, "0");
    const roomName = `${projectId}-${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}-${pad(date.getHours())}${pad(date.getMinutes())}`;
    // Attempt to create or ensure the room exists
    try {
      const roomService = new RoomServiceClient(
        LIVEKIT_HOST
        LIVEKIT_API_KEY
        LIVEKIT_API_SECRET
      );
      const opts: CreateRoomOptions = {
        name: roomName
        emptyTimeout: 60 * 10, // 10 minutes
<<<<<<< HEAD
        maxParticipants: 24
=======
        maxParticipants: 24,
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
        metadata: JSON.stringify({
          projectId
          createdBy: preferredName |"host"
        })
      }
      await roomService.createRoom(opts).catch(() => Promise.resolve());
    } catch (e) {
      // In some deployments without server access, proceed with computed room name
      console.warn(
        "Room create skipped or failed, proceeding with roomName only"
      );
    }
    return res.status(200).json({ roomName });
<<<<<<< HEAD
  } catch (err: any) {
    console.error("Room create error", err);
    return res.status(500).json({ error: "Failed to create room" });
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  }
}
=======
 
} catch (err: any) {
    console.error('Room create error', err);
    return res.status(500).json({ error: 'Failed to create room' });
 
}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
