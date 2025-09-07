import type { NextApiRequest, NextApiResponse } from 'next';

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
        version: '1.2.0'
        date: '2024-01-20'
        changes: [
          'Added new dashboard features'
          'Improved performance'
          'Fixed security vulnerabilities'
        ]
        type: 'major'
      }
      {
        version: '1.1.5'
        date: '2024-01-15'
        changes: [
          'Bug fixes'
          'Minor UI improvements'
        ]
        type: 'patch'
      }
      {
        version: '1.1.0'
        date: '2024-01-10'
        changes: [
          'New API endpoints'
          'Enhanced user experience'
        ]
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
      success: true
      changelog: filteredChangelog
      total: changelog.length
    });
    return;
  } catch (_error) {
    res.status(500).json({ error: 'Failed to retrieve changelog' });
    return;
  }
}
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
    } catch (error) {
      return res && res.status(500).json({ error: 'Failed to update changelog' });
    }
  }


  res && res.setHeader('Allow', 'GET, POST');
  res && res.status(405).end('Method Not Allowed');

    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}




