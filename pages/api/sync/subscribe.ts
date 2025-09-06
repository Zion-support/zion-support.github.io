 const id = peer.id || uuidv4 ();
const existing = state.config.peers.find ( (p) => p.baseUrl === peer.baseUrl);
if (existing) {
  
}else {
  state.config.peers.push ({
  id, baseUrl: peer.baseUrl, scope: peer.scope || state.config.scope, paused: false 
}) 
}writeState (state);
return res.status (200) .json ({
  peers: state.config.peers 
}) 
}