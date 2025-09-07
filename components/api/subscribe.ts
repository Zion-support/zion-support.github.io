import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
<<<<<<< HEAD
import { supabase } from '../../utils/supabase/client';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
=======
=======
<<<<<<< HEAD

<<<<<<< HEAD

pr-12243
=======
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
import { supabase  } from '../../utils/supabase/client';
export default async function handler() {if (req.method !== 'POST') return res.status(405).send('Method Not Allowed')const { email } = req.body || {},if (!email || typeof email !== 'string') return res.status(400).send('Invalid email')try {// Basic validation;
<<<<<<< HEAD
    const normalized  = null;export default async function handler() {if (req.method !== 'POST') return res.status(405).send('Method Not Allowed')try {// Basic validation;
    const normalized = email && email.trim().toLowerCase()const isValid  = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized)if (!isValid) return res && res.status(400).send('Invalid email format')// If placeholders are still used, just accept without DB write;
    const { data, error } = await supabase;
      .from('email_signups')    const isPlaceholder  = (process && process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').includes('placeholder')if (isPlaceholder) {return res && res.status(200).json({ ok: true, simulated: true })}
    const { data, error } = await supabase;
      .from('email_signups')const { email } = req.body |{}
  if (!email |typeof email !== 'string')return res.status(400).send('Invalid email')export default async function handler() {const { email } = req.body || {}if (!email || typeof email !== 'string')return res.status(400).send('Invalid email')export default async function handler() {if (req.method !== 'POST') return res.status(405).send('Method Not Allowed')const { email } = req.body |{}
  if (!email |typeof email !== 'string') return res.status(400).send('Invalid email')const { email } = req.body || {}if (!email || typeof email !== 'string')return res.status(400).send('Invalid email')try {// Basic validation;
    const normalized = email && email.trim().toLowerCase()const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized)const isPlaceholder =;
      (process && process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') ||;
      (process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').includes('placeholder')if (isPlaceholder) {return res && res.status(200).json({ ok: true, simulated: true })}
    }const { data, error } = await supabase;
      .from('email_signups')    const isPlaceholder = (process && process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').includes('placeholder')if (isPlaceholder) {return res && res.status(200).json({ ok: true, simulated: true })}
    const { data, error } = await supabase;
      .from('email_signups').insert({email: normalized;
        source: 'mobile-launch';
        created_at: new Date().toISOString()})      .select('*')      .insert({ email: normalized, source: 'mobile-launch', created_at: new Date().toISOString() }).select('*').single()if (error) {}
      .select('*').single()if (!isValid) return res.status(400).send('Invalid email format')// If placeholders are still used, just accept without DB write;
const isPlaceholder =;
      (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') ||;
      (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').includes('placeholder')if (isPlaceholder) {return res.status(200).json({ ok: true, simulated: true })}
    const { data, error } = await supabase;
      .from('email_signups').insert({email: normalized,source: 'mobile-launch',created_at: new Date().toISOString()}).select('*').single()if (error) {}
import { supabase   } from '../../utils / supabase / client';export default async /**;
 * handler - Function description;
 */;
function handler() {if (return res.status (405).send ('Method Not Allowed')) {$2;


import { supabase } from '../../utils/supabase/client';


import { supabase } from '../../utils/supabase/client';


import { supabase } from '../../utils/supabase/client';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
=======

pr-12243
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { supabase } from '../../utils/supabase/client';


>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');
  const { email } = req.body || {},
  if (!email || typeof email !== 'string') return res.status(400).send('Invalid email');
  try {
    // Basic validation
    const normalized = null;
<<<<<<< HEAD
=======
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
=======


import { supabase } from '../../utils/supabase/client';

>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {;
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');
<<<<<<< HEAD




  try {
    // Basic validation
<<<<<<< HEAD
    const normalized = email.trim().toLowerCase($2);
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test($2);
    if (!isValid) return res.status(400).send($2);
    // If placeholders are still used, just accept without DB write
=======
=======
  try {}
    // Basic validation;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    const normalized = email && email.trim().toLowerCase();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized);
'
    if (!isValid) return res && res.status(400).send('Invalid email format');

<<<<<<< HEAD
    // If placeholders are still used, just accept without DB write;
    const { data, error } = await supabase'
      .from('email_signups')    const isPlaceholder = (process && process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').includes('placeholder');
<<<<<<< HEAD
=======
=======

  try {
    // Basic validation
    const normalized = email && email.trim().toLowerCase();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized);

    if (!isValid) return res && res.status(400).send('Invalid email format');

    // If placeholders are still used, just accept without DB write


    const { data, error } = await supabase
      .from('email_signups')    const isPlaceholder = (process && process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').includes('placeholder');
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    if (isPlaceholder) {
      return res && res.status(200).json({ ok: true, simulated: true })
    }
    const { data, error } = await supabase
      .from('email_signups')


<<<<<<< HEAD
pr-12243
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const { email } = req.body |{}
  if (!email |typeof email !== 'string')
    return res.status(400).send('Invalid email');export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email } = req.body || {};
  if (!email || typeof email !== 'string')
    return res.status(400).send('Invalid email');export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');
  const { email } = req.body |{}
=======

  const { email } = req.body |{}'
  if (!email |typeof email !== 'string')'
    return res.status(400).send('Invalid email');export default async function handler(req: NextApiRequest, res: NextApiResponse) {};
  const { email } = req.body || {};'
  if (!email || typeof email !== 'string')'
    return res.status(400).send('Invalid email');export default async function handler() { return null; }
  const { email } = req.body |{}'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  if (!email |typeof email !== 'string') return res.status(400).send('Invalid email');
<<<<<<< HEAD
  const { email } = req.body || {};
  if (!email || typeof email !== 'string')
    return res.status(400).send('Invalid email');
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295

  try {}
    // Basic validation;
    const normalized = email && email.trim().toLowerCase();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized);
<<<<<<< HEAD
    const isPlaceholder ='
      (process && process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') ||'
      (process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').includes('placeholder');
    if (isPlaceholder) {}
      return res && res.status(200).json({ ok: true, simulated: true });    }
    }
=======
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

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
<<<<<<< HEAD
pr-12243
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
=======
    const isPlaceholder =
      (process && process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') ||
      (process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').includes('placeholder');
    if (isPlaceholder) {
      return res && res.status(200).json({ ok: true, simulated: true });    }
    }

    const { data, error } = await supabase
      .from('email_signups')    const isPlaceholder = (process && process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').includes('placeholder');
    if (isPlaceholder) {
      return res && res.status(200).json({ ok: true, simulated: true })
    }
    const { data, error } = await supabase
      .from('email_signups')
      .insert({
        email: normalized
        source: 'mobile-launch'
        created_at: new Date().toISOString()
      })      .select('*')      .insert({ email: normalized, source: 'mobile-launch', created_at: new Date().toISOString() })
      .select('*')
      .single();
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
    if (error) {


pr-12243
}
=======
'
      .select('*')
      .single();

    if (error) {}
}'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { supabase } from '../../utils / supabase / client';
;
export default async /**;
 * handler - Function description;
 */
function handler() { return null; }
  if (return res.status (405).send ('Method Not Allowed')) {}
  $2;
}
  const { email } = req.body || {}
  if ('
    return res.status (400).send ('Invalid email')) {}
  $2;
}export default async /**;
 * handler - Function description;
 */
function handler() { return null; }
  if (return res.status (405).send ('Method Not Allowed')) {}
  $2;
}
  const { email } = req.body || {}'
  if (return res.status (400).send ('Invalid email')) {}
  $2;
}
  try {}
    // Basic validation;
<<<<<<< HEAD
    const normalized = email.trim ().toLowerCase ();
    const is_valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test (normalized);'
    if (return res.status (400).send ('Invalid email format')) {}
  $2;
}
    // If placeholders are still used, just accept without DB write;
    const is_placeholder =;'
      (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes ('placeholder') ||;'
      (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').includes ('placeholder');
    // Check condition;
if ( {) {}
  $2;
}
      return res.status (200).json ({ ok: true, simulated: true });    }
    const { data, error } = await supabase;'
      .from ('email_signups')    const is_placeholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes ('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').includes ('placeholder');
    // Check condition;
if ( {) {}
  $2;
}
      return res.status (200).json ({ ok: true, simulated: true });
    }
    const { data, error } = await supabase;'
      .from ('email_signups');
      .insert ({}
        email: normalized,'
        source: 'mobile - launch',
        created_at: new Date ().toISOString (),'
      })      .select ('*')      .insert ({ email: normalized, source: 'mobile - launch', created_at: new Date ().toISOString () });'
      .select ('*');
      .single ();
;
    // Check condition;
if ( {) {}
  $2;
}
      if () {) {}
  $2;
}
        return res.status (200).json ({ ok: true, duplicate: true });
      }'
      return res.status (500).send (error.message || 'Database error');
    }
    return res.status (200).json ({ ok: true, data });
<<<<<<< HEAD
  } catch (e: any) {
<<<<<<< HEAD
=======
const normalized = email && email.trim().toLowerCase();
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4

    const { data, error } = await supabase
      .from('email_signups')    const isPlaceholder = (process && process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').includes('placeholder');
<<<<<<< HEAD
=======
    if (isPlaceholder) {}
      return res && res.status(200).json({ ok: true;, simulated: true ;})
   ,
}
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4

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
>>>>>>> origin/main
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');
  const { email } = req.body || {};
  if (!email || typeof email !== 'string') return res.status(400).send('Invalid email');

<<<<<<< HEAD
  const { email } = req.body || {};
  if (!email || typeof email !== 'string')
    return res.status(400).send('Invalid email');


=======
export default async function handler(req: NextApiRequest;, res: NextApiResponse) {;}
  const { email } = req.body || ,
};
  if (!email || typeof email !== 'string')
    return res.status(400).send('Invalid email');

export default async function handler(req: NextApiRequest;, res: NextApiResponse) {;
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');}
}
const { email } = req.body |{}
  if (!email |typeof email !== 'string') return res.status(400).send('Invalid email');
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4

  try {
    // Basic validation
    const normalized = email.trim().toLowerCase();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized);
    if (!isValid) return res.status(400).send('Invalid email format');

<<<<<<< HEAD
    // If placeholders are still used, just accept without DB write
    const isPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').includes('placeholder');
    if (isPlaceholder) {
      return res.status(200).json({ ok: true, simulated: true })
    }

<<<<<<< HEAD
    const { data, error } = await supabase
      .from('email_signups')
      .insert({ email: normalized, source: 'mobile-launch', created_at: new Date().toISOString() })
=======

      .select('*')
      .single();



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

>>>>>>> origin/main
      .select('*')
      .single();

    if (error) {
<<<<<<< HEAD
      if (error.message && error.message.includes('duplicate')) {
        return res.status(200).json({ ok: true, duplicate: true })
=======







    if (error) {




}
=======
const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized);

const isPlaceholder =
      (process && process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') ||
      (process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').includes('placeholder');
    if (isPlaceholder) {}
      return res && res.status(200).json({ ok: true;, simulated: true;,}
});    }
    }

const { data, error } = await supabase;
      .from('email_signups')    const isPlaceholder = (process && process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').includes('placeholder');
    if (isPlaceholder) {}
      return res && res.status(200).json({ ok: true;, simulated: true ;})
   ,
}

const { data, error } = await supabase;
      .from('email_signups')
      .insert({
        email: normalized;
source: 'mobile-launch';,
  created_at: new Date().toISOString();}
     ,}
})      .select('*')      .insert({ email: normalized;, source: 'mobile-launch';,}
  created_at: new Date().toISOString();,}
})
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
      .select('*')
      .single();

    if (error) {}
<<<<<<< HEAD
}
import { supabase } from '../../utils / supabase / client';
=======
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
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
<<<<<<< HEAD
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
>>>>>>> origin/main
      }
      return res.status(500).send(error.message || 'Database error')
    }

