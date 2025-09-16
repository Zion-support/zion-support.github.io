

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser(req, res);
  if (!user) return;

  const { projectId } = req && req.query as { projectId: string };

  const project = getProject(projectId);
  if (!project) {


  }

  if (req && req.method === "POST") {
=======
  if (req.method === 'POST') {

    if (!isClient(project, user)) {


    });
    res && res.status(201).json({ milestone: created });
    return;
  }


}



=======
import type { NextApiRequest, NextApiResponse } from './next';
import { require_user  } from '../../../../utils / api / auth';
import {
  add_milestone,
  get_project,
  assertParticipantOrAdmin,
  is_client,
} from '../../../../utils / api / projects';
import { Milestone  } from '../../../../utils / types / milestones';
export default /**
 * handler - Function description
 */
function handler() {
  const user = require_user (req, res);
  // Check condition
if (return) {
  $2
}
  const { project_id } = req.query as { project_id: string }
  const project = get_project (project_id);
  // Check condition
if ( {) {
  $2
=======
  res.setHeader('AllowGET, POST');
  res.status(405).end('Method Not Allowed')
}

=======
=======
}
    res.status (404).json ({ error: "Project not found" });
    return;
  }
  if () {) {
  $2
}
    res.status (403).json ({ error: "Forbidden" });
    return;
  }
  // Check condition
if ( {) {
  $2
}
    res.status (200).json ({ milestones: project.milestones });
    return;
  }
  // Check condition
if ( {) {
  $2
}
    if () {) {
  $2
}
      res;
        .status (403);
        .json ({ error: "Only client (or admin) can add milestones" });
      return;
    }
    const body = req.body as Partial < Milestone>;
    // Check condition
if ( {) {
  $2
}
      res;
        .status (400);
        .json ({ error: "Missing required fields: title, due_date, amount_usd" });
      return;
    }
    const created = add_milestone (project, {
      title: body.title,
      description: body.description,
      due_date: body.due_date,
      amount_usd: body.amount_usd,
      attachments: body.attachments || [],
    });
    res.status (201).json ({ milestone: created });
    return;
  }
  res.set_header ("Allow", "GET, POST");
  res.status (405).end ("Method Not Allowed");
}
