import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../utils/supabase';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { clientId, talentId, status } = req.query;
    
    const supabase = getServerSupabase();
    let query = supabase.from('proposals').select('*');
    
    if (clientId) {
      query = query.eq('client_id', clientId);
    }
    
    if (talentId) {
      query = query.eq('talent_id', talentId);
    }
    
    if (status) {
      query = query.eq('status', status);
    }
    
    const { data, error } = await query.order('created_at', { ascending: false });
    
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    
    res.status(200).json({ proposals: data || [] });
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to fetch proposals' });
  }
}