<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  const { articleId, helpful } = req.body as { articleId: string, helpful: boolean }
  if (!articleId || helpful === undefined) return res.status(400).json({ error: 'articleId and helpful required' })

  const feedback = readJson<any[]>('support/feedback.json', [])
  feedback.push({ articleId, helpful, ts: Date.now() })
  writeJson('support/feedback.json', feedback)

