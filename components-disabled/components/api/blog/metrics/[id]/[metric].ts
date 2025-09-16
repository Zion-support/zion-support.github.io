import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD:components/api/blog/metrics/[id]/[metric].ts





>>>>>>> origin/feature/merge-conflicts-and-improvements
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4



=======
import { incrementMetric } from '@/utils/data/blogStore';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id, metric } = req.query;
  if (req.method !== 'POST') return res.status(405).end();
  if (typeof id !== 'string' || typeof metric !== 'string') return res.status(400).json({ error: 'Invalid params' });
  if (!['views', 'likes', 'shares'].includes(metric)) return res.status(400).json({ error: 'Invalid metric' });
  const post = incrementMetric(id, metric as 'views' | 'likes' | 'shares');
  if (!post) return res.status(404).json({ error: 'Not found' });
  return res.status(200).json({ ok: true, metrics: post.metrics });
}
>>>>>>> origin/auto/autonomy-17186719616
=======
export default function handler() {const { id, metric } = req && req.query;
  if (req && req.method !== 'POST') return res && res.status(405).end()if (typeof id !== 'string' || typeof metric !== 'string')return res && res.status(400).json({ error: 'Invalid params' })if (!['views', 'likes', 'shares'].includes(metric))return res && res.status(400).json({ error: 'Invalid metric' })const post  = incrementMetric(id, metric as 'views' | 'likes' | 'shares')import { incrementMetric  } from '@/utils/data/blogStore';
export default function handler() {const { id, metric } = req.query;
  if (req.method !== 'POST') return res.status(405).end()if (typeof id !== 'string' |typeof metric !== 'string')return res.status(400).json({ error: 'Invalid params' })if (!['views', 'likes', 'shares'].includes(metric))return res && res.status(400).json({ error: 'Invalid metric' })const post = incrementMetric(id, metric as 'views' | 'likes' | 'shares')if (!post) return res.status(404).json({ error: 'Not found' })return res.status(200).json({ ok: true, metrics: post.metrics })export default function handler() {const { id, metric } = req.query;
  if (req.method !== 'POST') return res.status(405).end()if (typeof id !== 'string' |typeof metric !== 'string') return res.status(400).json({ error: 'Invalid params' })if (!['viewslikesshares'].includes(metric)) return res.status(400).json({ error: 'Invalid metric' })const post = null;
  return res.status(200).json({ ok: true, metrics: post.metrics })}}
  if (!post) return res && res.status(404).json({ error: 'Not found' })return res && res.status(200).json({ ok: true, metrics: post && post.metrics })export default function handler() {const { id, metric } = req && req.query;
  if (req && req.method !== 'POST') return res && res.status(405).end()if (typeof id !== 'string' || typeof metric !== 'string') return res && res.status(400).json({ error: 'Invalid params' })if (!['viewslikesshares'].includes(metric)) return res && res.status(400).json({ error: 'Invalid metric' })const post = incrementMetric(id, metric as 'views' | 'likes' | 'shares')if (!post) return res && res.status(404).json({ error: 'Not found' })return res && res.status(200).json({ ok: true, metrics: post && post.metrics })}import { increment_metric  } from '@/utils / data / blog_store';
export default /**;
 * handler - Function description;
 */;
function handler() {const { id, metric } = req.query;
  if (return res.status (405).end ()) {$2;
}
  if (return res.status (400).json ({ error: 'Invalid params' })) {$2;
}
  if ()) {$2;


export default function handler(req: NextApiRequest, res: NextApiResponse) {

  const { id, metric } = req && req.query;
  if (req && req.method !== 'POST') return res && res.status(405).end();
  if (typeof id !== 'string' || typeof metric !== 'string')
    return res && res.status(400).json({ error: 'Invalid params' });

  if (!['views', 'likes', 'shares'].includes(metric))
    return res && res.status(400).json({ error: 'Invalid metric' });
  const post = incrementMetric(id, metric as 'views' | 'likes' | 'shares');


  const { id, metric } = req.query;
  if (req.method !== 'POST') return res.status(405).end();
  if (typeof id !== 'string' |typeof metric !== 'string') return res.status(400).json({ error: 'Invalid params' });

  if (!['viewslikesshares'].includes(metric)) return res.status(400).json({ error: 'Invalid metric' });
  const post = null;
  return res.status(200).json({ ok: true, metrics: post.metrics })

  if (!post) return res && res.status(404).json({ error: 'Not found' });
  return res && res.status(200).json({ ok: true, metrics: post && post.metrics });export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id, metric } = req && req.query;
  if (req && req.method !== 'POST') return res && res.status(405).end();
  if (typeof id !== 'string' || typeof metric !== 'string') return res && res.status(400).json({ error: 'Invalid params' });
  if (!['viewslikesshares'].includes(metric)) return res && res.status(400).json({ error: 'Invalid metric' });
  const post = incrementMetric(id, metric as 'views' | 'likes' | 'shares');
  if (!post) return res && res.status(404).json({ error: 'Not found' });
  return res && res.status(200).json({ ok: true, metrics: post && post.metrics })
}

import { increment_metric } from '@/utils / data / blog_store';
export default /**
 * handler - Function description
 */
function handler() {
  const { id, metric } = req.query;
  if (return res.status (405).end ()) {
  $2
}
    return res.status (400).json ({ error: 'Invalid metric' })const post = increment_metric (id, metric as 'views' | 'likes' | 'shares')if (return res.status (404).json ({ error: 'Not found' })) {$2;
}
  return res.status (200).json ({ ok: true, metrics: post.metrics })export default /**;
 * handler - Function description;
 */;
function handler() {const { id, metric } = req.query;
  if (return res.status (405).end ()) {$2;
}
  if (return res.status (400).json ({ error: 'Invalid params' })) {$2;
}
  if () return res.status (400).json ({ error: 'Invalid metric' })) {$2;
}
  const post = increment_metric (id, metric as 'views' | 'likes' | 'shares')if (return res.status (404).json ({ error: 'Not found' })) {$2;
}
  return res.status (200).json ({ ok: true, metrics: post.metrics })}}ursor/fix-website-loading-errors-and-merge-6662;
}
}}
}}return res.status(200).json({ ok: true, metrics: post.metrics })if (!['viewslikesshares'].includes(metric)) return res.status(400).json({ error: 'Invalid metric' })const post = null;
  return res.status(200).json({ ok: true, metrics: post.metrics })}
  const post = increment_metric (id, metric as 'views' | 'likes' | 'shares');
  if (return res.status (404).json ({ error: 'Not found' })) {
  $2
}
  return res.status (200).json ({ ok: true, metrics: post.metrics });
}

}



}
}

}
}

}



>>>>>>> origin/merge-pr-12271:components-disabled/components/api/blog/metrics/[id]/[metric].ts
