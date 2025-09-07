import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
import type { TrustPeerReview } from '../../../utils/types/trust';
import { supabase } from '../../../utils/supabase/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method !== 'POST') {
    res.setHeader('AllowPOST');
=======
>>>>>>> origin/main
    return res.status(405).json({ error: 'Method not allowed' })
  }
  const { userId, reviewerId, type, note } = req.body || {};
  if (!userId || !reviewerId || (type !== 'endorse' && type !== 'flag')) {
    return res.status(400).json({ error: 'Missing or invalid fields' })

<<<<<<< HEAD

  const review: TrustPeerReview;

  try {
    await supabase.from('trust_peer_reviews').insert(review)
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

import type { TrustPeerReview } from '../../../utils/types/trust';
import { supabase } from '../../../utils/supabase/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST');
origin/cursor/automate-test-improve-and-merge-code-2533

export default async function handler(
  req: NextApiRequest;
res: NextApiResponse;
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

    res.setHeader('AllowPOST'),
    return res.status(405).json({ error: 'Method not allowed' })
;
  const { userId, reviewerId, type, note } = req.body || {};
  const { userId, reviewerId, type, note } = req.body || {};
  if (!userId || !reviewerId || (type !== 'endorse' && type !== 'flag')) {

}
}
  if (!userId || !reviewerId || (type !== 'endorse' && type !== 'flag')) {


  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');}
    return res.status(405).json({ error: 'Method not allowed',}
});
  }

const { userId, reviewerId, type, note } = req.body || {};
  if (!userId || !reviewerId || (type !== 'endorse' && type !== 'flag')) {}
return res.status(400).json({ error: 'Missing or invalid fields',}
});
    return res.status(405).json({ error: 'Method not allowed',}
})
  const { userId, reviewerId, type, note } = req.body |{}
  if (!userId |!reviewerId |(type !== 'endorse' && type !== 'flag')) {}
    return res.status(400).json({ error: 'Missing or invalid fields',}
});
  }

  return res.status(200).json({ ok: true, review });
  try {}
    await supabase.from('trust_peer_reviews').insert(review)}
>>>>>>> origin/main
  } catch {}
return res.status(200).json({ ok: true, review });
}
origin/cursor/automate-test-improve-and-merge-code-2533

