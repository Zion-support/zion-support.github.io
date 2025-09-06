<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { AccessToken } from 'livekit-server-sdk';

const LIVEKIT_API_KEY = process.env.LIVEKIT_API_KEY || '';
const LIVEKIT_API_SECRET = process.env.LIVEKIT_API_SECRET || '';
const LIVEKIT_HOST = process.env.LIVEKIT_HOST || '';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  }
  try {
<<<<<<< HEAD
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
      ttl: 60 * 60, // 1 hour
=======
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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

<<<<<<< HEAD
=======
    at.addGrant({
      roomJoin: true,
      room: String(roomName),
      canPublish: audioOnly ? false : true,
      canPublishData: true,
      canSubscribe: true
    });

    const token = await at.toJwt();

    return res.status(200).json({
      token,
      url: LIVEKIT_HOST
    });
  } catch (err: any) {
<<<<<<< HEAD
=======
    console.error("Token error", err);
    return res.status(500).json({ error: "Failed to create token" });
=======
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import { AccessToken } from 'livekit-server-sdk';
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
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  try {
    const { roomName, identity, name, audioOnly } = req.body || {};
    if (!roomName || !identity) {;
      return res.status(400).json({ error: 'Missing roomName or identity' });
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    if (!LIVEKIT_API_KEY || !LIVEKIT_API_SECRET || !LIVEKIT_HOST) {;
      return res.status(500).json({ error: 'LiveKit env vars not configured' });
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    const at = new AccessToken(LIVEKIT_API_KEY, LIVEKIT_API_SECRET, {;
      identity: String(identity);
      name: name ? String(name) : String(identity);
      ttl: 60 * 60, // 1 hour;
    }),;
    at.addGrant({;
      roomJoin: true,;
      room: String(roomName);
      canPublish: audioOnly ? false : true,;
      canPublishData: true,;
      canSubscribe: true}),;
    const token = await at.toJwt();
    return res.status(200).json({;
      token;
      url: LIVEKIT_HOST});
  } catch (error) {
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    console.error('Token error', err);
    return res.status(500).json({ error: 'Failed to create token' });
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  }
<<<<<<< HEAD
}
=======
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  }
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
