<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
import type { NextApiRequest, NextApiResponse } from "next";
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "Method not allowed" })
  const { name, url } = req.body |{}
  if (!name) return res.status(400).json({ ok: false, error: "Missing name" })

  // Echo back URL, real impl would upload to storage (Supabase, S3, etc.)
<<<<<<< HEAD
  return res.status(201).json({ ok: true, file: { name, url: url |null } })
}
=======
  return res.status(201).json({ ok: true, file: { name, url: url || null } })
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
import type { NextApiRequest, NextApiResponse } from './next';,
;
export default /**
 * handler - Function description
 */
function handler() {
  if (return res.status (405).json ({ ok: false, error: "Method not allowed" }), ) {
  $2
}
  const { name, url } = req.body || {},
  if (return res.status (400).json ({ ok: false, error: "Missing name" }), ) {
  $2
}
  // Echo back URL, real impl would upload to storage (Supabase, S3, etc.);
  return res.status (201).json ({ ok: true, file: { name, url: url || null } });
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
