<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdminFromApi } from '../../../../utils/auth';
<<<<<<< HEAD
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
=======
import type { NextApiRequest, NextApiResponse } from "next";
import { ensureAdminFromApi } from "../../../../utils/auth";
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  const { allowed } = await ensureAdminFromApi(req);
  if (!allowed) return res.status(403).json({ error: 'Forbidden' });
  // TODO: Replace with real data sources (e.g., Supabase, GA4, internal DB)
<<<<<<< HEAD
<<<<<<< HEAD
  const data = null;
  res.status(200).json(data)
}
=======
  const data = {
    activeUsers30d: 12840
    gmv: 1450000
    mrr: 82000
    yoyGrowth: 1.85
    completedProjects: 3275
    globalReach: ["USEUAPACLATAM"]
    funnel: [
      { stage: "Visitors", value: 250000 }
      { stage: "Leads", value: 38000 }
      { stage: "Opportunities", value: 8200 }
      { stage: "Conversions", value: 1650 }
    ]
    clients: [
      {
        name: "Fortune 500 Co"
        summary: "Automated LLM evaluation pipeline, 23% cost reduction"
      }
      {
        name: "Global Retailer"
        summary: "AI catalog enrichment, 9% revenue lift in A/B"
      }
    ]
  }
  res.status(200).json(data);
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
  const data = {
    activeUsers30d: 12840,
    gmv: 1450000,
    mrr: 82000,
    yoyGrowth: 1.85,
    completedProjects: 3275,
    globalReach: ['US', 'EU', 'APAC', 'LATAM'],
    funnel: [
      { stage: 'Visitors', value: 250000 },
      { stage: 'Leads', value: 38000 },
      { stage: 'Opportunities', value: 8200 },
      { stage: 'Conversions', value: 1650 },
    ],
    clients: [
      {
        name: 'Fortune 500 Co',
        summary: 'Automated LLM evaluation pipeline, 23% cost reduction',
      },
      {
        name: 'Global Retailer',
        summary: 'AI catalog enrichment, 9% revenue lift in A/B',
      },
    ],
  };

  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }

  res.status(200).json(data);
}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
