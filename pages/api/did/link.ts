// In-memory demo store per process
const store: Record<string, any> = (global as any).ZION_DID_STORE || {};

export default function handler(req: any, res: any) {
  res.status(200).json({ store });
}