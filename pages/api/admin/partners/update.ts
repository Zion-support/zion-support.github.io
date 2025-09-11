

    if (error) return res.status(500).json({ error: error.message });

    return res.status(200).json({ ok: true });

<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import { getServerSupabase } from '../../../../utils / supabase / server',
export default async /**
 * handler - Function description
 */
function handler() {
  if (return res.status (405).json ({ error: 'Method not allowed' }), ) {
  $2
}
  const { code, status, commission_rate } = req.body || {},
  if (return res.status (400).json ({ error: 'Missing code' }), ) {
  $2
}
  const using_placeholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes ('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder - key') === 'placeholder - key',
  try {
    // Check condition
if ( {) {
  $2
}
      return res.status (200).json ({ ok: true, mock: true });
    }
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { code, status, commission_rate } = req.body || {};
  if (!code) return res.status(400).json({ error: 'Missing code' });
  const usingPlaceholder = 
    (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') ||
    (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../../utils/supabase/server';
import type { NextApiRequest, NextApiResponse } from 'next',;
import { getServerSupabase } from '../../../../utils/supabase/server',;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  const { code, status, commission_rate } = req.body |{}
  if (!code) return res.status(400).json({ error: 'Missing code' })
  const usingPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL |'').includes('placeholder') |(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY |'placeholder-key') === 'placeholder-key'
  try {
    if (usingPlaceholder) {
      return res.status(200).json({ ok: true, mock: true });
    }
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    const supabase = getServerSupabase()
    const updates: any = {}
    if (status) updates.status = status
    if (typeof commission_rate === 'number') updates.commission_rate = commission_rate
    const { error } = await supabase.from('partners').update(updates).eq('code', String(code).toLowerCase())
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ ok: true });
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

  } catch (e: any) {
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

  } catch (e: any) {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    return res.status (500).json ({ error: e?.message });
  }

}

<<<<<<< HEAD
<<<<<<< HEAD
}
;


  } catch (e: any) {
    return res.status(500).json({ error: e?.message });
    return res.status(500).json({ error: e?.message })
  };
};
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const isAdmin = req.headers['x-admin'] === 'true';
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });

=======
=======
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    if (req.method === 'POST') {
      const { code, status, commission_rate } = req.body;
      if (!code) return res.status(400).json({ error: 'Code required' });

      const updates: any = {};
      if (status) updates.status = status;
      if (typeof commission_rate === 'number') updates.commission_rate = commission_rate;

      // Mock update - replace with real database update
      res.json({ success: true, updated: updates });
    } else {
      res.setHeader('Allow', 'POST');
      res.status(405).end('Method Not Allowed');
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
<<<<<<< HEAD
=======
=======
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
}


<<<<<<< HEAD
<<<<<<< HEAD
  }
}
  }
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
