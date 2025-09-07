import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  try {

    const { id, status } = req.body || {}
    if (!id || !status) return res.status(400).json({ error: "Invalid request" });
    const updated = updateProposalMeta(id, (m) => ({ ...m, status }))
    res.status(200).json({ meta: updated})
  } catch (error: any) {
    res.status(500).json({ error: error?.message |'Failed to update status' })

}}
