<<<<<<< HEAD:pages/api/admin/partners/update.ts
<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../../utils/supabase/server';
import type { NextApiRequest, NextApiResponse } from 'next',;
import { getServerSupabase } from '../../../../utils/supabase/server',;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ ok: true });
<<<<<<< HEAD
=======
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
};
=======
  } catch (e: any) {
<<<<<<< HEAD
    return res.status(500).json({ error: e?.message })
  };
=======
    return res.status(500).json({ error: e?.message });
  }
>>>>>>> main
};
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    const supabase = getServerSupabase (),
    const updates: any = {},
    // Check condition
if (updates.status = status, ) {
  $2
}
    // Check condition
if (updates.commission_rate = commission_rate, ) {
  $2
}
    const { error } = await supabase.from ('partners').update (updates).eq ('code', String (code).toLowerCase ()),
    if (return res.status (500).json ({ error: error.message })) {
  $2
}
    return res.status (200).json ({ ok: true });

  } catch (e: any) {
<<<<<<< HEAD
=======
    return res.status(500).json({ error: e?.message });
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    return res.status(500).json({ error: e?.message })
  };
};
import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
    return res.status (500).json ({ error: e?.message });
  }

  const usingPlaceholder = 
    (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') ||
    (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key';
=======
import type { NextApiRequest, NextApiResponse } from 'next',;
import { getServerSupabase } from '../../../../utils/supabase/server',;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' }),
  const { code, status, commission_rate } = req.body || {},
  if (!code) return res.status(400).json({ error: 'Missing code' }),


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  try {
    if (usingPlaceholder) {
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../../utils/supabase/server';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { code, status, commission_rate } = req.body || {}
  if (!code) return res.status(400).json({ error: 'Missing code' });


  try {;
    if (usingPlaceholder) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/admin/partners/update.ts
      return res.status(200).json({ ok: true, mock: true })
    }
    const supabase = getServerSupabase();
    const updates: any = {}
    if (status) updates.status = status;
    if (typeof commission_rate === 'number') updates.commission_rate = commission_rate;

    const { error } = await supabase.from('partners').update(updates).eq('code', String(code).toLowerCase());
    if (error) return res.status(500).json({ error: error.message });

    return res.status(200).json({ ok: true })
  } catch (e: any) {;
    return res.status(500).json({ error: e?.message })
  }
<<<<<<< HEAD

}

=======
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc


  }
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
};
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
