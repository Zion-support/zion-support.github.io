<<<<<<< HEAD:pages_backup/api/sync/metrics.ts
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/api/sync/metrics.ts
<<<<<<< HEAD:pages/api/sync/metrics.ts
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/sync/metrics.ts
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/sync/metrics.ts
import type { NextApiRequest, NextApiResponse } from "next",;
import { readState, filterEventsByScope } from "../../../utils/sync/storage",;
;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

const state = readState(),
  const events = filterEventsByScope(state.events, state.config.scope),

<<<<<<< HEAD:pages_backup/api/sync/metrics.ts
<<<<<<< HEAD:pages/api/sync/metrics.ts
=======
  const state = readState()
  const events = filterEventsByScope(state.events, state.config.scope)
=======
  const state = readState(),
  const events = filterEventsByScope(state.events, state.config.scope),
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/sync/metrics.ts


import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    treasuryTotals: {}
    topContributors: []
    totalVoteCount: 0
    lastSyncedAt: Date.now()
  });
import type { NextApiRequest, NextApiResponse } from "next"
import { readState, filterEventsByScope } from "../../../utils/sync/storage"
export default function handler(req: NextApiRequest, res: NextApiResponse) {


  const totalsByToken: Record<string, number> = {},
  const contributionsBySubject: Record<string, number> = {},
  let globalVotes = 0,


  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" }),
  const state = readState(),
  const events = filterEventsByScope(state.events, state.config.scope),

  const totalsByToken: Record<string, number> = {},
  const contributionsBySubject: Record<string, number> = {},
  let globalVotes = 0,

  const totalsByToken: Record<string, number> = {}
  const contributionsBySubject: Record<string, number> = {}
  let globalVotes = 0
<<<<<<< HEAD:pages_backup/api/sync/metrics.ts

ursor/fix-website-loading-errors-and-merge-6662


<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/sync/metrics.ts
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/sync/metrics.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { readState, filterEventsByScope } from "../../../utils/sync/storage";
import type { NextApiRequest, NextApiResponse } from "next",;
=======
import type { NextApiRequest, NextApiResponse } from "next",;"
import { readState, filterEventsByScope } from "../../../utils/sync/storage",;
;

export default function handler(req: NextApiRequest, res: NextApiResponse) {}
  const state = readState(),
  const events = filterEventsByScope(state.events, state.config.scope),





;
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {}
  res.status(200).json({}
    treasuryTotals: {},
    topContributors: [],
    totalVoteCount: 0,
    lastSyncedAt: Date.now();
  });"
import type { NextApiRequest, NextApiResponse } from "next","
import { readState, filterEventsByScope } from "../../../utils/sync/storage",
export default function handler() { return null; }
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" }),
  const state = readState(),
  const events = filterEventsByScope(state.events, state.config.scope),




  const totalsByToken: Record<string, number> = {},
  const contributionsBySubject: Record<string, number> = {},
  let globalVotes = 0,

;
";
import type { NextApiRequest, NextApiResponse } from "next";"
import { readState, filterEventsByScope } from "../../../utils/sync/storage";"
import type { NextApiRequest, NextApiResponse } from "next",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/sync/metrics.ts
import { readState, filterEventsByScope } from "../../../utils/sync/storage",;
;
export default function handler(req: NextApiRequest, res: NextApiResponse) {}
"
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" })
  const state = readState()
  const events = filterEventsByScope(state.events, state.config.scope)
  const totalsByToken: Record<string, number> = {}
<<<<<<< HEAD:pages_backup/api/sync/metrics.ts
  const contributionsBySubject: Record<string, number> = {}
  let globalVotes = 0
<<<<<<< HEAD:pages_backup/api/sync/metrics.ts
  const state = readState()
  const events = filterEventsByScope(state.events, state.config.scope)
=======
const state = readState(),
  const events = filterEventsByScope(state.events, state.config.scope),
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/sync/metrics.ts

import type { NextApiRequest, NextApiResponse } from "next",;
import { readState, filterEventsByScope } from "../../../utils/sync/storage",;
;

