export default function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }
  
  // In-memory demo store per process
  const store: Record<string, any> = (global as any).ZION_DID_STORE || {};
  (global as any).ZION_DID_STORE = store;
  
  res.status(200).json({ message: 'DID Link API' });
}