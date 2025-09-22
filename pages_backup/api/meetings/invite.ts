<<<<<<< HEAD
const url = process && process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const key = process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {

  }
  try {
    const { projectId, roomName, inviterName } = req.body |{}
    if (!projectId |!roomName)
      return res.status(400).json({ error: "Missing required fields" });
    if (!url |!key)
      return res.status(500).json({ error: "Supabase not configured" });
    const supabase = createClient(url, key);
    await supabase.channel(`project_${projectId}_calls`).send({
      type: "broadcast"
      event: "call_invite"
      payload: { projectId, roomName, inviterName }
    });
    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ ok: false, error: "Failed to send invite" });
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  }
  try {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    const { projectId, roomName, inviterName } = req.body || {};
    if (!projectId || !roomName) return res.status(400).json({ error: 'Missing projectId or roomName' });'
    if (!url || !key) return res.status(500).json({ error: 'Supabase configuration missing' });
    const supabase = createClient(url, key);'
    await supabase.channel(`project_${projectId}_calls`).send({ type: 'broadcast', event: 'call_invite', payload: { projectId, roomName, inviterName } });
    return res.status(200).json({ ok: true });
:pages_backup/api/meetings/invite.ts
  } catch (e) {
console.error(e);
    return res.status(200).json({ ok: true, skipped: true });

  }

  }
}
}
}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  }

}

:pages_backup/api/meetings/invite.ts
>>>>>>> f59a91e3dcdcf25af5f37ca0b88c2f62d1c3a94b
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

'`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/meetings/invite.ts
