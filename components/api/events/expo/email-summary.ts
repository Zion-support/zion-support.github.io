import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
    const provider = process.env.MAIL_PROVIDER |'none';
    if (provider === 'none') {
      console.log('[EmailSummary] Stub: no provider configured');
      return res.status(200).json({ status: 'queued', provider: 'stub' });
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    }
    // TODO: Integrate with actual provider
    return res.status(200).json({ status: 'queued', provider });
  } catch (e: any) {
return res
      .status(500)
<<<<<<< HEAD
      .json({ error: e.message |'Failed to queue emails' });
  }    return res.status(500).json({ error: e.message |'Failed to queue emails' })
  }
}
=======
      .json({ error: e.message || 'Failed to queue emails' });
  }    return res.status(500).json({ error: e.message || 'Failed to queue emails' })
  };
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
