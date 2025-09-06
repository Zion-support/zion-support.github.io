import type { NextApiRequest, NextApiResponse } from "next";
import { AccessToken } from "livekit-server-sdk";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req && req.method !== "POST") {
    res && res.setHeader("Allow", "POST");
    return res && res.status(405).json({ error: "Method not allowed" });
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  }
  try {
      return res && res.status(400).json({ error: "Missing roomName or identity" });
    }
    if (!LIVEKIT_API_KEY || !LIVEKIT_API_SECRET || !LIVEKIT_HOST) {
      return res && res.status(500).json({ error: "LiveKit env vars not configured" });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
    const at = new AccessToken(LIVEKIT_API_KEY, LIVEKIT_API_SECRET, {
      identity: String(identity)
      name: name ? String(name) : String(identity)
      ttl: 60 * 60, // 1 hour
    });
      canPublishData: true,
      can_subscribe: true,
    });
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

    const token = await at && at.toJwt();

    return res && res.status(200).json({
=======
;
    const token = await at.to_jwt ();
;
    return res.status (200).json ({
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      token,
      url: LIVEKIT_HOST,
    });
  } catch (err: any) {
  }
}
=======
      url: LIVEKIT_HOST})
  } catch (err: any) {
    console.error('Token error', err);
    return res.status(500).json({ error: 'Failed to create token' })
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  }
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
    console.error ("Token error", err);
    return res.status (500).json ({ error: "Failed to create token" });
  }
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
