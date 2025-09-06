import type { NextApiRequest, NextApiResponse } from 'next';
import { AccessToken } from 'livekit-server-sdk';
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
const LIVEKIT_API_KEY = process.env.LIVEKIT_API_KEY || '';
const LIVEKIT_API_SECRET = process.env.LIVEKIT_API_SECRET || '';
const LIVEKIT_HOST = process.env.LIVEKIT_HOST || '';

<<<<<<< HEAD
<<<<<<< HEAD
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST');
    return res.status(405).json({ error: 'Method not allowed' })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST');
    return res.status(405).json({ error: 'Method not allowed' })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }

  try {
    const { roomName, identity, name, audioOnly } = req.body || {};

    if (!roomName || !identity) {
<<<<<<< HEAD
<<<<<<< HEAD
      return res.status(400).json({ error: 'Missing roomName or identity' });
=======
      return res.status(400).json({ error: 'Missing roomName or identity' })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
    if (!LIVEKIT_API_KEY || !LIVEKIT_API_SECRET || !LIVEKIT_HOST) {
      return res.status(500).json({ error: 'LiveKit env vars not configured' })
    }

    const at = new AccessToken(LIVEKIT_API_KEY, LIVEKIT_API_SECRET, {
      identity: String(identity),
      name: name ? String(name) : String(identity),
<<<<<<< HEAD
=======
      return res.status(400).json({ error: 'Missing roomName or identity' })
    }
    if (!LIVEKIT_API_KEY || !LIVEKIT_API_SECRET || !LIVEKIT_HOST) {
      return res.status(500).json({ error: 'LiveKit env vars not configured' })
    }

    const at = new AccessToken(LIVEKIT_API_KEY, LIVEKIT_API_SECRET, {
      identity: String(identity), name: name ? String(name) : String(identity),
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
      ttl: 60 * 60, // 1 hour
=======
      ttl: 60 * 60 // 1 hour
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    });

    at.addGrant({
<<<<<<< HEAD
      roomJoin: true,
      room: String(roomName),
      canPublish: audioOnly ? false : true,
      canPublishData: true,
      canSubscribe: true
    });
=======
      roomJoin: true, room: String(roomName),
      canPublish: audioOnly ? false : true, canPublishData: true,
      canSubscribe: true});
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88

    const token = await at.toJwt();

    return res.status(200).json({
      token,
<<<<<<< HEAD
<<<<<<< HEAD
      url: LIVEKIT_HOST,
    });
=======
      url: LIVEKIT_HOST
    })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  } catch (err: any) {
    console.error('Token error', err);
    return res.status(500).json({ error: 'Failed to create token' })
  }
<<<<<<< HEAD
=======
      url: LIVEKIT_HOST})
  } catch (err: any) {
    console.error('Token error', err);
    return res.status(500).json({ error: 'Failed to create token' })
  }
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
