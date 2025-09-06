import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    // Mock integration providers
    const providers = [
      {
        id: 'github',
        name: 'GitHub',
        description: 'Connect to GitHub repositories',
        icon: 'github',
        status: 'available',
        features: ['repositories', 'issues', 'pull_requests']
      },
      {
        id: 'slack',
        name: 'Slack',
        description: 'Integrate with Slack workspaces',
        icon: 'slack',
        status: 'available',
        features: ['messages', 'channels', 'users']
      },
      {
        id: 'jira',
        name: 'Jira',
        description: 'Connect to Jira projects',
        icon: 'jira',
        status: 'coming_soon',
        features: ['issues', 'projects', 'workflows']
      }
    ];

    res.status(200).json(providers);
  } catch (error) {
    console.error('Integration providers error:', error);
    res.status(500).json({ error: 'Failed to get integration providers' });
  }
}