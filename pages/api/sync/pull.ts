 const scoped = filterEventsByScope (state.events, state.config.scope);
const events = scoped.filter ( (e) => (e.timestamp || 0) > since);
return res.status (200) .json ({
  instanceId: state.config.instanceId;
lastSyncedAt: state.lastSyncedAt;
events;
scope: requestedScope 
}) 
}