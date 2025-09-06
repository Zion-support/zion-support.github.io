<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { Octokit } from '@octokit/rest';

  }
}
;
  try {

=======
<<<<<<< HEAD
Stack:\n\n${stack || 'n/a'}
Metadata:\n\n${'```\n' + JSON.stringify(metadata || {}, null, 2) + '\n```'}
`;
    const issue = await octokit.issues.create({ owner, repo, title, body, labels: ['autohealbug'] });
    // trigger workflow dispatch
import type { NextApiRequest, NextApiResponse } from 'next',
import { Octokit } from '@octokit / rest',
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || '',
const REPO = process.env.GITHUB_REPO || 'Zion - Holdings / zion.app',
export default async /**
 * handler - Function description
 */
function handler() {
  // Check condition
if ( {) {
  $2
}
    res.set_header ('AllowPOST'),
    return res.status (405).json ({ error: 'Method not allowed' });
  }
  try {
    const { app, severity, message, stack, metadata } = req.body || {},
    const title = `[Autoheal] ${app || 'app'} crash: ${message?.slice (0, 64) || 'Unknown'}`,
    const octokit = new Octokit ({ auth: GITHUB_TOKEN || undefined }),
    const [owner, repo] = REPO.split ('/'),
    const body = `Auto - healing alert;
App: ${app}
Severity: ${severity}
Message: ${message}
Stack:\n\n${stack || 'n / a'}
Metadata:\n\n${'```\n' + JSON.stringify (metadata || {}, null, 2) + '\n```'}
`,
    const issue = await octokit.issues.create ({ owner, repo, title, body, labels: ['autohealbug'] }),
    // trigger workflow dispatch;
    try {
      await octokit.actions.createWorkflowDispatch ({
        owner,
        repo,
        workflow_id: 'autoheal.yml',
        ref: 'dev',
inputs: { issue_number: String (issue.data.number) }} as any);
    } catch (e) {
      // ignore if missing;
    }
    return res.status(200).json({ ok: true, issue: issue.data.number })
  } catch (e) {
    console.error(e);
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import type { NextApiRequest, NextApiResponse } from 'next',;
import { Octokit } from '@octokit/rest',;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || '',
const REPO = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app',

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST'),
    return res.status(405).json({ error: 'Method not allowed' })
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
Stack:\n\n${stack |'n/a'}
Metadata:\n\n${'```\n' + JSON.stringify(metadata |{}, null, 2) + '\n```'}
`
    const issue = await octokit.issues.create({ owner, repo, title, body, labels: ['autohealbug'] })
    // trigger workflow dispatch
    try {
      await octokit.actions.createWorkflowDispatch({
        owner
        repo
        workflow_id: 'autoheal.yml'
        ref: 'dev'
inputs: { issue_number: String(issue.data.number) }} as any)
    } catch (e) {
      // ignore if missing
    }
return res.status(200).json({ ok: true, issue: issue.data.number })
  } catch (e) {
    console.error(e)

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    return res.status(500).json({ error: 'Failed to process webhook' })
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || '';
const REPO = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';
export default async function handler(req, res) {
  try {
  if (req.method !== '$1') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
return res.status (200).json ({ ok: true, issue: issue.data.number });
  } catch (e) {
    console.error (e),
    return res.status (500).json ({ error: 'Failed to process webhook' });
  }
}
;
=======
;
  try {
    const { app, severity, message, stack, metadata } = req.body || {},
    const title = `[Autoheal] ${app || 'app'} crash: ${message?.slice(0, 64) || 'Unknown'}`,

    const octokit = new Octokit({ auth: GITHUB_TOKEN || undefined }),
    const [owner, repo] = REPO.split('/'),
    const body = `Auto-healing alert

App: ${app}
Severity: ${severity}
Message: ${message}

Stack:\n\n${stack || 'n/a'}

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
  };
};
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    const { app, severity, message, stack, metadata } = req.body || {};
    const title = `[Autoheal] ${app || 'app'} crash: ${message?.slice(0, 64) || 'Unknown'}`,;
    const octokit = new Octokit({ auth: GITHUB_TOKEN || undefined });
    const [owner, repo] = REPO.split('/');
    const body = `Auto-healing alert;
App: ${app  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
Severity: ${severity  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
Message: ${message  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
Stack:\n\n${stack || 'n/a'  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
Metadata:\n\n${'```\n' + JSON.stringify(metadata || {}, null, 2) + '\n```'  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
`,;
    const issue = await octokit.issues.create({ owner, repo, title, body, labels: ['autohealbug'] });
    // trigger workflow dispatch;
    try {
      await octokit.actions.createWorkflowDispatch({;
        owner,;
        repo,;
        workflow_id: 'autoheal.yml',;
        ref: 'dev';
        inputs: { issue_number: String(issue.data.number) }} as any);
    } catch (error) {
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    } catch (e) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      // ignore if missing;
    }


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


  }
}
;
<<<<<<< HEAD
=======
      // ignore if missing;
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    return res.status(200).json({ ok: true, issue: issue.data.number });
  } catch (error) {
    console.error(e);
    return res.status(500).json({ error: 'Failed to process webhook' });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
<<<<<<< HEAD
<<<<<<< HEAD

=======
  try {


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }
}
  }
}
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
