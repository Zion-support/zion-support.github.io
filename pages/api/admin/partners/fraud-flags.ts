<<<<<<< HEAD

import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../../utils/supabase/server';
import type { NextApiRequest, NextApiResponse } from 'next',;
import { getServerSupabase } from '../../../../utils/supabase/server',;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


    }
    const supabase = getServerSupabase()
    const { data, error } = await supabase
      .from('referral_events')
      .select('ip_address, created_at')
      .eq('partner_code', code)


    }
    const flags: any[] = []
    counts.forEach((count, ip) => {
      if (count > 30 && ip !== 'unknown') {

<<<<<<< HEAD



  } catch (e: any) {
    return res.status(500).json({ error: e?.message });


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4



    if (req.method === 'GET') {
      const code = (req.query.code as string)?.toLowerCase();
      if (!code) return res.status(400).json({ error: 'Code required' });

      // Mock fraud flags data
      const flags = [
        { type: 'suspicious_ip', severity: 'low', note: 'Multiple visits from same IP' }
      ];

      res.json({ flags });
    } else {
      res.setHeader('Allow', 'GET');
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
