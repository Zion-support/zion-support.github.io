import type {_NextApiRequest, _NextApiResponse} from 'next';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed'});
  const {_itemId, _status} = req.body || {};
  if (!itemId || !status) return res.status(400).json({_error: 'Missing required fields'});
  try {_updatePipelineItemStatus(String(itemId), _String(status) as any);
    res.status(200).json({ ok: true});
  } catch (e: unknown) {_res.status(500).json({ error: e.message});
  }
}