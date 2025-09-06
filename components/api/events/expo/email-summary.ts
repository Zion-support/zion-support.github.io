import type { NextApiRequest, NextApiResponse } from 'next';
  try {
    const provider = process.env.MAIL_PROVIDER || 'none',
    if (provider === 'none') {
      console.log('[EmailSummary] Stub: no provider configured'),
      return res.status(200).json({ status: 'queued', provider: 'stub' })
    }
    // TODO: Integrate with actual provider
    return res.status(200).json({ status: 'queued', provider })
  } catch (e: any) {

=======
    return res.status(500).json({ error: e.message || 'Failed to queue emails' })
  },
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
