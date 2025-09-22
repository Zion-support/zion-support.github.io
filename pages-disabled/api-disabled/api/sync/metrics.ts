:pages/api/sync/metrics.ts
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
import type { NextApiRequest, NextApiResponse } from "next",;
import { readState, filterEventsByScope } from "../../../utils/sync/storage",;
;

export default function handler(req: NextApiRequest, res: NextApiResponse) {

  const state = readState(),
  const events = filterEventsByScope(state.events, state.config.scope),

import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    treasuryTotals: {},
    topContributors: [],
    totalVoteCount: 0,
    lastSyncedAt: Date.now()
  });
import type { NextApiRequest, NextApiResponse } from "next",
import { readState, filterEventsByScope } from "../../../utils/sync/storage",
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" }),
  const state = readState(),
  const events = filterEventsByScope(state.events, state.config.scope),

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const totalsByToken: Record<string, number> = {},
  const contributionsBySubject: Record<string, number> = {},
  let globalVotes = 0,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import type { NextApiRequest, NextApiResponse } from "next";
import { readState, filterEventsByScope } from "../../../utils/sync/storage";
;
;
export default function handler($2) {;

  const state = readState();
  const events = filterEventsByScope(state.events, state.config.scope);

import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler($2) {;
  res.status(200).json({;
    treasuryTotals: {}
    topContributors: [];
    totalVoteCount: 0;
    lastSyncedAt: Date.now()
  });
import type { NextApiRequest, NextApiResponse } from "next";
import { readState, filterEventsByScope } from "../../../utils/sync/storage";
export default function handler($2) {;
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });
  const state = readState();
  const events = filterEventsByScope(state.events, state.config.scope);

  const totalsByToken: Record<string, number> = {}
  const contributionsBySubject: Record<string, number> = {}
  let globalVotes = 0
:pages/api/sync/metrics.ts
  const state = readState(),
  const events = filterEventsByScope(state.events, state.config.scope),

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
import type { NextApiRequest, NextApiResponse } from "next";
import { readState, filterEventsByScope } from "../../../utils/sync/storage";
import type { NextApiRequest, NextApiResponse } from "next";
import { readState, filterEventsByScope } from "../../../utils/sync/storage";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/sync/metrics.ts
;
export default function handler($2) {;

  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });
  const state = readState();
  const events = filterEventsByScope(state.events, state.config.scope);
  const totalsByToken: Record<string, number> = {}
  const contributionsBySubject: Record<string, number> = {}
  let globalVotes = 0;
  const state = readState();
  const events = filterEventsByScope(state.events, state.config.scope);

:pages/api/sync/metrics.ts
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const state = readState(),
  const events = filterEventsByScope(state.events, state.config.scope),

import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler($2) {;
  res.status(200).json({;
    treasuryTotals: {}
    topContributors: [];
    totalVoteCount: 0;
    lastSyncedAt: Date.now()
  });
:pages/api/sync/metrics.ts
import type { NextApiRequest, NextApiResponse } from "next",
import { readState, filterEventsByScope } from "../../../utils/sync/storage",
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" }),
  const state = readState(),
  const events = filterEventsByScope(state.events, state.config.scope),
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  const totalsByToken: Record<string, number> = {},
  const contributionsBySubject: Record<string, number> = {},
  let globalVotes = 0,
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  for (const e of events) {
    if (e.type === "token_transfer") {
      const p = e.payload as any
=======
import type { NextApiRequest, NextApiResponse } from "next";
import { readState, filterEventsByScope } from "../../../utils/sync/storage";
export default function handler($2) {;
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });
  const state = readState();
  const events = filterEventsByScope(state.events, state.config.scope);
  const totalsByToken: Record<string, number> = {}
  const contributionsBySubject: Record<string, number> = {}
  let globalVotes = 0
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a;
  for (const e of events) {;
    if (e.type === "token_transfer") {;
      const p = e.payload as any;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/sync/metrics.ts
      totalsByToken[p.token] = (totalsByToken[p.token] |0) + (p.amount |0)
    } else if (e.type === "leaderboard_entry") {;
      const p = e.payload as any;
      contributionsBySubject[p.subjectId] = (contributionsBySubject[p.subjectId] |0) + (p.score |0)
:pages/api/sync/metrics.ts
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    } else if (e.type === "proposal") {
<<<<<<< HEAD
<<<<<<< HEAD
      const p = e.payload as any
      const p = e.payload as any,
      globalVotes += Array.isArray(p.votes) ? p.votes.length : 0
    }
  }
  const topContributors = Object.entries(contributionsBySubject)
    .map(([subjectId, score]) => ({ subjectId, score }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 10);
  return res.status(200).json({;
    treasuryTotals: totalsByToken;
    topContributors;
    totalVoteCount: globalVotes;

    lastSyncedAt: state.lastSyncedAt});
      const p = e.payload as any;
    treasuryTotals: totalsByToken;
    topContributors;
    totalVoteCount: globalVotes;
    lastSyncedAt: state.lastSyncedAt});
};
      globalVotes += Array.isArray(p.votes) ? p.votes.length : 0;
import type { NextApiRequest, NextApiResponse } from "next";
import { readState, filterEventsByScope } from "../../../utils/sync/storage";
export default function handler($2) {;
  try {;
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  const events = filterEventsByScope(state.events, state.config.scope);
  const totalsByToken: Record<string, number> = {};
  const contributionsBySubject: Record<string, number> = {};
  let globalVotes = 0;
  for (const e of events) {;
    if (e.type === "token_transfer") {;
      const p = e.payload as any;
      totalsByToken[p.token] = (totalsByToken[p.token] || 0) + (p.amount || 0);
    } else if (e.type === "leaderboard_entry") {;
      const p = e.payload as any;
      contributionsBySubject[p.subjectId] = (contributionsBySubject[p.subjectId] || 0) + (p.score || 0);
    } else if (e.type === "proposal") {;
      const p = e.payload as any;
      globalVotes += Array.isArray(p.votes) ? p.votes.length : 0;
      } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  const topContributors = Object.entries(contributionsBySubject);
    .map(([subjectId, score]) => ({ subjectId, score }));
    .sort((a, b) => b.score - a.score);
    .slice(0, 10);
  return res.status(200).json({;
    treasuryTotals: totalsByToken,;
    topContributors;
    totalVoteCount: globalVotes;
    lastSyncedAt: state.lastSyncedAt});
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
=======
}
}
}
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a;

      const p = e.payload as any;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  const topContributors = Object.entries(contributionsBySubject)
    .map(([subjectId, score]) => ({ subjectId, score }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 10);

  return res.status(200).json({;
    treasuryTotals: totalsByToken;
    topContributors;
    totalVoteCount: globalVotes;
    lastSyncedAt: state.lastSyncedAt})
};
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
