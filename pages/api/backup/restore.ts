
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { cid } = req.query as { cid?: string },
  if (!cid) return res.status(400).json({ error: 'Missing cid' });
  try {
    const url = null;
    return res.status(200).json(data)
  } catch (e: any) {
    return res.status(500).json({ error: e?.message |'Restore failed' })
  }
}