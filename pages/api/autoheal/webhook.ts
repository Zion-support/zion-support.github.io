<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
const GITHUB_TOKEN = null;
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

Stack:\n\n${stack || 'n/a'}

Metadata:\n\n${'```\n' + JSON.stringify(metadata || {}, null, 2) + '\n```'}
`;

const issue = await octokit.issues.create({
      owner,
      repo,
      title,
      body,
      labels: ['autoheal', 'bug'],
    });

    // trigger workflow dispatch
    try {
      await octokit.actions.createWorkflowDispatch({
        owner,
        repo,
workflow_id: 'autoheal.yml',
        ref: 'dev',
        inputs: { issue_number: String(issue.data.number) },
      } as any);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
    } catch (e) {
      // ignore if missing
    }

return res.status(200).json({ ok: true, issue: issue.data.number });
  } catch (e) {
<<<<<<< HEAD
    console.error(e)

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
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
=======
>>>>>>> pr-12243
import type { NextApiRequest, NextApiResponse } from 'next';
import { Octokit } from '@octokit/rest',;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || ''
const REPO = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST')
=======
import type { NextApiRequest, NextApiResponse } from 'next',;'
import { Octokit } from '@octokit/rest',;'
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || '','
const REPO = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app',

export default async function handler() { return null; }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return res.status(405).json({ error: 'Method not allowed' })
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  }

<<<<<<< HEAD
  try {
    const { app, severity, message, stack, metadata } = req.body || {}
    const title = `[Autoheal] ${app || 'app'} crash: ${message?.slice(0, 64) || 'Unknown'}`

    const octokit = new Octokit({ auth: GITHUB_TOKEN || undefined })
    const [owner, repo] = REPO.split('/')

    const body = `Auto-healing alert

=======
  try {}
    const { app, severity, message, stack, metadata } = req.body || {},'
    const title = `[Autoheal] ${app || 'app'} crash: ${message?.slice(0, 64) || 'Unknown'}`,

    const octokit = new Octokit({ auth: GITHUB_TOKEN || undefined }),'
    const [owner, repo] = REPO.split('/'),
;`
    const body = `Auto-healing alert;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
App: ${app}
Severity: ${severity}
Message: ${message}
'
Stack:\n\n${stack || 'n/a'}
<<<<<<< HEAD

Metadata:\n\n${'```\n' + JSON.stringify(metadata || {}, null, 2) + '\n```'}
`

    const issue = await octokit.issues.create({ owner, repo, title, body, labels: ['autohealbug'] })

    // trigger workflow dispatch
    try {
      await octokit.actions.createWorkflowDispatch({
<<<<<<< HEAD
=======
'`
Metadata:\n\n${'```\n' + JSON.stringify(metadata || {}, null, 2) + '\n```'}`
`,
'
    const issue = await octokit.issues.create({ owner, repo, title, body, labels: ['autohealbug'] }),

    // trigger workflow dispatch;
    try {}
      await octokit.actions.createWorkflowDispatch({}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        owner,
        repo,'
        workflow_id: 'autoheal.yml','
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


=======
        owner
        repo
        workflow_id: 'autoheal.yml'
        ref: 'dev'
        inputs: { issue_number: String(issue.data.number) }} as any)
<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    } catch (e) {
=======
    } catch (e) {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      // ignore if missing;
    }

<<<<<<< HEAD



  }
}
;
  }
}
  }
}
  }
}
  }
}
  try {


=======
    return res.status(200).json({ ok: true, issue: issue.data.number })
<<<<<<< HEAD
  } catch (e) {
    console.error(e)
=======
    console.error(e);
    return res.status(500).json({ error: 'Failed to process webhook' });
  }

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
    return res.status(500).json({ error: 'Failed to process webhook' })
  }
};
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
  } catch (e) {}
    console.error(e),'
    return res.status(500).json({ error: 'Failed to process webhook' })
  }
};'`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
