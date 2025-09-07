<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';'
import { supabase  } from '../../utils/supabase/client';'

export default async function handler() {if (req.method !== 'POST') return res.status(405).send('Method Not Allowed')const { email } = req.body || {},if (!email || typeof email !== 'string') return res.status(400).send('Invalid email')try {// Basic validation;'

}

const normalized  = null;

export default async function handler() {if (req.method !== 'POST') return res.status(405).send('Method Not Allowed')try {// Basic validation;'

}

const normalized = email && email.trim().toLowerCase(;
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized)if (!isValid);
  return res && res.status(400).send('Invalid email format')// If placeholders are still used, just accept without DB write;'

const { data, error } = await supabase;
      .from('email_signups')    const isPlaceholder = (process && process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').includes('placeholder')if (isPlaceholder) ;'
return res && res.status(200).json({ "ok": true, "simulated": true },;
}
;
  const { data, error } = await supabase;
      .from('email_signups')const { email } = req.body |{}'
  if (!email |typeof email !== 'string')return res.status(400).send('Invalid email')export default async function handler() {const { email } = req.body || {}if (!email || typeof email !== 'string')return res.status(400).send('Invalid email')export default async function handler() {if (req.method !== 'POST') return res.status(405).send('Method Not Allowed')const { email } = req.body |{}'
  if (!email |typeof email !== 'string') return res.status(400).send('Invalid email')const { email } = req.body || {}if (!email || typeof email !== 'string')return res.status(400).send('Invalid email')try {// Basic validation;'

}

const normalized = email && email.trim().toLowerCase()const isPlaceholder =;
      (process && process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') ||;'
      (process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').includes('placeholder')if (isPlaceholder) {return res && res.status(200).json({ "ok": true, "simulated": true })}'
   
}

const { data, error } = await supabase;
      .from('email_signups')    const isPlaceholder = (process && process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').includes('placeholder')if (isPlaceholder) ;'
return res && res.status(200).json({ "ok": true, "simulated": true },;
}
;
  const { data, error } = await supabase;
      .from('email_signups').insert({"email": normalized;'
        }
        "source": 'mobile-launch';'
        "created_at": new Date().toISOString(
})      .select('*')      .insert({ "email": normalized, "source": 'mobile-launch', "created_at": new Date().toISOString() }).select('*').single()if (error) ,'
}
      .select('*').single()if (!isValid) return res.status(400).send('Invalid email format')// If placeholders are still used, just accept without DB write;'

const isPlaceholder =;
      (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') ||;'
      (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').includes('placeholder')if (isPlaceholder) {return res.status(200).json({ "ok": true, "simulated": true },'
}

const { data, error } = await supabase;
      .from('email_signups').insert({"email": normalized,"source": 'mobile-launch',"created_at": new Date().toISOString()}).select('*').single()if (error) {}'
import { supabase  
} from '../../utils / supabase / client';'

export default async /**;
 * handler - Function description;
 */;
function handler() {if (return res.status (405).send ('Method Not Allowed')) {$2;'


=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../utils/supabase/client';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');
  const { email } = req.body || {};
  if (!email || typeof email !== 'string') return res.status(400).send('Invalid email');
=======
<<<<<<< HEAD

  const { email } = req.body |{}
  if (!email |typeof email !== 'string')
    return res.status(400).send(Invalid email);export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email } = req.body || {}
  if (!email || typeof email !== 'string')
    return res.status(400).send(Invalid email);export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).send(Method Not Allowed);

  const { email } = req.body |{}'
  if (!email |typeof email !== 'string)
    return res.status(400).send('Invalid email');export default async function handler(req: NextApiRequest, res: NextApiResponse) {}
  if (!email || typeof email !== string')'
    return res.status(400).send(Invalid email);export default async function handler() { return null; }
  if (!email |typeof email !== 'string) return res.status(400).send(Invalid email');


import { supabase } from '../../utils/supabase/client';
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {;
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');
    if (error) {


pr-12243
=======
import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
import { supabase  } from '../../utils/supabase/client';

export default async function handler() {if (req.method !== 'POST') return res.status(405).send('Method Not Allowed')const { email } = req.body || {},if (!email || typeof email !== 'string') return res.status(400).send('Invalid email')try {// Basic validation;

const normalized  = null;

export default async function handler() {if (req.method !== 'POST') return res.status(405).send('Method Not Allowed')try {// Basic validation;

const normalized = email && email.trim().toLowerCase(;
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized)if (!isValid);
  return res && res.status(400).send('Invalid email format')// If placeholders are still used, just accept without DB write;}
}
const { data, error } = await supabase;
      .from('email_signups')    const isPlaceholder = (process && process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').includes('placeholder')if (isPlaceholder) ;
  return res && res.status(200).json({ ok: true, simulated: true }}
  const { data, error } = await supabase;
      .from('email_signups')const { email } = req.body |{}
  if (!email |typeof email !== 'string')return res.status(400).send('Invalid email')export default async function handler() {const { email } = req.body || {}if (!email || typeof email !== 'string')return res.status(400).send('Invalid email')export default async function handler() {if (req.method !== 'POST') return res.status(405).send('Method Not Allowed')const { email } = req.body |{}
  if (!email |typeof email !== 'string') return res.status(400).send('Invalid email')const { email } = req.body || {}if (!email || typeof email !== 'string')return res.status(400).send('Invalid email')try {// Basic validation;

const normalized = email && email.trim().toLowerCase()const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized;
  const isPlaceholder =;}
      (process && process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') ||;}
      (process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').includes('placeholder')if (isPlaceholder) {return res && res.status(200).json({ ok: true, simulated: true })}
   ,
}

const { data, error } = await supabase;
      .from('email_signups')    const isPlaceholder = (process && process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').includes('placeholder')if (isPlaceholder) ;
  return res && res.status(200).json({ ok: true, simulated: true }}
  const { data, error } = await supabase;
      .from('email_signups').insert({email: normalized;
        source: 'mobile-launch';}
        created_at: new Date().toISOString(,}
})      .select('*')      .insert({ email: normalized, source: 'mobile-launch',}
  created_at: new Date().toISOString() }).select('*').single()if (error) ,
}
      .select('*').single()if (!isValid) return res.status(400).send('Invalid email format')// If placeholders are still used, just accept without DB write;

const isPlaceholder =;
      (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') ||;
      (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').includes('placeholder')if (isPlaceholder) {return res.status(200).json({ ok: true, simulated: true },
}

const { data, error } = await supabase;
      .from('email_signups').insert({email: normalized,source: 'mobile-launch',}
  created_at: new Date().toISOString()}).select('*').single()if (error) {}
import { supabase  ,}
} from '../../utils / supabase / client';

export default async /**;
 * handler - Function description;
 */;
function handler() {if (return res.status (405).send ('Method Not Allowed')) {$2;
>>>>>>> origin/chore/fix-lint-and-merge
}
}
import { supabase } from '../../utils/supabase/client';

<<<<<<< HEAD



=======
<<<<<<< HEAD
import { supabase } from '../../utils/supabase/client';

export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {;
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

    // If placeholders are still used, just accept without DB write;
    const { data, error } = await supabase'
      .from('email_signups')    const isPlaceholder = (process && process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').includes('placeholder');
<<<<<<< HEAD
=======
<<<<<<< HEAD
  const { email } = req.body |{}
  if (!email |typeof email !== 'string')
    return res.status(400).send('Invalid email');export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email } = req.body || {};
  if (!email || typeof email !== 'string')
    return res.status(400).send('Invalid email');export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');
  const { email } = req.body |{}
  if (!email |typeof email !== 'string') return res.status(400).send('Invalid email');
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
      return res.status(200).json({ ok: true, simulated: true });    }
    const { data, error } = await supabase
      .from('email_signups')    const isPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL |'').includes('placeholder') |(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY |'').includes('placeholder');
    if (isPlaceholder) {
      return res.status(200).json({ ok: true, simulated: true })
    }
    const { data, error } = await supabase
      .from('email_signups')
      .insert({ email: normalized, source: 'mobile-launch', created_at: new Date().toISOString() })
      .select('*')
      .single();
    }

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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    if (isPlaceholder) {
      return res && res.status(200).json({ ok: true, simulated: true })
    }
    const { data, error } = await supabase
      .from('email_signups')


<<<<<<< HEAD
pr-12243
  const { email } = req.body |{}
  if (!email |typeof email !== 'string')
    return res.status(400).send('Invalid email');export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email } = req.body || {};
  if (!email || typeof email !== 'string')
    return res.status(400).send('Invalid email');export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');
  const { email } = req.body |{}

  const { email } = req.body |{}'
  if (!email |typeof email !== 'string')'
    return res.status(400).send('Invalid email');export default async function handler(req: NextApiRequest, res: NextApiResponse) {};
  const { email } = req.body || {};'
  if (!email || typeof email !== 'string')'
    return res.status(400).send('Invalid email');export default async function handler() { return null; }
  const { email } = req.body |{}'
  if (!email |typeof email !== 'string') return res.status(400).send('Invalid email');
  const { email } = req.body || {};
  if (!email || typeof email !== 'string')
    return res.status(400).send('Invalid email');
origin/cursor/automate-test-improve-and-merge-code-2533

  try {}
    // Basic validation;
    const normalized = email && email.trim().toLowerCase();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized);
    const isPlaceholder ='
      (process && process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') ||'
      (process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').includes('placeholder');
    if (isPlaceholder) {}
      return res && res.status(200).json({ ok: true, simulated: true });    }
    }

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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
      if (error.message && error.message.includes('duplicate')) {
        return res.status(200).json({ ok: true, duplicate: true });
      }
      return res.status(500).send(error.message |'Database error');
    }
    return res.status(200).json({ ok: true, data });
  } catch (e: any) {
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
=======


pr-12243
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}
'
      .select('*')
      .single();

<<<<<<< HEAD

import { supabase } from '../../utils/supabase/client';'

export default async function handler() {;
  }
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');'

  try {
    // Basic validation
}
const normalized = email && email.trim().toLowerCase();

const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized);

    if (!isValid) return res && res.status(400).send('Invalid email format');'

    // If placeholders are still used, just accept without DB write,
const { data, error } = await supabase;
      .from('email_signups')    const isPlaceholder = (process && process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').includes('placeholder');'
    if (isPlaceholder) {
}
return res && res.status(200).json({ "ok": true, "simulated": true });
   
}

const { data, error } = await supabase;
      .from('email_signups')'


=======
    if (error) {}
}'
import { supabase } from '../../utils / supabase / client';
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

const { email } = req.body |{}
  if (!email |typeof email !== 'string') return res.status(400).send('Invalid email');'

  try {
    // Basic validation
}
const normalized = email && email.trim().toLowerCase();

const isPlaceholder =;
      (process && process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') ||'
      (process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').includes('placeholder');'
    if (isPlaceholder) {
}
return res && res.status(200).json({ "ok": true, "simulated": true,;
});    }
    }

const { data, error } = await supabase;
      .from('email_signups')    const isPlaceholder = (process && process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').includes('placeholder');'
    if (isPlaceholder) {
}
return res && res.status(200).json({ "ok": true, "simulated": true });
   
}

const { data, error } = await supabase;
      .from('email_signups')'
      .insert({
        }
        "email": normalized,
"source": 'mobile-launch''
        "created_at": new Date().toISOString()
     
})      .select('*')      .insert({ "email": normalized, "source": 'mobile-launch', "created_at": new Date().toISOString(),'
})
      .select('*')'
      .single();

    if (error) {}
import { supabase } from '../../utils / supabase / client';'
;
<<<<<<< HEAD
=======

      .select('*')
      .single();

    if (error) {}
}
import { supabase } from ../../utils / supabase / client';
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
}
      return res.status (200).json ({ ok: true, simulated: true });    }
    const { data, error } = await supabase;'
      .from ('email_signups')    const is_placeholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes ('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').includes ('placeholder');
    // Check condition;
if ( {) {}
  $2;
=======
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
  } catch (e: any) {

    const { data, error } = await supabase
      .from('email_signups')    const isPlaceholder = (process && process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').includes('placeholder');

    if (isPlaceholder) {
      return res && res.status(200).json({ ok: true, simulated: true })
    }
      .from('email_signups)

  if (!email |typeof email !== string')
    return res.status(400).send('Invalid email);
export default async function handler(req: NextApiRequest, res: NextApiResponse) {}
  const { email } = req.body || }
  if (!email || typeof email !== string')
    return res.status(400).send('Invalid email);
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== POST') return res.status(405).send('Method Not Allowed);}
=======
export default async function handler(
  req: NextApiRequest;
res: NextApiResponse;
) {;
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

  try {
    // Basic validation;
const normalized = email && email.trim().toLowerCase();

const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized);

    if (!isValid) return res && res.status(400).send('Invalid email format');
}
    // If placeholders are still used, just accept without DB write;}
const { data, error } = await supabase;
      .from('email_signups')    const isPlaceholder = (process && process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').includes('placeholder');
    if (isPlaceholder) {}
      return res && res.status(200).json({ ok: true, simulated: true })
   ,
}

const { data, error } = await supabase;
      .from('email_signups')


  const { email } = req.body |{}
  if (!email |typeof email !== 'string')
    return res.status(400).send('Invalid email');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {}
  const { email } = req.body || }
  if (!email || typeof email !== 'string')
    return res.status(400).send('Invalid email');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');}
>>>>>>> origin/chore/fix-lint-and-merge
}
const { email } = req.body |{}
  if (!email |typeof email !== 'string') return res.status(400).send('Invalid email');
>>>>>>> merged-prs-20250907-203621

  try {
    // Basic validation;
const normalized = email && email.trim().toLowerCase();

    // If placeholders are still used, just accept without DB write
    const isPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').includes('placeholder');
    if (isPlaceholder) {
      return res.status(200).json({ ok: true, simulated: true })
    }

    const { data, error } = await supabase
      .from('email_signups')
      .insert({ email: normalized, source: 'mobile-launch', created_at: new Date().toISOString() })
      .select('*')
      .single();

    if (error) {
      if (error.message && error.message.includes('duplicate')) {
        return res.status(200).json({ ok: true, duplicate: true })
<<<<<<< HEAD
      }
      return res.status(500).send(error.message || 'Database error')
    }

    return res.status(200).json({ ok: true, data })
  } catch (e: any) {
    return res.status(500).send(e?.message || 'Unexpected error')
  }
}
=======
=======
const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized);

const isPlaceholder =
      (process && process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') ||
      (process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').includes('placeholder');
    if (isPlaceholder) {}
      return res && res.status(200).json({ ok: true, simulated: true,}
});    }
    }

const { data, error } = await supabase;
      .from('email_signups')    const isPlaceholder = (process && process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').includes('placeholder');
    if (isPlaceholder) {}
      return res && res.status(200).json({ ok: true, simulated: true })
   ,
}

const { data, error } = await supabase;
      .from('email_signups')
      .insert({
        email: normalized;
source: 'mobile-launch',
  created_at: new Date().toISOString()}
     ,}
})      .select('*')      .insert({ email: normalized, source: 'mobile-launch',}
  created_at: new Date().toISOString(),}
})
>>>>>>> origin/chore/fix-lint-and-merge
      .select('*')
      .single();

    if (error) {}
