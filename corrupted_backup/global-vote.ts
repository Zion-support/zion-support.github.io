 const state = readState ();
if (!state.config.optIn || state.config.paused) {
  
}const {
  proposalId, title, votes 
}= req.body as {
  proposalId: string, title: string, votes: {
  voterId: string, weight: number, choice: string 
}[] 
};
if (!proposalId || !title || !Array.isArray (votes) ) {
  
}const merkleRoot = computeMerkleRootFromVotes (votes);
const version = (state.latestVersionByEntityId[proposalId] || 0) + 1;
const event = {
  eventId: uuidv4 ();
type: "proposal" as const;
payload: {
  id: proposalId, proposalId, title, votes 
};
version;
timestamp: Date.now ();
merkleRoot 
};
upsertEvent (state, event);
writeState (state);
await axios.post (url, body, {
  headers, timeout: 5000 
}) 
}catch {
  // ignore 
}
}) );
}