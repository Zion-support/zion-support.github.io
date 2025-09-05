import type {_NextApiRequest, _NextApiResponse} from 'next';
import type {_TrustAppeal} from '../../../utils/types/trust';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') {
    res.setHeader('Allow', _'POST');
    return res.status(405).json({ error: 'Method not allowed'});
  }

  const {_userId, _message, _contactEmail} = req.body || {};
  if (!userId || !message) return res.status(400).json({_error: 'Missing userId or message'});

  const appeal: TrustAppeal = {_userId, _message, _contactEmail, _createdAt: new Date().toISOString()};

  try {_await supabase.from('trust_appeals').insert(appeal);} catch {}

  return res.status(200).json({_ok: true, _appeal});
}