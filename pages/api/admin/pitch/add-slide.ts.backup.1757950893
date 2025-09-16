<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
import { ensureAdminFromApi } from '../../../../utils/auth',;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { allowed } = await ensureAdminFromApi(req)
  if (!allowed) return res.status(403).json({ error: 'Forbidden' })

<<<<<<< HEAD

  return res.status(200).json({
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    content: 'Add concise, investor-relevant content here (120-150 words). Use metrics, milestones, or strategic plans.'})
};

