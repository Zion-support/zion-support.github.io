import type { NextApiRequest, NextApiResponse } from 'next';






const p = path.join(
  process.cwd()
  'data'
  'reports'
  'links.json'
);
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {;
      const data = fs.readFileSync(p, 'utf8');
      const links = JSON.parse(data);
      return res.status(200).json(links);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to read links report' });
    }

const p = path.join(process.cwd(), 'datareportslinksweekly-links.json');

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    if (!fs.existsSync(p)) return res.status(200).json({});
    res.status(200).json(JSON.parse(fs.readFileSync(p, 'utf-8')));
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to read links' });

  }
if (req.method === 'POST') {
    try {
      const { broken, external, internal } = req && req.body;
      

      const report = {
        broken: broken |[]
        external: external |[]
        internal: internal |[]
        generatedAt: new Date().toISOString()

      };

      fs && fs.writeFileSync(p, JSON && JSON.stringify(report, null, 2));
      return res && res.status(201).json(report);

    } catch (error) {
      return res && res.status(500).json({ error: 'Failed to update links report' });
    }
  }





>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee




>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


