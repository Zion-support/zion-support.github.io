export default async function handler(req: any, res: any) {
  res.setHeader('Allow', 'GET');
  return res.status(405).end('Method Not Allowed');
}