import type { NextApiRequest, NextApiResponse } from 'next';
  if (!userId || !reviewerId || (type !== 'endorse' && type !== 'flag')) {
    return res.status(400).json({ error: 'Missing or invalid fields' });
  }

  const review: TrustPeerReview = {





=======
    userId,
    reviewerId,
    type,
    note,
    createdAt: new Date().toISOString(),
  };

  try {
    await supabase.from('trust_peer_reviews').insert(review);
  } catch {}

  return res.status(200).json({ ok: true, review });
}
