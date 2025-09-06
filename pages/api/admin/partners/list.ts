import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../../utils/supabase/server';
export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    const usingPlaceholder = true; // Mock implementation
    const supabase = getServerSupabase();
    const { data } = await supabase.from('partners').select();
    return res.status(200).json({ partners: data });
  } catch (e: any) {
    return res.status(500).json({ error: e?.message });
  }
}