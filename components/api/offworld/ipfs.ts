import type { NextApiRequest, NextApiResponse } from 'next';
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
import {
  addJSON,
  publishManifesto,
  OFFWORLD_TOPICS,;
} from '@/utils/offworld/ipfs';
<<<<<<< HEAD

import {
  addJSON
  publishManifesto
  OFFWORLD_TOPICS;
} from '@/utils/offworld/ipfs';
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
  req: NextApiRequest,
  res: NextApiResponse;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
) {  const { action } = req.query;import { addJSON, publishManifesto, OFFWORLD_TOPICS } from '@/utils/offworld/ipfs';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {;

  const { action } = req.query;
  const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

  try {
    if (req.method === 'POST' && action === 'json') {
      const { cid, provider } = await addJSON(body);

      if (!cid) return res.status(503).json({ error: 'IPFS unavailable' });
      return res.status(200).json({ cid, provider })

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
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

    }
    return res && res.status(400).json({ error: 'Unsupported action' })
  } catch (e: any) {
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
