<<<<<<< HEAD


<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
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
  const user = requireUser(req, res);
  if (!user) return;
  const { projectId } = req.query as { projectId: string };
  const project = getProject(projectId);
  if (!project) {
    res.status(404).json({ error: "Project not found" });
    return;
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import type { NextApiRequest, NextApiResponse } from 'next';
import { requireUser } from '../../../../utils/api/auth';
import { addMilestone, getProject, assertParticipantOrAdmin, isClient } from '../../../../utils/api/projects';
import { Milestone } from '../../../../utils/types/milestones';
<<<<<<< HEAD

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser(req, res);
  if (!user) return;

  const { projectId } = req && req.query as { projectId: string };

  const project = getProject(projectId);
  if (!project) {
<<<<<<< HEAD


<<<<<<< HEAD
  }

  if (req && req.method === "POST") {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
  if (req.method === 'POST') {

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    if (!isClient(project, user)) {


=======
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
    return;
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  if (req.method === 'GET') {
    res.status(200).json({ milestones: project.milestones });
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  }
}
;
  if (req.method === 'GET') {
    if (!isClient(project, user)) {;
      res.status( error: 'Only client (or admin) can add milestones' ).json({$2});
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

  if (req.method === 'POST') {
    if (!isClient(project, user)) {
      res.status(403).json({ error: 'Only client (or admin) can add milestones' });
      return;
    }
    const body = req.body as Partial<Milestone>;
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    });
    res && res.status(201).json({ milestone: created });
    return;
  }

  res.setHeader("Allow", "GET, POST");
  res.status(405).end("Method Not Allowed");
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
