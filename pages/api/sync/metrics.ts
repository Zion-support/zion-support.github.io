import type {_NextApiRequest, _NextApiResponse} from "next";

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed"});

  const _state = readState();
  const _events = filterEventsByScope(state.events, state.config.scope);

  const totalsByToken: Record<string, number> = {};
  const contributionsBySubject: Record<string, number> = {};
  let _globalVotes = 0;

  for (const e of events) {_if (e.type === "token_transfer") {
      const _p = e.payload as any;
      totalsByToken[p.token] = (totalsByToken[p.token] || 0) + (p.amount || 0);} else if (e.type === "leaderboard_entry") {_const _p = e.payload as any;
      contributionsBySubject[p.subjectId] = (contributionsBySubject[p.subjectId] || 0) + (p.score || 0);} else if (e.type === "proposal") {_const _p = e.payload as any;
      globalVotes += Array.isArray(p.votes) ? p.votes.length : 0;}
  }

  const _topContributors = Object.entries(contributionsBySubject)
    .map(_([subjectId, _score]) => ({_subjectId, _score}))
    .sort(_(a, _b) => b.score - a.score)
    .slice(0, 10);

  return res.status(200).json({_treasuryTotals: totalsByToken, _topContributors, _totalVoteCount: globalVotes, _lastSyncedAt: state.lastSyncedAt});
}