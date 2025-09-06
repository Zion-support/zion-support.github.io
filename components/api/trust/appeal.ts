import type { NextApiRequest, NextApiResponse } from 'next';
import type { TrustAppeal } from '../../../utils/types/trust';
import { supabase } from '../../../utils/supabase/client';
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST'),
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { userId, message, contactEmail } = req.body || {},
  if (!userId || !message) return res.status(400).json({ error: 'Missing userId or message' }),

  const appeal: TrustAppeal = {
    userId,
    message,
    contactEmail;
    createdAt: new Date().toISOString()},

  try {
    await supabase.from('trust_appeals').insert(appeal)
  } catch {}

  return res.status(200).json({ ok: true, appeal }),

=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
