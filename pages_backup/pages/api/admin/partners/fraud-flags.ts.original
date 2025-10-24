
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../../utils/supabase/server';
import type { NextApiRequest, NextApiResponse } from 'next',;
import { getServerSupabase } from '../../../../utils/supabase/server',;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {



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


  } catch (e: any) {
    return res.status(500).json({ error: e?.message });
    return res.status(500).json({ error: e?.message })
  };
};
import type { NextApiRequest, NextApiResponse } from 'next';



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











