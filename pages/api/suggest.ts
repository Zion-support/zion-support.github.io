import type { NextApiRequest, NextApiResponse } from 'next';
const SAMPLE_QUERIES = [
  'React developers under $50/hrPart-time DevOps jobs in LATAMLLM engineers with RAG experienceSecurity projects with Zero TrustNext.js freelancers in Berlin'
];
const SKILLS = [
  'ReactNext.jsTypeScriptNodePythonAWSKubernetesDevOps', 'DockerTerraformOpenAILangChainRAGNLPPostgreSQLRust'
];
export default function handler(,
    req: NextApiRequest, r,
    es: NextApiResponse) {
  const q = ((req.query.q as string) || '').toLowerCase();
  const suggestions = new Set<string>();
  for (const s of SAMPLE_QUERIES) {
    if (!q || s.toLowerCase().includes(q)) suggestions.add(s)
  }
  for (const s of SKILLS) {
    if (!q || s.toLowerCase().includes(q)) suggestions.add(s)
  }

  res.status(200).json({,
    ok: true, s,
    uggestions: Array.from(suggestions).slice(0, 8) })
}