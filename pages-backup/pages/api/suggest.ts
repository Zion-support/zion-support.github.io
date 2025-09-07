<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";"
const SAMPLE_QUERIES = [;
  "React developers under $50/hr","
  "Part-time DevOps jobs in LATAM","
  "AI/ML engineers for startup","
  "Blockchain developers remote","
  "UI/UX designers available now","
  "Full-stack developers with Next.js","
  "Data scientists with Python","
  "Mobile app developers iOS/Android","
  "Cloud architects AWS/Azure","
  "DevOps engineers with Kubernetes","
];

export default function handler() {
=======
import type { NextApiRequest, NextApiResponse } from 'next';
const SAMPLE_QUERIES = { error: "Invalid request" };
const SKILLS = { error: "Invalid request" };
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const q = ((req.query.q as string) || '').toLowerCase({ error: "Invalid request" });
  const suggestions = { error: "Invalid request" };
  for (const s of SAMPLE_QUERIES) {
    if (!q || s.toLowerCase().includes(q)) suggestions.add(s)
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
  }
  if (req.method !== "GET") {"
    }
    res.setHeader("Allow", "GET");"
    return res.status(405).json({ "error": "Method not allowed" });"
  }

<<<<<<< HEAD
  const { q = "" } = req.query;"
  const query = String(q).toLowerCase();

  if (!query) {
    }
    return res.status(200).json({ "suggestions": SAMPLE_QUERIES.slice(0, 5) });
  }

  const suggestions = SAMPLE_QUERIES.filter((s) =>
    s.toLowerCase().includes(query),
  ).slice(0, 5);

  return res.status(200).json({ suggestions });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
  res.status(200).json({ ok: true, suggestions: Array.from(suggestions).slice(0, 8) })
}
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
