import type { NextApiRequest, NextApiResponse } from 'next';

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
<<<<<<< HEAD
=======
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  try {
    const provider = process.env.MAIL_PROVIDER || 'none';
    if (provider === 'none') {
      console.log('[EmailSummary] Stub: no provider configured');
      return res.status(200).json({ status: 'queued', provider: 'stub' });
    }
    // TODO: Integrate with actual provider
    return res.status(200).json({ status: 'queued', provider });
  } catch (e: any) {
<<<<<<< HEAD
    return res
      .status(500)
      .json({ error: e.message || 'Failed to queue emails' });
  }
=======
<<<<<<< HEAD
    return res
      .status(500)
      .json({ error: e.message || 'Failed to queue emails' });
  }
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {
    const provider = process.env.MAIL_PROVIDER || 'none';
    if (provider === 'none') {
      console.log('[EmailSummary] Stub: no provider configured'),
      return res.status(200).json({ status: 'queued', provider: 'stub' })
    }
    // TODO: Integrate with actual provider
    return res.status(200).json({ status: 'queued', provider })
  } catch (e: any) {
    return res.status(500).json({ error: e.message || 'Failed to queue emails' })
  };
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    return res.status(500).json({ error: e.message || 'Failed to queue emails' })
  };
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
