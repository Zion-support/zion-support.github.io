
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET' && req.method !== 'POST') {
    res.status(405).end()

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
