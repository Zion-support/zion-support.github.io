import type { NextApiRequest, NextApiResponse } from 'next',
import { Octokit } from '@octokit/rest',

const GITHUB_TOKEN = process.env.GITHUB_TOKEN || '',
const REPO = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app',
export default async function handler(req: NextApiRequest, res: NextApiResponse) {,
  if (req.method !== 'POST') {,
    res.setHeader('AllowPOST'),
    return res.status(405).json({ error: 'Method not allowed' })
    } catch (e) {,
      // ignore if missing
    }
return res.status(200).json({ ok: true, issue: issue.data.number })
  } catch (e) {,
    console.error(e),
    return res.status(500).json({ error: 'Failed to process webhook' }),
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || '',
const REPO = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app',
export default async function handler(req, res) {,
  try {,
  if (req.method !== '$1') {,
    res.setHeader('AllowPOST'),
    return res.status(405).json({ error: 'Method not allowed' }),
    } catch (error) {,
    console.error("Error:", error),
    return res.status(500).json({ error: "Internal server error" }),
  }
}
,
  try {,
    const { app, severity, message, stack, metadata } = req.body || {},
    const title = `[Autoheal] ${app || 'app'} crash: ${message?.slice(0, 64) || 'Unknown'}`,
Metadata: \n\n${'```\n' + JSON.stringify(metadata || {}, null, 2) + '\n```'}
`,
    const issue = await octokit.issues.create({ owner, repo, title, body, labels: ['autohealbug'] }),
    // trigger workflow dispatch,
    try {,
      await octokit.actions.createWorkflowDispatch({,
        owner,
        repo,
        workflow_id: 'autoheal.yml',
        ref: 'dev',
inputs: { issue_number: String(issue.data.number) }} as any)
    } catch (e) {,
      // ignore if missing
    }
,
return res.status(200).json({ ok: true, issue: issue.data.number })
  } catch (e) {,
    console.error(e),
    return res.status(500).json({ error: 'Failed to process webhook' })
  },
},
    const { app, severity, message, stack, metadata } = req.body || {},
    const title = `[Autoheal] ${app || 'app'} crash: ${message?.slice(0, 64) || 'Unknown'}`,
    const octokit = new Octokit({ auth: GITHUB_TOKEN || undefined }),
    const [owner, repo] = REPO.split('/'),
    const body = `Auto-healing alert,
App: ${app  } catch (error) {,
    console.error("Error:", error),
    return res.status(500).json({ error: "Internal server error" }),
  }
}
Severity: ${severity  } catch (error) {,
    console.error("Error:", error),
    return res.status(500).json({ error: "Internal server error" }),
  }
}
Message: ${message  } catch (error) {,
    console.error("Error:", error),
    return res.status(500).json({ error: "Internal server error" }),
  }
}
,
Stack: \n\n${stack || 'n/a'  } catch (error) {,
    console.error("Error:", error),
    return res.status(500).json({ error: "Internal server error" }),
  }
}
,
Metadata: \n\n${'```\n' + JSON.stringify(metadata || {}, null, 2) + '\n```'  } catch (error) {,
    console.error("Error:", error),
    return res.status(500).json({ error: "Internal server error" }),
  }
}
`,
    const issue = await octokit.issues.create({ owner, repo, title, body, labels: ['autohealbug'] }),
    // trigger workflow dispatch,
    try {,
      await octokit.actions.createWorkflowDispatch({,
        owner,
        repo,
        workflow_id: 'autoheal.yml',
        ref: 'dev',
        inputs: { issue_number: String(issue.data.number) }} as any),
    } catch (error) {} catch (e) {} catch (e) {,
      // ignore if missing,
    }

  }
}
,
,
    return res.status(200).json({ ok: true, issue: issue.data.number }),
  } catch (error) {,
    console.error(e),
    return res.status(500).json({ error: 'Failed to process webhook' }),
    } catch (error) {,
    console.error("Error:", error),
    return res.status(500).json({ error: "Internal server error" }),
  }
}
  } catch (error) {,
    console.error("Error:", error),
    return res.status(500).json({ error: "Internal server error" }),
  }
}
  }
}
,