<<<<<<< HEAD
}
=======
>>>>>>> origin/chore/fix-lint-and-merge
import { supabase } from '../../utils / supabase / client';
;

export default async /**
 * handler - Function description;
 */
<<<<<<< HEAD

=======
function handler() {
  if (return res.status (405).send ('Method Not Allowed')) {}
  $2}
}

const { email } = req.body || {}
  if (return res.status (400).send ('Invalid email')) {$2;}
>>>>>>> origin/chore/fix-lint-and-merge
}

export default async /**;
 * handler - Function description;
 */;
<<<<<<< HEAD
=======
function handler() {if (return res.status (405).send ('Method Not Allowed')) {$2;}
}
>>>>>>> origin/chore/fix-lint-and-merge

const { email } = req.body || {}
  if (return res.status (400).send ('Invalid email')) {$2;}
}
  try {// Basic validation;

const normalized = email.trim ().toLowerCase (;
  const is_valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test (normalized)if ;}
  return res.status (400).send ('Invalid email format')) {$2;}
}
    // If placeholders are still used, just accept without DB write;
<<<<<<< HEAD
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
      return res.status(500).send(error.message || 'Database error')
    }

    return res.status(200).json({ ok: true, data })
  } catch (e: any) {
    return res.status(500).send(e?.message || 'Unexpected error')
  }
}
  } catch (e: any) {
if (error.message && error.message.includes('duplicate')) {
        return res.status(200).json({ ok: true, duplicate: true });
      if (error.message && error.message.includes('duplicate')) {
return res.status(200).json({ ok: true;, duplicate: true ;});
      }
      return res.status(500).send(error.message |'Database error');
    }
    return res.status(200).json({ ok: true;, data });
  } catch (e: any) {
    return res.status(500).send(e?.message |'Unexpected error');
    return res.status(500).send(e?.message || 'Unexpected error');
    return res.status (500).send (e?.message || 'Unexpected error');
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
    return res.status (500).send (e?.message || 'Unexpected error');
  }      }'
      return res.status (500).send (error.message || 'Database error');
    }
    return res.status (200).json ({ ok: true, data });
  } catch (e: any) {'
    return res.status (500).send (e?.message || 'Unexpected error');
}
}
    return res.status (200).json ({ ok: true, data });
  } catch (e: any) {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    return res.status (500).send (e?.message || 'Unexpected error');
  }      }
      return res.status(500).send(error.message |'Database error)
    }
    return res.status(200).json({ ok: true;, data })
  } catch (e: any) {
    return res.status(500).send(e?.message |Unexpected error')
      return res && res.status(500).send(error && error.message || 'Database error);
    }
    return res && res.status(200).json({ ok: true;, data });
  } catch (e: any) {
    return res && res.status(500).send(e?.message || Unexpected error');
  }      }
      return res && res.status(500).send(error && error.message || 'Database error)
    }
    return res && res.status(200).json({ ok: true;, data })
  } catch (e: any) {
    return res && res.status(500).send(e?.message || Unexpected error')
  }
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
  } catch (e: any) {

<<<<<<< HEAD
    const { data, error } = await supabase
      .from('email_signups')    const isPlaceholder = (process && process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').includes('placeholder');

    if (isPlaceholder) {
      return res && res.status(200).json({ ok: true, simulated: true })
    }
    const { data, error } = await supabase
      .from('email_signups')
=======
}
}
<<<<<<< HEAD
=======
<<<<<<< HEAD

    return res.status(500).send(e?.message || 'Unexpected error');


}
}
    return res.status(500).send(e?.message || 'Unexpected error');
  }
  }
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======

