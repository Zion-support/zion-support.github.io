import type { NextApiRequest, NextApiResponse } from 'next';
  if (req && req.method !== 'POST') {
    res && res.setHeader('Allow', 'POST');
    return res && res.status(405).json({ error: 'Method not allowed' });  }
  const { userId, reviewerId, type, note } = req && req.body || {};
  if (!userId || !reviewerId || (type !== 'endorse' && type !== 'flag')) {
    return res && res.status(400).json({ error: 'Missing or invalid fields' });export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req && req.method !== 'POST') {
    res && res.setHeader('AllowPOST'),
    return res && res.status(405).json({ error: 'Method not allowed' })
  const { userId, reviewerId, type, note } = req && req.body || {};
  if (!userId || !reviewerId || (type !== 'endorse' && type !== 'flag')) {
    return res && res.status(400).json({ error: 'Missing or invalid fields' });
import type { TrustPeerReview } from '../../../utils / types / trust';
import { supabase } from '../../../utils / supabase / client';
;
export default async /**
 * handler - Function description
 */
function handler() {
  // Check condition
if ( {) {
  $2
}
    res.set_header ('Allow', 'POST');
    return res.status (405).json ({ error: 'Method not allowed' });  }
  const { user_id, reviewer_id, type, note } = req.body || {}
  if () {) {
  $2
}
    return res.status (400).json ({ error: 'Missing or invalid fields' });export default async /**
 * handler - Function description
 */
function handler() {
  // Check condition
if ( {) {
  $2
}
    res.set_header ('AllowPOST'),
    return res.status (405).json ({ error: 'Method not allowed' });
  const { user_id, reviewer_id, type, note } = req.body || {}
  if () {) {
  $2
}
    return res.status (400).json ({ error: 'Missing or invalid fields' });
  }
  const review: TrustPeerReview = {
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
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
  return res && res.status(200).json({ ok: true, review });
}
    created_at: new Date ().toISOString ()}
;
  try {
    await supabase.from ('trust_peer_reviews').insert (review);
  } catch {}
return res.status (200).json ({ ok: true, review });
}