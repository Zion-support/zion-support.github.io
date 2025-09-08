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
        id: 'slack',
        name: 'Slack',
        description: 'Team communication platform',
        status: 'available',
        features: ['messaging', 'notifications', 'file_sharing']
      },
      {
        id: 'github',
        name: 'GitHub',
        description: 'Code repository and collaboration platform',
        status: 'available',
        features: ['repositories', 'issues', 'pull_requests']
      },
      {
        id: 'jira',
        name: 'Jira',
        description: 'Project management and issue tracking',
        status: 'available',
        features: ['issues', 'projects', 'workflows']
      }
    ];

    res.status(200).json({
      success: true,
      providers
    });
  } catch (error: any) {
    res.status(500).json({
      error: error?.message || 'Failed to retrieve providers'
    });
  }
}