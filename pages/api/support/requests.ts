import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../utils/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const { status, priority } = req.query;
      
      const supabase = getServerSupabase();
      let query = supabase.from('support_tickets').select('*');
      
      if (status) {
        query = query.eq('status', status);
      }
      
      if (priority) {
        query = query.eq('priority', priority);
      }
      
      const { data, error } = await query.order('created_at', { ascending: false });
      
      if (error) {
        return res.status(500).json({ error: error.message });
      }
      
      res.status(200).json({ tickets: data || [] });
    } catch (e: any) {
      res.status(500).json({ error: e?.message || 'Failed to fetch requests' });
    }
  } else if (req.method === 'POST') {
    try {
      const { subject, description, priority, userId } = req.body;
      
      if (!subject || !description) {
        return res.status(400).json({ error: 'Subject and description are required' });
      }

      const supabase = getServerSupabase();
      
      const { data, error } = await supabase
        .from('support_tickets')
        .insert({
          subject,
          description,
          priority: priority || 'medium',
          user_id: userId,
          status: 'open',
          created_at: new Date().toISOString()
        })
        .select()
        .single();

      if (error) {
        return res.status(500).json({ error: error.message });
      }

      res.status(201).json({ ticket: data });
    } catch (e: any) {
      res.status(500).json({ error: e?.message || 'Failed to create request' });
    }
  } else {
    res.setHeader('Allow', 'GET, POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }
}