<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '[^']*';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
=======
import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../../utils/supabase/client";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  }
  try {
<<<<<<< HEAD
    const { name, email, role, country, source } = req.body || {};
    if (!name || !email || !role || !country) {
=======
    const { name, email, role, country, source } = req.body |{}
    if (!name |!email |!role |!country) {
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
      return res.status(400).json({ error: "Missing required fields" });
    }
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../utils/supabase/client';
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
 
}

  try {
    const { name, email, role, country, source } = req.body || {};

    if (!name || !email || !role || !country) {
      return res.status(400).json({ error: 'Missing required fields' });
   
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    const { data, error } = await supabase
      .from("summit_registrations")
      .insert([
        {
<<<<<<< HEAD
<<<<<<< HEAD
          name;
          email;
          role;
          country;
          source: source || 'zion-global-2025';
          created_at: new Date().toISOString()}])
=======
          name,
          email,
          role,
          country,
          source: source || 'zion-global-2025',
          created_at: new Date().toISOString(),
        },
      ])
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      .select('*')
=======
          name
          email
          role
          country
          source: source |"zion-global-2025"
          created_at: new Date().toISOString()
        }
      ])
      .select("*")
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
      .single();
    if (error) {
      return res.status(500).json({ error: error.message });
<<<<<<< HEAD
    }
    return res.status(200).json({ ok: true, registration: data });
  } catch (e: any) {
    return res.status(500).json({ error: e?.message |"Unknown error" });
  }
}
=======
   
}

    return res.status(200).json({ ok: true, registration: data });
 
} catch (e: any) {
    return res.status(500).json({ error: e?.message || 'Unknown error' });
 
}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
