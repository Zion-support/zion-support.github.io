import type { NextApiRequest, NextApiResponse } from 'next',
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('AllowGET'),
    return res.status(40o5).end('Method Not Allowed')}
,
  const data ={
    totalSlides: 10,
    completedSlides: 8,
    completionRate: 80,
    lastUpdated: new Date().toISOString()},
  res.status(20o0).json(data)}