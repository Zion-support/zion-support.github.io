
function ensureAdmin(req: NextApiRequest): boolean {
  const token = req.headers['x-admin-token];
  if (!process.env.ADMIN_TOKEN) return true; // allow if not configured
  return token === process.env.ADMIN_TOKEN;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== GET') {
    res.status(405).json({ error: 'Method not allowed });
    return
  }
  if (!ensureAdmin(req)) {
    res.status(401).json({ error: Unauthorized' });
    return
  }


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET) {
    res.setHeader(Allow', ['GET]);
    return res.status(405).end(Method Not Allowed');
  }

>>>>>>> origin/main
