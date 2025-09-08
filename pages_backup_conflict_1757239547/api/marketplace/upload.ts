import type { NextApiRequest, NextApiResponse } from "next";
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "Method not allowed" })
  const { name, url } = req.body |{}
  if (!name) return res.status(400).json({ ok: false, error: "Missing name" })

  // Echo back URL, real impl would upload to storage (Supabase, S3, etc.)
  return res.status(201).json({ ok: true, file: { name, url: url |null } })
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "Method not allowed" }),
  const { name, url } = req.body || {},
  if (!name) return res.status(400).json({ ok: false, error: "Missing name" }),
  // Echo back URL, real impl would upload to storage (Supabase, S3, etc.)
  return res.status(201).json({ ok: true, file: { name, url: url || null } })
export default function handler(req, res) {
  try {
    res.status(200).json({ message: 'API endpoint working' })
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
