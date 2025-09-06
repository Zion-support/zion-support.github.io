import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../utils/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { reviewId, action, reason } = req.body;
    
    if (!reviewId || !action) {
      return res.status(400).json({ error: 'Review ID and action are required' });
    }

    const supabase = getServerSupabase();
    
    const { data, error } = await supabase
      .from('reviews')
      .update({ 
        status: action,
        moderation_reason: reason,
        moderated_at: new Date().toISOString()
      })
      .eq('id', reviewId)
      .select()
      .single();

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    res.status(200).json({ 
      success: true, 
      review: data 
    });
  } catch (e: any) {
    res.status(500).json({ 
      error: 'Internal server error', 
      details: e?.message 
    });
  }
}