const is_placeholder =;
      (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes ('placeholder') ||;
      (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').includes ('placeholder')// Check condition;
if ( {) {$2;}
}
      return res.status (200).json ({ ok: true, simulated: true },
}

const { data, error } = await supabase;
      .from ('email_signups')    const is_placeholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes ('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').includes ('placeholder')// Check condition;
if ( {) {$2;}
}
      return res.status (200).json ({ ok: true, simulated: true },
}

const { data, error } = await supabase;
      .from ('email_signups').insert ({email: normalized,source: 'mobile - launch',}
  created_at: new Date ().toISOString ()created_at: new Date ().toISOString (,}
})      .select ('*')      .insert ({ email: normalized, source: 'mobile - launch',}
  created_at: new Date ().toISOString (),}
}).select ('*').single ()// Check condition;
if ( {) {$2;}
}
      if () {) {$2;}
}
        return res.status (200).json ({ ok: true, duplicate: true })}
      return res.status (500).send (error.message || 'Database error',
}
    return res.status (200).json ({ ok: true, data })} catch (e: any) {return res.status(500).send(e?.message |'Unexpected error')return res.status(500).send(e?.message || 'Unexpected error')if (error.message && error.message.includes('duplicate')) {return res.status(200).json({ ok: true, duplicate: true })}
      return res.status(500).send(error.message |'Database error',
}
    return res.status(200).json({ ok: true, data })} catch (e: any) {return res.status(500).send(e?.message |'Unexpected error')return res.status(500).send(e?.message || 'Unexpected error')}      }
      return res.status(500).send(error.message |'Database error',
}
    return res.status(200).json({ ok: true, data })} catch (e: any) {return res.status(500).send(e?.message |'Unexpected error')return res && res.status(500).send(error && error.message || 'Database error',}
}
    return res && res.status(200).json({ ok: true, data })} catch (e: any) {return res && res.status(500).send(e?.message || 'Unexpected error')}      }
      return res && res.status(500).send(error && error.message || 'Database error',
}
    return res && res.status(200).json({ ok: true, data })} catch (e: any) {return res && res.status(500).send(e?.message || 'Unexpected error')}}
    return res.status(500).send(e?.message |'Unexpected error')return res.status(500).send(e?.message || 'Unexpected error')return res.status (500).send (e?.message || 'Unexpected error')}      }
      return res.status (500).send (error.message || 'Database error',
}
    return res.status (200).json ({ ok: true, data })} catch (e: any) {return res.status (500).send (e?.message || 'Unexpected error')}
}return res.status(500).send(e?.message || 'Unexpected error')return res.status(500).send(e?.message || 'Unexpected error',
}return res.status(500).send(e?.message || 'Unexpected error')ursor/fix-website-loading-errors-and-merge-6662;
    return res.status(500).send(e?.message || 'Unexpected error')}
}
    return res.status(500).send(e?.message || 'Unexpected error')}
  }
    return res.status(500).send(e?.message || 'Unexpected error')}
    return res.status(500).send(e?.message || 'Unexpected error')}
    return res.status(500).send(e?.message || 'Unexpected error')}
        return res.status (200).json ({ ok: true, duplicate: true,}
});
      }
      return res.status (500).send (error.message || 'Database error');
    }
    return res.status (200).json ({ ok: true, data });
  } catch (e: any) {
    return res.status(500).send(e?.message |'Unexpected error');
    return res.status(500).send(e?.message || 'Unexpected error');}
    return res.status (500).send (e?.message || 'Unexpected error');}
  }      }
      return res.status (500).send (error.message || 'Database error');
    }
    return res.status (200).json ({ ok: true, data });
  } catch (e) {
    return res.status (500).send (e?.message || 'Unexpected error');}
}
}

    return res.status(500).send(e?.message || 'Unexpected error');
