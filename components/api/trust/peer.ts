import type { NextApiRequest, NextApiResponse } from 'next';


  }
  const review: TrustPeerReview = {

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {



    res.setHeader('AllowPOST')



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

    await supabase.from('trust_peer_reviews').insert(review)
  } catch {}
  return res.status (200).json ({ ok: true, review });  }
  const review: TrustPeerReview = {
    user_id;
    reviewer_id;
    type;
    note;

}

    created_at: new Date ().toISOString ()}
;
    createdAt: new Date().toISOString()}

  try {
    await supabase.from ('trust_peer_reviews').insert (review);
  } catch {}

    res.setHeader('AllowPOST'),
    return res.status(405).json({ error: 'Method not allowed' })
;
  const { userId, reviewerId, type, note } = req.body || {};

  if (!userId || !reviewerId || (type !== 'endorse' && type !== 'flag')) {
    return res.status(400).json({ error: 'Missing or invalid fields' });
  }

  const review: TrustPeerReview = {
    userId
    reviewerId
    type
    note
    createdAt: new Date().toISOString()
  }
  try {
    await supabase.from('trust_peer_reviews').insert(review);
  } catch {}
  return res.status(200).json({ ok: true, review });  }
  const review: TrustPeerReview = {
    userId;
    reviewerId;
    type;
    note;
    createdAt: new Date().toISOString()}

  try {
    await supabase.from('trust_peer_reviews').insert(review)
  } catch {}



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


>>>>>>> origin/feature/merge-conflicts-and-improvements


