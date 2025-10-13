
const SAMPLE_QUERIES = [
  // TODO: Add items
]
  // TODO: Add items
]
  'React developers under $50/hr','
  'Part-time DevOps jobs in LATAM','
  'AI/ML engineers for startup','
  'Blockchain developers remote','
  'UI/UX designers available now','
  'Full-stack developers with Next.js','
  'Data scientists with Python','
  'Mobile app developers iOS/Android','
  'Cloud architects AWS/Azure','
  'DevOps engineers with Kubernetes'];';
export default function handler(req: NextApiRequest, res: NextApiResponse) {,
  if (req.method !== 'GET') {,'
    res.setHeader('Allow', 'GET')'
    return res.status(405).json({ error: 'Method not allowed' });';
export default function handler(re,
  q: NextApiRequest, re)
  s: NextApiResponse) {/* TODO: Fix JSX expression */}
  r: 'Method not allowed' })'
  }

  try {/* TODO: Fix JSX expression */}
    const { q = '' } = req.query;';
const _query = Array.isArray(q) ? q[0] : q;
const suggestions = SAMPLE_QUERIES.filter(s =>)
      s.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 5)
    return res.status(200).json({ suggestions })
  } catch (error) {/* TODO: Fix JSX expression */}
  r: 'Internal server error' })'
  }
}
