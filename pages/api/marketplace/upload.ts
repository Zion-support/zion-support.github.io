<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next",

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "Method not allowed" }),
  const { name, url } = req.body || {},
  if (!name) return res.status(400).json({ ok: false, error: "Missing name" }),
  // Echo back URL, real impl would upload to storage (Supabase, S3, etc.)
  return res.status(201).json({ ok: true, file: { name, url: url || null } })
=======
import type { NextApiRequest, NextApiResponse } from &quot;next&quot;;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== &quot;POST&quot;) return res.status(405).json({ ok: false, error: &quot;Method not allowed&quot; });
  const { name, url } = req.body || {};
  if (!name) return res.status(400).json({ ok: false, error: &quot;Missing name&quot; });
  // Echo back URL; real impl would upload to storage (Supabase, S3, etc.)
  return res.status(201).json({ ok: true, file: { name, url: url || null } });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
}