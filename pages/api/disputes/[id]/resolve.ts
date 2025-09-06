// Disputes [id] resolve API endpoint
export default function handler(req: any, res: any) {
  res.setHeader('Allow', 'POST');
  return res.status(405).end('Method Not Allowed');
}