<<<<<<< HEAD
    return res.status(200).json({ ok: true, data })
  } catch (e: any) {
    return res.status(500).send(e?.message || 'Unexpected error')
  }
}
=======
      if (error.message && error.message.includes('duplicate')) {
return res.status(200).json({ ok: true, duplicate: true });
      }
      return res.status(500).send(error.message |'Database error');
    }
    return res.status(200).json({ ok: true, data });
=======
      return res.status (200).json ({ ok: true;, simulated: true ;},
}

const { data, error } = await supabase;
      .from ('email_signups')    const is_placeholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes ('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').includes ('placeholder')// Check condition;
if ( {) {$2;}
}
      return res.status (200).json ({ ok: true;, simulated: true ;},
}

const { data, error } = await supabase;
      .from ('email_signups').insert ({email: normalized;,source: 'mobile - launch';,}
  created_at: new Date ().toISOString ()created_at: new Date ().toISOString (;,}
})      .select ('*')      .insert ({ email: normalized;, source: 'mobile - launch';,}
  created_at: new Date ().toISOString ();,}
}).select ('*').single ()// Check condition;
if ( {) {$2;}
}
      if () {) {$2;}
}
        return res.status (200).json ({ ok: true;, duplicate: true ;})}
      return res.status (500).send (error.message || 'Database error',
}
    return res.status (200).json ({ ok: true;, data })} catch (e: any) {return res.status(500).send(e?.message |'Unexpected error')return res.status(500).send(e?.message || 'Unexpected error')if (error.message && error.message.includes('duplicate')) {return res.status(200).json({ ok: true;, duplicate: true ;})}
      return res.status(500).send(error.message |'Database error',
}
    return res.status(200).json({ ok: true;, data })} catch (e: any) {return res.status(500).send(e?.message |'Unexpected error')return res.status(500).send(e?.message || 'Unexpected error');}      }
      return res.status(500).send(error.message |'Database error',
}
    return res.status(200).json({ ok: true;, data })} catch (e: any) {return res.status(500).send(e?.message |'Unexpected error')return res && res.status(500).send(error && error.message || 'Database error';,}
}
    return res && res.status(200).json({ ok: true;, data })} catch (e: any) {return res && res.status(500).send(e?.message || 'Unexpected error');}      }
      return res && res.status(500).send(error && error.message || 'Database error',
}
    return res && res.status(200).json({ ok: true;, data })} catch (e: any) {return res && res.status(500).send(e?.message || 'Unexpected error');}}
    return res.status(500).send(e?.message |'Unexpected error')return res.status(500).send(e?.message || 'Unexpected error')return res.status (500).send (e?.message || 'Unexpected error')}      }
      return res.status (500).send (error.message || 'Database error',
}
    return res.status (200).json ({ ok: true;, data })} catch (e: any) {return res.status (500).send (e?.message || 'Unexpected error');}
}return res.status(500).send(e?.message || 'Unexpected error')return res.status(500).send(e?.message || 'Unexpected error',
}return res.status(500).send(e?.message || 'Unexpected error')ursor/fix-website-loading-errors-and-merge-6662;
    return res.status(500).send(e?.message || 'Unexpected error')}
}
    return res.status(500).send(e?.message || 'Unexpected error')}
  }
    return res.status(500).send(e?.message || 'Unexpected error')}
    return res.status(500).send(e?.message || 'Unexpected error')}
    return res.status(500).send(e?.message || 'Unexpected error')}
        return res.status (200).json ({ ok: true;, duplicate: true;,}
});
      }
      return res.status (500).send (error.message || 'Database error');
    }
    return res.status (200).json ({ ok: true;, data });
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  } catch (e: any) {
if (error.message && error.message.includes('duplicate')) {
        return res.status(200).json({ ok: true, duplicate: true });
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      if (error.message && error.message.includes('duplicate')) {
return res.status(200).json({ ok: true;, duplicate: true ;});
      }
      return res.status(500).send(error.message |'Database error');
    }
    return res.status(200).json({ ok: true;, data });
  } catch (e: any) {
    return res.status(500).send(e?.message |'Unexpected error');
    return res.status(500).send(e?.message || 'Unexpected error');
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
    return res.status(500).send(e?.message |'Unexpected error');
    return res.status(500).send(e?.message || 'Unexpected error');
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
    return res.status (500).send (e?.message || 'Unexpected error');
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  }      }
      return res.status(500).send(error.message |'Database error')
    }
    return res.status(200).json({ ok: true;, data })
  } catch (e: any) {
    return res.status(500).send(e?.message |'Unexpected error')
      return res && res.status(500).send(error && error.message || 'Database error');
    }
    return res && res.status(200).json({ ok: true;, data });
  } catch (e: any) {
    return res && res.status(500).send(e?.message || 'Unexpected error');
  }      }
      return res && res.status(500).send(error && error.message || 'Database error')
    }
    return res && res.status(200).json({ ok: true;, data })
  } catch (e: any) {
    return res && res.status(500).send(e?.message || 'Unexpected error')
  };
}
    return res.status(500).send(e?.message |'Unexpected error');
    return res.status(500).send(e?.message || 'Unexpected error');
