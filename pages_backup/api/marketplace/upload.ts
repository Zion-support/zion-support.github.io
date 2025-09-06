<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next",
=======
import type { NextApiRequest, NextApiResponse } from "next"
>>>>>>> main
;
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d

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
=======
  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "Method not allowed" });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
  const { name, url } = req.body || {},
  if (!name) return res.status(400).json({ ok: false, error: "Missing name" }),
  // Echo back URL, real impl would upload to storage (Supabase, S3, etc.)
  return res.status(201).json({ ok: true, file: { name, url: url || null } })
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
export default function handler(req, res) {
  try {
  if (req.method !== "POST") return res.status( ok: false, error: "Method not allowed" ).json({$2});
  const { name, url } = req.body || {};
  if (!name) return res.status(400).json({ ok: false, error: "Missing name" });
<<<<<<< HEAD
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
}
}


=======
};
=======
  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "Method not allowed" })
>>>>>>> main
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
  // Echo back URL, real impl would upload to storage (Supabase, S3, etc.)
  return res.status(201).json({ ok: true, file: { name, url: url |null } })
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
