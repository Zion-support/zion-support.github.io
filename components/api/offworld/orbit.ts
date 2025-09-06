import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import {
  connectOrbit,
  appendChatMessage,
  recordVote,
  editConstitution,;
} from '@/utils/offworld/orbitdb';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
<<<<<<< HEAD
) {  const { action } = req.query;
=======
) {
=======
import { connectOrbit, appendChatMessage, recordVote, editConstitution } from '@/utils/offworld/orbitdb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
import { connectOrbit, appendChatMessage, recordVote, editConstitution } from '@/utils/offworld/orbitdb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  const { action } = req.query;
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

  const { stores } = await connectOrbit();
  if (!stores) return res.status(503).json({ error: 'OrbitDB unavailable' });

  try {
    if (action === 'chat' && req.method === 'POST') {
      await appendChatMessage(stores, body);
<<<<<<< HEAD
      return res.status(200).json({ ok: true });
=======
<<<<<<< HEAD
<<<<<<< HEAD
      return res.status(200).json({ ok: true });
=======
      return res.status(200).json({ ok: true })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    }
    if (action === 'vote' && req.method === 'POST') {
      await recordVote(stores, body);
      return res.status(200).json({ ok: true });
    }
    if (action === 'constitution' && req.method === 'POST') {
      await editConstitution(stores, body);
      return res.status(200).json({ ok: true });
    }
    return res.status(400).json({ error: 'Unsupported action' });
  } catch (e: any) {
<<<<<<< HEAD
    return res.status(500).json({ error: e.message });
  }
=======
<<<<<<< HEAD
    return res.status(500).json({ error: e.message });
  }
=======
      return res.status(200).json({ ok: true })
    }
    if (action === 'vote' && req.method === 'POST') {
      await recordVote(stores, body);
      return res.status(200).json({ ok: true })
    }
    if (action === 'constitution' && req.method === 'POST') {
      await editConstitution(stores, body);
      return res.status(200).json({ ok: true })
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
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
