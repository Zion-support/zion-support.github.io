
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import type { NextApiRequest, NextApiResponse } from "next";
import { RoomServiceClient, CreateRoomOptions } from "livekit-server-sdk";


const LIVEKIT_API_KEY = process && process.env.LIVEKIT_API_KEY || "";
const LIVEKIT_API_SECRET = process && process.env.LIVEKIT_API_SECRET || "";
const LIVEKIT_HOST = process && process.env.LIVEKIT_HOST || "";

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
<<<<<<< HEAD
=======
  if (req.method !== "POST") {;
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }
  try {
    const { projectId, preferredName } = req.body |{}
    if (!projectId) {
      return res.status(400).json({ error: "Missing projectId" });
import type { NextApiRequest, NextApiResponse } from 'next';
import { RoomServiceClient, CreateRoomOptions } from 'livekit-server-sdk';

const LIVEKIT_API_KEY = process.env.LIVEKIT_API_KEY || '';
const LIVEKIT_API_SECRET = process.env.LIVEKIT_API_SECRET || '';
const LIVEKIT_HOST = process.env.LIVEKIT_HOST || '';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST');
    return res.status(405).json({ error: 'Method not allowed' })

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }
  try {

    const { projectId, preferredName } = req && req.body || {};


    if (!projectId) {
      return res && res.status(400).json({ error: "Missing projectId" });

<<<<<<< HEAD
      const opts: CreateRoomOptions = {


  }

}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
}
        name: room_name,
        empty_timeout: 60 * 10, // 10 minutes;
        max_participants: 24,
        metadata: JSON.stringify ({
          project_id,
          created_by: preferred_name || "host",
        }),
=======
  if (req.method !== "POST") {;
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }
  try {
    const { projectId, preferredName } = req.body |{}
    if (!projectId) {
      return res.status(400).json({ error: "Missing projectId" });
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { RoomServiceClient, CreateRoomOptions } from 'livekit-server-sdk';
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

=======
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    const { projectId, preferredName } = req.body || {};


    if (!projectId) {
      return res.status(400).json({ error: 'Missing projectId' })
    }

    if (!LIVEKIT_API_KEY || !LIVEKIT_API_SECRET || !LIVEKIT_HOST) {
      return res.status(500).json({ error: 'LiveKit env vars not configured' });
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======

      const opts: CreateRoomOptions = {



  }

}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
}
        name: room_name,
        empty_timeout: 60 * 10, // 10 minutes;
        max_participants: 24,
        metadata: JSON.stringify ({
          project_id,
          created_by: preferred_name || "host",
        }),

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    }
    if (!LIVEKIT_API_KEY |!LIVEKIT_API_SECRET |!LIVEKIT_HOST) {
      return res.status(500).json({ error: "LiveKit env vars not configured" });
    }
    const date = new Date();
    const pad = (n: number) => String(n).padStart(2, "0");
<<<<<<< HEAD
=======
<<<<<<< HEAD

    // Attempt to create or ensure the room exists
    try {


      );

      const roomService = new RoomServiceClient(LIVEKIT_HOST, LIVEKIT_API_KEY, LIVEKIT_API_SECRET);

      const opts: CreateRoomOptions = {
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD


    // Attempt to create or ensure the room exists
    try {


      );

      const opts: CreateRoomOptions = {


=======
    console.error('Room create error', err);
    return res.status(500).json({ error: 'Failed to create room' });
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  }

}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  }
}
}

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
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
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b


<<<<<<< HEAD
=======
  }
}

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });


    return res.status(200).json({ roomName });
  } catch (err: any) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    console.error('Room create error', err);
    return res.status(500).json({ error: 'Failed to create room' });
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  }

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
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

    const date = new Date();
    const pad = (n: number) => String(n).padStart(2, '0');
    const roomName = `${projectId}-${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}-${pad(date.getHours())}${pad(date.getMinutes())}`;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
}

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });

  }
}
=======

>>>>>>> f59a91e3dcdcf25af5f37ca0b88c2f62d1c3a94b
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
