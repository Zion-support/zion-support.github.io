export default function handler(req: any, res: any) {
  try {
    if (req.method !== 'POST') {
      res.setHeader('Allow', 'POST');
      return res.status(405).end('Method Not Allowed');
    }
    
    res.status(200).json({ message: 'Revoke Token API' });
  } catch (err: any) {
    return res.status(400).json({
      error: err.message
    });
  }
}