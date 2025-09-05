 const state = readState ();
const events = filterEventsByScope (state.events, state.config.scope);
const totalsByToken: Record<string number> = {
  
};
const contributionsBySubject: Record<string number> = {
  
};
let globalVotes = 0;
for (const e of events) {
  
}
}const topContributors = Object.entries (contributionsBySubject) .map ( ([subjectId, score]) => ({
  subjectId, score 
}) ) .sort ( (a, b) => b.score - a.score) .slice (0, 10);
return res.status (200) .json ({
  treasuryTotals: totalsByToken;
topContributors;
totalVoteCount: globalVotes;
lastSyncedAt: state.lastSyncedAt 
}) 
}