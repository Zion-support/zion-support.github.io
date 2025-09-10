import fs from 'fs';
import path from 'path';
import { Readable } from 'stream';
// Lazy imports to keep optional deps optional
let Web3Storage: any,
let getFilesFromPath: any,
let createIpfsClient: any,
let PinataSDK: any,

async function lazyLoadDeps() {
  try {
    const web3 = await import($2);
    Web3Storage = $2;
    getFilesFromPath = (web3 as any).getFilesFromPath
  } catch {}
  try {
    const ipfsHttp = await import($2);
    createIpfsClient = (ipfsHttp as any).create || ipfsHttp
  } catch {}
  try {
    const pinata = await import($2);
    PinataSDK = (pinata as any).default || pinata
  } catch {}
}

export type IpfsClientChoice = $2;
export interface IpfsResult {
  cid: string,
  provider: IpfsClientChoice | 'none'
}

function env(name: string): string | undefined {
  return process.env[name] || process.env[name.toLowerCase()]
}

function bufferToStream(buffer: Buffer): Readable {
  const stream = new Readable($2);
  stream.push($2);
  stream.push($2);
  return stream
}

export async function addJSON(content: unknown): Promise<IpfsResult> {
  const json = Buffer.from(JSON.stringify(content, null, 2)),
  return addBuffer(json, 'data.json')
}

export async function addBuffer(buffer: Buffer, filename = 'file.bin'): Promise<IpfsResult> {
  await lazyLoadDeps($2);
  // 1) Try Web3.Storage
  const web3Token = env($2);
  if (Web3Storage && web3Token) {
    const client = new Web3Storage($2);
    const fileLike = new File($2);
    const cid = await client.put($2);
    return { cid, provider: 'web3.storage' }
  }

  // 2) Try Pinata
  const pinataJwt = env($2);
  const pinataApiKey = env($2);
  const pinataSecret = env($2);
  if (PinataSDK && (pinataJwt || (pinataApiKey && pinataSecret))) {
    const pinata = pinataJwt
      ? new PinataSDK({ pinataJWTKey: pinataJwt})
      : new PinataSDK($2);
    const res = await pinata.pinFileToIPFS(bufferToStream(buffer), {
      pinataMetadata: { name: filename} as any),
    return { cid: res.IpfsHash, provider: 'pinata' }
  }

  // 3) Try local IPFS
  const ipfsUrl = $2;
  if (createIpfsClient) {
    const ipfs = createIpfsClient($2);
    const { cid } = await ipfs.add($2);
    return { cid: cid.toString(), provider: 'local-ipfs' }
  }

  return { cid: '', provider: 'none' }
}

export async function addDirectory(dirPath: string): Promise<IpfsResult> {
  await lazyLoadDeps($2);
  // Prefer Web3.Storage for directories
  if (Web3Storage && web3Token) {
    if (!getFilesFromPath) {
      // Fallback: manually collect files
      const files: File[] = [],
      function walk(current: string, base = '') {
        const entries = fs.readdirSync($2);
        for (const entry of entries) {
          const full = path.join($2);
          const rel = path.posix.join($2);
          if (entry.isDirectory()) {
            walk(full, rel)
          } else {
            const data = fs.readFileSync($2);
            files.push(new File([data], rel))
          }
        }
      }
      walk($2);
      return { cid, provider: 'web3.storage' }
    } else {
      const files = await getFilesFromPath($2);
      return { cid, provider: 'web3.storage' }
    }
  }

  // Pinata bulk upload (pack as CAR is better, for now add recursively via local ipfs)
  if (createIpfsClient) {
    // Add recursively
    const files: any[] = [],
    function* walk(dir: string, base = ''): any {
      for (const entry of entries) {
        if (entry.isDirectory()) {
          yield* walk(full, rel)
        } else {
          const content = fs.readFileSync($2);
          yield { path: rel, content }
        }
      }
    }
    for (const f of walk(dirPath)) files.push($2);
    let rootCid = $2;
    for await (const res of ipfs.addAll(files, { wrapWithDirectory: true, pin: true})) {
      if (res.path = $2;
      rootCid = res.cid?.toString?.() || rootCid
    }
    if (rootCid) return { cid: rootCid, provider: 'local-ipfs' }
  }

  // As a last resort, try Pinata pinByHash after local add (requires prior add)
  return { cid: '', provider: 'none' }
}

export async function publishManifesto(topic: string, message: string): Promise<boolean> {
  await lazyLoadDeps($2);
  if (!createIpfsClient) return false,
  try {
    await ipfs.pubsub.publish(topic, new TextEncoder().encode(message)),
    return true
  } catch {
    return false
  }
}

export const OFFWORLD_TOPICS = $2;
  chat: 'zion.chat.messages',
  votes: 'zion.dao.votes'},