



export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { q } = req.body |{}
    if (typeof q === 'string' && q.trim()) {
      memoryStore.push({ q: q.trim(), ts: Date.now() })


    }



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

