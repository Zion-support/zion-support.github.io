

import type { NextApiRequest, NextApiResponse } from "next";
import { ensureAdminFromApi } from "../../../../utils/auth";
export default async function handler(


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
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  try {
  const { allowed } = await ensureAdminFromApi(req);
  if (!allowed) return res && res.status(403).json({ error: "Forbidden" });
  // TODO: Replace with real data sources (e && e.g., Supabase, GA4, internal DB)
  const data = {


    ],


=======
  }




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
