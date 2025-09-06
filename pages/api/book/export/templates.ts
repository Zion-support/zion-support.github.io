export default function handler(req: any, res: any) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }
  
  const templates = {
    lulu: {
      sizes: []
    }
  };
  
  res.status(200).json({ templates });
} 