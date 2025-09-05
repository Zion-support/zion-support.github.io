<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next",;
import { readState, filterEventsByScope } from "../../../utils/sync/storage",;
;
export default function handler(req:NextApiRequest, res:NextApiResponse) {;
  if (req.method !== "GET") return res.status(405).json({ error:"Method not allowed" }),;
;
  const state = readState(),;
  const events = filterEventsByScope(state.events, state.config.scope),;
;
  const totalsByToken:Record<string number> = {},;
  const contributionsBySubject:Record<string number> = {},;
  let globalVotes = 0,;
;
  for (const e of events) {;
    if (e.type === "token_transfer") {;
      const p = e.payload as any,;
      totalsByToken[p.token] = (totalsByToken[p.token] || 0) + (p.amount || 0),;
    } else if (e.type === "leaderboard_entry") {;
      const p = e.payload as any,;
      contributionsBySubject[p.subjectId] = (contributionsBySubject[p.subjectId] || 0) + (p.score || 0),;
    } else if (e.type === "proposal") {;
      const p = e.payload as any,;
      globalVotes += Array.isArray(p.votes) ? p.votes.length :0,;
    }
  }
;
  const topContributors = Object.entries(contributionsBySubject);
    .map(([subjectId, score]) => ({ subjectId, score }));
    .sort((a, b) => b.score - a.score);
    .slice(0, 10),;
;
  return res.status(200).json({;
    treasuryTotals:totalsByToken,;
    topContributors,;
    totalVoteCount:globalVotes,;
    lastSyncedAt:state.lastSyncedAt}),;
=======
import type { NextApiRequest, NextApiResponse } from "next",
import { readState, filterEventsByScope } from "../../../utils/sync/storage",

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" }),
  const state = readState(),
  const events = filterEventsByScope(state.events, state.config.scope),

  const totalsByToken: Record<string number> = {},
  const contributionsBySubject: Record<string number> = {},
  let globalVotes = 0,

  for (const e of events) {
    if (e.type === "tokentransfer") {
      const p = e.payload as any,
      totalsByToken[p.token] = (totalsByToken[p.token] || 0) + (p.amount || 0)
    } else if (e.type === "leaderboardentry") {
      const p = e.payload as any,
      contributionsBySubject[p.subjectId] = (contributionsBySubject[p.subjectId] || 0) + (p.score || 0)
    } else if (e.type === "proposal") {
      const p = e.payload as any,
      globalVotes += Array.isArray(p.votes) ? p.votes.length : 0    }
  }

  const topContributors = Object.entries(contributionsBySubject)
    .map(([subjectId, score]) => ({ subjectId, score }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 10),

  return res.status(200).json({
    treasuryTotals: totalsByToken,
    topContributors,
    totalVoteCount: globalVotes,
    lastSyncedAt: state.lastSyncedAt})
import type {NextApiRequest, NextApiResponse} from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed"});

  const state = readState();
  const events = filterEventsByScope(state.events, state.config.scope);

  const totalsByToken: Record<string, number> = {};
  const contributionsBySubject: Record<string, number> = {};
  let globalVotes = 0;

  for (const e of events) {if (e.type === "tokentransfer") {
      const p = e.payload as any;
      totalsByToken[p.token] = (totalsByToken[p.token] || 0) + (p.amount || 0)} else if (e.type === "leaderboardentry") {const p = e.payload as any;
      contributionsBySubject[p.subjectId] = (contributionsBySubject[p.subjectId] || 0) + (p.score || 0)} else if (e.type === "proposal") {const p = e.payload as any;
      globalVotes += Array.isArray(p.votes) ? p.votes.length : 0}
  }

  const topContributors = Object.entries(contributionsBySubject)
    .map(_([subjectId, score]) => ({subjectId, score}))
    .sort(_(a, b) => b.score - a.score)
    .slice(0, 10);

  return res.status(200).json({treasuryTotals: totalsByToken, topContributors, totalVoteCount: globalVotes, lastSyncedAt: state.lastSyncedAt})
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}