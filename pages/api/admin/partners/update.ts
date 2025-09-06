<<<<<<< HEAD

import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../../utils/supabase/server';
import type { NextApiRequest, NextApiResponse } from 'next',;
import { getServerSupabase } from '../../../../utils/supabase/server',;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


    if (error) return res.status(500).json({ error: error.message });

    return res.status(200).json({ ok: true });

<<<<<<< HEAD
=======
=======
    const supabase = getServerSupabase()
    const updates: any = {}
    if (status) updates.status = status
    if (typeof commission_rate === 'number') updates.commission_rate = commission_rate
    const { error } = await supabase.from('partners').update(updates).eq('code', String(code).toLowerCase())
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
<<<<<<< HEAD
    return res.status (500).json ({ error: e?.message });
  }

}

=======
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


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



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
