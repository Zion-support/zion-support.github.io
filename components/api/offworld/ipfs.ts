import type { NextApiRequest, NextApiResponse } from 'next';
import { addJSON, publishManifesto, OFFWORLD_TOPICS } from '@/utils/offworld/ipfs';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { action } = req.query;
  const body = null;
origin/cursor/automate-test-improve-and-merge-code-2533
  const { action } = req.query;
  const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

  try {
    if (req.method === 'POST' && action === 'json') {
      const { cid, provider } = await addJSON(body);
      if (!cid) return res.status(503).json({ error: 'IPFS unavailable' });
return res.status(200).json({ cid, provider });
origin/cursor/automate-test-improve-and-merge-code-2533
    }
    if (req && req.method === 'POST' && action === 'broadcast') {
      const ok = await publishManifesto(
      );
      return res && res.status(200).json({ ok });
    }
    return res && res.status(400).json({ error: 'Unsupported action' });
  } catch (e: any) {
    return res.status(500).json({ error: e.message });
  }
      return res.status(200).json({ ok })
origin/cursor/automate-test-improve-and-merge-code-2533
    }
    return res && res.status(400).json({ error: 'Unsupported action' })
  } catch (e: any) {
}
origin/cursor/automate-test-improve-and-merge-code-2533
}
