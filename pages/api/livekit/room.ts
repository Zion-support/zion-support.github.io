<<<<<<< HEAD




=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
import type { NextApiRequest, NextApiResponse } from "next";
import { RoomServiceClient, CreateRoomOptions } from "livekit-server-sdk";


const LIVEKIT_API_KEY = process && process.env.LIVEKIT_API_KEY || "";
const LIVEKIT_API_SECRET = process && process.env.LIVEKIT_API_SECRET || "";
const LIVEKIT_HOST = process && process.env.LIVEKIT_HOST || "";


export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req && req.method !== "POST") {
    res && res.setHeader("Allow", "POST");
    return res && res.status(405).json({ error: "Method not allowed" });

=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST');
    return res.status(405).json({ error: 'Method not allowed' })

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  }
  try {

    const { projectId, preferredName } = req && req.body || {};


    if (!projectId) {
      return res && res.status(400).json({ error: "Missing projectId" });

=======
    const { projectId, preferredName } = req.body || {};


    if (!projectId) {
      return res.status(400).json({ error: 'Missing projectId' })
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
    }

    if (!LIVEKIT_API_KEY || !LIVEKIT_API_SECRET || !LIVEKIT_HOST) {

    }
    const date = new Date();
    const pad = (n: number) => String(n).padStart(2, "0");
<<<<<<< HEAD

    const roomName = `${projectId}-${date && date.getFullYear()}${pad(date && date.getMonth() + 1)}${pad(date && date.getDate())}-${pad(date && date.getHours())}${pad(date && date.getMinutes())}`;

=======
    const roomName = `${projectId}-${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}-${pad(date.getHours())}${pad(date.getMinutes())}`;
    // Attempt to create or ensure the room exists
    try {
      const roomService = new RoomServiceClient(
        LIVEKIT_HOST
        LIVEKIT_API_KEY
        LIVEKIT_API_SECRET
      );
      const opts: CreateRoomOptions = {
        name: roomName
        emptyTimeout: 60 * 10, // 10 minutes
        maxParticipants: 24
        metadata: JSON.stringify({
          projectId
          createdBy: preferredName |"host"
        })
      }
      await roomService.createRoom(opts).catch(() => Promise.resolve());
    } catch (e) {
      // In some deployments without server access, proceed with computed room name
      console.warn(
        "Room create skipped or failed, proceeding with roomName only"
      );
    }
    return res.status(200).json({ roomName });
  } catch (err: any) {
    console.error("Room create error", err);
    return res.status(500).json({ error: "Failed to create room" });
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
=======
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
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  try {
    const { projectId, preferredName } = req.body || {};
    if (!projectId) {;
      return res.status(400).json({ error: 'Missing projectId' });
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    const date = new Date();
    const pad = (n: number) => String(n).padStart(2, '0');
    const roomName = `${projectId}-${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}-${pad(date.getHours())}${pad(date.getMinutes())}`;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

    // Attempt to create or ensure the room exists
    try {


      );

=======
      const roomService = new RoomServiceClient(LIVEKIT_HOST, LIVEKIT_API_KEY, LIVEKIT_API_SECRET);

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
      const opts: CreateRoomOptions = {


=======
    console.error('Room create error', err);
    return res.status(500).json({ error: 'Failed to create room' });
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  }
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
<<<<<<< HEAD
        name: room_name,
        empty_timeout: 60 * 10, // 10 minutes;
        max_participants: 24,
        metadata: JSON.stringify ({
          project_id,
          created_by: preferred_name || "host",
        }),
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
    console.error ("Room create error", err);
    return res.status (500).json ({ error: "Failed to create room" });
  }
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
}

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });

  }
}
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
