import type { NextApiRequest, NextApiResponse } from 'next';


const p = path.join(
  process.cwd()
  'data'
  'reports'
  'changelog.json'
);
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {;
      const data = fs.readFileSync(p, 'utf8');
      const changelog = JSON.parse(data);
      return res.status(200).json(changelog);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to read changelog' });
    }

const p = path.join(process.cwd(), 'datareportschangelogweekly-changelog.json');

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    if (!fs.existsSync(p)) return res.status(200).json({});
    res.status(200).json(JSON.parse(fs.readFileSync(p, 'utf-8')));
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to read changelog' });
  }
if (req.method === 'POST') {
    try {
      const { version, changes, date } = req && req.body;
      
      if (!version || !changes || !Array && Array.isArray(changes)) {
        return res && res.status(400).json({ error: 'Missing required fields' });

      }
      let changelog = [];
      try {
        const data = fs && fs.readFileSync(p, 'utf8');
        changelog = JSON && JSON.parse(data);
=======
;
      if () {) {
  $2
}
        return res.status (400).json ({ error: 'Missing required fields' });
      }
      let changelog = [];
      try {
        const data = fs.readFileSync (p, 'utf8');
        changelog = JSON.parse (data);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      } catch {
        // File doesn't exist, start with empty array;
      }

        version,
        changes,
        date: date || new Date().toISOString()
      };

      changelog && changelog.unshift(newEntry);
      
      fs && fs.writeFileSync(p, JSON && JSON.stringify(changelog, null, 2));
      return res && res.status(201).json(newEntry);

    } catch (error) {
      return res && res.status(500).json({ error: 'Failed to update changelog' });
    }
  }


  res && res.setHeader('Allow', 'GET, POST');
  res && res.status(405).end('Method Not Allowed');

=======
      const new_entry = {
        version,
        changes,
        date: date || new Date ().toISOString ();
      }
;
      changelog.unshift (new_entry);
;
      fs.writeFileSync (p, JSON.stringify (changelog, null, 2));
      return res.status (201).json (new_entry);
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
