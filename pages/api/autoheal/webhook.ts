import type { NextApiRequest, NextApiResponse } from 'next';
import { Octokit } from '@octokit/rest';

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { owner, repo, error, stack, context } = req.body || {};
  
  if (!owner || !repo || !error) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const title = `Autoheal: ${error}`;
    const body = `
## Error Details
\`\`\`
${error}
\`\`\`

## Stack Trace
\`\`\`
${stack || 'No stack trace available'}
\`\`\`

## Context
\`\`\`json
${JSON.stringify(context || {}, null, 2)}
\`\`\`

## Autoheal Action
This issue was automatically created by the autoheal system. Please investigate and resolve.
`;

    const issue = await octokit.issues.create({ owner, repo, title, body, labels: ['autoheal', 'bug'] });

    // trigger workflow dispatch
    try {
      await octokit.actions.createWorkflowDispatch({
        owner,
        repo,
        workflow_id: 'autoheal.yml',
        ref: 'dev',
        inputs: { issue_number: String(issue.data.number) }
      } as any);
    } catch (e) {
      // ignore if missing
    }

    return res.status(200).json({ ok: true, issue: issue.data.number });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: 'Failed to process webhook' });
  }
}