<<<<<<< HEAD:pages/api/autoheal/webhook.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // TODO: Implement webhook logic
    res.status(200).json({ message: 'webhook endpoint' });
  } catch (error) {
    console.error('Error in webhook:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
=======
import type { NextApiRequest, NextApiResponse } from 'next',;
import { Octokit } from '@octokit/rest',;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || '',
const REPO = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app',

export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (req.method !== 'POST') {;
    res.setHeader('AllowPOST');
    return res.status(405).json({ error: 'Method not allowed' })

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

    } catch (e) {

      // ignore if missing;
    }

  }
}
;

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
>>>>>>> b1bd2160a740f8569656e96922b453e70de0f5db:pages-disabled/api-disabled/api/autoheal/webhook.ts
}