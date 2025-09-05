import type {_NextApiRequest, _NextApiResponse} from "next";

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== "POST") return res.status(405).json({ ok: false, _error: "Method not allowed"});
  const {_name, _url} = req.body || {};
  if (!name) return res.status(400).json({_ok: false, _error: "Missing name"});
  // Echo back window.URL; real impl would upload to storage (Supabase, S3, etc.)
  return res.status(201).json({_ok: true, _file: { name, _url: url || null} });
}