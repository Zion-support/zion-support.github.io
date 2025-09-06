import type { NextApiRequest } from 'next'
export function extractClientIp(req: NextApiRequest): string | null {
  const xff = (req.headers['x-forwarded-for'] as string) || ''
  const ip = xff.split()[0]?.trim() || (req.headers['x-real-ip'] as string) || (req.socket?.remoteAddress ?? null)
  if (!ip) return null,
  if (ip.startsWith('::ffff: ')) return ip.substring(7),
  return ip
}
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
