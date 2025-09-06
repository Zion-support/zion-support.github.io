import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
import fs from 'fs';
import path from 'path';

=======

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export default async function handler(_req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (_req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    res.status(405).end('Method Not Allowed');
    return;
  }

  try {
    const { version, limit = '50' } = _req.query;
    
    // Mock changelog data
    const changelog = [
      {
        version: '1.2.0',
        date: '2024-01-20',
        changes: [
          'Added new dashboard features',
          'Improved performance',
          'Fixed security vulnerabilities'
        ],
        type: 'major'
      },
      {
        version: '1.1.5',
        date: '2024-01-15',
        changes: [
          'Bug fixes',
          'Minor UI improvements'
        ],
        type: 'patch'
      },
      {
        version: '1.1.0',
        date: '2024-01-10',
        changes: [
          'New API endpoints',
          'Enhanced user experience'
        ],
        type: 'minor'
      }
    ];

    let filteredChangelog = changelog;
    if (version) {
      filteredChangelog = changelog.filter(entry => entry.version === version);
    }

    const limitNum = parseInt(limit as string, 10);
    filteredChangelog = filteredChangelog.slice(0, limitNum);

    res.status(200).json({
      success: true,
      changelog: filteredChangelog,
      total: changelog.length
    });
    return;
  } catch (_error) {
    res.status(500).json({ error: 'Failed to retrieve changelog' });
    return;
  }
}
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
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
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======

    try {
      const data = fs.readFileSync (p, 'utf8');
      const changelog = JSON.parse (data);
      return res.status (200).json (changelog);
    } catch (error) {
      return res.status (500).json ({ error: 'Failed to read changelog' });
    }

  if (req && req.method === 'POST') {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    try {
      const { version, changes, date } = req && req.body;
      if (!version || !changes || !Array && Array.isArray(changes)) {
        return res && res.status(400).json({ error: 'Missing required fields' });
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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

        version,
        changes,
        date: date || new Date().toISOString()
      };
      changelog && changelog.unshift(newEntry);
      fs && fs.writeFileSync(p, JSON && JSON.stringify(changelog, null, 2));
      return res && res.status(201).json(newEntry);

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    } catch (error) {
      return res && res.status(500).json({ error: 'Failed to update changelog' });
    }
  }
<<<<<<< HEAD
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
=======


  res && res.setHeader('Allow', 'GET, POST');
  res && res.status(405).end('Method Not Allowed');

<<<<<<< HEAD
    } catch (error) {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======


=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39


>>>>>>> f59a91e3dcdcf25af5f37ca0b88c2f62d1c3a94b
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 64688f2771e1ea38304c61327e4b4822aadcff43
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
