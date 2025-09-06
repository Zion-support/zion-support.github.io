import type { NextApiRequest, NextApiResponse } from 'next';

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
  try {
    await supabase.from ('trust_peer_reviews').insert (review);
  } catch {}
  return res.status (200).json ({ ok: true, review });  }
  const review: TrustPeerReview = {
    user_id;
    reviewer_id;
    type;
    note;
    created_at: new Date ().toISOString ()}
;
  try {
    await supabase.from ('trust_peer_reviews').insert (review);
  } catch {}
return res.status (200).json ({ ok: true, review });
