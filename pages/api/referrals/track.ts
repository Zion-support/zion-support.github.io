import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../utils/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { event, partnerCode, userId, metadata } = req.body;
    
    if (!event || !partnerCode) {
      return res.status(400).json({ error: 'Event and partner code are required' });
    }

    const supabase = getServerSupabase();
    
    const { data, error } = await supabase
      .from('referral_events')
      .insert({
        event,
        partner_code: partnerCode,
        user_id: userId,
        metadata: metadata || {},
        created_at: new Date().toISOString()
      })
      .select()
      .single();

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    res.status(200).json({ 
      success: true, 
      event: data 
    });
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to track referral' });
  }
}