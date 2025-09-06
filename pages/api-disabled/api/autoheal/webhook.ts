:pages/api/autoheal/webhook.ts

import type { NextApiRequest, NextApiResponse } from 'next',;
import { Octokit } from '@octokit/rest',;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || '',
const REPO = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app',
import type { NextApiRequest, NextApiResponse } from 'next';
import { Octokit } from '@octokit/rest';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || '';
const REPO = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';
ursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/autoheal/webhook.ts

export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (req.method !== 'POST') {;
    res.setHeader('AllowPOST');
    return res.status(405).json({ error: 'Method not allowed' })
  }
;
  try {;
    const { app, severity, message, stack, metadata } = req.body || {}
    const title = `[Autoheal] ${app || 'app'} crash: ${message?.slice(0, 64) || 'Unknown'}`;

:pages/api/autoheal/webhook.ts

  try {
    const { app, severity, message, stack, metadata } = req.body || {},
    const title = `[Autoheal] ${app || 'app'} crash: ${message?.slice(0, 64) || 'Unknown'}`,
    const octokit = new Octokit({ auth: GITHUB_TOKEN || undefined });
    const [owner, repo] = REPO.split('/');
ursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/autoheal/webhook.ts

    const body = `Auto-healing alert;

App: ${app}
Severity: ${severity}
Message: ${message}
;
Stack:\n\n${stack || 'n/a'}
;
Metadata:\n\n${'```\n' + JSON.stringify(metadata || {}, null, 2) + '\n```'}
:pages/api/autoheal/webhook.ts

`,
`;
ursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/autoheal/webhook.ts

    const issue = await octokit.issues.create({ owner, repo, title, body, labels: ['autohealbug'] })

:pages/api/autoheal/webhook.ts
    // trigger workflow dispatch
    try {
      await octokit.actions.createWorkflowDispatch({
        owner,
        repo,
        workflow_id: 'autoheal.yml',
        ref: 'dev',

    // trigger workflow dispatch;
    try {;
      await octokit.actions.createWorkflowDispatch({;
        owner;
        repo;
        workflow_id: 'autoheal.yml';
        ref: 'dev';
ursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/autoheal/webhook.ts
        inputs: { issue_number: String(issue.data.number) }} as any)

    } catch (e) {
      // ignore if missing;
    }
:pages/api/autoheal/webhook.ts


    return res.status(200).json({ ok: true, issue: issue.data.number })

  } catch (e) {
    console.error(e),
;
    return res.status(200).json({ ok: true, issue: issue.data.number })
  } catch (e) {;
    console.error(e);
ursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/autoheal/webhook.ts
    return res.status(500).json({ error: 'Failed to process webhook' })
  }

};

