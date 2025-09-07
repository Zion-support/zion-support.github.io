<<<<<<< HEAD:pages-disabled/api/marketplace/upload.ts
import type { NextApiRequest, NextApiResponse } from "next"
;
=======

<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next",;
;

=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/api/marketplace/upload.ts

import type { NextApiRequest, NextApiResponse } from "next",;
;

<<<<<<< HEAD:pages-disabled/api/marketplace/upload.ts
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from "next"

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from "next",
<<<<<<< HEAD

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "Method not allowed" }),
;

}

import type { NextApiRequest, NextApiResponse } from "next";
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "Method not allowed" })
  const { name, url } = req.body |{}
  if (!name) return res.status(400).json({ ok: false, error: "Missing name" })

  // Echo back URL, real impl would upload to storage (Supabase, S3, etc.)
  return res.status(201).json({ ok: true, file: { name, url: url |null } })
import type { NextApiRequest, NextApiResponse } from "next",;
;
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from "next",
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/api/marketplace/upload.ts
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  const { name, url } = req.body || {},
  if (!name) return res.status(400).json({ ok: false, error: "Missing name" }),
  // Echo back URL, real impl would upload to storage (Supabase, S3, etc.)
<<<<<<< HEAD:pages-disabled/api/marketplace/upload.ts
  return res.status(201).json({ ok: true, file: { name, url: url || null } })
=======
<<<<<<< HEAD
  return res.status(201).json({ ok: true, file: { name, url: url || null } });
};
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

}
}
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/api/marketplace/upload.ts
