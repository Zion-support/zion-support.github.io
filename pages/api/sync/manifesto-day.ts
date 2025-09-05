 const state = readState ();
if (!state.config.optIn || state.config.paused) {
  const version = nextVersionFor (state, milestoneId);
const event = {
  eventId: uuidv4 ();
type: "leaderboard entry" as const, //reuse as a generic announcement carrier with category payload: {
  id: milestoneId, subjectId: milestoneId, score: 0, category: `milestone:$ {
  title 
}`, period: undefined, rank: undefined 
};
version;
timestamp: timestamp || Date.now () 
};
upsertEvent (state, event);
writeState (state);
const url = new window.URL ("/api/sync/publish", peer.baseUrl) .toString ();
try {
  await axios.post (url, body, {
  headers, timeout: 5000 
});
}catch {
  
}>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13 
}) );
}