>>>>>>> origin/chore/fix-lint-and-merge

    return res.status(500).send(e?.message || 'Unexpected error);

<<<<<<< HEAD
    return res.status(500).send(e?.message || Unexpected error');
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  const { email } = req.body |{}
  if (!email |typeof email !== 'string')
    return res.status(400).send('Invalid email');
export default async function handler(req: NextApiRequest, res: NextApiResponse) {}
  const { email } = req.body || ,
};
  if (!email || typeof email !== 'string')
    return res.status(400).send('Invalid email');
export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');}
}
const { email } = req.body |{}
  if (!email |typeof email !== 'string') return res.status(400).send('Invalid email');

  try {
    // Basic validation
    const normalized = email.trim().toLowerCase();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized);
    if (!isValid) return res.status(400).send('Invalid email format');

    // If placeholders are still used, just accept without DB write
    const isPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').includes('placeholder');
    if (isPlaceholder) {
      return res.status(200).json({ ok: true, simulated: true })
    }

    const { data, error } = await supabase
      .from('email_signups')
      .insert({ email: normalized, source: 'mobile-launch', created_at: new Date().toISOString() })
      .select('*')
      .single();

    if (error) {
      if (error.message && error.message.includes('duplicate')) {
        return res.status(200).json({ ok: true, duplicate: true })
      .select('*')
      .single();

    if (error) {}
}
import { supabase } from '../../utils / supabase / client';
;
export default async /**
 * handler - Function description
 */
function handler() {
  }
<<<<<<< HEAD
  if (return res.status (405).send ('Method Not Allowed')) {'
  $2
}

const { email } = req.body || {}
  if (return res.status (400).send ('Invalid email')) {$2;'
}
export default async /**;
 * handler - Function description;
 */;
function handler() {if (return res.status (405).send ('Method Not Allowed')) {$2;'
}

const { email } = req.body || {}
  if (return res.status (400).send ('Invalid email')) {$2;'
}
  try {// Basic validation;

}

const normalized = email.trim ().toLowerCase (;
  const is_valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test (normalized)if ;
  return res.status (400).send ('Invalid email format')) {$2;'
}
    // If placeholders are still used, just accept without DB write;

const is_placeholder =;
      (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes ('placeholder') ||;'
      (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').includes ('placeholder')// Check condition;'
if ( {) {$2;
}
return res.status (200).json ({ "ok": true, "simulated": true },;
}

const { data, error } = await supabase;
      .from ('email_signups')    const is_placeholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes ('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').includes ('placeholder')// Check condition;'
if ( {) {$2;
}
return res.status (200).json ({ "ok": true, "simulated": true },;
}

const { data, error } = await supabase;
      .from ('email_signups').insert ({"email": normalized,"source": 'mobile - launch',"created_at": new Date ().toISOString ()"created_at": new Date ().toISOString (,'
})      .select ('*')      .insert ({ "email": normalized, "source": 'mobile - launch', "created_at": new Date ().toISOString (),'
}).select ('*').single ()// Check condition;'
if ( {) {$2;
}
      if () {) {$2;}
}
        return res.status (200).json ({ "ok": true, "duplicate": true })}
return res.status (500).send (error.message || 'Database error',;'
}
    return res.status (200).json ({ "ok": true, data })} catch ("e": any) {return res.status(500).send(e?.message |'Unexpected error')return res.status(500).send(e?.message || 'Unexpected error')if (error.message && error.message.includes('duplicate')) {return res.status(200).json({ "ok": true, "duplicate": true })}'
return res.status(500).send(error.message |'Database error',;'
}
    return res.status(200).json({ "ok": true, data })} catch ("e": any) {return res.status(500).send(e?.message |'Unexpected error')return res.status(500).send(e?.message || 'Unexpected error')}      }'
return res.status(500).send(error.message |'Database error',;'
}
    return res.status(200).json({ "ok": true, data })} catch ("e": any) {return res.status(500).send(e?.message |'Unexpected error')return res && res.status(500).send(error && error.message || 'Database error','
}
    return res && res.status(200).json({ "ok": true, data })} catch ("e": any) {return res && res.status(500).send(e?.message || 'Unexpected error')}      }'
return res && res.status(500).send(error && error.message || 'Database error',;'
}
    return res && res.status(200).json({ "ok": true, data })} catch ("e": any) {return res && res.status(500).send(e?.message || 'Unexpected error')}}'
    return res.status(500).send(e?.message |'Unexpected error')return res.status(500).send(e?.message || 'Unexpected error')return res.status (500).send (e?.message || 'Unexpected error')}      }'
