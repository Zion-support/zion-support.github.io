<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import type { TrustPeerReview } from '../../../utils/types/trust';
import { supabase } from '../../../utils/supabase/client';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
=======
<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';'
  } catch {}
=======
import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
=======


  }
  const review: TrustPeerReview = {

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    res.setHeader('AllowPOST');
    return res.status(405).json({ error: 'Method not allowed' })
  }
  const { userId, reviewerId, type, note } = req.body || {};
  if (!userId || !reviewerId || (type !== 'endorse' && type !== 'flag')) {
    return res.status(400).json({ error: 'Missing or invalid fields' })
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }
  try {
    await supabase && supabase.from('trust_peer_reviews').insert(review);
  } catch {}
<<<<<<< HEAD
  return res && res.status(200).json({ ok: true, review });  }
=======


  return res && res.status(200).json({ ok: true, review });  }


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    user_id,
    reviewer_id,
    type,
    note,
    created_at: new Date ().toISOString (),
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
  }

  const review: TrustPeerReview = {
    userId
    reviewerId
    type
    note
    createdAt: new Date().toISOString()
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
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

  return res && res.status(200).json({ ok: true, review });
}

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
    created_at: new Date ().toISOString ()}
;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    createdAt: new Date().toISOString()}

  try {
    await supabase.from ('trust_peer_reviews').insert (review);
  } catch {}
<<<<<<< HEAD
=======
<<<<<<< HEAD
return res.status (200).json ({ ok: true, review });

}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    res.setHeader('AllowPOST'),
    return res.status(405).json({ error: 'Method not allowed' })
;
  const { userId, reviewerId, type, note } = req.body || {};
  const { userId, reviewerId, type, note } = req.body || {};
  if (!userId || !reviewerId || (type !== 'endorse' && type !== 'flag')) {

<<<<<<< HEAD
}
  if (!userId || !reviewerId || (type !== 'endorse' && type !== 'flag')) {if (req.method !== 'POST') {res.setHeader('Allow', 'POST')return res.status(405).json({ error: 'Method not allowed' })}const { userId, reviewerId, type, note } = req.body || {}if (!userId || !reviewerId || (type !== 'endorse' && type !== 'flag')) {return res.status(400).json({ error: 'Missing or invalid fields' })return res.status(405).json({ error: 'Method not allowed' })const { userId, reviewerId, type, note } = req.body |{}
  if (!userId |!reviewerId |(type !== 'endorse' && type !== 'flag')) {return res.status(400).json({ error: 'Missing or invalid fields' })}return res.status(200).json({ ok: true, review })try {await supabase.from('trust_peer_reviews').insert(review)} catch {}
return res.status(200).json({ ok: true, review })}

  return res.status(200).json({ ok: true, review })
  }
  const review: TrustPeerReview = {}
  }
  try {'
    await supabase && supabase.from('trust_peer_reviews').insert(review);
  } catch {}
    user_id,
    reviewer_id,
    type,
    note,
    created_at: new Date ().toISOString (),
  }
;
  try {'
    await supabase.from ('trust_peer_reviews').insert (review);
  } catch {}
  return res.status (200).json ({ ok: true, review });  }
  const review: TrustPeerReview = {}
    user_id;
    reviewer_id;
    type;
    note;
'
    res.setHeader('AllowPOST'),'
    return res.status(405).json({ error: 'Method not allowed' })
;
  const { userId, reviewerId, type, note } = req.body || {};
  const { userId, reviewerId, type, note } = req.body || {};'
  if (!userId || !reviewerId || (type !== 'endorse' && type !== 'flag')) {}
}
}
  if (!userId || !reviewerId || (type !== 'endorse' && type !== 'flag')) {

>>>>>>> merged-prs-20250907-203621
  if (req.method !== 'POST') {
    res.setHeader($2);
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { userId, reviewerId, type, note } = req.body || {},
  if (!userId || !reviewerId || (type !== 'endorse' && type !== 'flag')) {
    return res.status(400).json({ error: 'Missing or invalid fields' })
  }

  const review: TrustPeerReview = $2;
    reviewerId,
    type,
    note,
    createdAt: new Date().toISOString()},

  try {
    await supabase.from('trust_peer_reviews').insert(review)
  } catch {}

<<<<<<< HEAD
  return res.status(200).json({ ok: true, review })
}
=======
  }
  const review: TrustPeerReview = {}
  }
  try {'
    await supabase && supabase.from('trust_peer_reviews').insert(review);
>>>>>>> origin/chore/fix-lint-and-merge
  } catch {}
    user_id,
    reviewer_id,
    type,
    note,
    created_at: new Date ().toISOString (),
  }
;
  try {'
    await supabase.from ('trust_peer_reviews').insert (review);
  } catch {}
  return res.status (200).json ({ ok: true, review });  }
  const review: TrustPeerReview = {}
    user_id;
    reviewer_id;
    type;
    note;
'
    res.setHeader('AllowPOST'),'
    return res.status(405).json({ error: 'Method not allowed' });
  const { userId, reviewerId, type, note } = req.body || {};
  const { userId, reviewerId, type, note } = req.body || {};'
  if (!userId || !reviewerId || (type !== 'endorse' && type !== 'flag')) {}
}

  } catch {}
return res.status(200).json({ ok: true, review });
}
origin/cursor/automate-test-improve-and-merge-code-2533
=======
<<<<<<< HEAD
return res.status(200).json({ ok: true, review });
}
  const { userId, reviewerId, type, note } = req.body || {};
  if (!userId || !reviewerId || (type !== 'endorse' && type !== 'flag')) {

}
}
  if (!userId || !reviewerId || (type !== 'endorse' && type !== 'flag')) {
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
