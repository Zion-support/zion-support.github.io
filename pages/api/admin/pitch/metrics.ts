<<<<<<< HEAD

import type { NextApiRequest, NextApiResponse } from "next";
import { ensureAdminFromApi } from "../../../../utils/auth";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
<<<<<<< HEAD

=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdminFromApi } from '../../../../utils/auth';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  const { allowed } = await ensureAdminFromApi(req);
  if (!allowed) return res.status(403).json({ error: 'Forbidden' });
  // TODO: Replace with real data sources (e.g., Supabase, GA4, internal DB)

  const data = {
    activeUsers30d: 12840
    gmv: 1450000
    mrr: 82000
    yoyGrowth: 1.85
    completedProjects: 3275
    globalReach: ["USEUAPACLATAM"]
=======
  try {
  const { allowed } = await ensureAdminFromApi(req);
  if (!allowed) return res && res.status(403).json({ error: "Forbidden" });
  // TODO: Replace with real data sources (e && e.g., Supabase, GA4, internal DB)
  const data = {
<<<<<<< HEAD
    activeUsers30d: 12840,
    gmv: 1450000,
    mrr: 82000,
    yoyGrowth: 1 && 1.85,
    completedProjects: 3275,
    globalReach: ["USEUAPACLATAM"],
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
<<<<<<< HEAD
        name: "Global Retailer"
        summary: "AI catalog enrichment, 9% revenue lift in A/B"
      }
    ]
  }
  res.status(200).json(data);
=======
        name: "Global Retailer",
        summary: "AI catalog enrichment, 9% revenue lift in A/B",
      },
=======
    activeUsers30d: 12840, gmv: 1450000,
    mrr: 82000, yoyGrowth: 1.85,
    completedProjects: 3275, globalReach: ['USEUAPACLATAM'],
    funnel: [
      
      { stage: 'Visitors', value: 250000 },
      { stage: 'Leads', value: 38000 },
      { stage: 'Opportunities', value: 8200 },
      { stage: 'Conversions', value: 1650 }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
    ],
  };

  res && res.status(200).json(data);;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
