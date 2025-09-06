import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../utils/supabase';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { title, description, clientId, talentId, budget } = req.body;
    
    if (!title || !description || !clientId || !talentId || !budget) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const supabase = getServerSupabase();
    
    const { data, error } = await supabase
      .from('proposals')
      .insert({
        title,
        description,
        client_id: clientId,
        talent_id: talentId,
        budget,
        status: 'draft',
        created_at: new Date().toISOString()
      })
      .select()
      .single();

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    res.status(201).json({ 
      success: true, 
      proposal: data 
    });
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to submit proposal' });
  }
}