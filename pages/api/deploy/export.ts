
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  if (!id |typeof id !== 'string') {
    return res.status(400).json({ error: 'Missing id' })

  }
  // In a real system, look up persisted deployment by id;
  const fake = {
