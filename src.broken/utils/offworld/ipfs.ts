import { Readable } from 'stream';

// Lazy imports to keep optional deps optional
let Web3Storage: any;
let getFilesFromPath: any;
let createIpfsClient: any;
let PinataSDK: any;

async function lazyLoadDeps() {
  try {
    const web3 = await import('web3.storage');
    Web3Storage = web3.Web3Storage;
    getFilesFromPath = (web3 as any).getFilesFromPath;
  } catch {}
  try {
    const ipfsHttp = await import('ipfs-http-client');
    createIpfsClient = (ipfsHttp as any).create || ipfsHttp;
  } catch {}
  try {
    const pinata = await import('@pinata/sdk');
    PinataSDK = (pinata as any).default || pinata;
  } catch {}
}

export type IpfsClientChoice = 'web3.storage' | 'pinata' | 'local-ipfs';

export interface IpfsResult {
  cid: string;
  provider: IpfsClientChoice | 'none';
}

function env(name: string): string | undefined {
  return process.env[name] || process.env[name.toLowerCase()];
}

function bufferToStream(buffer: Buffer): Readable {
  const stream = new Readable();
  stream.push(buffer);
  stream.push(null);
  return stream;
}

export async function addJSON(content: unknown): Promise<IpfsResult> {
  const json = Buffer.from(JSON.stringify(content, null, 2));
  return addBuffer(json, 'data.json');
}

export async function addBuffer(buffer: Buffer, filename = 'file.bin'): Promise<IpfsResult> {
  await lazyLoadDeps();

  // 1) Try Web3.Storage
  const web3Token = env('WEB3_STORAGE_TOKEN');
  if (Web3Storage && web3Token) {
    const client = new Web3Storage({ token: web3Token });
    const fileLike = new File([buffer], filename);
    const cid = await client.put([fileLike], { wrapWithDirectory: false });
    return { cid, provider: 'web3.storage' };
  }

  // 2) Try Pinata
  const pinataJwt = env('PINATA_JWT');
  const pinataApiKey = env('PINATA_API_KEY');
  const pinataSecret = env('PINATA_API_SECRET');
  if (PinataSDK && (pinataJwt || (pinataApiKey && pinataSecret))) {
    const pinata = pinataJwt
      ? new PinataSDK({ pinataJWTKey: pinataJwt })
      : new PinataSDK(pinataApiKey, pinataSecret);
    const res = await pinata.pinFileToIPFS(bufferToStream(buffer), {
