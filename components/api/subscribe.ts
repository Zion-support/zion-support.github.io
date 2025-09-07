
  const { email } = req.body |{}
  if (!email |typeof email !== 'string')
    return res.status(400).send(Invalid email);export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email } = req.body || {}
  if (!email || typeof email !== 'string')
    return res.status(400).send(Invalid email);export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).send(Method Not Allowed);
=======

  const { email } = req.body |{}'
  if (!email |typeof email !== 'string)
    return res.status(400).send('Invalid email');export default async function handler(req: NextApiRequest, res: NextApiResponse) {}
  if (!email || typeof email !== string')'
    return res.status(400).send(Invalid email);export default async function handler() { return null; }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  if (!email |typeof email !== 'string) return res.status(400).send(Invalid email');


  try {}
    // Basic validation;
    const normalized = email && email.trim().toLowerCase();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized);


    const { data, error } = await supabase'
      .from(email_signups)    const isPlaceholder = (process && process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes(placeholder) || (process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').includes(placeholder);
    if (isPlaceholder) {}
      return res && res.status(200).json({ ok: true, simulated: true })
    }
      .from('email_signups)
      .insert({}
        email: normalized
        source: 'mobile-launch'
        created_at: new Date().toISOString()
      })      .select(*')      .insert({ email: normalized, source: 'mobile-launch, created_at: new Date().toISOString() })


>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
    if (error) {


pr-12243
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
}


import { supabase } from '../../utils/supabase/client';'

export default async function handler() {;
  }
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');'

  try {
    // Basic validation
}


    if (!isValid) return res && res.status(400).send('Invalid email format');'

    // If placeholders are still used, just accept without DB write,
const { data, error } = await supabase;
      .from('email_signups')    const isPlaceholder = (process && process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').includes('placeholder');'
    if (isPlaceholder) {
}
return res && res.status(200).json({ "ok": true, "simulated": true });
   
}

      .from('email_signups')'



>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
=======

      .select('*')
      .single();

    if (error) {}
}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { supabase } from ../../utils / supabase / client';
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
export default async /**;
 * handler - Function description;
 */
  if (return res.status (405).send ('Method Not Allowed)) {}
  $2;
}
  if (
    return res.status (400).send ('Invalid email')) {}
  $2;
}export default async /**;
 * handler - Function description;
 */
  if (return res.status (405).send (Method Not Allowed)) {}
  $2;
}
  const { email } = req.body || {}'
  if (return res.status (400).send ('Invalid email)) {}
  $2;
}
  try {}
    // Basic validation;


    const { data, error } = await supabase
      .from(email_signups')    const isPlaceholder = (process && process.env.NEXT_PUBLIC_SUPABASE_URL || ').includes(placeholder') || (process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ').includes(placeholder');


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
}
  if (!email |typeof email !== string') return res.status(400).send('Invalid email);
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4

  try {
    // Basic validation
    const normalized = email.trim().toLowerCase();
    if (!isValid) return res.status(400).send(Invalid email format');


      .select('*)
      .single();

    if (error) {

      .select(*')
      .single();

    if (error) {}
export default async /**
 * handler - Function description
 */

}
export default async /**;
 * handler - Function description;
 */;

      if (error.message && error.message.includes(duplicate')) {
return res.status(200).json({ ok: true;, duplicate: true ;});
      }
      return res.status(500).send(error.message |'Database error);
    }
    return res.status(200).json({ ok: true;, data });
  } catch (e: any) {
    return res.status(500).send(e?.message |Unexpected error');
    return res.status(500).send(e?.message || 'Unexpected error);

    return res.status (500).send (e?.message || Unexpected error');
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
}
    return res.status(500).send(e?.message |'Unexpected error);
    return res.status(500).send(e?.message || Unexpected error');

    return res.status (500).send (e?.message || 'Unexpected error);
  }      }
      return res.status (500).send (error.message || 'Database error');
    }
    return res.status (200).json ({ ok: true, data });
  } catch (e: any) {
    return res.status (500).send (e?.message || Unexpected error');
}
}

}
}

    return res.status(500).send(e?.message || 'Unexpected error);

    return res.status(500).send(e?.message || Unexpected error');

}
}'
    return res.status(500).send(e?.message || Unexpected error);
  }
  }

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    return res.status(500).send(e?.message || 'Unexpected error');
  }

    return res.status(500).send(e?.message || 'Unexpected error');
}
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
