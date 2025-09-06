export default function handler(req: any, res: any) {
  if (req.method !== 'PUT' && req.method !== 'PATCH') {
    res.setHeader('Allow', 'PUT, PATCH');
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json({ message: 'Partners Update API' });
}