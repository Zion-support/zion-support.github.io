import type { NextApiRequest, NextApiResponse } from 'next';
import type { TrustPeerReview } from '../../../utils/types/trust';
import { supabase } from '../../../utils/supabase/client';
<<<<<<< HEAD
<<<<<<< HEAD
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST');
=======
=======
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
<<<<<<< HEAD
    return res.status(405).json({ error: 'Method not allowed' });  }
  const { userId, reviewerId, type, note } = req.body |{}
  if (!userId |!reviewerId |(type !== 'endorse' && type !== 'flag')) {
    return res.status(400).json({ error: 'Missing or invalid fields' });export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST')
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
    return res.status(405).json({ error: 'Method not allowed' })
  const { userId, reviewerId, type, note } = req.body |{}
  if (!userId |!reviewerId |(type !== 'endorse' && type !== 'flag')) {
    return res.status(400).json({ error: 'Missing or invalid fields' });
  }
<<<<<<< HEAD
=======
    return res.status(405).json({ error: 'Method not allowed' });
 
}

  const { userId, reviewerId, type, note } = req.body || {};
  if (!userId || !reviewerId || (type !== 'endorse' && type !== 'flag')) {
    return res.status(400).json({ error: 'Missing or invalid fields' });
 
}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b

  const review: TrustPeerReview;
=======
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
<<<<<<< HEAD
  return res.status(200).json({ ok: true, review });  }
  const review: TrustPeerReview = {
    userId;
    reviewerId;
    type;
    note;
    createdAt: new Date().toISOString()}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  try {
    await supabase.from('trust_peer_reviews').insert(review)
  } catch {}
return res.status(200).json({ ok: true, review });
}
=======

  return res.status(200).json({ ok: true, review });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
