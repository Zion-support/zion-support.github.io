
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../../utils/supabase/server';
import type { NextApiRequest, NextApiResponse } from 'next',;
import { getServerSupabase } from '../../../../utils/supabase/server',;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {



    if (error) return res.status(500).json({ error: error.message });

    return res.status(200).json({ ok: true });



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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

