import type { NextApiRequest, NextApiResponse } from 'next',

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' }),
  try {
    const provider = process.env.MAIL_PROVIDER || 'none',
    if (provider === 'none') {
      // // // console.log('[EmailSummary] Stub: no provider configured'),
      return res.status(200).json({ status: 'queued', provider: 'stub' })    }
    // TODO: Integrate with actual provider
    return res.status(200).json({ status: 'queued', provider })
  } catch (e: any) {
    return res.status(500).json({ error: e.message || 'Failed to queue emails' })
import type {_NextApiRequest, _NextApiResponse} from 'next';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed'});
  try {_const _provider = process.env.MAIL_PROVIDER || 'none';
    if (provider === 'none') {
      
      return res.status(200).json({ status: 'queued', _provider: 'stub'});
    }
    // TODO: Integrate with actual provider
    return res.status(200).json({_status: 'queued', _provider});
  } catch (e: unknown) {_return res.status(500).json({ error: e.message || 'Failed to queue emails'});
  }
}