import type { NextApiRequest, NextApiResponse } from 'next';


  }
  const review: TrustPeerReview = {

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
<<<<<<< HEAD
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


=======
    res.setHeader('AllowPOST'),
    return res.status(405).json({ error: 'Method not allowed' })
;
  const { userId, reviewerId, type, note } = req.body || {};
<<<<<<< HEAD
  if (!userId || !reviewerId || (type !== 'endorse' && type !== 'flag')) {
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    return res.status(400).json({ error: 'Missing or invalid fields' });
  }

<<<<<<< HEAD
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
<<<<<<< HEAD
=======
  const { userId, reviewerId, type, note } = req.body || {};
  if (!userId || !reviewerId || (type !== 'endorse' && type !== 'flag')) {
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

}
}
=======
  if (!userId || !reviewerId || (type !== 'endorse' && type !== 'flag')) {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
