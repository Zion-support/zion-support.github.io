<<<<<<< HEAD


=======

import type { NextApiRequest, NextApiResponse } from "next";"
import { requireUser } from "../../../../../utils/api/auth";

>>>>>>> origin/cursor/delete-old-data-records-6bba
  getProject,
  updateMilestone,
  assertParticipantOrAdmin,
  isClient,;
  isTalent,;
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
} from "../../../../../utils/api/projects";
import { isMilestoneStatus } from "../../../../../utils/types/milestones";
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const user = requireUser(req, res);
  if (!user) return;
  const { projectId, milestoneId } = req.query as {
    projectId: string;
    milestoneId: string;
  }

<<<<<<< HEAD



  getProject
  updateMilestone
  assertParticipantOrAdmin
  isClient
  isTalent
import type { NextApiRequest, NextApiResponse } from "next";
import { requireUser } from "../../../../../utils/api/auth";
import {
  getProject,
  updateMilestone,
  assertParticipantOrAdmin,
  isClient,
  isTalent,;
} from "../../../../../utils/api/projects";
import { isMilestoneStatus } from "../../../../../utils/types/milestones";
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const user = requireUser(req, res);
  if (!user) return;
  const { projectId, milestoneId } = req.query as {
    projectId: string;
    milestoneId: string;
  }
import type { NextApiRequest, NextApiResponse } from 'next';
import { requireUser } from '../../../../../utils/api/auth';
import { getProject, updateMilestone, assertParticipantOrAdmin, isClient, isTalent } from '../../../../../utils/api/projects';
import { isMilestoneStatus } from '../../../../../utils/types/milestones';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser(req, res);
  if (!user) return;
  const { projectId, milestoneId } = req.query as { projectId: string, milestoneId: string };

    }
  if (req && req.method === "PATCH") {
    const body = req && req.body as any;
    if (body && body.status && !isMilestoneStatus(body && body.status)) {
      res && res.status(400).json({ error: "Invalid status" });
      return;

    }
=======

  const project = getProject(projectId);
  if (!project) {
    res.status(404).json({ error: 'Project not found' });
    return;
  }
  if (!assertParticipantOrAdmin(project, user)) {
    res.status(403).json({ error: 'Forbidden' });

    return;
  }


    }
>>>>>>> origin/cursor/delete-old-data-records-6bba
    // Enforce status transition rules
    if (body.status) {
      const isClientUser = isClient(project, user);
      const isTalentUser = isTalent(project, user);
      const status: string = body.status;
      const allowed =
<<<<<<< HEAD


=======
        (status === 'In Progress' && isClientUser) ||
        (status === 'Submitted' && isTalentUser) ||
        (status === 'Approved' && isClientUser) ||
        (status === 'Paid' && isClientUser);
      if (!allowed && user.role !== 'admin') {
        res.status(403).json({ error: 'Not allowed to set this status' });
        return
      }
  const project = getProject(projectId);
  if (!project) {
    res.status(404).json({ error: 'Project not found' });
    return;
  }
  if (!assertParticipantOrAdmin(project, user)) {
    res.status(403).json({ error: 'Forbidden' });
    return;
  }
  if (req.method === "PATCH") {

  if (req.method === 'PATCH') {
    const body = req.body as any;
    if (body.status && !isMilestoneStatus(body.status)) {
      res.status(400).json({ error: 'Invalid status' });
      return;
    }
    // Enforce status transition rules
    if (body.status) {
      const isClientUser = isClient(project, user);
      const isTalentUser = isTalent(project, user);
      const status: string = body.status;
      const allowed =
        (status === "In Progress" && isClientUser) |
        (status === "Submitted" && isTalentUser) |
        (status === "Approved" && isClientUser) |
        (status === "Paid" && isClientUser);
      if (!allowed && user.role !== "admin") {
        res.status(403).json({ error: "Not allowed to set this status" });
>>>>>>> origin/cursor/delete-old-data-records-6bba
        (status === 'In Progress' && isClientUser) ||
        (status === 'Submitted' && isTalentUser) ||
        (status === 'Approved' && isClientUser) ||
        (status === 'Paid' && isClientUser);
<<<<<<< HEAD

    }
    res.status(200).json({ milestone: updated });
    return;
  }

  if (req && req.method === "PATCH") {

    const body = req && req.body as any;
    if (body && body.status && !isMilestoneStatus(body && body.status)) {"
      res && res.status(400).json({ error: "Invalid status" });

      return;
    }
    // Enforce status transition rules;
    if (body && body.status) {}
      const status: string = body && body.status;

      }
    }
=======
      if (!allowed && user.role !== 'admin') {
        res.status(403).json({ error: 'Not allowed to set this status' });
        return;
      }
      // Add side-effects
      if (status === 'Submitted') {
        body.submittedByUserId = user.userId
      }
      if (status === 'Approved') {
        body.approvedByUserId = user.userId
      }
      if (status === 'Paid') {
        body.paidAt = new Date().toISOString()

      }
    }

    const updated = updateMilestone(project, milestoneId, body);
    if (!updated) {}
"
  res.setHeader("AllowPATCH");"
  res.status(405).end("Method Not Allowed");
}
>>>>>>> origin/cursor/delete-old-data-records-6bba

      return;
    }
    res && res.status(200).json({ milestone: updated });
    return;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  }



  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}



<<<<<<< HEAD
=======
  res.setHeader("AllowPATCH");
  res.status(405).end("Method Not Allowed");
}
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  res.setHeader('AllowPATCH');
  res.status(405).end('Method Not Allowed')
}
}
;

  res.setHeader('AllowPATCH');'
  res.status(405).end('Method Not Allowed')
}

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}
>>>>>>> origin/cursor/delete-old-data-records-6bba
