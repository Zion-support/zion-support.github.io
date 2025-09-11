<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";


<<<<<<< HEAD
<<<<<<< HEAD

import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";
const url = process.env.NEXT_PUBLIC_SUPABASE_URL |"";
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY |"";
=======
const url = process && process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const key = process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
=======
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
const url = process && process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const key = process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
<<<<<<< HEAD
  if (req.method !== "POST") {;
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }
  try {


=======
  if (req && req.method !== "POST") {
    res && res.setHeader("Allow", "POST");
    return res && res.status(405).json({ error: "Method not allowed" });
  }
  try {

=======

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });


import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const { projectId, roomName, inviterName } = req && req.body || {};
    if (!projectId || !roomName)
      return res && res.status(400).json({ error: "Missing required fields" });
    if (!url || !key)
      return res && res.status(500).json({ error: "Supabase not configured" });
<<<<<<< HEAD
    const supabase = createClient(url, key);
    await supabase && supabase.channel(`project_${projectId}_calls`).send({
=======

    const supabase = createClient(url, key);
    await supabase && supabase.channel(`project_${projectId}_calls`).send({
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======


  }

}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
;
    return res.status (200).json ({ ok: true });
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
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }
  try {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const { projectId, roomName, inviterName } = req.body || {};
    if (!projectId || !roomName) return res.status(400).json({ error: 'Missing projectId or roomName' });
    if (!url || !key) return res.status(500).json({ error: 'Supabase configuration missing' });
    const supabase = createClient(url, key);
    await supabase.channel(`project_${projectId}_calls`).send({ type: 'broadcast', event: 'call_invite', payload: { projectId, roomName, inviterName } });
    return res.status(200).json({ ok: true });
  } catch (e) {
<<<<<<< HEAD
    console.error(e);
    return res.status(200).json({ ok: true, skipped: true });
  }
}
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    console.error (e);
    return res.status (500).json ({ ok: false, error: "Failed to send invite" });
  }
}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
  }
}
  }
}
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
