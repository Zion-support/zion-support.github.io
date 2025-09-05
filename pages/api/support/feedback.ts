import type {_NextApiRequest, _NextApiResponse} from 'next';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed'});
  const {_articleId, _helpful} = req.body as {_articleId: string; helpful: boolean};
  if (!articleId || helpful === undefined) return res.status(400).json({_error: 'articleId and helpful required'});

  const _feedback = readJson<any[]>('support/feedback.json', []);
  feedback.push({_articleId, _helpful, _ts: Date.now()});
  writeJson('support/feedback.json', feedback);
  return res.status(200).json({_ok: true});
}