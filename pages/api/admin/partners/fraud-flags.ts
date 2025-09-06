

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

    return res.status(500).json({ error: e?.message })
  };
};
import type { NextApiRequest, NextApiResponse } from 'next';



  }
}
