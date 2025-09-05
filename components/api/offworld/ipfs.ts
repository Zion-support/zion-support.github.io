import type {_NextApiRequest, _NextApiResponse} from 'next';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_const { action} = req.query;
  const _body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

  try {_if (req.method === 'POST' && action === 'json') {
      const { cid, _provider} = await addJSON(body);
      if (!cid) return res.status(503).json({_error: 'IPFS unavailable'});
      return res.status(200).json({_cid, _provider});
    }
    if (req.method === 'POST' && action === 'broadcast') {_const _ok = await publishManifesto(OFFWORLD_TOPICS.manifesto, _body?.message || '');
      return res.status(200).json({ ok});
    }
    return res.status(400).json({_error: 'Unsupported action'});
  } catch (e: unknown) {_return res.status(500).json({ error: e.message});
  }
}