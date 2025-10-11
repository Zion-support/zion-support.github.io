import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json({
      email: 'jane@example.com',
      points: 100,
      name: 'Jane Doe'
    })
  } else if (req.method === 'PUT') {
    const { name } = req.body
    res.status(200).json({
      email: 'jane@example.com',
      points: 100,
      name: name || 'Jane Doe'
    })
  } else if (req.method === 'DELETE') {
    res.status(200).json({
      success: true
    })
  } else {
    res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}