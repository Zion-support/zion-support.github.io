export default function handler(req: any, res: any) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }
  
  const store: Record<string, any> = (global as any).ZION_DID_STORE || {};
  
  res.status(200).json({ message: 'DID Get API', store });
}