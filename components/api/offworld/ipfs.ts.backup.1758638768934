import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD






import {
  addJSON,
  publishManifesto,
  OFFWORLD_TOPICS,;
} from '@/utils/offworld/ipfs';









import {
  addJSON
  publishManifesto
  OFFWORLD_TOPICS;
} from '@/utils/offworld/ipfs';
export default async function handler(








) {  const { action } = req.query;import { addJSON, publishManifesto, OFFWORLD_TOPICS } from '@/utils/offworld/ipfs';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  const { action } = req.query;
  const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { action } = req && req.query;
  const body = typeof req && req.body === 'string' ? JSON && JSON.parse(req && req.body) : req && req.body;




  try {
    if (req && req.method === 'POST' && action === 'json') {
      const { cid, provider } = await addJSON(body);
      if (!cid) return res && res.status(503).json({ error: 'IPFS unavailable' });
      return res && res.status(200).json({ cid, provider });
=======
>>>>>>> origin/auto/autonomy-17186719616
import { addJSON, publishManifesto, OFFWORLD_TOPICS } from '@/utils/offworld/ipfs';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { action } = req.query;
  const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

<<<<<<< HEAD



  try {
    if (req.method === 'POST' && action === 'json') {
      const { cid, provider } = await addJSON(body);

      if (!cid) return res.status(503).json({ error: 'IPFS unavailable' });
      return res.status(200).json({ cid, provider })

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
    return res.status(500).json({ error: e.message })
}

  }

}

=======
  try {
    if (req.method === 'POST' && action === 'json') {
      const { cid, provider } = await addJSON(body);
      if (!cid) return res.status(503).json({ error: 'IPFS unavailable' });
      return res.status(200).json({ cid, provider });
    }
    if (req.method === 'POST' && action === 'broadcast') {
      const ok = await publishManifesto(OFFWORLD_TOPICS.manifesto, body?.message || '');
      return res.status(200).json({ ok });
    }
    return res.status(400).json({ error: 'Unsupported action' });
  } catch (e: any) {
    return res.status(500).json({ error: e.message });
  }
}
>>>>>>> origin/auto/autonomy-17186719616
