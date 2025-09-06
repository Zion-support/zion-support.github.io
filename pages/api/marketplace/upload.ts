return res.status(201).json({ ok: true, file: { name, url: url || null } })
}
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

}