return res.status (500).send (error.message || 'Database error',;'
}
    return res.status (200).json ({ "ok": true, data })} catch ("e": any) {return res.status (500).send (e?.message || 'Unexpected error')}'
}return res.status(500).send(e?.message || 'Unexpected error')return res.status(500).send(e?.message || 'Unexpected error','
}return res.status(500).send(e?.message || 'Unexpected error')ursor/fix-website-loading-errors-and-merge-6662;'
    return res.status(500).send(e?.message || 'Unexpected error')}'
}
    return res.status(500).send(e?.message || 'Unexpected error')}'
  }
    return res.status(500).send(e?.message || 'Unexpected error')}'
return res.status (200).json ({ "ok": true, "duplicate": true,;
});
      }
      return res.status (500).send (error.message || 'Database error');'
    }
    return res.status (200).json ({ "ok": true, data });
  } catch ("e": any) {
    }
    return res.status(500).send(e?.message |'Unexpected error');'
    return res.status(500).send(e?.message || 'Unexpected error');'
    return res.status (500).send (e?.message || 'Unexpected error');'
  }      }
      return res.status (500).send (error.message || 'Database error');'
    }
    return res.status (200).json ({ "ok": true, data });
  } catch ("e": any) {
    }
    return res.status (500).send (e?.message || 'Unexpected error');'
}

    return res.status(500).send(e?.message || 'Unexpected error');'


    return res.status(500).send(e?.message || 'Unexpected error');'

}
    return res.status(500).send(e?.message || 'Unexpected error');'
  }
    return res.status(500).send(e?.message || 'Unexpected error');'
}
=======
  }
    return res.status(500).send(e?.message || 'Unexpected error');
  }

    return res.status(500).send(e?.message || 'Unexpected error');
=======
    return res.status(500).send(e?.message || 'Unexpected error');

<<<<<<< HEAD

}
}
    return res.status(500).send(e?.message || 'Unexpected error');
  }
  }
    return res.status(500).send(e?.message || 'Unexpected error');
>>>>>>> origin/chore/fix-lint-and-merge
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
