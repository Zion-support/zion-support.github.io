import type { NextApiRequest, NextApiResponse } from 'next';



import {
  connectOrbit,
  appendChatMessage,
  recordVote,
  editConstitution,;
} from '@/utils/offworld/orbitdb';


<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

import {
  connectOrbit
  appendChatMessage
  recordVote
  editConstitution;
} from '@/utils/offworld/orbitdb';
export default async function handler(

<<<<<<< HEAD
  req: NextApiRequest
  res: NextApiResponse
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  req: NextApiRequest,
  res: NextApiResponse;

) {  const { action } = req.query;import { connectOrbit, appendChatMessage, recordVote, editConstitution } from '@/utils/offworld/orbitdb';
<<<<<<< HEAD

=======
=======
  req: NextApiRequest,
  res: NextApiResponse;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
) {  const { action } = req.query;import { connectOrbit, appendChatMessage, recordVote, editConstitution } from '@/utils/offworld/orbitdb';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  const { action } = req.query;
  const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  const { stores } = await connectOrbit();
  if (!stores) return res.status(503).json({ error: 'OrbitDB unavailable' });

) {  const { action } = req && req.query;import { connectOrbit, appendChatMessage, recordVote, editConstitution } from '@/utils/offworld/orbitdb';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { action } = req && req.query;
  const body = typeof req && req.body === 'string' ? JSON && JSON.parse(req && req.body) : req && req.body;
  const { stores } = await connectOrbit();
  if (!stores) return res && res.status(503).json({ error: 'OrbitDB unavailable' });


  try {
    if (action === 'chat' && req && req.method === 'POST') {
      await appendChatMessage(stores, body);
      return res && res.status(200).json({ ok: true });
  try {
    if (action === 'chat' && req.method === 'POST') {
      await appendChatMessage(stores, body);
      return res.status(200).json({ ok: true })
    }
    if (action === 'vote' && req && req.method === 'POST') {
      await recordVote(stores, body);
      return res && res.status(200).json({ ok: true });
    }
    if (action === 'constitution' && req && req.method === 'POST') {
      await editConstitution(stores, body);
      return res && res.status(200).json({ ok: true });
    }
    return res && res.status(400).json({ error: 'Unsupported action' });
  } catch (e: any) {
    return res && res.status(500).json({ error: e && e.message });
  }    }
    if (action === 'vote' && req && req.method === 'POST') {
      await recordVote(stores, body);
      return res && res.status(200).json({ ok: true })
    }
    if (action === 'constitution' && req && req.method === 'POST') {
      await editConstitution(stores, body);

      return res && res.status(200).json({ ok: true })

    }
    return res && res.status(400).json({ error: 'Unsupported action' })
  } catch (e: any) {
    return res.status(500).json({ error: e.message })
}
  }

}
