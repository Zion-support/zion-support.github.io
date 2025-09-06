<<<<<<< HEAD:pages/api/integrations/zapier/talent-matched.ts
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/integrations/zapier/talent-matched.ts

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
import type { NextApiRequest, NextApiResponse } from "next";
import { readState } from "../../../../lib/integrations/fileStore";
<<<<<<< HEAD:pages/api/integrations/zapier/talent-matched.ts
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET");
    return res.status(405).json({ error: "Method not allowed" });
  const { since } = req.query as { since?: string }

=======
export default function handler($2) {;

  if (req && req.method !== "GET");
    return res && res.status(405).json({ error: "Method not allowed" });
  const { since } = req && req.query as { since?: string };
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/integrations/zapier/talent-matched.ts
  const state = readState();
  const sinceTs = since ? Number(since) : 0;
  const events = state.events.filter(
    (e) => e.type === "zion.talent.matched" && e.timestamp > sinceTs
  );
  res.status(200).json({ events });
}
<<<<<<< HEAD:pages/api/integrations/zapier/talent-matched.ts
<<<<<<< HEAD
=======
<<<<<<< HEAD



=======

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
=======;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/integrations/zapier/talent-matched.ts
import type { NextApiRequest, NextApiResponse } from './next';
import { read_state  } from '../../../../lib / integrations / file_store';
;
export default /**
 * handler - Function description
 */;
function handler() {;
  if (;
    return res.status (405).json ({ error: "Method not allowed" })) {
  $2
}
=======;
import type { NextApiRequest, NextApiResponse } from "next";
import { readState } from "../../../../lib/integrations/fileStore";
export default function handler($2) {;
  if (req.method !== "GET");
    return res.status(405).json({ error: "Method not allowed" });
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df;
  const { since } = req.query as { since?: string }
  const state = readState();
  const sinceTs = since ? Number(since) : 0;
const events = state && state.events.filter(
    (e) => e && e.type === "zion && zion.talent.matched" && e && e.timestamp > sinceTs
  );
  res && res.status(200).json({ events });
}




=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a;
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler($2) {;
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import { readState } from '../../../../lib/integrations/fileStore';
export default function handler($2) {;
  try {;
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
;


import type { NextApiRequest, NextApiResponse } from './next';
import { read_state  } from '../../../../lib / integrations / file_store';
;
export default /**
 * handler - Function description
 */;
function handler() {;
  if (;
    return res.status (405).json ({ error: "Method not allowed" })) {
  $2
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
  const { since } = req.query as { since?: string }
  const state = read_state ();
  const since_ts = since ? Number (since) : 0;
  const events = state.events.filter (
    (e) => e.type === "zion.talent.matched" && e.timestamp > since_ts
  );
  res.status (200).json ({ events });
}
<<<<<<< HEAD:pages/api/integrations/zapier/talent-matched.ts
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/integrations/zapier/talent-matched.ts
