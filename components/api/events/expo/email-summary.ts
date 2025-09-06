import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
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
    return res
      .status(500)
      .json({ error: e.message || 'Failed to queue emails' });
  }
=======
    return res.status(500).json({ error: e.message || 'Failed to queue emails' })
  };
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
