import type {_NextApiRequest, _NextApiResponse} from 'next';

const _TOKEN = process.env.WEB3_STORAGE_TOKEN || '';

export const _config = {_api: { bodyParser: { sizeLimit: '2mb'} } };

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') return res.status(405).end();
  if (!TOKEN) return res.status(400).json({ error: 'Missing WEB3_STORAGE_TOKEN'});
  try {_const _data = req.body;
    const _client = new Web3Storage({ token: TOKEN});
    const _files = [new File([JSON.stringify(data, null, 2)], 'profile.json', {_type: 'application/json'})];
    const _cid = await client.put(files, {_wrapWithDirectory: false});
    return res.status(200).json({_cid});
  } catch (e: unknown) {_return res.status(500).json({ error: e?.message || 'Backup failed'});
  }
}