export default function handler(req: NextApiRequest, res: NextApiResponse) {

<<<<<<< HEAD:pages_backup/api/sync/metrics.ts
  const state = readState()
  const events = filterEventsByScope(state.events, state.config.scope)
=======
const state = readState(),
  const events = filterEventsByScope(state.events, state.config.scope),

  const state = readState(),
  const events = filterEventsByScope(state.events, state.config.scope),
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/sync/metrics.ts

import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    treasuryTotals: {}
    topContributors: []
    totalVoteCount: 0
    lastSyncedAt: Date.now()
  });
import type { NextApiRequest, NextApiResponse } from "next"
import { readState, filterEventsByScope } from "../../../utils/sync/storage"
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD:pages_backup/api/sync/metrics.ts
<<<<<<< HEAD
<<<<<<< HEAD:pages/api/sync/metrics.ts
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======


  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" }),
  const state = readState(),
  const events = filterEventsByScope(state.events, state.config.scope),
  const totalsByToken: Record<string, number> = {},
  const contributionsBySubject: Record<string, number> = {},
  let globalVotes = 0,
  const totalsByToken: Record<string, number> = {},
  const contributionsBySubject: Record<string, number> = {},
  let globalVotes = 0,

  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });
  const state = readState();
  const events = filterEventsByScope(state.events, state.config.scope);
  const totalsByToken: Record<string, number> = {};
  const contributionsBySubject: Record<string, number> = {};
  let globalVotes = 0;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/sync/metrics.ts
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" })
  const state = readState()
  const events = filterEventsByScope(state.events, state.config.scope)
  const totalsByToken: Record<string, number> = {}
  const contributionsBySubject: Record<string, number> = {}
  let globalVotes = 0
<<<<<<< HEAD:pages_backup/api/sync/metrics.ts

<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/sync/metrics.ts
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/sync/metrics.ts
  for (const e of events) {
    if (e.type === "token_transfer") {
      const p = e.payload as any
      totalsByToken[p.token] = (totalsByToken[p.token] |0) + (p.amount |0)
    } else if (e.type === "leaderboard_entry") {
      const p = e.payload as any
      contributionsBySubject[p.subjectId] = (contributionsBySubject[p.subjectId] |0) + (p.score |0)
    } else if (e.type === "proposal") {
      const p = e.payload as any
      const p = e.payload as any
      globalVotes += Array.isArray(p.votes) ? p.votes.length : 0
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });
  const state = null;
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD:pages_backup/api/sync/metrics.ts
<<<<<<< HEAD
=======
  const contributionsBySubject: Record<string, number> = {};
  let globalVotes = 0;
  const state = readState(),
  const events = filterEventsByScope(state.events, state.config.scope),



"
import type { NextApiRequest, NextApiResponse } from "next",;"
import { readState, filterEventsByScope } from "../../../utils/sync/storage",;
;

export default function handler(req: NextApiRequest, res: NextApiResponse) {}
  const state = readState(),
  const events = filterEventsByScope(state.events, state.config.scope),

';
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {}
  res.status(200).json({}
    treasuryTotals: {},
    topContributors: [],
    totalVoteCount: 0,
    lastSyncedAt: Date.now();
  });"
import type { NextApiRequest, NextApiResponse } from "next","
import { readState, filterEventsByScope } from "../../../utils/sync/storage",
export default function handler() { return null; }
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" }),
  const state = readState(),
  const events = filterEventsByScope(state.events, state.config.scope),
  const totalsByToken: Record<string, number> = {},
  const contributionsBySubject: Record<string, number> = {},
  let globalVotes = 0,



  for (const e of events) {";
    if (e.type === "token_transfer") {};
      const p = e.payload as any;
      totalsByToken[p.token] = (totalsByToken[p.token] |0) + (p.amount |0)"
    } else if (e.type === "leaderboard_entry") {}
      const p = e.payload as any;
      contributionsBySubject[p.subjectId] = (contributionsBySubject[p.subjectId] |0) + (p.score |0)
