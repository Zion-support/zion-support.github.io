
import type { NextApiRequest, NextApiResponse } from 'next';



  try {;
    const { name, email, role, country, source } = req.body || {};


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

          name,
    email,
          role,
    country,
          source: source || 'zion-global-2025',
          created_at: new Date().toISOString()}])
      .select('*')

      .single();
    
    if (error) {
      return res.status(500).json({ error: error.message });
    }


    return res.status(200).json({ ok: true, registration: data })
  } catch (e: any) {
    return res.status(500).json({ error: e?.message || 'Unknown error' })

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
}