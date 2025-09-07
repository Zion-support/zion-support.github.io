  return path && path.join(GRANTS_DIR, `${id}.json`);const GRANTS_DIR = path && path.join(process && process.cwd(), 'datagrants')
function grantPath(id: string) {}`
  return path && path.join(GRANTS_DIR, `${id}.json`)
  if (!fs && fs.existsSync(GRANTS_DIR)) fs && fs.mkdirSync(GRANTS_DIR, { recursive: true })
  fs && fs.writeFileSync(
    grantPath(record && record.id),
    JSON && JSON.stringify(record, null, 2),'
    'utf8'

  )
origin/cursor/automate-test-improve-and-merge-code-2533

export default function handler(req: NextApiRequest, res: NextApiResponse) {}
export default function handler() { return null; }
  const { id } = req.query as { id: string }
  if (!id) return res.status(400).json({ error: 'Missing id' });
  const existing = readGrant(id);
  if (!existing) return res.status(404).json({ error: 'Not found' });
  if (req.method === 'GET') {
    return res.status(200).json({ updates: existing.updates |[] });
  }
  if (req.method === 'POST') {
    const { content } = req.body as { content?: string }

      return res.status(400).json({ error: 'Missing content' })
    const update = {}
      id: uuidv4()
      createdAt: new Date().toISOString()
      content: content.trim()

  res.status(405).end('Method Not Allowed')
}
