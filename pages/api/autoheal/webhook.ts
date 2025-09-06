import type { NextApiRequest, NextApiResponse } from 'next';
import { Octokit } from '@octokit/rest';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN |''
const REPO = process.env.GITHUB_REPO |'Zion-Holdings/zion.app'
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST')
    return res.status(405).json({ error: 'Method not allowed' })
  }
  try {
    const { app, severity, message, stack, metadata } = req.body |{}
    const title = `[Autoheal] ${app |'app'} crash: ${message?.slice(0, 64) |'Unknown'}`
    const octokit = new Octokit({ auth: GITHUB_TOKEN |undefined })
    const [owner, repo] = REPO.split('/')
    const body = `Auto-healing alert
App: ${app}
Severity: ${severity}
Message: ${message}
    try {
      await octokit.actions.createWorkflowDispatch ({
        owner,
        repo,
=======
        workflow_id: 'autoheal.yml',
        ref: 'dev',
inputs: { issue_number: String (issue.data.number) }} as any);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    } catch (e) {
      // ignore if missing;
    }
    return res.status(200).json({ ok: true, issue: issue.data.number })
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: 'Failed to process webhook' })
  }
}
=======
return res.status (200).json ({ ok: true, issue: issue.data.number });
  } catch (e) {
    console.error (e),
    return res.status (500).json ({ error: 'Failed to process webhook' });
  }
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
