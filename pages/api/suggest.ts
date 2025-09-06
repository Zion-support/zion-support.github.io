import type { NextApiRequest, NextApiResponse } from 'next';

const SAMPLE_QUERIES = [
<<<<<<< HEAD
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
=======
  'React developers under $50/hrPart-time DevOps jobs in LATAMLLM engineers with RAG experienceSecurity projects with Zero TrustNext.js freelancers in Berlin'
];

const SKILLS = [
  'ReactNext.jsTypeScriptNodePythonAWSKubernetesDevOps', 'DockerTerraformOpenAILangChainRAGNLPPostgreSQLRust'
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const q = ((req.query.q as string) || '').toLowerCase();
  const suggestions = new Set<string>();

<<<<<<< HEAD
  
  

  res
    .status(200)
    .json({ ok: true, suggestions: Array.from(suggestions).slice(0, 8) });
=======
  for (const s of SAMPLE_QUERIES) {
    if (!q || s.toLowerCase().includes(q)) suggestions.add(s)
  }
  for (const s of SKILLS) {
    if (!q || s.toLowerCase().includes(q)) suggestions.add(s)
  }

  res.status(200).json({ ok: true, suggestions: Array.from(suggestions).slice(0, 8) })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
