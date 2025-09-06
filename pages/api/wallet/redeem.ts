
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    return res.status(200).json(result)
  } catch (err: any) {
    return res.status(400).json({ error: err.message })

