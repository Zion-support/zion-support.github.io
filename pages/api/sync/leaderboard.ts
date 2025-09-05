 const state = readState ();
if (!state.config.optIn || state.config.paused) {
  
}const {
  subjectId, score, category, period, rank 
}= req.body as {
  subjectId: string, score: number, category: string, period?: string, rank?: number 
};
const event = {
  eventId: uuidv4 ();
type: "leaderboard entry" as const;
payload: {
  id: entityKey, subjectId, score, category, period, rank 
};
version;
timestamp: Date.now () 
};
upsertEvent (state, event);
writeState (state);
await axios.post (url, body, {
  headers, timeout: 5000 
}) 
}catch {
  
}
}) );
}