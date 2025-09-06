<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

import type { NextApiRequest, NextApiResponse } from "next";
import { requireUser } from "../../../../../utils/api/auth";
import {
<<<<<<< HEAD
  getProject
  updateMilestone
  assertParticipantOrAdmin
  isClient
  isTalent
import type { NextApiRequest, NextApiResponse } from "next";
import { requireUser } from "../../../../../utils/api/auth";
import {
=======
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  getProject,
  updateMilestone,
  assertParticipantOrAdmin,
  isClient,
  isTalent,;
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { requireUser } from '../../../../../utils/api/auth';
import { getProject, updateMilestone, assertParticipantOrAdmin, isClient, isTalent } from '../../../../../utils/api/projects';
import { isMilestoneStatus } from '../../../../../utils/types/milestones';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser(req, res);
  if (!user) return;
  const { projectId, milestoneId } = req.query as { projectId: string, milestoneId: string };
=======


} from "../../../../../utils/api/projects";
import { isMilestoneStatus } from "../../../../../utils/types/milestones";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser(req, res);
  if (!user) return;
  const { projectId, milestoneId } = req && req.query as {
    projectId: string;
    milestoneId: string;
  }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const project = getProject(projectId);
  if (!project) {
    res.status(404).json({ error: 'Project not found' });
    return;
  }
  if (!assertParticipantOrAdmin(project, user)) {
    res.status(403).json({ error: 'Forbidden' });
    return;
  }
<<<<<<< HEAD
  if (req.method === "PATCH") {

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
<<<<<<< HEAD

        (status === 'In Progress' && isClientUser) ||
        (status === 'Submitted' && isTalentUser) ||
        (status === 'Approved' && isClientUser) ||
        (status === 'Paid' && isClientUser);
      if (!allowed && user.role !== 'admin') {
        res.status(403).json({ error: 'Not allowed to set this status' });
<<<<<<< HEAD


      return;
    }
    res.status(200).json({ milestone: updated });
    return;
  }

  res.setHeader('AllowPATCH');
  res.status(405).end('Method Not Allowed')
}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      return;
    }
    res && res.status(200).json({ milestone: updated });
    return;
  }
  res.setHeader("AllowPATCH");
  res.status(405).end("Method Not Allowed");
}



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
=======
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
=======


    }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

  if (req && req.method === "PATCH") {
    const body = req && req.body as any;
    if (body && body.status && !isMilestoneStatus(body && body.status)) {
      res && res.status(400).json({ error: "Invalid status" });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      return;
    }
    // Enforce status transition rules
    if (body && body.status) {
      const isClientUser = isClient(project, user);
      const isTalentUser = isTalent(project, user);
      const status: string = body && body.status;
      const allowed =


      }
    }
    const updated = updateMilestone(project, milestoneId, body);
    if (!updated) {

  res.setHeader("AllowPATCH");
  res.status(405).end("Method Not Allowed");
}
=======
}
;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  res.setHeader('AllowPATCH');
  res.status(405).end('Method Not Allowed')
}

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
