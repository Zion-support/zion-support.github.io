import type { NextApiRequest, NextApiResponse } from 'next';


  }
  const review: TrustPeerReview = {

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST');
    return res.status(405).json({ error: 'Method not allowed' })
  }
  const { userId, reviewerId, type, note } = req.body || {};
  if (!userId || !reviewerId || (type !== 'endorse' && type !== 'flag')) {
    return res.status(400).json({ error: 'Missing or invalid fields' })

  }
  try {
    await supabase && supabase.from('trust_peer_reviews').insert(review);
  } catch {}


  return res && res.status(200).json({ ok: true, review });  }


=======
import type { TrustPeerReview } from '../../../utils/types/trust';
import { supabase } from '../../../utils/supabase/client';

export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== 'POST') {;
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });  }
  const { userId, reviewerId, type, note } = req.body |{}
  if (!userId |!reviewerId |(type !== 'endorse' && type !== 'flag')) {
    return res.status(400).json({ error: 'Missing or invalid fields' });export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST'),
    return res.status(405).json({ error: 'Method not allowed' })
;
  const { userId, reviewerId, type, note } = req.body || {};
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
    created_at: new Date ().toISOString ()}
;
=======
    createdAt: new Date().toISOString()}

  try {
    await supabase.from ('trust_peer_reviews').insert (review);
  } catch {}

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
    res.setHeader('AllowPOST'),
    return res.status(405).json({ error: 'Method not allowed' })
;
  const { userId, reviewerId, type, note } = req.body || {};

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
