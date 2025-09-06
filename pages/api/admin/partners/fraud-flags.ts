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


  }
}
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
