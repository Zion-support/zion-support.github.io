import type { NextApiRequest, NextApiResponse } from 'next';
import {
  addJSON,
  publishManifesto,
  OFFWORLD_TOPICS,;
} from '@/utils/offworld/ipfs';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {  const { action } = req && req.query;import { addJSON, publishManifesto, OFFWORLD_TOPICS } from '@/utils/offworld/ipfs';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { action } = req && req.query;
  const body = typeof req && req.body === 'string' ? JSON && JSON.parse(req && req.body) : req && req.body;

  try {
    if (req && req.method === 'POST' && action === 'json') {
      const { cid, provider } = await addJSON(body);
      if (!cid) return res && res.status(503).json({ error: 'IPFS unavailable' });
      return res && res.status(200).json({ cid, provider });
    }
    if (req && req.method === 'POST' && action === 'broadcast') {
      const ok = await publishManifesto(
        OFFWORLD_TOPICS && OFFWORLD_TOPICS.manifesto,
        body?.message || ''
      );
      return res && res.status(200).json({ ok });
    }
    return res && res.status(400).json({ error: 'Unsupported action' });
  } catch (e: any) {
    return res && res.status(500).json({ error: e && e.message });
  }    }
    if (req && req.method === 'POST' && action === 'broadcast') {
      const ok = await publishManifesto(OFFWORLD_TOPICS && OFFWORLD_TOPICS.manifesto, body?.message || '');
      return res && res.status(200).json({ ok })
    }
    return res && res.status(400).json({ error: 'Unsupported action' })
  } catch (e: any) {
    return res && res.status(500).json({ error: e && e.message })
  };
}
