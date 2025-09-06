<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
import { Octokit } from '@octokit/rest',;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || '',
const REPO = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app',

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST'),
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { app, severity, message, stack, metadata } = req.body || {},
    const title = `[Autoheal] ${app || 'app'} crash: ${message?.slice(0, 64) || 'Unknown'}`,

    const octokit = new Octokit({ auth: GITHUB_TOKEN || undefined }),
    const [owner, repo] = REPO.split('/'),

=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { Octokit } from '@octokit/rest';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { app, severity, message, stack, metadata } = req.body || {};
    const title = `[Autoheal] ${app || 'app'} crash: ${message?.slice(0, 64) || 'Unknown'}`;
    const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
    const REPO = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';
    const octokit = new Octokit({ auth: GITHUB_TOKEN || undefined });
    const [owner, repo] = REPO.split('/');
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-10dd
    const body = `Auto-healing alert

App: ${app}
Severity: ${severity}
Message: ${message}

Stack:\n\n${stack || 'n/a'}

Metadata:\n\n${'```\n' + JSON.stringify(metadata || {}, null, 2) + '\n```'}
<<<<<<< HEAD
`,

    const issue = await octokit.issues.create({ owner, repo, title, body, labels: ['autohealbug'] }),

=======
`;
    const issue = await octokit.issues.create({ owner, repo, title, body, labels: ['autoheal', 'bug'] });
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-10dd
    // trigger workflow dispatch
    try {
      await octokit.actions.createWorkflowDispatch({
        owner,
        repo,
        workflow_id: 'autoheal.yml',
        ref: 'dev',
<<<<<<< HEAD
        inputs: { issue_number: String(issue.data.number) }} as any)
=======
        inputs: { issue_number: String(issue.data.number) }
      } as any);
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-10dd
    } catch (e) {
      // ignore if missing
    }

<<<<<<< HEAD
    return res.status(200).json({ ok: true, issue: issue.data.number })
  } catch (e) {
    console.error(e),
    return res.status(500).json({ error: 'Failed to process webhook' })
  }
};
=======
    return res.status(200).json({ ok: true, issue: issue.data.number });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: 'Failed to process webhook' });
  }
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-10dd
