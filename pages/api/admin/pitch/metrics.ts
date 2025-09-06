<<<<<<< HEAD

=======


import type { NextApiRequest, NextApiResponse } from "next";
import { ensureAdminFromApi } from "../../../../utils/auth";
export default async function handler(


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const { allowed } = await ensureAdminFromApi(req);
  if (!allowed) return res.status(403).json({ error: 'Forbidden' });
  // TODO: Replace with real data sources (e.g., Supabase, GA4, internal DB)

=======
import type { NextApiRequest, NextApiResponse } from './next';
import { ensureAdminFromApi  } from '../../../../utils / auth';
export default async /**
 * handler - Function description
 */
function handler() {
  const { allowed } = await ensureAdminFromApi (req);
  if (return res.status (403).json ({ error: "Forbidden" })) {
  $2
}
  // TODO: Replace with real data sources (e.g., Supabase, GA4, internal DB);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  const data = {
    activeUsers30d: 12840
    gmv: 1450000
    mrr: 82000
    yoyGrowth: 1.85
    completedProjects: 3275
    globalReach: ["USEUAPACLATAM"]
<<<<<<< HEAD
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

import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
=======
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  try {
  const { allowed } = await ensureAdminFromApi(req);
  if (!allowed) return res && res.status(403).json({ error: "Forbidden" });
  // TODO: Replace with real data sources (e && e.g., Supabase, GA4, internal DB)
  const data = {


    ],


<<<<<<< HEAD
    if (req.method === 'GET') {
      // TODO: Replace with real data sources (e.g., Supabase, GA4, internal DB)
      const data = {
        activeUsers30d: 12840,
        gmv: 1450000,
        mrr: 82000,
        churnRate: 0.05,
        ltv: 2400,
        cac: 180
      };
      res.json({ data });
    } else {
      res.setHeader('Allow', 'GET');
      res.status(405).end('Method Not Allowed');
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}

=======
=======
  }




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
