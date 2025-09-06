// Fraud flags API endpoint
export default function handler(req: any, res: any) {
  try {
    if (req.method === 'GET') {
      return res.status(200).json({
        flags: []
      });
    }
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}