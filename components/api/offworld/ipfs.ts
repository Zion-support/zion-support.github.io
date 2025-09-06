import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
<<<<<<< HEAD
import {
  addJSON,
  publishManifesto,
  OFFWORLD_TOPICS,;
} from '@/utils/offworld/ipfs';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
=======
import { addJSON, publishManifesto, OFFWORLD_TOPICS } from '@/utils/offworld/ipfs';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
import { addJSON, publishManifesto, OFFWORLD_TOPICS } from '@/utils/offworld/ipfs';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  const { action } = req.query;
  const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

  try {
    if (req.method === 'POST' && action === 'json') {
      const { cid, provider } = await addJSON(body);
      if (!cid) return res.status(503).json({ error: 'IPFS unavailable' });
<<<<<<< HEAD
<<<<<<< HEAD
      return res.status(200).json({ cid, provider });
=======
      return res.status(200).json({ cid, provider })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
    if (req.method === 'POST' && action === 'broadcast') {
      const ok = await publishManifesto(OFFWORLD_TOPICS.manifesto, body?.message || '');
      return res.status(200).json({ ok })
    }
    return res.status(400).json({ error: 'Unsupported action' })
  } catch (e: any) {
<<<<<<< HEAD
    return res.status(500).json({ error: e.message });
  }
=======
      return res.status(200).json({ cid, provider })
    }
    if (req.method === 'POST' && action === 'broadcast') {
      const ok = await publishManifesto(OFFWORLD_TOPICS.manifesto, body?.message || '');
      return res.status(200).json({ ok })
    }
    return res.status(400).json({ error: 'Unsupported action' })
  } catch (e: any) {
    return res.status(500).json({ error: e.message })
  };
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    return res.status(500).json({ error: e.message })
  };
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
