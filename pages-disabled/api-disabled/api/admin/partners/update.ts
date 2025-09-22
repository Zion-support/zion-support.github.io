:pages/api/admin/partners/update.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../../utils/supabase/server';
import type { NextApiRequest, NextApiResponse } from 'next',;
import { getServerSupabase } from '../../../../utils/supabase/server',;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ ok: true });
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

    return res.status(500).json({ error: e?.message })
  };
};
import type { NextApiRequest, NextApiResponse } from 'next';
  try {
    if (usingPlaceholder) {
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../../utils/supabase/server';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { code, status, commission_rate } = req.body || {}
  if (!code) return res.status(400).json({ error: 'Missing code' });

  try {;
    if (usingPlaceholder) {;
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
}

  }
}
