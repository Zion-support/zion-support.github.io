<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { readState, filterEventsByScope } from '../../../utils/sync/storage';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET')
    return res.status(405).json({ error: 'Method not allowed' });
=======
import type { NextApiRequest, NextApiResponse } from "next";
import { readState, filterEventsByScope } from "../../../utils/sync/storage";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
import type { NextApiRequest, NextApiResponse } from "next";
import { readState, filterEventsByScope } from "../../../utils/sync/storage";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

  const state = readState();
  const events = filterEventsByScope(state.events, state.config.scope);

  const totalsByToken: Record<string, number> = {};
  const contributionsBySubject: Record<string, number> = {};
  let globalVotes = 0;

<<<<<<< HEAD
<<<<<<< HEAD
   else if (e.type === 'leaderboard_entry') {
=======
  for (const e of events) {
    if (e.type === "token_transfer") {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      const p = e.payload as any;
      totalsByToken[p.token] = (totalsByToken[p.token] || 0) + (p.amount || 0)
    } else if (e.type === "leaderboard_entry") {
      const p = e.payload as any;
<<<<<<< HEAD
      globalVotes += Array.isArray(p.votes) ? p.votes.length : 0;
=======
  for (const e of events) {
    if (e.type === "token_transfer") {
      const p = e.payload as any;
      totalsByToken[p.token] = (totalsByToken[p.token] || 0) + (p.amount || 0)
    } else if (e.type === "leaderboard_entry") {
      const p = e.payload as any;
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      contributionsBySubject[p.subjectId] = (contributionsBySubject[p.subjectId] || 0) + (p.score || 0)
    } else if (e.type === "proposal") {
      const p = e.payload as any;
      globalVotes += Array.isArray(p.votes) ? p.votes.length : 0
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
  }

  const topContributors = Object.entries(contributionsBySubject)
    .map(([subjectId, score]) => ({ subjectId, score }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 10);

  return res.status(200).json({
<<<<<<< HEAD
    treasuryTotals: totalsByToken,
    topContributors,
    totalVoteCount: globalVotes,
    lastSyncedAt: state.lastSyncedAt
  });
<<<<<<< HEAD
=======
    treasuryTotals: totalsByToken, topContributors,
    totalVoteCount: globalVotes,
    lastSyncedAt: state.lastSyncedAt})
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
