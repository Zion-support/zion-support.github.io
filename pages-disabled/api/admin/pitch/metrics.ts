:pages-disabled/api/admin/pitch/metrics.ts
import type { NextApiRequest, NextApiResponse } from \"next\"
import { ensureAdminFromApi } from \"../../../../utils/auth\"
export default async function handler(
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import type { NextApiRequest, NextApiResponse } from "next";"
import { ensureAdminFromApi } from "../../../../utils/auth";
export default async function handler(
<<<<<<< HEAD
  req: NextApiRequest,
  res: NextApiResponse,
<<<<<<< HEAD:pages-disabled/api/admin/pitch/metrics.ts
) {}
  const { allowed } = await ensureAdminFromApi(req)
  if (!allowed) return res.status(403).json({ error: \"Forbidden\" })
  // TODO: Replace with real data sources (e.g., Supabase, GA4, internal DB)
  const data = {
    activeUsers30d: 12840,
    gmv: 1450000,
    mrr: 82000,
    yoyGrowth: 1.85,
    completedProjects: 3275,
    globalReach: [\"USEUAPACLATAM\"]}
    funnel: [}
      { stage: \"Visitors\", value: 250000 },
      { stage: \"Leads\", value: 38000 },
      { stage: \"Opportunities\", value: 8200 },
      { stage: \"Conversions\", value: 1650 },
    ],
    clients: [
      {
        name: \"Fortune 500 Co\"}
        summary: \"Automated LLM evaluation pipeline, 23% cost reduction\"}
      },
      {
        name: \"Global Retailer\"}
        summary: \"AI catalog enrichment, 9% revenue lift in A/B\"}
      },
    ]}
  res.status(200).json(data)

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const { allowed } = await ensureAdminFromApi(req);
  if (!allowed) return res.status(403).json({ error: 'Forbidden' });
  // TODO: Replace with real data sources (e.g., Supabase, GA4, internal DB)

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
  // TODO: Replace with real data sources (e.g., Supabase, GA4, internal DB);
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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

res.status(200).json(data);
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  try {
  const { allowed } = await ensureAdminFromApi(req);
  if (!allowed) return res && res.status(403).json({ error: "Forbidden" });
  // TODO: Replace with real data sources (e && e.g., Supabase, GA4, internal DB)
  const data = {

}

}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
