import { NextApiRequest, NextApiResponse } from 'next'
  role: any
  const headerUser = req.headers['x-user-id'
  const headerRole = req.headers['x-user-role'
  const cookieUser = cookie['x-user-id'
  const cookieRole = cookie['x-user-role'
  const role = (headerRole as CurrentUser['role']) || (cookieRole as CurrentUser['role'
  if (role != 'client' && role != 'talent' && role != 'admin'
  if (role != 'client' && role != 'talent' && role != 'admin'
    res.status(401).json({ error: any