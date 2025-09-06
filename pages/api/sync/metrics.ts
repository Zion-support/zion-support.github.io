<<<<<<< HEAD
if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });
  const state = readState();
  const events = filterEventsByScope(state.events, state.config.scope);
  const totalsByToken: Record<string, number> = {};
  const contributionsBySubject: Record<string, number> = {};
  let globalVotes = 0;
  for (const e of events) {
    if (e.type === "token_transfer") {
      const p = e.payload as any
      totalsByToken[p.token] = (totalsByToken[p.token] |0) + (p.amount |0)
    } else if (e.type === "leaderboard_entry") {
      const p = e.payload as any
      contributionsBySubject[p.subjectId] = (contributionsBySubject[p.subjectId] |0) + (p.score |0)
  let globalVotes = 0

  for (const e of events) {
    if (e.type === "token_transfer") {
      const p = e.payload as any
      totalsByToken[p.token] = (totalsByToken[p.token] || 0) + (p.amount || 0)
    } else if (e.type === "leaderboard_entry") {
      const p = e.payload as any
      contributionsBySubject[p.subjectId] = (contributionsBySubject[p.subjectId] || 0) + (p.score || 0)

=======
<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import { readState, filterEventsByScope } from "../../../utils/sync/storage";
=======
import type { NextApiRequest, NextApiResponse } from "next",;
import { readState, filterEventsByScope } from "../../../utils/sync/storage",;
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default function handler(req: NextApiRequest, res: NextApiResponse) {

<<<<<<< HEAD
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" })
  const state = readState()
  const events = filterEventsByScope(state.events, state.config.scope)
  const totalsByToken: Record<string, number> = {}
  const contributionsBySubject: Record<string, number> = {}
  let globalVotes = 0
=======
  const state = readState(),
  const events = filterEventsByScope(state.events, state.config.scope),

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const totalsByToken: Record<string, number> = {},
  const contributionsBySubject: Record<string, number> = {},
  let globalVotes = 0,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  for (const e of events) {
    if (e.type === "token_transfer") {
      const p = e.payload as any
      totalsByToken[p.token] = (totalsByToken[p.token] |0) + (p.amount |0)
    } else if (e.type === "leaderboard_entry") {
      const p = e.payload as any
      contributionsBySubject[p.subjectId] = (contributionsBySubject[p.subjectId] |0) + (p.score |0)
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    } else if (e.type === "proposal") {
<<<<<<< HEAD
<<<<<<< HEAD
      const p = e.payload as any
=======
      const p = e.payload as any,
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      globalVotes += Array.isArray(p.votes) ? p.votes.length : 0
    }
  }
<<<<<<< HEAD
const topContributors = Object.entries(contributionsBySubject)
=======
  const topContributors = Object.entries(contributionsBySubject)
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    .map(([subjectId, score]) => ({ subjectId, score }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 10)
  return res.status(200).json({
<<<<<<< HEAD
    treasuryTotals: totalsByToken, topContributors,
    totalVoteCount: globalVotes,
    lastSyncedAt: state.lastSyncedAt})
}
import type { NextApiRequest, NextApiResponse } from './next';,
import { read_state, filterEventsByScope  } from '../../../utils / sync / storage';,
;
export default /**
 * handler - Function description
 */
function handler() {
  if (return res.status (405).json ({ error: "Method not allowed" }), ) {
  $2
}
  const state = read_state (),
  const events = filterEventsByScope (state.events, state.config.scope),
  const totalsByToken: Record < string, number> = {},
  const contributionsBySubject: Record < string, number> = {},
  let global_votes = 0,
  for (const e of events) {
    // Check condition
if ( {) {
  $2
}
      const p = e.payload as any,
      totalsByToken[p.token] = (totalsByToken[p.token] || 0) + (p.amount || 0);
    } else // Check condition
if ( {) {
  $2
}
      const p = e.payload as any,
      contributionsBySubject[p.subject_id] = (contributionsBySubject[p.subject_id] || 0) + (p.score || 0);
    } else // Check condition
if ( {) {
  $2
}
      const p = e.payload as any,
      global_votes += Array.is_array (p.votes) ? p.votes.length : 0;
    }
  }
  const top_contributors = Object.entries (contributionsBySubject);
    .map (([subject_id, score]) => ({ subject_id, score }));
    .sort ((a, b) => b.score - a.score);
    .slice (0, 10),
  return res.status (200).json ({
    treasury_totals: totalsByToken,
    top_contributors,
    totalVoteCount: global_votes,
    lastSyncedAt: state.lastSyncedAt});
}
;
}

=======
<<<<<<< HEAD
    treasuryTotals: totalsByToken
    topContributors
    totalVoteCount: globalVotes

    lastSyncedAt: state.lastSyncedAt})
=======
      const p = e.payload as any,
=======
    treasuryTotals: totalsByToken,
    topContributors,
    totalVoteCount: globalVotes,
    lastSyncedAt: state.lastSyncedAt});
};
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      globalVotes += Array.isArray(p.votes) ? p.votes.length : 0;
import type { NextApiRequest, NextApiResponse } from "next";
import { readState, filterEventsByScope } from "../../../utils/sync/storage";
export default function handler(req, res) {
  try {
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
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
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
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
=======
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
