import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler() {const { id, metric } = req && req.query;
  if (req && req.method !== 'POST') return res && res.status(405).end()if (typeof id !== 'string' || typeof metric !== 'string')return res && res.status(400).json({ error: 'Invalid params',}
})if (!['views', 'likes', 'shares'].includes(metric))return res && res.status(400).json({ error: 'Invalid metric',}
})const post  = incrementMetric(id, metric as 'views' | 'likes' | 'shares')import { incrementMetric  } from '@/utils/data/blogStore';

