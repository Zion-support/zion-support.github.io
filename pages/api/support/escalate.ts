import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../utils/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { ticketId, reason, priority } = req.body;
    
    if (!ticketId || !reason) {
      return res.status(400).json({ error: 'Ticket ID and reason are required' });
    }

    const supabase = getServerSupabase();
    
    const { data, error } = await supabase
      .from('support_tickets')
      .update({ 
        status: 'escalated',
        priority: priority || 'high',
        escalation_reason: reason,
        escalated_at: new Date().toISOString()
      })
      .eq('id', ticketId)
      .select()
      .single();

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    const id = data?.id || ticketId;
    res.status(200).json({ 
      ok: true, 
      id 
    });
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to escalate ticket' });
  }
}