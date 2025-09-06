<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
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
}
=======
 
}// TODO: Integrate with actual provider return res.status (200) .json ({
  status: 'queued', provider 
}) 
}catch (e: any) {
  return res.status (500) .json ({
  error: e.message || 'Failed to queue emails' 
}) 
}
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
