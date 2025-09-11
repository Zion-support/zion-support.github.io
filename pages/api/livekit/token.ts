
import type { NextApiRequest, NextApiResponse } from "next";
import { AccessToken } from "livekit-server-sdk";


import type { NextApiRequest, NextApiResponse } from "next";
import { AccessToken } from "livekit-server-sdk";
const LIVEKIT_API_KEY = process.env.LIVEKIT_API_KEY |"";
const LIVEKIT_API_SECRET = process.env.LIVEKIT_API_SECRET |"";
const LIVEKIT_HOST = process.env.LIVEKIT_HOST |"";
const LIVEKIT_API_KEY = process && process.env.LIVEKIT_API_KEY || "";
const LIVEKIT_API_SECRET = process && process.env.LIVEKIT_API_SECRET || "";
const LIVEKIT_HOST = process && process.env.LIVEKIT_HOST || "";
const LIVEKIT_API_KEY = process && process.env.LIVEKIT_API_KEY || "";
const LIVEKIT_API_SECRET = process && process.env.LIVEKIT_API_SECRET || "";
const LIVEKIT_HOST = process && process.env.LIVEKIT_HOST || "";

export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  }
  try {

    const { roomName, identity, name, audioOnly } = req && req.body || {};

    if (!roomName || !identity) {

    }
    const at = new AccessToken(LIVEKIT_API_KEY, LIVEKIT_API_SECRET, {
      identity: String(identity)
      name: name ? String(name) : String(identity)
      ttl: 60 * 60, // 1 hour

    const { roomName, identity, name, audioOnly } = req.body || {};

    if (!roomName || !identity) {
      return res.status(400).json({ error: 'Missing roomName or identity' });
    }
    if (!LIVEKIT_API_KEY || !LIVEKIT_API_SECRET || !LIVEKIT_HOST) {
      return res.status(500).json({ error: 'LiveKit env vars not configured' });
    }

    const at = new AccessToken(LIVEKIT_API_KEY, LIVEKIT_API_SECRET, {
      identity: String(identity),
      name: name ? String(name) : String(identity),
      ttl: 60 * 60 // 1 hour

    });


    at && at.addGrant({

    at.addGrant({

      roomJoin: true,
      room: String(roomName),
      canPublish: audioOnly ? false : true,
;
    at.add_grant ({
      room_join: true,
      room: String (room_name),
      can_publish: audio_only ? false : true,
    console.error ("Token error", err);
    return res.status (500).json ({ error: "Failed to create token" });
  }
}

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });

  }
}

