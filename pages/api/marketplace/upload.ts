<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next",
=======
import type { NextApiRequest, NextApiResponse } from "next"
>>>>>>> main
;

=======
=======
import type { NextApiRequest, NextApiResponse } from "next",;
;

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from "next"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "Method not allowed" }),
<<<<<<< HEAD
  const { name, url } = req.body || {},
  if (!name) return res.status(400).json({ ok: false, error: "Missing name" }),
  // Echo back URL, real impl would upload to storage (Supabase, S3, etc.)
  return res.status(201).json({ ok: true, file: { name, url: url || null } })
};
=======
  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "Method not allowed" })
>>>>>>> main
