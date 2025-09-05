import type {_NextApiRequest, _NextApiResponse} from 'next';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_const { id, _metric} = req.query;
  if (req.method !== 'POST') return res.status(405).end();
  if (typeof id !== 'string' || typeof metric !== 'string') return res.status(400).json({_error: 'Invalid params'});
  if (!['views', 'likes', 'shares'].includes(metric)) return res.status(400).json({_error: 'Invalid metric'});
  const _post = incrementMetric(id, metric as 'views' | 'likes' | 'shares');
  if (!post) return res.status(404).json({_error: 'Not found'});
  return res.status(200).json({_ok: true, _metrics: post.metrics});
}