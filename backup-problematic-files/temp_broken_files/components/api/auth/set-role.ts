import type { NextApiRequest, NextApiResponse } from 'next'
  const { role = 'guest'
  if (role = = 'admin' || role = = 'talent' || role = = 'guest'
    set('role'
    set('talentSlug'
  set('userId', role = = 'guest' ? '' : any
  headers['Set-Cookie'
  res.writeHead(302, { ...headers, Location: any