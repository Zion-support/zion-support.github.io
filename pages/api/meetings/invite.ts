<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '[^']*';
const url = null;
    return res.status(200).json({ ok: true, skipped: true })
=======

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";
const url = process.env.NEXT_PUBLIC_SUPABASE_URL |"";
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY |"";
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
<<<<<<< HEAD
<<<<<<< HEAD
  if (req.method !== "POST") {
=======
  if (req.method !== "POST") {;
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }
  try {
    const { projectId, roomName, inviterName } = req.body |{}
    if (!projectId |!roomName)
      return res.status(400).json({ error: "Missing required fields" });
    if (!url |!key)
      return res.status(500).json({ error: "Supabase not configured" });
    const supabase = createClient(url, key);
=======
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
 
}
  try {
    const { projectId, roomName, inviterName } = req.body || {};
    if (!projectId || !roomName)
      return res.status(400).json({ error: 'Missing fields' });
    if (!url || !key) return res.status(200).json({ ok: true, skipped: true });

    
}

const supabase = createClient(url, key);
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    await supabase.channel(`project_${projectId}_calls`).send({
      type: "broadcast"
      event: "call_invite"
      payload: { projectId, roomName, inviterName }
    });
    return res.status(200).json({ ok: true });
 
} catch (e) {
    console.error(e);
<<<<<<< HEAD
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
  }
<<<<<<< HEAD
}
=======
    return res.status(200).json({ ok: true, skipped: true });
 
}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
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
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
