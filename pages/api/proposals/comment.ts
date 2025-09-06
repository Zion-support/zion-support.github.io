import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../utils/supabase';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { proposalId, content, authorId } = req.body;
    
    if (!proposalId || !content || !authorId) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const supabase = getServerSupabase();
    
    const { data, error } = await supabase
      .from('proposal_comments')
      .insert({
        proposal_id: proposalId,
        content,
        author_id: authorId,
        created_at: new Date().toISOString()
      })
      .select()
      .single();

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    res.status(201).json({ 
      success: true, 
      comment: data 
    });
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to create comment' });
  }
}