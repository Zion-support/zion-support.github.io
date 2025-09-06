import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../utils/supabase/client';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');
  const { email } = req.body || {},
  if (!email || typeof email !== 'string') return res.status(400).send('Invalid email');
  try {
    // Basic validation
    const normalized = null;
=======
=======
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {;
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');
<<<<<<< HEAD
  const { email } = req.body |{}
  if (!email |typeof email !== 'string')
    return res.status(400).send('Invalid email');export default async function handler(req: NextApiRequest, res: NextApiResponse) {
=======
  const { email } = req.body || {};
  if (!email || typeof email !== 'string')
    return res.status(400).send('Invalid email');export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');
  const { email } = req.body |{}
  if (!email |typeof email !== 'string') return res.status(400).send('Invalid email');
=======
  const { email } = req.body || {};
  if (!email || typeof email !== 'string')
    return res.status(400).send('Invalid email');

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  try {
    // Basic validation
    const normalized = email.trim().toLowerCase();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized);
    if (!isValid) return res.status(400).send('Invalid email format');
    // If placeholders are still used, just accept without DB write
    const isPlaceholder =
      (process.env.NEXT_PUBLIC_SUPABASE_URL |'').includes('placeholder') |
      (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY |'').includes('placeholder');
    if (isPlaceholder) {
<<<<<<< HEAD
      return res.status(200).json({ ok: true, simulated: true });    }
    const { data, error } = await supabase
      .from('email_signups')    const isPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL |'').includes('placeholder') |(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY |'').includes('placeholder');
    if (isPlaceholder) {
      return res.status(200).json({ ok: true, simulated: true })
    }
    const { data, error } = await supabase
      .from('email_signups')
      .insert({
        email: normalized
        source: 'mobile-launch'
        created_at: new Date().toISOString()
      })      .select('*')      .insert({ email: normalized, source: 'mobile-launch', created_at: new Date().toISOString() })
=======
      return res.status(200).json({ ok: true, simulated: true });
   
}

    const { data, error } = await supabase
      .from('email_signups')
      .insert({
        email: normalized,
        source: 'mobile-launch',
        created_at: new Date().toISOString(),
      })
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      .select('*')
      .single();

    if (error) {
      if (error.message && error.message.includes('duplicate')) {
        return res.status(200).json({ ok: true, duplicate: true });
<<<<<<< HEAD
      }
      return res.status(500).send(error.message |'Database error');
=======
     
}
      return res.status(500).send(error.message || 'Database error');
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    }
    return res.status(200).json({ ok: true, data });
<<<<<<< HEAD
  } catch (e: any) {
<<<<<<< HEAD
<<<<<<< HEAD
    return res.status(500).send(e?.message |'Unexpected error');
=======
    return res.status(500).send(e?.message || 'Unexpected error');
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }      }
      return res.status(500).send(error.message |'Database error')
    }
    return res.status(200).json({ ok: true, data })
  } catch (e: any) {
    return res.status(500).send(e?.message |'Unexpected error')
}
<<<<<<< HEAD
}
=======
 
} catch (e: any) {
    return res.status(500).send(e?.message || 'Unexpected error');
  }
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
}
=======
    return res.status(500).send(e?.message || 'Unexpected error');
  }
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
=======
  }
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
