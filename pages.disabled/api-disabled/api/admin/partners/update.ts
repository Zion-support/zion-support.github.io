import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../../utils/supabase/server';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { id, status, commission_rate, notes } = req.body;
    
    if (!id) {
      return res.status(400).json({ error: 'Partner ID is required' });
    }

    const supabase = getServerSupabase();
    const updates: any = {};
    
    if (status !== undefined) {
      updates.status = status;
    }
    
    if (commission_rate !== undefined) {
      updates.commission_rate = commission_rate;
    }
    
    if (notes !== undefined) {
      updates.notes = notes;
    }

    const { data, error } = await supabase
      .from('partners')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating partner:', error);
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json({ success: true, partner: data });
  } catch (error: any) {
    console.error('Error in partner update:', error);
    return res.status(500).json({ error: error.message });
  }
}