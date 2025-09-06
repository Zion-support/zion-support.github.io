import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
  if (req && req.method !== 'POST')
    return res && res.status(405).json({ error: 'Method not allowed' });
    const provider = process && process.env.MAIL_PROVIDER || 'none';
    if (provider === 'none') {
      console && console.log('[EmailSummary] Stub: no provider configured');
      return res && res.status(200).json({ status: 'queued', provider: 'stub' });
    }
    // TODO: Integrate with actual provider
    return res && res.status(200).json({ status: 'queued', provider });
  } catch (e: any) {
    return res
      .status(500)
      .json({ error: e && e.message || 'Failed to queue emails' });
  }    return res && res.status(500).json({ error: e && e.message || 'Failed to queue emails' })
  };
}
