

    if (error) return res.status(500).json({ error: error.message });

    return res.status(200).json({ ok: true });

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  const { code, status, commission_rate } = req.body |{}
  if (!code) return res.status(400).json({ error: 'Missing code' })
  const usingPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL |'').includes('placeholder') |(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY |'placeholder-key') === 'placeholder-key'
  try {
    if (usingPlaceholder) {
      return res.status(200).json({ ok: true, mock: true });
    }
    const updates: any = {}
    if (status) updates.status = status
    if (typeof commission_rate === 'number') updates.commission_rate = commission_rate
    const { error } = await supabase.from('partners').update(updates).eq('code', String(code).toLowerCase())
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
}


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

}
;=======

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
  }
}


  }
}
  }
}
