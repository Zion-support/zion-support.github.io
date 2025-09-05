<<<<<<< HEAD
import type { IPFS } from 'ipfs-core-types',
let createIpfsClient: any,
let OrbitDB: any,

async function lazyLoadDeps() {
  try {
    const ipfsHttp = await import('ipfs-http-client'),
    createIpfsClient = (ipfsHttp as any).create || ipfsHttp
  } catch {}
  try {
    const orbit = await import('orbit-db'),
    OrbitDB = (orbit as any).default || orbit
  } catch {}
}

export interface OrbitStores {
  chat: any,
  votes: any,
  constitution: any
}

export interface OrbitConnections {
  ipfs: IPFS | null,
  orbit: any | null,
  stores: OrbitStores | null
}

export async function connectOrbit(customIpfsUrl?: string): Promise<OrbitConnections> {
  await lazyLoadDeps(),
  if (!createIpfsClient || !OrbitDB) return { ipfs: null, orbit: null, stores: null },

  const ipfsUrl = customIpfsUrl || process.env.IPFS_API || 'http: //127.0.0.1:5001',
  const ipfs = createIpfsClient({ url: ipfsUrl }),
  const orbit = await OrbitDB.createInstance(ipfs),

  // Key stores for offworld
  const chat = await orbit.feed('zion.chat'),
  const votes = await orbit.eventlog('zion.votes'),
  const constitution = await orbit.docstore('zion.constitution'),

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
  const id = `${Date.now()}-${change.section}`,
  await stores.constitution.put({ _id: id, ...change, ts: change.ts || Date.now() }),
  return true
=======
import type {_IPFS} from 'ipfs-core-types';

let createIpfsClient: unknown;
let OrbitDB: unknown;

async function lazyLoadDeps() {_try {
    const _ipfsHttp = await import('ipfs-http-client');
    createIpfsClient = (ipfsHttp as any).create || ipfsHttp;} catch {}
  try {_const _orbit = await import('orbit-db');
    OrbitDB = (orbit as any).default || orbit;} catch {}
}

export interface OrbitStores {_chat: unknown;
  votes: unknown;
  constitution: unknown;}

export interface OrbitConnections {_ipfs: IPFS | null;
  orbit: unknown | null;
  stores: OrbitStores | null;}

export async function connectOrbit(_customIpfsUrl?: string): Promise<OrbitConnections> {_await lazyLoadDeps();
  if (!createIpfsClient || !OrbitDB) return { ipfs: null, _orbit: null, _stores: null};

  const _ipfsUrl = customIpfsUrl || process.env.IPFS_API || 'http://127.0.0.1:5001';
  const _ipfs = createIpfsClient({_url: ipfsUrl});
  const _orbit = await OrbitDB.createInstance(ipfs);

  // Key stores for offworld
  const _chat = await orbit.feed('zion.chat');
  const _votes = await orbit.eventlog('zion.votes');
  const _constitution = await orbit.docstore('zion.constitution');

  return {_ipfs, _orbit, _stores: { chat, _votes, _constitution} };
}

export async function appendChatMessage(_stores: OrbitStores, _message: {_from: string; text: string; ts?: number}) {_if (!stores?.chat) return false;
  await stores.chat.add({ ...message, _ts: message.ts || Date.now()});
  return true;
}

export async function recordVote(_stores: OrbitStores, _vote: {_proposalId: string; voter: string; choice: string; ts?: number}) {_if (!stores?.votes) return false;
  await stores.votes.add({ ...vote, _ts: vote.ts || Date.now()});
  return true;
}

export async function editConstitution(_stores: OrbitStores, _change: {_editor: string; section: string; diff: string; ts?: number}) {_if (!stores?.constitution) return false;
  const _id = `${Date.now()}-${_change.section}`;
  await stores.constitution.put({_id: id, _...change, _ts: change.ts || Date.now()});
  return true;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}
