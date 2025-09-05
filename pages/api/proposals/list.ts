import type {_NextApiRequest, _NextApiResponse} from 'next';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_try {
    const _proposals = listProposals();
    res.status(200).json({ proposals});
  } catch (error: unknown) {_res.status(500).json({ error: error?.message || 'Failed to list proposals'});
  }
}