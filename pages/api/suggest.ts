import type {_NextApiRequest, _NextApiResponse} from 'next';

const _SAMPLE_QUERIES = [
  'React developers under $50/hr',
  'Part-time DevOps jobs in LATAM',
  'LLM engineers with RAG experience',
  'Security projects with Zero Trust',
  'Next.js freelancers in Berlin'
];

const _SKILLS = [
  'React', 'Next.js', 'TypeScript', 'Node', 'Python', 'AWS', 'Kubernetes', 'DevOps', 'Docker', 'Terraform', 'OpenAI', 'LangChain', 'RAG', 'NLP', 'PostgreSQL', 'Rust'
];

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _q = ((req.query.q as string) || '').toLowerCase();
  const _suggestions = new Set<string>();

  for (const s of SAMPLE_QUERIES) {
    if (!q || s.toLowerCase().includes(q)) suggestions.add(s);}
  for (const s of SKILLS) {_if (!q || s.toLowerCase().includes(q)) suggestions.add(s);}

  res.status(200).json({_ok: true, _suggestions: Array.from(suggestions).slice(0, _8)});
}