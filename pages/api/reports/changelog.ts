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