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

    const _body = `Auto-healing alert

App: ${_app}
Severity: ${_severity}
Message: ${_message}

Stack:\n\n${_stack || 'n/a'}

Metadata:\n\n${_'```\n' + JSON.stringify(metadata || {}, null, 2) + '\n```'}
`;

    const _issue = await octokit.issues.create({_owner, _repo, _title, _body, _labels: ['autoheal', _'bug']});

    // trigger workflow dispatch
    try {_await octokit.actions.createWorkflowDispatch({
        owner, _repo, _workflow_id: 'autoheal.yml', _ref: 'dev', _inputs: { issue_number: String(issue.data.number)}} as any);
    } catch (e) {_// ignore if missing}

    return res.status(200).json({_ok: true, _issue: issue.data.number});
  } catch (e) {_return res.status(500).json({ error: 'Failed to process webhook'});
  }
}