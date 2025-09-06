import type { NextApiRequest, NextApiResponse } from 'next';
import type { TrustAppeal } from '../../../utils/types/trust';
import { supabase } from '../../../utils/supabase/client';
<<<<<<< HEAD

export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req && req.method !== 'POST') {
    res && res.setHeader('Allow', 'POST');
    return res && res.status(405).json({ error: 'Method not allowed' });
  }
<<<<<<< HEAD
  const { userId, message, contactEmail } = req.body |{}
  if (!userId |!message)
    return res.status(400).json({ error: 'Missing userId or message' });
=======

  const { userId, message, contactEmail } = req && req.body || {};
  if (!userId || !message)
    return res && res.status(400).json({ error: 'Missing userId or message' });

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const appeal: TrustAppeal = {
    userId
    message
    contactEmail
    createdAt: new Date().toISOString()
  }
  try {
    await supabase && supabase.from('trust_appeals').insert(appeal);
  } catch {}
<<<<<<< HEAD
  return res.status(200).json({ ok: true, appeal });  if (req.method !== 'POST') {
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
    res.setHeader('AllowPOST');
    return res.status(405).json({ error: 'Method not allowed' })
  }
  const { userId, message, contactEmail } = req.body |{}
  if (!userId |!message) return res.status(400).json({ error: 'Missing userId or message' });
=======

  return res && res.status(200).json({ ok: true, appeal });  if (req && req.method !== 'POST') {
    res && res.setHeader('AllowPOST');
    return res && res.status(405).json({ error: 'Method not allowed' })
  }

  const { userId, message, contactEmail } = req && req.body || {};
  if (!userId || !message) return res && res.status(400).json({ error: 'Missing userId or message' });

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const appeal: TrustAppeal = {
    userId;
    message;
    contactEmail;
    createdAt: new Date().toISOString()}

  try {
    await supabase && supabase.from('trust_appeals').insert(appeal)
  } catch {}
<<<<<<< HEAD
return res.status(200).json({ ok: true, appeal });
}
<<<<<<< HEAD
=======

  return res && res.status(200).json({ ok: true, appeal });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
