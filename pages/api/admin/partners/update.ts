<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../../utils/supabase/server';
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
import { getServerSupabase } from '../../../../utils/supabase/server';
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
import { getServerSupabase } from '../../../../utils/supabase/server',;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5

import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../../utils/supabase/server';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  const { code, status, commission_rate } = req.body |{}
  if (!code) return res.status(400).json({ error: 'Missing code' })
  const usingPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL |'').includes('placeholder') |(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY |'placeholder-key') === 'placeholder-key'
  try {
    // Check condition
if ( {) {
  $2
}
      return res.status (200).json ({ ok: true, mock: true });
    }
    const supabase = getServerSupabase()
    const updates: any = {}
    if (status) updates.status = status
    if (typeof commission_rate === 'number') updates.commission_rate = commission_rate
    const { error } = await supabase.from('partners').update(updates).eq('code', String(code).toLowerCase())
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { code, status, commission_rate } = req.body || {};
  if (!code) return res.status(400).json({ error: 'Missing code' });

  const usingPlaceholder = 
    (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') ||
    (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key';

  try {
    if (usingPlaceholder) {
      return res.status(200).json({ ok: true, mock: true });
    }
    const supabase = getServerSupabase();
    const updates: any = {};
    if (status) updates.status = status;
    if (typeof commission_rate === 'number') {
      updates.commission_rate = commission_rate;
    }

    const { error } = await supabase
      .from('partners')
      .update(updates)
      .eq('code', String(code).toLowerCase());
    if (error) return res.status(500).json({ error: error.message });

    return res.status(200).json({ ok: true });
  } catch (e: any) {
    return res.status(500).json({ error: e?.message });
  }
}
  } catch (e: any) {
<<<<<<< HEAD
    return res.status (500).json ({ error: e?.message });
  }
=======
<<<<<<< HEAD
    return res.status(500).json({ error: e?.message });
=======
=======
    return res.status(500).json({ error: e?.message })
  };
};
=======
import type { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
}
}
;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


  }
}
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
