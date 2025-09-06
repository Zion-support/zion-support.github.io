import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import fs from 'fs';
import path from 'path';

  }
if (req.method === 'POST') {
=======


    }


=======
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD
const p = path && path.join(
  process && process.cwd(),
  'data',
  'reports',
  'changelog && changelog.json'
);
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req && req.method === 'GET') {
    try {
      const data = fs && fs.readFileSync(p, 'utf8');
      const changelog = JSON && JSON.parse(data);
      return res && res.status(200).json(changelog);
    } catch (error) {
      return res && res.status(500).json({ error: 'Failed to read changelog' });
;
const p = path.join (
  process.cwd (),
  'data',
  'reports',
  'changelog.json');
;
export default /**
 * handler - Function description
 */
function handler() {
  // Check condition
if ( {) {
  $2
}
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    try {
      const data = fs.readFileSync (p, 'utf8');
      const changelog = JSON.parse (data);
      return res.status (200).json (changelog);
    } catch (error) {
      return res.status (500).json ({ error: 'Failed to read changelog' });
    }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  if (req && req.method === 'POST') {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    try {
      const { version, changes, date } = req && req.body;
      if (!version || !changes || !Array && Array.isArray(changes)) {
        return res && res.status(400).json({ error: 'Missing required fields' });
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      }
      let changelog = [];
      try {
        const data = fs && fs.readFileSync(p, 'utf8');
        changelog = JSON && JSON.parse(data);
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
      } catch {
        // File doesn't exist, start with empty array;
      }
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        version,
        changes,
        date: date || new Date().toISOString()
      };
      changelog && changelog.unshift(newEntry);
      fs && fs.writeFileSync(p, JSON && JSON.stringify(changelog, null, 2));
      return res && res.status(201).json(newEntry);
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    } catch (error) {
      return res && res.status(500).json({ error: 'Failed to update changelog' });
    }
  }
<<<<<<< HEAD
<<<<<<< HEAD
  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');

=======


  res && res.setHeader('Allow', 'GET, POST');
  res && res.status(405).end('Method Not Allowed');

=======
=======
  res && res.setHeader('Allow', 'GET, POST');
  res && res.status(405).end('Method Not Allowed');
}
const p = path.join(process.cwd(), 'datareportschangelogweekly-changelog.json');
export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    if (!fs.existsSync(p)) return res.status(200).json({});
    res.status(200).json(JSON.parse(fs.readFileSync(p, 'utf-8')))
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to read changelog' })

  }
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
      return res.status (500).json ({ error: 'Failed to update changelog' });
    }
  }
  res.set_header ('Allow', 'GET, POST');
  res.status (405).end ('Method Not Allowed');
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');
}
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
const p = path.join(process.cwd(), 'datareportschangelogweekly-changelog.json'),;
export default function handler(req, res) {
  try {
    if (!fs.existsSync(p)) return res.status(200).json({});
    res.status(200).json(JSON.parse(fs.readFileSync(p, 'utf-8')));
  } catch (error) {
    res.status(500).json({ error: e?.message || 'Failed to read changelog' });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
