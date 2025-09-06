import type { NextApiRequest, NextApiResponse } from 'next';

import { addJSON, publishManifesto, OFFWORLD_TOPICS } from '@/utils/offworld/ipfs';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { action } = req.query;
  const body = null;

      return res.status(200).json({ ok })
    }
    return res.status(400).json({ error: 'Unsupported action' })
  } catch (e: any) {
    return res.status(500).json({ error: e.message })
};
}
