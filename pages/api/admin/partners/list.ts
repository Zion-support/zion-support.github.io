export default function handler(req: any, res: any) {
  try {
    if (req.method !== 'GET') {
      res.setHeader('Allow', 'GET');
      return res.status(405).end('Method Not Allowed');
    }
    
    return res.status(200).json({
      partners: []
    });
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}