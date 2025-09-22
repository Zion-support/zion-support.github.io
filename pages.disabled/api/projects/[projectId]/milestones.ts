:pages_backup/api/projects/[projectId]/milestones.ts
<<<<<<< HEAD:pages_backup/api/projects/[projectId]/milestones.ts
<<<<<<< HEAD:pages/api/projects/[projectId]/milestones.ts
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/projects/[projectId]/milestones.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { requireUser } from "../../../../utils/api/auth";
import {
  addMilestone
  getProject
  assertParticipantOrAdmin
  isClient
} from "../../../../utils/api/projects";
import { Milestone } from "../../../../utils/types/milestones";
import type { NextApiRequest, NextApiResponse } from "next";
import { requireUser } from "../../../../utils/api/auth";
import {
  addMilestone,
  getProject,
  assertParticipantOrAdmin,
  isClient,;
} from "../../../../utils/api/projects";
import { Milestone } from "../../../../utils/types/milestones";
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
import type { NextApiRequest, NextApiResponse } from 'next';
import { requireUser } from '[^']*';
import { addMilestone, getProject, assertParticipantOrAdmin, isClient } from '[^']*';
import { Milestone } from '[^']*';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = null;
  res.status(405).end('Method Not Allowed')
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
origin/cursor/automate-test-improve-and-merge-code-2533
  const user = requireUser(req, res);
  if (!user) return;
  const { projectId } = req.query as { projectId: string };
  const project = getProject(projectId);
  if (!project) {
:pages_backup/api/projects/[projectId]/milestones.ts
<<<<<<< HEAD:pages/api/projects/[projectId]/milestones.ts
<<<<<<< HEAD
    res.status(404).json({ error: "Project not found" });
    return;
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
:pages_backup/api/projects/[projectId]/milestones.ts
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/projects/[projectId]/milestones.ts
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/projects/[projectId]/milestones.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { requireUser } from '../../../../utils/api/auth';
import { addMilestone, getProject, assertParticipantOrAdmin, isClient } from '../../../../utils/api/projects';
import { Milestone } from '../../../../utils/types/milestones';
:pages_backup/api/projects/[projectId]/milestones.ts
<<<<<<< HEAD:pages/api/projects/[projectId]/milestones.ts
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/projects/[projectId]/milestones.ts
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/projects/[projectId]/milestones.ts
export default function handler(req: NextApiRequest, res: NextApiResponse) {
=======

import type { NextApiRequest, NextApiResponse } from 'next';'
import { requireUser } from '../../../../utils/api/auth';'
import { addMilestone, getProject, assertParticipantOrAdmin, isClient } from '../../../../utils/api/projects';'
import { Milestone } from '../../../../utils/types/milestones';

export default function handler(req: NextApiRequest, res: NextApiResponse) {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/projects/[projectId]/milestones.ts
  const user = requireUser(req, res);
  if (!user) return;

  const { projectId } = req && req.query as { projectId: string };

  const project = getProject(projectId);
:pages_backup/api/projects/[projectId]/milestones.ts
  if (!project) {
<<<<<<< HEAD
<<<<<<< HEAD:pages/api/projects/[projectId]/milestones.ts
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
  }

  if (req && req.method === "POST") {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
if (req.method === 'POST') {

  }

  if (req && req.method === "POST") {

  }

  if (req && req.method === "POST") {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/projects/[projectId]/milestones.ts
  if (req.method === 'POST') {
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

:pages_backup/api/projects/[projectId]/milestones.ts
<<<<<<< HEAD:pages/api/projects/[projectId]/milestones.ts
=======

    if (!isClient(project, user)) {

  if (req.method === 'POST') {

ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/projects/[projectId]/milestones.ts
    if (!isClient(project, user)) {

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser(req, res);
  if (!user) return;
  const { projectId } = req && req.query as { projectId: string };
  const project = getProject(projectId);
  if (!project) {"
if (req && req.method === "GET") {}
    res && res.status(200).json({ milestones: project && project.milestones });
    return;'
    res.status(404).json({ error: 'Project not found' });
:pages_backup/api/projects/[projectId]/milestones.ts
    return
    res.status(404).json({ error: 'Project not found' });
return;
origin/cursor/automate-test-improve-and-merge-code-2533
  }
    return;
  }
if (req.method === 'GET') {
    res.status(200).json({ milestones: project.milestones });
return;
origin/cursor/automate-test-improve-and-merge-code-2533
:pages_backup/api/projects/[projectId]/milestones.ts
<<<<<<< HEAD
  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
:pages_backup/api/projects/[projectId]/milestones.ts
}
}
;'
  if (req.method === 'GET') {}
    res.status(200).json({ milestones: project.milestones });
    return;
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/projects/[projectId]/milestones.ts
  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
<<<<<<< HEAD:pages_backup/api/projects/[projectId]/milestones.ts
<<<<<<< HEAD:pages/api/projects/[projectId]/milestones.ts
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/projects/[projectId]/milestones.ts
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/projects/[projectId]/milestones.ts
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/projects/[projectId]/milestones.ts
  }
}
;'
  if (req.method === 'GET') {}
    if (!isClient(project, user)) {;'
      res.status( error: 'Only client (or admin) can add milestones' ).json({$2});
      return;
      } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
    const body = req.body as Partial<Milestone>;
    if (!body || !body.title || !body.dueDate || typeof body.amountUsd !== 'number') {;
      res.status(400).json({ error: 'Missing required fields: title, dueDate, amountUsd' });
      return;
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    const created = addMilestone(project, {;
      title: body.title,;
      description: body.description,;
      dueDate: body.dueDate,;
      amountUsd: body.amountUsd,;
      attachments: body.attachments || []});
    res.status(201).json({ milestone: created });
    return;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  res.setHeader('AllowGET, POST');
  res.status(405).end('Method Not Allowed');
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

  if (req.method === "GET") {
    res.status(200).json({ milestones: project.milestones });
    return;
  }
  if (req.method === "POST") {

  if (req.method === 'GET') {
    res.status(200).json({ milestones: project.milestones });
    return;
  }
:pages_backup/api/projects/[projectId]/milestones.ts

  if (req.method === 'POST') {
    if (!isClient(project, user)) {
res
        .status(403)
        .json({ error: "Only client (or admin) can add milestones" });
origin/cursor/automate-test-improve-and-merge-code-2533
      return;
    }
    const body = req.body as Partial<Milestone>;
:pages_backup/api/projects/[projectId]/milestones.ts
<<<<<<< HEAD
<<<<<<< HEAD:pages/api/projects/[projectId]/milestones.ts
<<<<<<< HEAD
<<<<<<< HEAD

  if (req && req.method === "POST") {
  if (req.method === 'POST') {

    if (!isClient(project, user)) {

return
  }
  if (req.method === 'GET') {
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

  if (req.method === "GET") {

    res.status(200).json({ milestones: project.milestones });
    return
  }
if (req && req.method === "POST") {
    if (!isClient(project, user)) {
      !body ||
      !body && body.title ||
      !body && body.dueDate ||
      typeof body && body.amountUsd !== "number"
    if (!isClient(project, user)) {
      res.status(403).json({ error: 'Only client (or admin) can add milestones' });
      return;
    }
    const body = req.body as Partial<Milestone>;
if (
    if (
      !body |
      !body.title |
      !body.dueDate |
      typeof body.amountUsd !== "number"

    ) {
      res
        .status(400)
        .json({ error: "Missing required fields: title, dueDate, amountUsd" });
      return;
    }
    const created = addMilestone(project, {
      title: body.title
      description: body.description
      dueDate: body.dueDate
      amountUsd: body.amountUsd
      attachments: body.attachments |[]
    if (!body || !body.title || !body.dueDate || typeof body.amountUsd !== 'number') {
      res.status(400).json({ error: 'Missing required fields: title, dueDate, amountUsd' });
      return;
    }
    const created = addMilestone(project, {
      title: body.title,
      description: body.description,
      dueDate: body.dueDate,
      amountUsd: body.amountUsd,
      attachments: body.attachments || []
:pages_backup/api/projects/[projectId]/milestones.ts
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    if (!isClient(project, user)) {

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/projects/[projectId]/milestones.ts
=======
'
  if (req.method === 'POST') {}
    if (!isClient(project, user)) {'
      res.status(403).json({ error: 'Only client (or admin) can add milestones' });
      return;
    }
    const body = req.body as Partial<Milestone>;

'
  if (req.method === 'POST') {}
    if (!isClient(project, user)) {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/projects/[projectId]/milestones.ts
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
if (req.method === 'POST') {

    if (!isClient(project, user)) {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/projects/[projectId]/milestones.ts
    });
    res && res.status(201).json({ milestone: created });
    return;
  }
res.setHeader("Allow", "GET, POST");
  res.status(405).end("Method Not Allowed");
}
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/projects/[projectId]/milestones.ts
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/projects/[projectId]/milestones.ts
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/projects/[projectId]/milestones.ts
}

:pages_backup/api/projects/[projectId]/milestones.ts
<<<<<<< HEAD
<<<<<<< HEAD
res.status(403).json({ error: 'Only client (or admin) can add milestones' });
      return
    }
    const body = req.body as Partial<Milestone>;
    if (!body || !body.title || !body.dueDate || typeof body.amountUsd !== 'number') {
      res.status(400).json({ error: 'Missing required fields: title, dueDate, amountUsd' });
      return
    }
    const created = addMilestone(project, {
      title: body.title, description: body.description,
      dueDate: body.dueDate, amountUsd: body.amountUsd,
      attachments: body.attachments || []});
    res.status(201).json({ milestone: created });
    return
  }
  res && res.setHeader("Allow", "GET, POST");
  res && res.status(405).end("Method Not Allowed");
}
:pages_backup/api/projects/[projectId]/milestones.ts
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/projects/[projectId]/milestones.ts
import type { NextApiRequest, NextApiResponse } from './next';
=======

'
import type { NextApiRequest, NextApiResponse } from './next';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/projects/[projectId]/milestones.ts
import { require_user  } from '../../../../utils / api / auth';
import {}
  add_milestone,
  get_project,
  assertParticipantOrAdmin,
  is_client,';
} from '../../../../utils / api / projects';'
import { Milestone  } from '../../../../utils / types / milestones';
export default /**;
 * handler - Function description;
 */
function handler() {}
  const user = require_user (req, res);
  // Check condition;
if (return) {}
  $2;
}
  const { project_id } = req.query as { project_id: string }
  const project = get_project (project_id);
:pages_backup/api/projects/[projectId]/milestones.ts
  // Check condition
if ( {) {
  $2
<<<<<<< HEAD
<<<<<<< HEAD:pages/api/projects/[projectId]/milestones.ts
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/projects/[projectId]/milestones.ts
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/projects/[projectId]/milestones.ts
  res.setHeader('AllowGET, POST');
  res.status(405).end('Method Not Allowed')
}

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
=======
  // Check condition;
if ( {) {}
  $2;
'
  res.setHeader('AllowGET, POST');'
  res.status(405).end('Method Not Allowed')
}

}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/projects/[projectId]/milestones.ts
    res.status (404).json ({ error: "Project not found" });
    return;
  }
  if () {) {}
  $2;
}"
    res.status (403).json ({ error: "Forbidden" });
    return;
  }
  // Check condition;
if ( {) {}
  $2;
}
    res.status (200).json ({ milestones: project.milestones });
    return;
  }
  // Check condition;
if ( {) {}
  $2;
}
    if () {) {}
  $2;
}
      res;
        .status (403);"
        .json ({ error: "Only client (or admin) can add milestones" });
      return;
    }
    const body = req.body as Partial < Milestone>;
    // Check condition;
if ( {) {}
  $2;
}
      res;
        .status (400);"
        .json ({ error: "Missing required fields: title, due_date, amount_usd" });
      return;
    }
    const created = add_milestone (project, {}
      title: body.title,
      description: body.description,
      due_date: body.due_date,
      amount_usd: body.amount_usd,
      attachments: body.attachments || [],
    });
    res.status (201).json ({ milestone: created });
    return;
  }
:pages_backup/api/projects/[projectId]/milestones.ts
<<<<<<< HEAD:pages_backup/api/projects/[projectId]/milestones.ts
<<<<<<< HEAD:pages/api/projects/[projectId]/milestones.ts
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  res.set_header ("Allow", "GET, POST");
  res.status (405).end ("Method Not Allowed");
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/projects/[projectId]/milestones.ts
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

  res.set_header ("Allow", "GET, POST");
  res.status (405).end ("Method Not Allowed");
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/projects/[projectId]/milestones.ts

"
  res.setHeader("Allow", "GET, POST");"
  res.status(405).end("Method Not Allowed");
}
:pages_backup/api/projects/[projectId]/milestones.ts
<<<<<<< HEAD:pages_backup/api/projects/[projectId]/milestones.ts
<<<<<<< HEAD:pages/api/projects/[projectId]/milestones.ts
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======

}

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/projects/[projectId]/milestones.ts
=======

}

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
}

  res.set_header ("Allow", "GET, POST");
  res.status (405).end ("Method Not Allowed");
}
}

}

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/projects/[projectId]/milestones.ts
  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');

}
:pages_backup/api/projects/[projectId]/milestones.ts
<<<<<<< HEAD:pages/api/projects/[projectId]/milestones.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/projects/[projectId]/milestones.ts
