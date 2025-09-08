export default async function handler(req: any, res: any) {
  res.setHeader('Allow', 'GET, POST');
  return res.status(405).end('Method Not Allowed');
}