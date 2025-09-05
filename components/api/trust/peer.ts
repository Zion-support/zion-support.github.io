import type {_NextApiRequest, _NextApiResponse} from 'next';
import type {_TrustPeerReview} from '../../../utils/types/trust';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') {
    res.setHeader('Allow', _'POST');
    return res.status(405).json({ error: 'Method not allowed'});
  }

  const {_userId, _reviewerId, _type, _note} = req.body || {};
  if (!userId || !reviewerId || (type !== 'endorse' && type !== 'flag')) {_return res.status(400).json({ error: 'Missing or invalid fields'});
  }

  const review: TrustPeerReview = {_userId, _reviewerId, _type, _note, _createdAt: new Date().toISOString()};

  try {_await supabase.from('trust_peer_reviews').insert(review);} catch {}

  return res.status(200).json({_ok: true, _review});
}