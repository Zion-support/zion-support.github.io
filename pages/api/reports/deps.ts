import type { NextApiRequest, NextApiResponse } from 'next';

<<<<<<< HEAD
export default async function handler(_req: NextApiRequest, res: NextApiResponse): Promise<void> {
  res.status(200).json({ message: 'Dependencies report endpoint' });
  return;
}
=======
<<<<<<< HEAD
const p = path.join(
  process.cwd()
  'data'
  'reports'
  'deps.json'
);
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {;
      const data = fs.readFileSync(p, 'utf8');
      const deps = JSON.parse(data);
      return res.status(200).json(deps);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to read deps report' });
    }

const p = path.join(process.cwd(), 'datareportsdepsweekly-deps.json');

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    if (!fs.existsSync(p)) return res.status(200).json({});
    res.status(200).json(JSON.parse(fs.readFileSync(p, 'utf-8')));
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to read deps' });
  }
if (req.method === 'POST') {
=======

    try {
      const data = fs.readFileSync (p, 'utf8');
      const deps = JSON.parse (data);
      return res.status (200).json (deps);
    } catch (error) {
      return res.status (500).json ({ error: 'Failed to read deps report' });
    }

  if (req && req.method === 'POST') {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    try {
      const { dependencies, vulnerabilities, outdated } = req && req.body;
      

      const report = {
        dependencies: dependencies |[]
        vulnerabilities: vulnerabilities |[]
        outdated: outdated |[]
        generatedAt: new Date().toISOString()
<<<<<<< HEAD
=======

      };
      fs && fs.writeFileSync(p, JSON && JSON.stringify(report, null, 2));
      return res && res.status(201).json(report);

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    } catch (error) {
      return res && res.status(500).json({ error: 'Failed to update deps report' });
    }
  }


  res && res.setHeader('Allow', 'GET, POST');
  res && res.status(405).end('Method Not Allowed');

<<<<<<< HEAD
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39


>>>>>>> f59a91e3dcdcf25af5f37ca0b88c2f62d1c3a94b
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 64688f2771e1ea38304c61327e4b4822aadcff43
