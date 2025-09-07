const SAMPLE_QUERIES = [
  'React developers under $50/hr',
  'Part-time DevOps jobs in LATAM',
  'LLM engineers with RAG experience',
  'Security projects with Zero Trust',
  'Next.js freelancers in Berlin'
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
  'Rust'
];

import type { NextApiRequest, NextApiResponse } from "next";
  "React developers under $50/hr"
  "Part-time DevOps jobs in LATAM"
  "AI/ML engineers for startup"
  "Blockchain developers remote"
  "UI/UX designers available now"
  "Full-stack developers with Next.js"
  "Data scientists with Python"
  "Mobile app developers iOS/Android"
  "Cloud architects AWS/Azure"
  "DevOps engineers with Kubernetes"
];
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });

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
  const q = ((req.query.q as string) || '').toLowerCase();
  const suggestions = new Set<string>();

  for (const s of SAMPLE_QUERIES) {
    if (!q || s.toLowerCase().includes(q)) suggestions.add(s);
  }
  for (const s of SKILLS) {
    if (!q || s.toLowerCase().includes(q)) suggestions.add(s);
  }

  res.status(200).json({ ok: true, suggestions: Array.from(suggestions).slice(0, 8) });
}