import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { type = 'all' } = req.query;
    
    // Mock dependency report
    const dependencies = [
      {
        name: 'react',
        version: '18.3.1',
        latest: '18.3.1',
        status: 'up-to-date',
        vulnerabilities: 0,
        type: 'production'
      },
      {
        name: 'next',
        version: '15.5.2',
        latest: '15.5.2',
        status: 'up-to-date',
        vulnerabilities: 0,
        type: 'production'
      },
      {
        name: 'lodash',
        version: '4.17.20',
        latest: '4.17.21',
        status: 'outdated',
        vulnerabilities: 1,
        type: 'production'
      },
      {
        name: 'eslint',
        version: '9.35.0',
        latest: '9.35.0',
        status: 'up-to-date',
        vulnerabilities: 0,
        type: 'development'
      }
    ];

    let filteredDeps = dependencies;
    if (type !== 'all') {
      filteredDeps = dependencies.filter(dep => dep.type === type);
    }

    const summary = {
      total: dependencies.length,
      outdated: dependencies.filter(dep => dep.status === 'outdated').length,
      vulnerabilities: dependencies.reduce((sum, dep) => sum + dep.vulnerabilities, 0),
      production: dependencies.filter(dep => dep.type === 'production').length,
      development: dependencies.filter(dep => dep.type === 'development').length
    };

    res.status(200).json({
      success: true,
      dependencies: filteredDeps,
      summary
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve dependency report' });
  }
}