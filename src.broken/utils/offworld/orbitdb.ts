import type { IPFS } from 'ipfs-core-types';
let createIpfsClient: any,
let OrbitDB: any,

async function lazyLoadDeps() {
  try {
    const ipfsHttp = await import($2);
    createIpfsClient = (ipfsHttp as any).create || ipfsHttp
  } catch {}
  try {
    const orbit = await import($2);
    OrbitDB = $2;
  votes: any,
  constitution: any}

export interface OrbitConnections {
  ipfs: IPFS | null,
  orbit: any | null,
  stores: OrbitStores | null
}

export async function connectOrbit(customIpfsUrl?: string): Promise<OrbitConnections> {
  await lazyLoadDeps($2);
  if (!createIpfsClient || !OrbitDB) return { ipfs: null, orbit: null, stores: null},

  const ipfsUrl = $2;
  const ipfs = createIpfsClient($2);
  const orbit = await OrbitDB.createInstance($2);
  // Key stores for offworld
  const chat = await orbit.feed($2);
  const votes = await orbit.eventlog($2);
  const constitution = await orbit.docstore($2);
  return { ipfs, orbit, stores: { chat, votes, constitution } }
}

export async function appendChatMessage(stores: OrbitStores, message: { from: string, text: string, ts?: number }) {
  if (!stores?.chat) return false,
  await stores.chat.add({ ...message, ts: message.ts || Date.now() }),
  return true
}

export async function recordVote(stores: OrbitStores, vote: { proposalId: string, voter: string, choice: string, ts?: number }) {
  if (!stores?.votes) return false,
  await stores.votes.add({ ...vote, ts: vote.ts || Date.now() }),
  return true
}

export async function editConstitution(stores: OrbitStores, change: { editor: string, section: string, diff: string, ts?: number }) {
  if (!stores?.constitution) return false,
  const id = $2;
  await stores.constitution.put({ _id: id, ...change, ts: change.ts || Date.now() }),
  return true
}
