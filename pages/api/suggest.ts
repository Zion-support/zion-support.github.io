const SAMPLE_QUERIES = [
'React developers under $50/hr',
  'Part-time DevOps jobs in LATAM',
  'LLM engineers with RAG experience',
  'Security projects with Zero Trust',
  'Next.js freelancers in Berlin',
];

const SKILLS = [
  'React',
  'Next.js',
  'TypeScript',
  'Node',
  'Python',
  'AWS',
  'Kubernetes',
  'DevOps',
  'Docker',
  'Terraform',
  'OpenAI',
  'LangChain',
  'RAG',
  'NLP',
  'PostgreSQL',
  'Rust',
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const q = ((req.query.q as string) || '').toLowerCase();
  const suggestions = new Set<string>();

res
    .status(200)
    .json({ ok: true, suggestions: Array.from(suggestions).slice(0, 8) });

  }
  const { q = "" } = req.query;
  const query = String(q).toLowerCase();
  if (!query) {
    return res.status(200).json({ suggestions: SAMPLE_QUERIES.slice(0, 5) });
  }
  const suggestions = SAMPLE_QUERIES.filter((s) =>
    s.toLowerCase().includes(query)
  ).slice(0, 5);
  return res.status(200).json({ suggestions });
}