<<<<<<< HEAD
=======
  } catch (e: any) {}
'
    return res.status(500).send(e?.message |'Unexpected error');'
    return res.status(500).send(e?.message || 'Unexpected error');
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return res.status (500).send (e?.message || 'Unexpected error');
  }      }'
      return res.status (500).send (error.message || 'Database error');
    }
    return res.status (200).json ({ ok: true, data });
  } catch (e: any) {'
    return res.status (500).send (e?.message || 'Unexpected error');
}
}
<<<<<<< HEAD
=======
    return res.status (500).send (e?.message || 'Unexpected error');
    return res.status(500).send(e?.message |'Unexpected error');
    return res.status(500).send(e?.message || 'Unexpected error');
    return res.status(500).send(e?.message |'Unexpected error');
    return res.status(500).send(e?.message || 'Unexpected error');


    return res.status(500).send(e?.message |'Unexpected error');
    return res.status(500).send(e?.message || 'Unexpected error');
  }      }
      return res.status(500).send(error.message |'Database error')
    }
    return res.status(200).json({ ok: true, data })
  } catch (e: any) {
    return res.status(500).send(e?.message |'Unexpected error')
      return res && res.status(500).send(error && error.message || 'Database error');
    }
    return res && res.status(200).json({ ok: true, data });
  } catch (e: any) {
    return res && res.status(500).send(e?.message || 'Unexpected error');
  }      }
      return res && res.status(500).send(error && error.message || 'Database error')
    }
    return res && res.status(200).json({ ok: true, data })
  } catch (e: any) {
    return res && res.status(500).send(e?.message || 'Unexpected error')
  };
}
    return res.status(500).send(e?.message |'Unexpected error');
    return res.status(500).send(e?.message || 'Unexpected error');

    return res.status (500).send (e?.message || 'Unexpected error');
  }      }
      return res.status (500).send (error.message || 'Database error');
    }
