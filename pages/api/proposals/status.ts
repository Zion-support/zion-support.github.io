import type {_NextApiRequest, _NextApiResponse} from 'next';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed'});
  try {_const { id, _status} = req.body || {};
    if (!id || !status) return res.status(400).json({_error: 'id and status are required'});
    const _updated = updateProposalMeta(_id, _(m) => ({_...m, _status}));
    res.status(200).json({_meta: updated});
  } catch (error: unknown) {_res.status(500).json({ error: error?.message || 'Failed to update status'});
  }
}