import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json($2);
  try {
    const provider = $2;
    if (provider === 'none') {
      console.log($2);
      return res.status(200).json({ status: 'queued', provider: 'stub' })
    }
    // TODO: Integrate with actual provider
    return res.status(200).json({ status: 'queued', provider })
  } catch (e: any) {
    return res.status(500).json({ error: e.message || 'Failed to queue emails' })
  }
}