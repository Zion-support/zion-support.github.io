<<<<<<< HEAD


import type { NextApiRequest, NextApiResponse } from 'next';
import { requireUser } from '../../../../utils/api/auth';
import { addMilestone, getProject, assertParticipantOrAdmin, isClient } from '../../../../utils/api/projects';
import { Milestone } from '../../../../utils/types/milestones';

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser(req, res);
  if (!user) return;

  const { projectId } = req && req.query as { projectId: string };

  const project = getProject(projectId);
  if (!project) {



  }
<<<<<<< HEAD
  if (!assertParticipantOrAdmin(project, user)) {
    res.status(403).json({ error: 'Forbidden' });
    return;
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

=======

  if (req && req.method === "POST") {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  if (req.method === 'POST') {
    if (!isClient(project, user)) {
      res.status(403).json({ error: 'Only client (or admin) can add milestones' });
      return;
    }
    const body = req.body as Partial<Milestone>;
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
    });
    res && res.status(201).json({ milestone: created });
    return;
  }
<<<<<<< HEAD

  res.setHeader("Allow", "GET, POST");
  res.status(405).end("Method Not Allowed");
}
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


  res.setHeader('AllowGET, POST');
  res.status(405).end('Method Not Allowed')
}

<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
=======
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
