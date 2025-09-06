import type { NextApiRequest, NextApiResponse } from 'next';
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
import {
  connectOrbit,
  appendChatMessage,
  recordVote,
  editConstitution,;
} from '@/utils/offworld/orbitdb';
<<<<<<< HEAD

import {
  connectOrbit
  appendChatMessage
  recordVote
  editConstitution;
} from '@/utils/offworld/orbitdb';
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
  req: NextApiRequest,
  res: NextApiResponse;
=======

  req: NextApiRequest,
  res: NextApiResponse;


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
) {  const { action } = req.query;import { connectOrbit, appendChatMessage, recordVote, editConstitution } from '@/utils/offworld/orbitdb';
=======
  req: NextApiRequest,
  res: NextApiResponse;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
) {  const { action } = req.query;import { connectOrbit, appendChatMessage, recordVote, editConstitution } from '@/utils/offworld/orbitdb';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {;

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

    }
    return res && res.status(400).json({ error: 'Unsupported action' })
  } catch (e: any) {
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
