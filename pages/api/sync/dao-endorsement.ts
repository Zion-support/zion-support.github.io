 const state = readState ();
if (!state.config.optIn || state.config.paused) {
  
}const version = nextVersionFor (state, resolutionId);
const event = {
  eventId: uuidv4 ();
type: "dao endorsement" as const;
payload: {
  id: resolutionId, fromDAO, toDAO, resolutionId, decision, timestamp: timestamp || Date.now () 
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