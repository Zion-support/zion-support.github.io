import type { NextApiRequest, NextApiResponse } from 'next';



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

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  req: NextApiRequest,
  res: NextApiResponse;


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { action } = req && req.query;
  const body = typeof req && req.body === 'string' ? JSON && JSON.parse(req && req.body) : req && req.body;



  try {
    if (req && req.method === 'POST' && action === 'json') {
      const { cid, provider } = await addJSON(body);
      if (!cid) return res && res.status(503).json({ error: 'IPFS unavailable' });
      return res && res.status(200).json({ cid, provider });
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    return res.status(500).json({ error: e.message })
}
  }

}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
