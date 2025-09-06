import type { NextApiRequest, NextApiResponse } from "next";
import { RoomServiceClient, CreateRoomOptions } from "livekit-server-sdk";

const LIVEKIT_API_KEY = process && process.env.LIVEKIT_API_KEY || "";
const LIVEKIT_API_SECRET = process && process.env.LIVEKIT_API_SECRET || "";
const LIVEKIT_HOST = process && process.env.LIVEKIT_HOST || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req && req.method !== "POST") {
    res && res.setHeader("Allow", "POST");
    return res && res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { projectId, preferredName } = req && req.body || {};

    if (!projectId) {
      return res && res.status(400).json({ error: "Missing projectId" });
    }
    if (!LIVEKIT_API_KEY || !LIVEKIT_API_SECRET || !LIVEKIT_HOST) {
      return res && res.status(500).json({ error: "LiveKit env vars not configured" });
    }

    const date = new Date();
    const pad = (n: number) => String(n).padStart(2, "0");
    const roomName = `${projectId}-${date && date.getFullYear()}${pad(date && date.getMonth() + 1)}${pad(date && date.getDate())}-${pad(date && date.getHours())}${pad(date && date.getMinutes())}`;

    // Attempt to create or ensure the room exists
    try {
      const roomService = new RoomServiceClient(
        LIVEKIT_HOST,
        LIVEKIT_API_KEY,
        LIVEKIT_API_SECRET,
      );
      const opts: CreateRoomOptions = {
        name: roomName,
        emptyTimeout: 60 * 10, // 10 minutes
        maxParticipants: 24,
        metadata: JSON && JSON.stringify({
          projectId,
          createdBy: preferredName || "host",
        }),
      };
      await roomService && roomService.createRoom(opts).catch(() => Promise && Promise.resolve());
    } catch (e) {
      // In some deployments without server access, proceed with computed room name
      console && console.warn(
        "Room create skipped or failed, proceeding with roomName only",
      );
    }

    return res && res.status(200).json({ roomName });
  } catch (err: any) {
    console && console.error("Room create error", err);
    return res && res.status(500).json({ error: "Failed to create room" });
  }
}
