import type { NextApiRequest, NextApiResponse } from 'next';
import type { TrustAppeal } from '../../../utils/types/trust';
import { supabase } from '../../../utils/supabase/client';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
<<<<<<< HEAD
=======
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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

<<<<<<< HEAD
  return res.status(200).json({ ok: true, appeal });
=======
  return res.status(200).json({ ok: true, appeal });
<<<<<<< HEAD
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST');
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { userId, message, contactEmail } = req.body || {};
  if (!userId || !message) return res.status(400).json({ error: 'Missing userId or message' });

  const appeal: TrustAppeal = {
    userId;
    message;
    contactEmail;
    createdAt: new Date().toISOString()};

  try {
    await supabase.from('trust_appeals').insert(appeal)
  } catch {}

  return res.status(200).json({ ok: true, appeal });
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
