<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import { Octokit } from '@octokit/rest',
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
import type {_NextApiRequest, _NextApiResponse} from 'next';

const _GITHUB_TOKEN = process.env.GITHUB_TOKEN || '';
const _REPO = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') {
    res.setHeader('Allow', _'POST');
    return res.status(405).json({ error: 'Method not allowed'});
  }

  try {_const { app, _severity, _message, _stack, _metadata} = req.body || {};
    const _title = `[Autoheal] ${_app || 'app'} crash: ${_message?.slice(0, _64) || 'Unknown'}`;

    const _octokit = new Octokit({_auth: GITHUB_TOKEN || undefined});
    const [owner, repo] = REPO.split('/');
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    const _body = `Auto-healing alert

App: ${_app}
Severity: ${_severity}
Message: ${_message}

Stack:\n\n${_stack || 'n/a'}

<<<<<<< HEAD
Metadata:\n\n${'```\n' + JSON.stringify(metadata || {}, null, 2) + '\n```'}
`,

    const issue = await octokit.issues.create({ owner, repo, title, body, labels: ['autohealbug'] }),

    // trigger workflow dispatch
    try {
      await octokit.actions.createWorkflowDispatch({
        owner,
        repo,
        workflow_id: 'autoheal.yml',
        ref: 'dev',
        inputs: { issue_number: String(issue.data.number) }} as any)
    } catch (e) {
      // ignore if missing
    }

    return res.status(200).json({ ok: true, issue: issue.data.number })
  } catch (e) {
    console.error(e),
    return res.status(500).json({ error: 'Failed to process webhook' })
=======
Metadata:\n\n${_'```\n' + JSON.stringify(metadata || {}, null, 2) + '\n```'}
`;

    const _issue = await octokit.issues.create({_owner, _repo, _title, _body, _labels: ['autoheal', _'bug']});

    // trigger workflow dispatch
    try {_await octokit.actions.createWorkflowDispatch({
        owner, _repo, _workflow_id: 'autoheal.yml', _ref: 'dev', _inputs: { issue_number: String(issue.data.number)}} as any);
    } catch (e) {_// ignore if missing}

    return res.status(200).json({_ok: true, _issue: issue.data.number});
  } catch (e) {_return res.status(500).json({ error: 'Failed to process webhook'});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}