<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next",;
import { readState, filterEventsByScope } from "../../../utils/sync/storage",
;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" }),

  const state = readState(),
  const events = filterEventsByScope(state.events, state.config.scope),

  const totalsByToken: Record<string, number> = {},
  const contributionsBySubject: Record<string, number> = {},
  let globalVotes = 0,

  for (const e of events) {
    if (e.type === "token_transfer") {
      const p = e.payload as any,
      totalsByToken[p.token] = (totalsByToken[p.token] || 0) + (p.amount || 0)
    } else if (e.type === "leaderboard_entry") {
      const p = e.payload as any,
      contributionsBySubject[p.subjectId] = (contributionsBySubject[p.subjectId] || 0) + (p.score || 0)
    } else if (e.type === "proposal") {
      const p = e.payload as any,
      globalVotes += Array.isArray(p.votes) ? p.votes.length : 0
    }
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
};
=======
import { NextApiRequest, NextApiResponse } from 'next';
import { readState } from '../../../utils/sync/storage';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const state = readState();
    const contributionsBySubject: Record<string, number> = {};
    let globalVotes = 0;

    for (const e of state.events) {
      if (e.type === 'global_vote') {
        globalVotes++;
      } else if (e.type === 'leaderboard_entry') {
        const p = e.payload as any;
        contributionsBySubject[p.subjectId] =
          (contributionsBySubject[p.subjectId] || 0) + (p.score || 0);
      }
    }

    res.status(200).json({
      globalVotes,
      contributionsBySubject,
      totalEvents: state.events.length
    });
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to compute metrics' });
  }
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-10dd
