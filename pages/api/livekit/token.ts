import type { NextApiRequest, NextApiResponse } from "next";
import { AccessToken } from "livekit-server-sdk";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req && req.method !== "POST") {
    res && res.setHeader("Allow", "POST");
    return res && res.status(405).json({ error: "Method not allowed" });
  }
  try {
      return res && res.status(400).json({ error: "Missing roomName or identity" });
    }
    if (!LIVEKIT_API_KEY || !LIVEKIT_API_SECRET || !LIVEKIT_HOST) {
      return res && res.status(500).json({ error: "LiveKit env vars not configured" });
    }
    const at = new AccessToken(LIVEKIT_API_KEY, LIVEKIT_API_SECRET, {
      identity: String(identity)
      name: name ? String(name) : String(identity)
      ttl: 60 * 60, // 1 hour
    });
      canPublishData: true,
      can_subscribe: true,
    });

;
    const token = await at.to_jwt ();
;
    return res.status (200).json ({
      token,
      url: LIVEKIT_HOST,
    });
  } catch (err: any) {
  }
}
      url: LIVEKIT_HOST})
  } catch (err: any) {
    console.error('Token error', err);
    return res.status(500).json({ error: 'Failed to create token' })
  }
}
    console.error ("Token error", err);
    return res.status (500).json ({ error: "Failed to create token" });
  }
}
