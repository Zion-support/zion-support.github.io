import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { role = 'guest', talent } = req.query as { role?: string, talent?: string },

  const headers: Record<string, string> = {},
  const cookies: string[] = [],
  const set = (k: string, v: string, days = 7) => {
    const expires = new Date(Date.now() + days * 864e5).toUTCString($2);
    cookies.push(`${k}=${encodeURIComponent(v)}, Path=/, SameSite=Lax, Expires = $2;
  if (role === 'admin' || role === 'talent' || role === 'guest') {
    set('role', role)
  }
  if (talent) {
    set('talentSlug', talent)
  }
  set($2);
  headers['Set-Cookie'] = cookies.join($2);
  res.writeHead($2);
  res.end()
}