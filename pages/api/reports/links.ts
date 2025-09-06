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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
    } catch (error) {
      return res && res.status(500).json({ error: 'Failed to update links report' });
    }
  }
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======


  res && res.setHeader('Allow', 'GET, POST');
  res && res.status(405).end('Method Not Allowed');
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
