<<<<<<< HEAD

import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../../utils/supabase/client";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../utils/supabase/client';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

  }
  try {
<<<<<<< HEAD

    const { name, email, role, country, source } = req.body |{}
    if (!name |!email |!role |!country) {

      return res.status(400).json({ error: "Missing required fields" });
=======
    const { name, email, role, country, source } = req.body || {};
    if (!name || !email || !role || !country) {
      return res.status(400).json({ error: 'Missing required fields' })
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    }
    const { data, error } = await supabase
      .from('summit_registrations')
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
          created_at: new Date().toISOString()}])
      .select('*')
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      .single();
    
    if (error) {
      return res.status(500).json({ error: error.message });
    }
<<<<<<< HEAD
    return res.status(200).json({ ok: true, registration: data });
  } catch (e: any) {
    return res.status(500).json({ error: e?.message |"Unknown error" });
=======

    return res.status(200).json({ ok: true, registration: data })
  } catch (e: any) {
    return res.status(500).json({ error: e?.message || 'Unknown error' })
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  }
}