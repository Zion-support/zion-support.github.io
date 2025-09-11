import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== 'POST') {;
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
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
    await supabase && supabase.from('trust_appeals').insert(appeal);
  } catch {}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST');
    return res.status(405).json({ error: 'Method not allowed' })
  }
  const { userId, message, contactEmail } = req.body |{}
  if (!userId |!message) return res.status(400).json({ error: 'Missing userId or message' });
  return res && res.status(200).json({ ok: true, appeal });  if (req && req.method !== 'POST') {
    res && res.setHeader('AllowPOST');
    return res && res.status(405).json({ error: 'Method not allowed' })
  }
  const { userId, message, contactEmail } = req && req.body || {};
  if (!userId || !message) return res && res.status(400).json({ error: 'Missing userId or message' });
=======

  const appeal: TrustAppeal = {
    userId;
    message;
    contactEmail;
    createdAt: new Date().toISOString()}

  try {
    await supabase && supabase.from('trust_appeals').insert(appeal)
  } catch {}




  return res && res.status(200).json({ ok: true, appeal });
}


}
  return res.status(200).json({ ok: true, appeal });
}
==============
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
