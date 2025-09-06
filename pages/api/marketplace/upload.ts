<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "Method not allowed" });
  const { name, url } = req.body || {},
  if (!name) return res.status(400).json({ ok: false, error: "Missing name" });
=======
  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "Method not allowed" })
  const { name, url } = req.body |{}
  if (!name) return res.status(400).json({ ok: false, error: "Missing name" })
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  // Echo back URL, real impl would upload to storage (Supabase, S3, etc.)
  return res.status(201).json({ ok: true, file: { name, url: url |null } })
}
=======
import type { NextApiRequest, NextApiResponse } from 'next';
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST')
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  
}

const { name, url } = req.body || {};
  if (!name) return res.status(400).json({ ok: false, error: 'Missing name' });
  // Echo back URL; real impl would upload to storage (Supabase, S3, etc.)
  return res.status(201).json({ ok: true, file: { name, url: url || null } });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
