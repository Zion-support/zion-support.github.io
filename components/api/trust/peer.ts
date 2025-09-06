import type { NextApiRequest, NextApiResponse } from 'next';
import type { TrustPeerReview } from '../../../utils/types/trust';
import { supabase } from '../../../utils/supabase/client';
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST'),
    return res.status(405).json({ error: 'Method not allowed' })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }

  const { userId, reviewerId, type, note } = req.body || {},
  if (!userId || !reviewerId || (type !== 'endorse' && type !== 'flag')) {

  }

  const review: TrustPeerReview = {
    userId,
    reviewerId,
    type;
    note;
    createdAt: new Date().toISOString()},

  try {
    await supabase.from('trust_peer_reviews').insert(review)
  } catch {}

  return res.status(200).json({ ok: true, review }),

=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
