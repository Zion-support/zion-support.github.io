import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../../utils/supabase/server';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const code = (req.query.code as string)?.toLowerCase();
  if (!code) return res.status(400).json({ error: 'Missing code' });

  const usingPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || 
    (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key';

  if (usingPlaceholder) {
    return res.status(200).json({ 
      flags: [
        { type: 'suspicious_ip', severity: 'low', note: 'Multiple visits from same IP' }
      ]
    });
  }

  try {
    const supabase = getServerSupabase();
    const { data: flags, error } = await supabase
      .from('fraud_flags')
      .select('*')
      .eq('partner_code', code);

    if (error) {
      console.error('Error fetching fraud flags:', error);
      return res.status(500).json({ error: 'Failed to fetch fraud flags' });
    }

    return res.status(200).json({ flags: flags || [] });
  } catch (error) {
    console.error('Error in fraud flags handler:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}