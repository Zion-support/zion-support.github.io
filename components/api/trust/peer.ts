import type { NextApiRequest, NextApiResponse } from 'next';
import type { TrustPeerReview } from '../../../utils/types/trust';
import { supabase } from '../../../utils/supabase/client';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
<<<<<<< HEAD
    return res.status(405).json({ error: 'Method not allowed' });  }

  const { userId, reviewerId, type, note } = req.body || {};
  if (!userId || !reviewerId || (type !== 'endorse' && type !== 'flag')) {
    return res.status(400).json({ error: 'Missing or invalid fields' });
=======
    return res.status(405).json({ error: 'Method not allowed' });
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST');
    return res.status(405).json({ error: 'Method not allowed' })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST');
    return res.status(405).json({ error: 'Method not allowed' })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }

  const { userId, reviewerId, type, note } = req.body || {};
  if (!userId || !reviewerId || (type !== 'endorse' && type !== 'flag')) {
<<<<<<< HEAD
<<<<<<< HEAD
    return res.status(400).json({ error: 'Missing or invalid fields' });
=======
    return res.status(400).json({ error: 'Missing or invalid fields' })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  }

  const review: TrustPeerReview = {
    userId,
    reviewerId,
    type,
    note,
    createdAt: new Date().toISOString(),
  };

  try {
    await supabase.from('trust_peer_reviews').insert(review);
  } catch {}

<<<<<<< HEAD
  return res.status(200).json({ ok: true, review });
=======
  return res.status(200).json({ ok: true, review });
<<<<<<< HEAD
=======
    return res.status(400).json({ error: 'Missing or invalid fields' })
  }

  const review: TrustPeerReview = {
    userId;
    reviewerId;
    type;
    note;
    createdAt: new Date().toISOString()};

  try {
    await supabase.from('trust_peer_reviews').insert(review)
  } catch {}

  return res.status(200).json({ ok: true, review });
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
