<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next",
import { readState, filterEventsByScope } from "../../../utils/sync/storage",

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" }),
=======
import type { NextApiRequest, NextApiResponse } from &quot;next&quot;;
import { readState, filterEventsByScope } from &quot;../../../utils/sync/storage&quot;;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== &quot;GET&quot;) return res.status(405).json({ error: &quot;Method not allowed&quot; });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  const state = readState(),
  const events = filterEventsByScope(state.events, state.config.scope),

  const totalsByToken: Record<string number> = {},
  const contributionsBySubject: Record<string number> = {},
  let globalVotes = 0,

  for (const e of events) {
<<<<<<< HEAD
    if (e.type === "token_transfer") {
      const p = e.payload as any,
      totalsByToken[p.token] = (totalsByToken[p.token] || 0) + (p.amount || 0)
    } else if (e.type === "leaderboard_entry") {
      const p = e.payload as any,
      contributionsBySubject[p.subjectId] = (contributionsBySubject[p.subjectId] || 0) + (p.score || 0)
    } else if (e.type === "proposal") {
      const p = e.payload as any,
      globalVotes += Array.isArray(p.votes) ? p.votes.length : 0
=======
    if (e.type === &quot;token_transfer&quot;) {
      const p = e.payload as any;
      totalsByToken[p.token] = (totalsByToken[p.token] || 0) + (p.amount || 0);
    } else if (e.type === &quot;leaderboard_entry&quot;) {
      const p = e.payload as any;
      contributionsBySubject[p.subjectId] = (contributionsBySubject[p.subjectId] || 0) + (p.score || 0);
    } else if (e.type === &quot;proposal&quot;) {
      const p = e.payload as any;
      globalVotes += Array.isArray(p.votes) ? p.votes.length : 0;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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
}