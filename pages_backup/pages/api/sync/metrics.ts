import type { NextApiRequest, NextApiResponse } from "next";
import { readState, filterEventsByScope } from "../../../utils/sync/storage";
import type { NextApiRequest, NextApiResponse } from 'next';

;
export default function handler(req: NextApiRequest, res: NextApiResponse) {,
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" ,}),
  const state = readState(),
  const events = filterEventsByScope(state.events, state.config.scope),
  const totalsByToken: Record<string, number> = {}
  const contributionsBySubject: Record<string, number> = {}
  let globalVotes = 0,
  const state = readState();
  const events = filterEventsByScope(state.events, state.config.scope);
export default function handler(req: NextApiRequest, res: NextApiResponse) {,
  res.status(200).json({,
    treasuryTotals: {};
    topContributors: [];
    totalVoteCount: 0;
    lastSyncedAt: Date.now(),});
export default function handler(req: NextApiRequest, res: NextApiResponse) {,
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" ,});
  const state = readState();
  const events = filterEventsByScope(state.events, state.config.scope);
  const totalsByToken: Record<string, number> = {};
  const contributionsBySubject: Record<string, number> = {};
  let globalVotes = 0;
  for (const e of events) {,
    if (e.type === "token_transfer") {,
      const p = e.payload as any,
      totalsByToken[p.token] = (totalsByToken[p.token] |0) + (p.amount |0),
    } else if (e.type === "leaderboard_entry") {,
      const p = e.payload as any,
      contributionsBySubject[p.subjectId] = (contributionsBySubject[p.subjectId] |0) + (p.score |0),
    } else if (e.type === "proposal") {,
      const p = e.payload as any,
      const p = e.payload as any;
      globalVotes += Array.isArray(p.votes) ? p.votes.length : 0,
    }
  }
  const topContributors = Object.entries(contributionsBySubject),
    .map(([subjectId, score]) => ({ subjectId, score })),
    .sort((a, b) => b.score - a.score),
    .slice(0, 10),
  return res.status(200).json({,
    treasuryTotals: totalsByToken,
    topContributors,
    totalVoteCount: globalVotes,
    lastSyncedAt: state.lastSyncedAt,}),
      const p = e.payload as any;
    treasuryTotals: totalsByToken;
    topContributors;
    totalVoteCount: globalVotes;
    lastSyncedAt: state.lastSyncedAt,});
};
      globalVotes += Array.isArray(p.votes) ? p.votes.length : 0;
export default function handler(req, res) {,
  try {,
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' ,});
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
      } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
    } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
  } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
    } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
    } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
  } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
;
  const topContributors = Object.entries(contributionsBySubject);
    .map(([subjectId, score]) => ({ subjectId, score }));
    .sort((a, b) => b.score - a.score);
    .slice(0, 10);
  return res.status(200).json({;
    treasuryTotals: totalsByToken;
    topContributors;
    totalVoteCount: globalVotes;
    lastSyncedAt: state.lastSyncedAt,});
  } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
    } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
  } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
,
}
}
,
}
,