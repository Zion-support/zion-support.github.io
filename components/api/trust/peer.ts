<<<<<<< HEAD


=======
import type { NextApiRequest, NextApiResponse } from 'next';
import type { TrustPeerReview } from '../../../utils/types/trust';
import { supabase } from '../../../utils/supabase/client';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    res.setHeader('AllowPOST');
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
import type { TrustPeerReview } from '../../../utils/types/trust';
import { supabase } from '../../../utils/supabase/client';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
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
    created_at: new Date ().toISOString ()}
;
>>>>>>> origin/cursor/delete-old-data-records-6bba
    createdAt: new Date().toISOString()}

  try {
    await supabase.from ('trust_peer_reviews').insert (review);
  } catch {}

<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    res.setHeader('AllowPOST'),
    return res.status(405).json({ error: 'Method not allowed' })
;
  const { userId, reviewerId, type, note } = req.body || {};
  const { userId, reviewerId, type, note } = req.body || {};
  if (!userId || !reviewerId || (type !== 'endorse' && type !== 'flag')) {

<<<<<<< HEAD
=======
}
  if (!userId || !reviewerId || (type !== 'endorse' && type !== 'flag')) {if (req.method !== 'POST') {res.setHeader('Allow', 'POST')return res.status(405).json({ error: 'Method not allowed' })}const { userId, reviewerId, type, note } = req.body || {}if (!userId || !reviewerId || (type !== 'endorse' && type !== 'flag')) {return res.status(400).json({ error: 'Missing or invalid fields' })return res.status(405).json({ error: 'Method not allowed' })const { userId, reviewerId, type, note } = req.body |{}
  if (!userId |!reviewerId |(type !== 'endorse' && type !== 'flag')) {return res.status(400).json({ error: 'Missing or invalid fields' })}return res.status(200).json({ ok: true, review })try {await supabase.from('trust_peer_reviews').insert(review)} catch {}
return res.status(200).json({ ok: true, review })}
>>>>>>> origin/cursor/delete-old-data-records-6bba

  }
  const review: TrustPeerReview = {}
  }
  try {'
    await supabase && supabase.from('trust_peer_reviews').insert(review);

<<<<<<< HEAD
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


return res.status(200).json({ ok: true, review });
}
  const { userId, reviewerId, type, note } = req.body || {};
  if (!userId || !reviewerId || (type !== 'endorse' && type !== 'flag')) {

}
}
  if (!userId || !reviewerId || (type !== 'endorse' && type !== 'flag')) {

  return res.status(200).json({ ok: true, review })
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
