import type { NextApiRequest, NextApiResponse } from "next";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status($1).json({$2});
  const { name, url } = req.body || {};
  if (!name) return res.status($1).json({$2});
  // Echo back URL, real impl would upload to storage (Supabase, S3, etc.)
  return res.status(201).json({ ok: true, file: { name, url: url || null } })
}