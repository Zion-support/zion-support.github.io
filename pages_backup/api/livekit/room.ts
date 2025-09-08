<<<<<<< HEAD

=======
import type { NextApiRequest, NextApiResponse } from "next";
import { RoomServiceClient, CreateRoomOptions } from "livekit-server-sdk";

const LIVEKIT_API_KEY = process && process.env.LIVEKIT_API_KEY || "";
const LIVEKIT_API_SECRET = process && process.env.LIVEKIT_API_SECRET || "";
const LIVEKIT_HOST = process && process.env.LIVEKIT_HOST || "";
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/delete-old-data-records-6bba

export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  }
  try {

    const { projectId, preferredName } = req && req.body || {};

    if (!projectId) {
      return res && res.status(400).json({ error: "Missing projectId" });

  }
  try {
    const { projectId, preferredName } = req.body |{}
    if (!projectId) {

    const { projectId, preferredName } = req.body || {};


    if (!projectId) {
      return res.status(400).json({ error: 'Missing projectId' })
    }


    if (!LIVEKIT_API_KEY || !LIVEKIT_API_SECRET || !LIVEKIT_HOST) {
      return res.status(500).json({ error: 'LiveKit env vars not configured' });

<<<<<<< HEAD

    console.error('Room create error', err);
    return res.status(500).json({ error: 'Failed to create room' })

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  }
}
        name: room_name,
        empty_timeout: 60 * 10, // 10 minutes;
        max_participants: 24,
        metadata: JSON.stringify ({
          project_id,
          created_by: preferred_name || "host",
        }),

<<<<<<< HEAD
  if (req.method !== "POST") {;
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }
  try {
    const { projectId, preferredName } = req.body |{}
    if (!projectId) {
      return res.status(400).json({ error: "Missing projectId" });
import type { NextApiRequest, NextApiResponse } from 'next';
import { RoomServiceClient, CreateRoomOptions } from 'livekit-server-sdk';

const LIVEKIT_API_KEY = process.env.LIVEKIT_API_KEY || '';
const LIVEKIT_API_SECRET = process.env.LIVEKIT_API_SECRET || '';
const LIVEKIT_HOST = process.env.LIVEKIT_HOST || '';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { projectId, preferredName } = req.body || {};

    if (!projectId) {
      return res.status(400).json({ error: 'Missing projectId' });
    }
    if (!LIVEKIT_API_KEY || !LIVEKIT_API_SECRET || !LIVEKIT_HOST) {
      return res.status(500).json({ error: 'LiveKit env vars not configured' });

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    }
    if (!LIVEKIT_API_KEY |!LIVEKIT_API_SECRET |!LIVEKIT_HOST) {
      return res.status(500).json({ error: "LiveKit env vars not configured" });
    }
    const date = new Date();
    const pad = (n: number) => String(n).padStart(2, "0");

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    const roomName = `${projectId}-${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}-${pad(date.getHours())}${pad(date.getMinutes())}`;
    // Attempt to create or ensure the room exists
    try {
      const roomService = new RoomServiceClient(
        LIVEKIT_HOST
        LIVEKIT_API_KEY

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        LIVEKIT_API_SECRET
      );
      const opts: CreateRoomOptions = {
        name: roomName
        emptyTimeout: 60 * 10, // 10 minutes

<<<<<<< HEAD
        maxParticipants: 24
        metadata: JSON.stringify({
          projectId
          createdBy: preferredName |"host"
        })
=======
  }

}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });

  }
}
}

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> origin/cursor/delete-old-data-records-6bba

      }
      await room_service.create_room (opts).catch (() => Promise.resolve ());
    } catch (e) {
      // In some deployments without server access, proceed with computed room name;
      console.warn (
        "Room create skipped or failed, proceeding with room_name only",
      );
    }
    return res.status (200).json ({ room_name });
  } catch (err: any) {

<<<<<<< HEAD
    console.error("Room create error", err);
    return res.status(500).json({ error: "Failed to create room" });

import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import { RoomServiceClient, CreateRoomOptions } from 'livekit-server-sdk';
const LIVEKIT_API_KEY = process.env.LIVEKIT_API_KEY || '';
const LIVEKIT_API_SECRET = process.env.LIVEKIT_API_SECRET || '';
const LIVEKIT_HOST = process.env.LIVEKIT_HOST || '';
export default async function handler(req, res) {
  try {
  if (req.method !== '$1') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


=======
    console.error('Room create error', err);
    return res.status(500).json({ error: 'Failed to create room' });

  }
>>>>>>> origin/cursor/delete-old-data-records-6bba
