import type { NextApiRequest, NextApiResponse } from 'next';
import { readJson, writeJson } from '../../../utils/fsDb';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json($2);
  const { id } = req.body as { id: string},
  if (!id) return res.status(400).json($2);
  const requests = readJson<any[]>('support/requests.json', []),
  const idx = $2;
  if (idx >= 0) {
    requests[idx].status = $2;
    requests[idx].resolvedAt = Date.now($2);
    writeJson('support/requests.json', requests)
  }
  return res.status(200).json({ ok: true})
}