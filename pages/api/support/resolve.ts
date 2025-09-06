import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../utils/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'PATCH') {
    res.setHeader('Allow', 'PATCH');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { ticketId, resolution } = req.body;
    
    if (!ticketId) {
      return res.status(400).json({ error: 'Ticket ID is required' });
    }

    const supabase = getServerSupabase();
    
    const { data, error } = await supabase
      .from('support_tickets')
      .update({ 
        status: 'resolved',
        resolution: resolution || 'Issue resolved',
        resolved_at: new Date().toISOString()
      })
      .eq('id', ticketId)
      .select()
      .single();

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    res.status(200).json({ ok: true });
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to resolve ticket' });
  }
}