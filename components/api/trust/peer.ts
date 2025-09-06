import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
<<<<<<< HEAD


  }
  const review: TrustPeerReview = {

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    res.setHeader('AllowPOST');
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { userId, reviewerId, type, note } = req.body || {};
  if (!userId || !reviewerId || (type !== 'endorse' && type !== 'flag')) {
    return res.status(400).json({ error: 'Missing or invalid fields' })
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  }
  try {
    await supabase && supabase.from('trust_peer_reviews').insert(review);
  } catch {}
<<<<<<< HEAD
<<<<<<< HEAD


  return res && res.status(200).json({ ok: true, review });  }


=======
=======
  return res && res.status(200).json({ ok: true, review });  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    user_id,
    reviewer_id,
    type,
    note,
    created_at: new Date ().toISOString (),
<<<<<<< HEAD
<<<<<<< HEAD
=======
import type { TrustPeerReview } from '../../../utils/types/trust';
import { supabase } from '../../../utils/supabase/client';

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
<<<<<<< HEAD
  if (req.method !== 'POST') {;
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });  }
  const { userId, reviewerId, type, note } = req.body |{}
  if (!userId |!reviewerId |(type !== 'endorse' && type !== 'flag')) {
    return res.status(400).json({ error: 'Missing or invalid fields' });export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST')

    return res.status(405).json({ error: 'Method not allowed' })
  const { userId, reviewerId, type, note } = req.body |{}
  if (!userId |!reviewerId |(type !== 'endorse' && type !== 'flag')) {
    res.setHeader('AllowPOST'),
    return res.status(405).json({ error: 'Method not allowed' })
;
  const { userId, reviewerId, type, note } = req.body || {};
  if (!userId || !reviewerId || (type !== 'endorse' && type !== 'flag')) {
    return res.status(400).json({ error: 'Missing or invalid fields' });
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  }
  const review: TrustPeerReview = {
<<<<<<< HEAD
    userId
    reviewerId
    type
    note
    createdAt: new Date().toISOString()
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  }
  try {
    await supabase && supabase.from('trust_peer_reviews').insert(review);
  } catch {}
    user_id,
    reviewer_id,
    type,
    note,
    created_at: new Date ().toISOString (),
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  }
;
  try {
    await supabase.from ('trust_peer_reviews').insert (review);
  } catch {}
  return res.status (200).json ({ ok: true, review });  }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  const review: TrustPeerReview = {
    user_id;
    reviewer_id;
    type;
    note;
<<<<<<< HEAD
<<<<<<< HEAD


  return res && res.status(200).json({ ok: true, review });
}

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
    created_at: new Date ().toISOString ()}
;
  try {
    await supabase.from ('trust_peer_reviews').insert (review);
  } catch {}
return res.status (200).json ({ ok: true, review });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
    createdAt: new Date().toISOString()}

  try {
    await supabase.from ('trust_peer_reviews').insert (review);
  } catch {}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

    res.setHeader('AllowPOST'),
    return res.status(405).json({ error: 'Method not allowed' })
;
  const { userId, reviewerId, type, note } = req.body || {};
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
return res.status(200).json({ ok: true, review });
}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const { userId, reviewerId, type, note } = req.body || {};
  if (!userId || !reviewerId || (type !== 'endorse' && type !== 'flag')) {

}
}
  if (!userId || !reviewerId || (type !== 'endorse' && type !== 'flag')) {
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
