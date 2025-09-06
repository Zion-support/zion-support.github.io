<<<<<<< HEAD
import { NextApiRequest, NextApiResponse } from 'next';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN || '';
const REPO = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { Octokit } from '@octokit/rest';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || '';
const REPO = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST');
    return res.status(405).json({ error: 'Method not allowed' })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
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

<<<<<<< HEAD
    const issue = await octokit.issues.create({
      owner,
      repo,
      title,
      body,
      labels: ['autoheal', 'bug'],
    });
=======
    const issue = await octokit.issues.create({ owner, repo, title, body, labels: ['autohealbug'] });
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88

    // trigger workflow dispatch
    try {
      await octokit.actions.createWorkflowDispatch({
        owner,
        repo,
<<<<<<< HEAD
        workflow_id: 'autoheal.yml',
        ref: 'dev',
        inputs: { issue_number: String(issue.data.number) },
      } as any);
=======
        workflow_id: 'autoheal.yml', ref: 'dev',
        inputs: { issue_number: String(issue.data.number) }} as any)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
    } catch (e) {
      // ignore if missing
    }

<<<<<<< HEAD
    return res.status(200).json({ ok: true, issue: issue.data.number });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: 'Failed to process webhook' });
  }
=======
    return res.status(200).json({ ok: true, issue: issue.data.number })
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: 'Failed to process webhook' })
  }
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
