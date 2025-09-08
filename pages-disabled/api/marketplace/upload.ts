



import type { NextApiRequest, NextApiResponse } from "next",;
;




export default function handler(req: NextApiRequest, res: NextApiResponse) {

  const { name, url } = req.body || {},
  if (!name) return res.status(400).json({ ok: false, error: "Missing name" }),
  // Echo back URL, real impl would upload to storage (Supabase, S3, etc.)