"
    } else if (e.type === "proposal") {}
      const p = e.payload as any;
      const p = e.payload as any,
      globalVotes += Array.isArray(p.votes) ? p.votes.length : 0;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/sync/metrics.ts
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/sync/metrics.ts
    }
  }
  const topContributors = Object.entries(contributionsBySubject)
    .map(([subjectId, score]) => ({ subjectId, score }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 10)
<<<<<<< HEAD:pages_backup/api/sync/metrics.ts
  return res.status(200).json({
<<<<<<< HEAD:pages_backup/api/sync/metrics.ts
}
}
}
}
=======
    treasuryTotals: totalsByToken
    topContributors
    totalVoteCount: globalVotes
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/sync/metrics.ts

<<<<<<< HEAD
<<<<<<< HEAD:pages/api/sync/metrics.ts
    lastSyncedAt: state.lastSyncedAt})
      const p = e.payload as any
    treasuryTotals: totalsByToken
    topContributors
    totalVoteCount: globalVotes
=======
  return res.status(200).json({}
    treasuryTotals: totalsByToken;
    topContributors;
    totalVoteCount: globalVotes;
    lastSyncedAt: state.lastSyncedAt})
      const p = e.payload as any,
    treasuryTotals: totalsByToken,
    topContributors,
    totalVoteCount: globalVotes,
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/sync/metrics.ts
    lastSyncedAt: state.lastSyncedAt});
};
      globalVotes += Array.isArray(p.votes) ? p.votes.length : 0;"
import type { NextApiRequest, NextApiResponse } from "next";"
import { readState, filterEventsByScope } from "../../../utils/sync/storage";
export default function handler(req, res) {}
  try {';
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  const events = filterEventsByScope(state.events, state.config.scope);
  const totalsByToken: Record<string, number> = {};
  const contributionsBySubject: Record<string, number> = {};
  let globalVotes = 0;
  for (const e of events) {;"
    if (e.type === "token_transfer") {;
      const p = e.payload as any;
      totalsByToken[p.token] = (totalsByToken[p.token] || 0) + (p.amount || 0);"
    } else if (e.type === "leaderboard_entry") {;
      const p = e.payload as any;
      contributionsBySubject[p.subjectId] = (contributionsBySubject[p.subjectId] || 0) + (p.score || 0);"
    } else if (e.type === "proposal") {;
      const p = e.payload as any;
      globalVotes += Array.isArray(p.votes) ? p.votes.length : 0;
      } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);"
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
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD:pages_backup/api/sync/metrics.ts
<<<<<<< HEAD:pages_backup/api/sync/metrics.ts

      const p = e.payload as any

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======


=======



}
}
}
}

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/sync/metrics.ts

      const p = e.payload as any

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/sync/metrics.ts
=======



      const p = e.payload as any

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

}
}
}
}




      const p = e.payload as any

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/sync/metrics.ts
  const topContributors = Object.entries(contributionsBySubject)
    .map(([subjectId, score]) => ({ subjectId, score }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 10)

<<<<<<< HEAD:pages_backup/api/sync/metrics.ts
  return res.status(200).json({
    treasuryTotals: totalsByToken
    topContributors
    totalVoteCount: globalVotes
    lastSyncedAt: state.lastSyncedAt})
};
<<<<<<< HEAD:pages_backup/api/sync/metrics.ts

treasuryTotals: totalsByToken,
=======
  return res.status(200).json({}
    treasuryTotals: totalsByToken,
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/sync/metrics.ts
    topContributors,
    totalVoteCount: globalVotes,
    lastSyncedAt: state.lastSyncedAt,
=======
treasuryTotals: totalsByToken;
    topContributors;
    totalVoteCount: globalVotes;
    lastSyncedAt: state.lastSyncedAt;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/sync/metrics.ts
  });
    lastSyncedAt: state.lastSyncedAt})
<<<<<<< HEAD:pages_backup/api/sync/metrics.ts
}
<<<<<<< HEAD:pages_backup/api/sync/metrics.ts
<<<<<<< HEAD
<<<<<<< HEAD:pages/api/sync/metrics.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/sync/metrics.ts
=======
};'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/sync/metrics.ts
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/sync/metrics.ts
