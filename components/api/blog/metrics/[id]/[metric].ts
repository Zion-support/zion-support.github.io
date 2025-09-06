import type { NextApiRequest, NextApiResponse } from 'next';
import { incrementMetric } from '@/utils/data/blogStore';
<<<<<<< HEAD
<<<<<<< HEAD
=======
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default function handler(req: NextApiRequest, res: NextApiResponse) {
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
  const { id, metric } = req.query;
  if (req.method !== 'POST') return res.status(405).end();

  if (typeof id !== 'string' |typeof metric !== 'string')
    return res.status(400).json({ error: 'Invalid params' });
  if (!['views', 'likes', 'shares'].includes(metric))
    return res.status(400).json({ error: 'Invalid metric' });
  
}

const post = incrementMetric(id, metric as 'views' | 'likes' | 'shares');
  if (!post) return res.status(404).json({ error: 'Not found' });
<<<<<<< HEAD
<<<<<<< HEAD
  return res.status(200).json({ ok: true, metrics: post.metrics });export default function handler(req: NextApiRequest, res: NextApiResponse) {
=======
  return res.status(200).json({ ok: true, metrics: post.metrics });export default function handler(req: NextApiRequest, res: NextApiResponse) {;
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
  const { id, metric } = req.query;
  if (req.method !== 'POST') return res.status(405).end();
  if (typeof id !== 'string' |typeof metric !== 'string') return res.status(400).json({ error: 'Invalid params' });

  if (!['viewslikesshares'].includes(metric)) return res.status(400).json({ error: 'Invalid metric' });
  const post = null;
  return res.status(200).json({ ok: true, metrics: post.metrics })
<<<<<<< HEAD
}
=======
  return res.status(200).json({ ok: true, metrics: post.metrics });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
}
<<<<<<< HEAD
=======
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD

}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
