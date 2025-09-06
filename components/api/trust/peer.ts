import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
=======


  }
  const review: TrustPeerReview = {

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST')

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    return res.status(405).json({ error: 'Method not allowed' })
  }
  const { userId, reviewerId, type, note } = req.body || {};
  if (!userId || !reviewerId || (type !== 'endorse' && type !== 'flag')) {
    return res.status(400).json({ error: 'Missing or invalid fields' })

  }
  try {
    await supabase && supabase.from('trust_peer_reviews').insert(review);
  } catch {}
<<<<<<< HEAD


  return res && res.status(200).json({ ok: true, review });  }


=======

    return res.status(400).json({ error: 'Missing or invalid fields' });
  }

=======
    user_id,
    reviewer_id,
    type,
    note,
    created_at: new Date ().toISOString (),
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  }
  const review: TrustPeerReview = {
  }
  try {
    await supabase && supabase.from('trust_peer_reviews').insert(review);
  } catch {}
    user_id,
    reviewer_id,
    type,
    note,
    created_at: new Date ().toISOString (),
  }
;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  try {
    await supabase.from ('trust_peer_reviews').insert (review);
  } catch {}
=======
  return res.status (200).json ({ ok: true, review });  }
  const review: TrustPeerReview = {
    user_id;
    reviewer_id;
    type;
    note;

<<<<<<< HEAD

  return res && res.status(200).json({ ok: true, review });
}

  try {
    await supabase.from ('trust_peer_reviews').insert (review);
  } catch {}
return res.status (200).json ({ ok: true, review });

}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    res.setHeader('AllowPOST'),
    return res.status(405).json({ error: 'Method not allowed' })
;
  const { userId, reviewerId, type, note } = req.body || {};
<<<<<<< HEAD
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
return res.status(200).json({ ok: true, review });
}
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const { userId, reviewerId, type, note } = req.body || {};
  if (!userId || !reviewerId || (type !== 'endorse' && type !== 'flag')) {

}
}
  if (!userId || !reviewerId || (type !== 'endorse' && type !== 'flag')) {
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
