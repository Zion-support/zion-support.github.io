import type { NextApiRequest, NextApiResponse } from 'next';


import { supabase } from '../../utils/supabase/client';

export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {;
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

  try {
    // Basic validation
    const normalized = email.trim().toLowerCase($2);
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test($2);
    if (!isValid) return res.status(400).send($2);
    // If placeholders are still used, just accept without DB write
    const normalized = email && email.trim().toLowerCase();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized);
'
    if (!isValid) return res && res.status(400).send('Invalid email format');

    // If placeholders are still used, just accept without DB write

    const { data, error } = await supabase
      .from('email_signups')    const isPlaceholder = (process && process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').includes('placeholder');
    if (isPlaceholder) {
      return res && res.status(200).json({ ok: true, simulated: true })
    }
    const { data, error } = await supabase
      .from('email_signups')


  const { email } = req.body |{}
  if (!email |typeof email !== 'string')
    return res.status(400).send('Invalid email');export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email } = req.body || {};
  if (!email || typeof email !== 'string')
    return res.status(400).send('Invalid email');export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');
  const { email } = req.body |{}
>>>>>>> origin/cursor/delete-old-data-records-6bba



<<<<<<< HEAD
=======
    const { data, error } = await supabase'
      .from('email_signups')    const isPlaceholder = (process && process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').includes('placeholder');
    if (isPlaceholder) {}
      return res && res.status(200).json({ ok: true, simulated: true })
    }
    const { data, error } = await supabase'
      .from('email_signups')
      .insert({}
        email: normalized'
        source: 'mobile-launch'
        created_at: new Date().toISOString()'
      })      .select('*')      .insert({ email: normalized, source: 'mobile-launch', created_at: new Date().toISOString() })
pr-12243
      .insert({ email: normalized, source: 'mobile-launch', created_at: new Date().toISOString() })
>>>>>>> origin/cursor/delete-old-data-records-6bba
      .select('*')
      .single();

    if (!isValid) return res.status(400).send('Invalid email format');
    // If placeholders are still used, just accept without DB write
const isPlaceholder =
      (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') ||
      (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').includes('placeholder');
    if (isPlaceholder) {
      return res.status(200).json({ ok: true, simulated: true });
    }
    const { data, error } = await supabase
      .from('email_signups')
.insert({
        email: normalized,
        source: 'mobile-launch',
        created_at: new Date().toISOString(),
      })
      .select('*')
      .single();
origin/cursor/automate-test-improve-and-merge-code-2533

    if (error) {

<<<<<<< HEAD


pr-12243
}
'
      .select('*')
      .single();

    if (error) {}
}'
import { supabase } from '../../utils / supabase / client';
pr-12243
  const { email } = req.body |{}
  if (!email |typeof email !== 'string')'
    return res.status(400).send('Invalid email');'

export default async function handler() {
}
const { email } = req.body || ,;
};
  if (!email || typeof email !== 'string')'
    return res.status(400).send('Invalid email');'

export default async function handler() {;
  }
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');'

  if (!email |typeof email !== 'string') return res.status(400).send('Invalid email');'

  try {
    // Basic validation
}

const isPlaceholder =;
      (process && process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') ||'
      (process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').includes('placeholder');'
    if (isPlaceholder) {
}
return res && res.status(200).json({ "ok": true, "simulated": true,;
});    }
    }

      .from('email_signups')    const isPlaceholder = (process && process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').includes('placeholder');'
    if (isPlaceholder) {
}
return res && res.status(200).json({ "ok": true, "simulated": true });
   
}

      .from('email_signups')'
      .insert({
        email: normalized
        source: 'mobile-launch'
        created_at: new Date().toISOString()
      })      .select('*')      .insert({ email: normalized, source: 'mobile-launch', created_at: new Date().toISOString() })
      .select('*')
      .single();

    if (error) {


}
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
    return res.status(500).send(e?.message |'Unexpected error');
    return res.status(500).send(e?.message || 'Unexpected error');
    return res.status (500).send (e?.message || 'Unexpected error');
  }      }
      return res.status (500).send (error.message || 'Database error');
    }
    return res.status (200).json ({ ok: true, data });
  } catch (e: any) {
    return res.status (500).send (e?.message || 'Unexpected error');
}
}

    return res.status(500).send(e?.message || 'Unexpected error');


    return res.status(500).send(e?.message || 'Unexpected error');


}
}
    return res.status(500).send(e?.message || 'Unexpected error');
  }
  }
    return res.status(500).send(e?.message || 'Unexpected error');
}
