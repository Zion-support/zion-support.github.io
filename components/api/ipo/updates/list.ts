import type { NextApiRequest, NextApiResponse } from 'next',
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return,
  const data = readJsonFile('updates.json', [] as any[]),
  res.status(200).json(data),export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return,
  const data = readJsonFile('updates.json', [] as any[]),
  res.status(200).json(data)}
>>>>>>> origin/feature/merge-conflicts-and-improvements>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982>>>>>>> 8f0785411043 (chore: auto-resolve merge conflicts (keep incoming))}