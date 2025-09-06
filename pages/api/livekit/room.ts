
import type { NextApiRequest, NextApiResponse } from "next";
import { RoomServiceClient, CreateRoomOptions } from "livekit-server-sdk";


const LIVEKIT_API_KEY = process && process.env.LIVEKIT_API_KEY || "";
const LIVEKIT_API_SECRET = process && process.env.LIVEKIT_API_SECRET || "";
const LIVEKIT_HOST = process && process.env.LIVEKIT_HOST || "";


export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  }
  try {
    const { projectId, preferredName } = req.body |{}
    if (!projectId) {
  }
  try {

    const { projectId, preferredName } = req && req.body || {};


    if (!projectId) {
      return res && res.status(400).json({ error: "Missing projectId" });

    const { projectId, preferredName } = req.body || {};


    if (!projectId) {
      return res.status(400).json({ error: 'Missing projectId' })
    }

    if (!LIVEKIT_API_KEY || !LIVEKIT_API_SECRET || !LIVEKIT_HOST) {
      return res.status(500).json({ error: 'LiveKit env vars not configured' });
    }
    if (!LIVEKIT_API_KEY |!LIVEKIT_API_SECRET |!LIVEKIT_HOST) {
      return res.status(500).json({ error: "LiveKit env vars not configured" });
    }
    const date = new Date();
    const pad = (n: number) => String(n).padStart(2, "0");
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

    return res.status(200).json({ roomName })
  } catch (err: any) {
    console.error('Room create error', err);
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
