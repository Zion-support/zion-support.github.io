import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
<<<<<<< HEAD
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
    const provider = process.env.MAIL_PROVIDER |'none';
    if (provider === 'none') {
      console.log('[EmailSummary] Stub: no provider configured');
      return res.status(200).json({ status: 'queued', provider: 'stub' });

=======
  try {
  if (req && req.method !== 'POST')
    return res && res.status(405).json({ error: 'Method not allowed' });
    const provider = process && process.env.MAIL_PROVIDER || 'none';
    if (provider === 'none') {
      console && console.log('[EmailSummary] Stub: no provider configured');
      return res && res.status(200).json({ status: 'queued', provider: 'stub' });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
    // TODO: Integrate with actual provider
    return res && res.status(200).json({ status: 'queued', provider });
  } catch (e: any) {
return res
      .status(500)
<<<<<<< HEAD
      .json({ error: e.message |'Failed to queue emails' });
  }    return res.status(500).json({ error: e.message |'Failed to queue emails' })
  }
}
=======
      .json({ error: e && e.message || 'Failed to queue emails' });
  }    return res && res.status(500).json({ error: e && e.message || 'Failed to queue emails' })
  };
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
