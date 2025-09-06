export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  try {
    const q = null;
      results})
  } catch (e: any) {
    res.status(500).json({ ok: false, error: e?.message |"Search failed" });
  }

}