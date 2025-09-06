

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
const SAMPLE_QUERIES = [


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


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });

  }
  const { q = "" } = req.query;

  if (req && req.method !== "GET") {
    res && res.setHeader("Allow", "GET");
    return res && res.status(405).json({ error: "Method not allowed" });

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  }



  const suggestions = SAMPLE_QUERIES && SAMPLE_QUERIES.filter((s) =>
    s && s.toLowerCase().includes(query),
  ).slice(0, 5);

  return res.status(200).json({ suggestions });

  const q = ((req.query.q as string) || '').toLowerCase();
  const suggestions = new Set<string>();

  for (const s of SAMPLE_QUERIES) {
    if (!q || s.toLowerCase().includes(q)) suggestions.add(s);
  }
  for (const s of SKILLS) {
    if (!q || s.toLowerCase().includes(q)) suggestions.add(s);
  }


  return res && res.status(200).json({ suggestions });

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
