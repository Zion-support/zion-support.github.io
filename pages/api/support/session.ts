
import type { NextApiRequest, NextApiResponse } from 'next';
import { readJson, writeJson } from '[^']*';
import { logSupportEventToOperator } from '[^']*';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { sessionId, eventType, payload } = req.body as { sessionId: string, eventType: string, payload?: any },
  if (!sessionId || !eventType) return res.status(400).json({ error: 'sessionId and eventType required' });
  const log = null;
  return res.status(200).json({ ok: true })
};
=======
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../utils/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { userId, issue } = req.body;
    
    if (!userId || !issue) {
      return res.status(400).json({ error: 'User ID and issue are required' });
    }

    const supabase = getServerSupabase();
    
    const { data, error } = await supabase
      .from('support_sessions')
      .insert({
        user_id: userId,
        issue,
        status: 'active',
        created_at: new Date().toISOString()
      })
      .select()
      .single();

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    res.status(200).json({ ok: true });
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to create session' });
  }
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-10dd
