<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "Method not allowed" })
  const { name, url } = req.body |{}
  if (!name) return res.status(400).json({ ok: false, error: "Missing name" })

  // Echo back URL, real impl would upload to storage (Supabase, S3, etc.)
  return res.status(201).json({ ok: true, file: { name, url: url |null } })
=======
import type { NextApiRequest, NextApiResponse } from "next",;
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from "next",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "Method not allowed" }),
  const { name, url } = req.body || {},
  if (!name) return res.status(400).json({ ok: false, error: "Missing name" }),
  // Echo back URL, real impl would upload to storage (Supabase, S3, etc.)
<<<<<<< HEAD
=======
<<<<<<< HEAD
  return res.status(201).json({ ok: true, file: { name, url: url || null } });
};
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return res.status(201).json({ ok: true, file: { name, url: url || null } })
import type { NextApiRequest, NextApiResponse } from "next";
export default function handler(req, res) {
  try {
  if (req.method !== "POST") return res.status( ok: false, error: "Method not allowed" ).json({$2});
  const { name, url } = req.body || {};
  if (!name) return res.status(400).json({ ok: false, error: "Missing name" });
  // Echo back URL, real impl would upload to storage (Supabase, S3, etc.);
  return res.status(201).json({ ok: true, file: { name, url: url || null } });
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
  }
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
=======
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
