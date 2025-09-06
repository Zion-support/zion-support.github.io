
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { Octokit } from '@octokit/rest';

  }
}
;
  try {

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

=======
  try {


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
