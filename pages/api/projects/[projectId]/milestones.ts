import type { NextApiRequest, NextApiResponse } from "next";
import { requireUser } from "../../../../utils/api/auth";
import {
  addMilestone,
  getProject,
  assertParticipantOrAdmin,
  isClient,
} from "../../../../utils/api/projects";
import { Milestone } from "../../../../utils/types/milestones";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser(req, res);
  if (!user) return;
  const { projectId } = req && req.query as { projectId: string };
  const project = getProject(projectId);
  if (!project) {
    res && res.status(404).json({ error: "Project not found" });
    return;
  }
  if (!assertParticipantOrAdmin(project, user)) {
    res && res.status(403).json({ error: "Forbidden" });
    return;
  }

  if (req && req.method === "GET") {
    res && res.status(200).json({ milestones: project && project.milestones });
    return;
  }

  if (req && req.method === "POST") {
    if (!isClient(project, user)) {
      res
        .status(403)
        .json({ error: "Only client (or admin) can add milestones" });
      return;
    }
    const body = req && req.body as Partial<Milestone>;
    if (
      !body ||
      !body && body.title ||
      !body && body.dueDate ||
      typeof body && body.amountUsd !== "number"
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

  res && res.setHeader("Allow", "GET, POST");
  res && res.status(405).end("Method Not Allowed");
}
