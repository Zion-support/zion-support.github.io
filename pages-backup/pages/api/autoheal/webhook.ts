<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
import type { NextApiRequest, NextApiResponse } from 'next';
import { Octokit } from '@octokit/rest';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || '';
const REPO = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';
=======
<<<<<<< HEAD

import { Octokit } from '@octokit/rest',;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || ''
const REPO = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app'
>>>>>>> origin/main

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST');
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { app, severity, message, stack, metadata } = req.body || {};
    const title = `[Autoheal] ${app || 'app'} crash: ${message?.slice(0, 64) || 'Unknown'}`;

    const octokit = new Octokit({ auth: GITHUB_TOKEN || undefined });
    const [owner, repo] = REPO.split('/');

    const body = `Auto-healing alert

App: ${app}
Severity: ${severity}
Message: ${message}

Stack:\n\n${stack || 'n/a'}

Metadata:\n\n${'```\n' + JSON.stringify(metadata || {}, null, 2) + '\n```'}
`;

    const issue = await octokit.issues.create({ owner, repo, title, body, labels: ['autohealbug'] });

    // trigger workflow dispatch
    try {
      await octokit.actions.createWorkflowDispatch({
        owner
        repo
        workflow_id: 'autoheal.yml'
        ref: 'dev'
        inputs: { issue_number: String(issue.data.number) }
      } as any);
    } catch (e) {
      // ignore if missing
    }

<<<<<<< HEAD
    return res.status(200).json({ ok: true, issue: issue.data.number })
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: 'Failed to process webhook' })
  }
}
<<<<<<< HEAD
=======
=======
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }
  
  const { app, severity, message, stack } = req.body;
  
  const body = `Auto-healing alert App: ${app}Severity: ${severity}Message: ${message}Stack:\n\n${stack || 'n/a'}`;
  
  res.status(200).json({ received: true });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
>>>>>>> origin/main
=======

}
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
