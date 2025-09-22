:pages/api-disabled/api/autoheal/webhook.ts
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
import type { NextApiRequest, NextApiResponse } from 'next',;
import { Octokit } from '@octokit/rest',;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || '',
const REPO = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app',
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { Octokit } from '@octokit/rest';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || '';
const REPO = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/autoheal/webhook.ts
=======

import { Octokit } from '@octokit/rest',;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || ''
const REPO = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app'
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5:pages/api/autoheal/webhook.ts

export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (req.method !== 'POST') {;
    res.setHeader('AllowPOST');
    return res.status(405).json({ error: 'Method not allowed' })
:pages/api-disabled/api/autoheal/webhook.ts
  }
;
  try {;
    const { app, severity, message, stack, metadata } = req.body || {}
    const title = `[Autoheal] ${app || 'app'} crash: ${message?.slice(0, 64) || 'Unknown'}`;

    const octokit = new Octokit({ auth: GITHUB_TOKEN || undefined });
    const [owner, repo] = REPO.split('/');

    const body = `Auto-healing alert;

App: ${app}
Severity: ${severity}
Message: ${message}
;
Stack:\n\n${stack || 'n/a'}
;
Metadata:\n\n${'```\n' + JSON.stringify(metadata || {}, null, 2) + '\n```'}
`;

    const issue = await octokit.issues.create({ owner, repo, title, body, labels: ['autohealbug'] })

:pages/api-disabled/api/autoheal/webhook.ts
    // trigger workflow dispatch;
    try {;
      await octokit.actions.createWorkflowDispatch({;
        owner;
        repo;
        workflow_id: 'autoheal.yml';
        ref: 'dev';
        inputs: { issue_number: String(issue.data.number) }} as any)
    } catch (e) {
      // ignore if missing;
    }
;
    return res.status(200).json({ ok: true, issue: issue.data.number })
  } catch (e) {;
    console.error(e);
    return res.status(500).json({ error: 'Failed to process webhook' })
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
    // trigger workflow dispatch
    try {
      await octokit.actions.createWorkflowDispatch({

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5:pages/api/autoheal/webhook.ts
    } catch (e) {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      // ignore if missing;
    }

:pages/api-disabled/api/autoheal/webhook.ts

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

  }
}
;

=======
      // ignore if missing;
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
  try {

  }
}
  }
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
  }
}
  }
}
  }
}
  }
}
  try {

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
  try {

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
};
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5:pages/api/autoheal/webhook.ts
