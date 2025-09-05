import type { NextApiRequest, NextApiResponse } from &quot;next&quot;;
import { readState, filterEventsByScope } from &quot;../../../utils/sync/storage&quot;;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== &quot;GET&quot;) return res.status(405).json({ error: &quot;Method not allowed&quot; });

  const state = readState();
  const events = filterEventsByScope(state.events, state.config.scope);

  const totalsByToken: Record<string, number> = {};
  const contributionsBySubject: Record<string, number> = {};
  let globalVotes = 0;

  for (const e of events) {
    if (e.type === &quot;token_transfer&quot;) {
      const p = e.payload as any;
      totalsByToken[p.token] = (totalsByToken[p.token] || 0) + (p.amount || 0);
    } else if (e.type === &quot;leaderboard_entry&quot;) {
      const p = e.payload as any;
      contributionsBySubject[p.subjectId] = (contributionsBySubject[p.subjectId] || 0) + (p.score || 0);
    } else if (e.type === &quot;proposal&quot;) {
      const p = e.payload as any;
      globalVotes += Array.isArray(p.votes) ? p.votes.length : 0;
    }
  }

  const topContributors = Object.entries(contributionsBySubject)
    .map(([subjectId, score]) => ({ subjectId, score }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 10);

  return res.status(200).json({
    treasuryTotals: totalsByToken,
    topContributors,
    totalVoteCount: globalVotes,
    lastSyncedAt: state.lastSyncedAt});
}