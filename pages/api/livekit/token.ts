<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
import { AccessToken } from '[^']*';
const LIVEKIT_API_KEY = null;
    return res.status(500).json({ error: 'Failed to create token' })
=======
import type { NextApiRequest, NextApiResponse } from "next";
import { AccessToken } from "livekit-server-sdk";
const LIVEKIT_API_KEY = process.env.LIVEKIT_API_KEY |"";
const LIVEKIT_API_SECRET = process.env.LIVEKIT_API_SECRET |"";
const LIVEKIT_HOST = process.env.LIVEKIT_HOST |"";
=======
import { AccessToken } from 'livekit-server-sdk';

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
  try {
    const { roomName, identity, name, audioOnly } = req.body |{}
    if (!roomName |!identity) {
      return res.status(400).json({ error: "Missing roomName or identity" });
    }
    if (!LIVEKIT_API_KEY |!LIVEKIT_API_SECRET |!LIVEKIT_HOST) {
      return res.status(500).json({ error: "LiveKit env vars not configured" });
    }
    const at = new AccessToken(LIVEKIT_API_KEY, LIVEKIT_API_SECRET, {
      identity: String(identity)
      name: name ? String(name) : String(identity)
=======
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
 
}

  try {
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
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      ttl: 60 * 60, // 1 hour
    });
    at.addGrant({
<<<<<<< HEAD
      roomJoin: true
      room: String(roomName)
      canPublish: audioOnly ? false : true
      canPublishData: true
      canSubscribe: true
    });
=======
      roomJoin: true,
      room: String(roomName),
      canPublish: audioOnly ? false : true,
      canPublishData: true,
      canSubscribe: true,
    });

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    const token = await at.toJwt();
    return res.status(200).json({
<<<<<<< HEAD
      token
      url: LIVEKIT_HOST
    });
  } catch (err: any) {
    console.error("Token error", err);
    return res.status(500).json({ error: "Failed to create token" });
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  }
}
=======
      token,
      url: LIVEKIT_HOST,
    });
 
} catch (err: any) {
    console.error('Token error', err);
    return res.status(500).json({ error: 'Failed to create token' });
 
}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
