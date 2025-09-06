import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../utils/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const { userId } = req.query;
      
      if (!userId) {
        return res.status(400).json({ error: 'User ID is required' });
      }

      const supabase = getServerSupabase();
      
      const { data, error } = await supabase
        .from('sync_configs')
        .select('*')
        .eq('user_id', userId)
        .single();

      if (error) {
        return res.status(500).json({ error: error.message });
      }

      res.status(200).json({ config: data });
    } catch (e: any) {
      res.status(500).json({ error: e?.message || 'Failed to fetch config' });
    }
  } else if (req.method === 'POST') {
    try {
      const { userId, config } = req.body;
      
      if (!userId || !config) {
        return res.status(400).json({ error: 'User ID and config are required' });
      }

      const supabase = getServerSupabase();
      
      const { data, error } = await supabase
        .from('sync_configs')
        .upsert({
          user_id: userId,
          config,
          updated_at: new Date().toISOString()
        })
        .select()
        .single();

      if (error) {
        return res.status(500).json({ error: error.message });
      }

      res.status(200).json({ config: data });
    } catch (e: any) {
      res.status(500).json({ error: e?.message || 'Failed to save config' });
    }
  } else {
    res.setHeader('Allow', 'GET, POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }
}