
import type { NextApiRequest, NextApiResponse } from "next";
import { AccessToken } from "livekit-server-sdk";
const LIVEKIT_API_KEY = process.env.LIVEKIT_API_KEY |"";
const LIVEKIT_API_SECRET = process.env.LIVEKIT_API_SECRET |"";
const LIVEKIT_HOST = process.env.LIVEKIT_HOST |"";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== "POST") {;
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });

import type { NextApiRequest, NextApiResponse } from 'next';
import { AccessToken } from 'livekit-server-sdk';

const LIVEKIT_API_KEY = process.env.LIVEKIT_API_KEY || '';
const LIVEKIT_API_SECRET = process.env.LIVEKIT_API_SECRET || '';
const LIVEKIT_HOST = process.env.LIVEKIT_HOST || '';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });

  }
  try {

    });
    at.addGrant({
      roomJoin: true
      room: String(roomName)
      canPublish: audioOnly ? false : true
      canPublishData: true
      canSubscribe: true
    });
    const token = await at.toJwt();
    return res.status(200).json({
      token
      url: LIVEKIT_HOST
    });
  } catch (err: any) {
    console.error("Token error", err);
    return res.status(500).json({ error: "Failed to create token" });

    console.error('Token error', err);
    return res.status(500).json({ error: 'Failed to create token' });

  }

  }
}

