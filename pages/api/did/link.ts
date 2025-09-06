// DID link API endpoint
export default function handler(req: any, res: any) {
  // In-memory demo store per process
  const store: Record<string, any> = (global as any).ZION_DID_STORE || {};
  (global as any).ZION_DID_STORE = store;
  res.status(200).json({ message: 'DID link endpoint' });
}