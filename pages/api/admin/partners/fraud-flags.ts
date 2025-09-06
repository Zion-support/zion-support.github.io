import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../../utils/supabase/server';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const code = req.query.code as string;
    const supabase = getServerSupabase();
    const { data: flags } = await supabase.from('fraud_flags').select().eq('partner_code', code);
    return res.status(200).json({ flags });
  } catch (e: any) {
    return res.status(500).json({ error: e?.message });
  }
}