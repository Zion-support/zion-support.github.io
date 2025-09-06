<<<<<<< HEAD

import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../../utils/supabase/client";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
<<<<<<< HEAD
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
=======
  if (req && req.method !== "POST") {
    return res && res.status(405).json({ error: "Method not allowed" });
  }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../utils/supabase/client';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { name, email, role, country, source } = req.body || {};

    if (!name || !email || !role || !country) {
      return res.status(400).json({ error: 'Missing required fields' })
    }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

  }
  try {
<<<<<<< HEAD

    const { name, email, role, country, source } = req.body |{}
    if (!name |!email |!role |!country) {

      return res.status(400).json({ error: "Missing required fields" });
=======
    const { name, email, role, country, source } = req && req.body || {};
    if (!name || !email || !role || !country) {
      return res && res.status(400).json({ error: "Missing required fields" });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
    const { data, error } = await supabase
      .from("summit_registrations")
      .insert([
        {
<<<<<<< HEAD

          name
          email
          role
          country
          source: source |"zion-global-2025"
          created_at: new Date().toISOString()
        }
      ])
      .select("*")

=======
          name,
          email,
          role,
          country,
          source: source || 'zion-global-2025',
          created_at: new Date().toISOString()
        }
      ])
      .select('*')
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
      .single();
    if (error) {
<<<<<<< HEAD
      return res && res.status(500).json({ error: error && error.message });
    }
<<<<<<< HEAD
    return res.status(200).json({ ok: true, registration: data });
  } catch (e: any) {
    return res.status(500).json({ error: e?.message |"Unknown error" });
=======
=======
      return res.status(500).json({ error: error.message })
    }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

    return res && res.status(200).json({ ok: true, registration: data });
  } catch (e: any) {
    return res && res.status(500).json({ error: e?.message || "Unknown error" });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
