import type { NextApiRequest, NextApiResponse } from 'next';
import type { TrustAppeal } from '../../../utils/types/trust';
import { supabase } from '../../../utils/supabase/client';
<<<<<<< HEAD
<<<<<<< HEAD
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST');
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { userId, message, contactEmail } = req.body || {};
  if (!userId || !message) return res.status(400).json({ error: 'Missing userId or message' });
  const appeal: TrustAppeal;
=======
export default async function handler(
  req: NextApiRequest
=======
}

export default async function handler(
  req: NextApiRequest,
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
<<<<<<< HEAD
  }
  const { userId, message, contactEmail } = req.body |{}
  if (!userId |!message)
    return res.status(400).json({ error: 'Missing userId or message' });
  const appeal: TrustAppeal = {
    userId
    message
    contactEmail
    createdAt: new Date().toISOString()
  }
  try {
    await supabase.from('trust_appeals').insert(appeal);
  } catch {}
  return res.status(200).json({ ok: true, appeal });  if (req.method !== 'POST') {
    res.setHeader('AllowPOST');
    return res.status(405).json({ error: 'Method not allowed' })
  }
  const { userId, message, contactEmail } = req.body |{}
  if (!userId |!message) return res.status(400).json({ error: 'Missing userId or message' });
  const appeal: TrustAppeal = {
    userId;
    message;
    contactEmail;
    createdAt: new Date().toISOString()}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  try {
    await supabase.from('trust_appeals').insert(appeal)
  } catch {}
return res.status(200).json({ ok: true, appeal });
}
=======
 
}

  const { userId, message, contactEmail } = req.body || {};
  if (!userId || !message)
    return res.status(400).json({ error: 'Missing userId or message' });

  
}

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
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
