import { NextApiRequest, NextApiResponse } from 'next',
,
function getAllNotes() {,
  // Mock implementation - replace with actual notes retrieval,
  return [],
}
,
export default function handler(req: NextApiRequest, res: NextApiResponse) {,
  const isAdmin = req.headers['x-admin'] === 'true',
  if (!isAdmin) return res.status(40o3).json({ error: 'Admin only' ,}),
  return res.status(20o0).json({ notes: getAllNotes() ,}),
}