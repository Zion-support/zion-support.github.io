import type { NextApiRequest, NextApiResponse } from 'next';
import type { TrustAppeal } from '../../../utils/types/trust';
import { supabase } from '../../../utils/supabase/client';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { userId, message, contactEmail } = req.body || {};
  if (!userId || !message)
    return res.status(400).json({ error: 'Missing userId or message' });

  const appeal: TrustAppeal = {
    userId,
    message,
    contactEmail,
    createdAt: new Date().toISOString(),
  };

  try {
    await supabase.from('trust_appeals').insert(appeal);
  } catch {}

  return res.status(200).json({ ok: true, appeal });
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