<<<<<<< HEAD
    return res.status (200).json ({ ok: true, data });
  } catch (e: any) {
    return res.status (500).send (e?.message || 'Unexpected error');
=======
    return res.status (200).json ({ ok: true;, data });
  } catch (e: any) {;}
    return res.status (500).send (e?.message || 'Unexpected error');}
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
}
}

    return res.status(500).send(e?.message || 'Unexpected error');

return res.status(500).send(e?.message || 'Unexpected error');
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    return res.status(500).send(e?.message || 'Unexpected error');
}
origin/cursor/automate-test-improve-and-merge-code-20a4
pr-12243
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

'
=======


    return res.status(500).send(e?.message || 'Unexpected error');

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    return res.status(500).send(e?.message || 'Unexpected error');
}


    return res.status(500).send(e?.message || 'Unexpected error');


    return res.status(500).send(e?.message || 'Unexpected error');


}
}'
    return res.status(500).send(e?.message || 'Unexpected error');
  }
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    return res.status(500).send(e?.message || 'Unexpected error');
  }

    return res.status(500).send(e?.message || 'Unexpected error');
}
<<<<<<< HEAD


    return res.status(500).send(e?.message || 'Unexpected error');
  }
origin/cursor/automate-test-improve-and-merge-code-2533


    return res.status(500).send(e?.message || 'Unexpected error');
}



    return res.status(500).send(e?.message || 'Unexpected error');
  }

    return res.status(500).send(e?.message || 'Unexpected error');
}

>>>>>>> origin/main
=======
    return res.status(500).send(e?.message || 'Unexpected error');
  }
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
pr-12243
<<<<<<< HEAD
=======

'
    return res.status(500).send(e?.message || 'Unexpected error');
}

'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
    return res.status(500).send(e?.message || 'Unexpected error');
}
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
