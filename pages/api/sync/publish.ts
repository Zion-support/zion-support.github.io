  if (scope;
    }
  }
  const entityId = getEntityId(event);
  const currentState = readState();
  upsertEvent(currentState, event);
  writeState(currentState);
  const alreadyPropagated = payload.propagate === false;
  if (!alreadyPropagated && currentState.config.peers.length > 0) {
    const headers: Record<string, string> = {};
    const localBody = { ...event, propagate: false };
const baseSignature = require('../../../utils/sync/signature');
    const sig = baseSignature.signPayload(localBody);
    if (sig) headers['x-zion-signature'] = sig;

    await Promise.all(
      currentState.config.peers
        .filter(p => !p.paused)
        .map(async peer => {
          const url = new URL('/api/sync/publish', peer.baseUrl).toString();
          try {
            await axios.post(url, localBody, { headers, timeout: 5000 });
          try {
            await axios.post(url, localBody, { headers, timeout: 5000 })
          } catch {
            // ignore peer failure
          }
        })
);
  }

  return res.status(200).json({ status: 'accepted', entityId });

}}
