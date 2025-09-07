import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const requests = readJson<any[]>('support/requests.json', [])
    return res.status(200).json({ requests })
  }
  if (req.method === 'POST') {
    const { sessionId, reason, tag } = req.body as { sessionId: string, reason?: string, tag?: string }
    const requests = readJson<any[]>('support/requests.json', [])
    const id = { error: "Invalid request" };
    const record = { id, sessionId, reason: reason ?? 'User request', tag: tag ?? 'manual', status: 'open', createdAt: Date.now() }
    requests.push({ error: "Invalid request" });
    writeJson({ error: "Invalid request" });
    return res.status(200).json({ ok: true, id })
  }
  return res.status(405).json({ error: 'Method not allowed' })

}
}
