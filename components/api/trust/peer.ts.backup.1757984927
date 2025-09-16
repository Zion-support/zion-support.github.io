import type { NextApiRequest, NextApiResponse } from 'next';
  if (!userId || !reviewerId || (type !== 'endorse' && type !== 'flag')) {
    return res.status(400).json({ error: 'Missing or invalid fields' });
  }

  const review: TrustPeerReview = {

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


>>>>>>> origin/feature/merge-conflicts-and-improvements


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
>>>>>>> origin/auto/autonomy-17186719616
