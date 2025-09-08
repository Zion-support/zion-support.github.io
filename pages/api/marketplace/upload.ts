import type { NextApiRequest, NextApiResponse } from "next";
export default function handler(,
    req: NextApiRequest, r,
    es: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({,
    ok: false, e,
    rror: "Method not allowed" });
  const { name, url } = req.body || {};
  if (!name) return res.status(400).json({,
    ok: false, e,
    rror: "Missing name" });
  // Echo back URL, real impl would upload to storage (Supabase, S3, etc.)
  return res.status(201).json({,
    ok: true, f,
    ile: { name, u,
    rl: url || null } })
}