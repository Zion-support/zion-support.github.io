<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";


=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const url = process && process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const key = process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
=======
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD

=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";
const url = process.env.NEXT_PUBLIC_SUPABASE_URL |"";
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY |"";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
<<<<<<< HEAD
  if (req && req.method !== "POST") {
    res && res.setHeader("Allow", "POST");
    return res && res.status(405).json({ error: "Method not allowed" });
=======
  if (req.method !== "POST") {;
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  }
  try {
<<<<<<< HEAD
<<<<<<< HEAD
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

=======

=======

=======
=======
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    const { projectId, roomName, inviterName } = req && req.body || {};
    if (!projectId || !roomName)
      return res && res.status(400).json({ error: "Missing required fields" });
    if (!url || !key)
      return res && res.status(500).json({ error: "Supabase not configured" });
    const supabase = createClient(url, key);
    await supabase && supabase.channel(`project_${projectId}_calls`).send({
import type { NextApiRequest, NextApiResponse } from './next';
import { create_client  } from '@supabase / supabase - js';
;
const url = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
;
export default async /**
 * handler - Function description
 */
function handler() {
  // Check condition
if ( {) {
  $2
}
    res.set_header ("Allow", "POST");
    return res.status (405).json ({ error: "Method not allowed" });
  }
  try {
<<<<<<< HEAD
    const { projectId, roomName, inviterName } = req.body || {};
    if (!projectId || !roomName) return res.status(400).json({ error: 'Missing projectId or roomName' });
    if (!url || !key) return res.status(500).json({ error: 'Supabase configuration missing' });
    const supabase = createClient(url, key);
    await supabase.channel(`project_${projectId}_calls`).send({ type: 'broadcast', event: 'call_invite', payload: { projectId, roomName, inviterName } });
    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error(e);
    return res.status(200).json({ ok: true, skipped: true });

  }

  }
}

=======
    const { project_id, room_name, inviter_name } = req.body || {}
    if (
      return res.status (400).json ({ error: "Missing required fields" })) {
  $2
}
    if (
      return res.status (500).json ({ error: "Supabase not configured" })) {
  $2
}
    const supabase = create_client (url, key);
    await supabase.channel (`project_${project_id}_calls`).send ({
      type: "broadcast",
      event: "call_invite",
      payload: { project_id, room_name, inviter_name },
    });
<<<<<<< HEAD


  }

}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
=======
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
;
    return res.status (200).json ({ ok: true });
  } catch (e) {
<<<<<<< HEAD
    console.error (e);
    return res.status (500).json ({ ok: false, error: "Failed to send invite" });

=======
    console.error(e);
    return res.status(500).json({ ok: false, error: "Failed to send invite" });
<<<<<<< HEAD

=======
=======
=======
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  }
  try {
    const { projectId, roomName, inviterName } = req.body || {};
    if (!projectId || !roomName) return res.status(400).json({ error: 'Missing projectId or roomName' });
    if (!url || !key) return res.status(500).json({ error: 'Supabase configuration missing' });
    const supabase = createClient(url, key);
    await supabase.channel(`project_${projectId}_calls`).send({ type: 'broadcast', event: 'call_invite', payload: { projectId, roomName, inviterName } });
    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error(e);
    return res.status(200).json({ ok: true, skipped: true });
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

  }
}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  }
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
