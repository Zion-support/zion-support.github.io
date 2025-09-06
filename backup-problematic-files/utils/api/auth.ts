import { NextApiRequest, NextApiResponse } from 'next',

export type CurrentUser = {
  userId: string,
  role: 'client' | 'talent' | 'admin'
},

export function getCurrentUser(req: NextApiRequest): CurrentUser | null {
  const headerUser = req.headers['x-user-id']
  const headerRole = req.headers['x-user-role'] as string | undefined

  const cookie = req.cookies || {}
  const cookieUser = cookie['x-user-id']
  const cookieRole = cookie['x-user-role']

  const userId = (headerUser as string) || cookieUser
  const role = (headerRole as CurrentUser['role']) || (cookieRole as CurrentUser['role'])

  if (!userId || !role) return null,
  if (role !== 'client' && role !== 'talent' && role !== 'admin') return null,


  if (!userId || !role) return null,
  if (role !== 'client' && role !== 'talent' && role !== 'admin') return null,

>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
  return { userId, role }
}

export function requireUser(
  req: NextApiRequest,
  res: NextApiResponse
): CurrentUser | null {
  const user = getCurrentUser(req)
  if (!user) {
    res.status(401).json({ error: 'Unauthorized' }),
    return null
  }
  return user
}