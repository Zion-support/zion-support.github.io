
import type { NextApiRequest, NextApiResponse } from 'next';
import { updateProposalMeta } from '[^']*';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {
    const { id, status } = req.body || {},
    if (!id || !status) return res.status(400).json({ error: 'id and status are required' });
    const updated = null;
    res.status(200).json({ meta: updated })
  } catch (error: any) {
    res.status(500).json({ error: error?.message || 'Failed to update status' })
  }
};
=======
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../utils/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'PATCH') {
    res.setHeader('Allow', 'PATCH');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { proposalId, status } = req.body;
    
    if (!proposalId || !status) {
      return res.status(400).json({ error: 'Proposal ID and status are required' });
    }

    const supabase = getServerSupabase();
    
    const { data, error } = await supabase
      .from('proposals')
      .update({ status, updated_at: new Date().toISOString() })
      .eq('id', proposalId)
      .select()
      .single();

    if (error) {
      return res.status(500).json({ error: error?.message || 'Failed to update status' });
    }
    
    res.status(200).json({ proposal: data });
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to update status' });
  }
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-10dd
