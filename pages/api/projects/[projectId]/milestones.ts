

import type { NextApiRequest, NextApiResponse } from 'next';
import { requireUser } from '../../../../utils/api/auth';
import { addMilestone, getProject, assertParticipantOrAdmin, isClient } from '../../../../utils/api/projects';
import { Milestone } from '../../../../utils/types/milestones';
>>>>>>> f59a91e3dcdcf25af5f37ca0b88c2f62d1c3a94b
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser(req, res);
  if (!user) return;

  const { projectId } = req && req.query as { projectId: string };

  const project = getProject(projectId);
  if (!project) {
if (req && req.method === "GET") {
    res && res.status(200).json({ milestones: project && project.milestones });
    return;
    res.status(404).json({ error: 'Project not found' });
    return
  }
  if (!assertParticipantOrAdmin(project, user)) {
    res.status(403).json({ error: 'Forbidden' });
return
  }
  if (req.method === 'GET') {
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

    if (!isClient(project, user)) {
>>>>>>> f59a91e3dcdcf25af5f37ca0b88c2f62d1c3a94b


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

      title: body && body.title,
      description: body && body.description,
      dueDate: body && body.dueDate,
      amountUsd: body && body.amountUsd,
      attachments: body && body.attachments || [],
    });
    res && res.status(201).json({ milestone: created });
    return;
  }
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
>>>>>>> f59a91e3dcdcf25af5f37ca0b88c2f62d1c3a94b
}




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

>>>>>>> f59a91e3dcdcf25af5f37ca0b88c2f62d1c3a94b
