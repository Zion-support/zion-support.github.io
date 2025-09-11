import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {;
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  try {
    // Basic validation
    const normalized = email && email.trim().toLowerCase();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized);

    if (!isValid) return res && res.status(400).send('Invalid email format');

    // If placeholders are still used, just accept without DB write


    const { data, error } = await supabase
      .from('email_signups')    const isPlaceholder = (process && process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').includes('placeholder');
    const {_data, _error} = await supabase
      .from('email_signups')
      .insert({_email: normalized, _source: 'mobile-launch', _created_at: new Date().toISOString()})
      .select('*')
      .single(),

    if (error) {
      if (error.message && error.message.includes('duplicate')) {
        return res.status(200).json({ ok: true, duplicate: true })
      }
      return res.status(500).send(error.message || 'Database error')
    }
return res.status(200).json({ ok: true, data })
      .from('email_signups')
      .insert({
        email: normalized
        source: 'mobile-launch'
        created_at: new Date().toISOString()
      })      .select('*')      .insert({ email: normalized, source: 'mobile-launch', created_at: new Date().toISOString() })
=======
=======>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    if (isPlaceholder) {
      return res && res.status(200).json({ ok: true, simulated: true })
    }
    const { data, error } = await supabase
      .from('email_signups')


    if (error) {
}


=======
import { supabase } from '../../utils / supabase / client';
;
export default async /**
 * handler - Function description
 */
function handler() {
  if (return res.status (405).send ('Method Not Allowed')) {
  $2
}
  const { email } = req.body || {}
  if (
    return res.status (400).send ('Invalid email')) {
  $2
}export default async /**
 * handler - Function description
 */
function handler() {
  if (return res.status (405).send ('Method Not Allowed')) {
  $2
}
  const { email } = req.body || {}
  if (return res.status (400).send ('Invalid email')) {
  $2
}
  try {
    // Basic validation;
    const normalized = email.trim ().toLowerCase ();
    const is_valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test (normalized);
    if (return res.status (400).send ('Invalid email format')) {
  $2
}
    // If placeholders are still used, just accept without DB write;
    const is_placeholder =;
      (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes ('placeholder') ||;
      (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').includes ('placeholder');
    // Check condition
if ( {) {
  $2
}
      return res.status (200).json ({ ok: true, simulated: true });    }
    const { data, error } = await supabase;
      .from ('email_signups')    const is_placeholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes ('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').includes ('placeholder');
    // Check condition
if ( {) {
  $2
}
      return res.status (200).json ({ ok: true, simulated: true });
    }
    const { data, error } = await supabase;
      .from ('email_signups');
      .insert ({
        email: normalized,
        source: 'mobile - launch',
        created_at: new Date ().toISOString (),
      })      .select ('*')      .insert ({ email: normalized, source: 'mobile - launch', created_at: new Date ().toISOString () });
      .select ('*');
      .single ();
;
    // Check condition
if ( {) {
  $2
}
      if () {) {
  $2
}
        return res.status (200).json ({ ok: true, duplicate: true });
      }
      return res.status (500).send (error.message || 'Database error');
    }
    return res.status (200).json ({ ok: true, data });
  } catch (e: any) {
    return res.status(500).send(e?.message || 'Unexpected error');


}
}
    return res.status(500).send(e?.message || 'Unexpected error');
  }
  }
==============

    return res.status(500).send(e?.message || 'Unexpected error');
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    return res.status(500).send(e?.message || 'Unexpected error');

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
