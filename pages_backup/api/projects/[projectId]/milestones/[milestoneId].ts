:pages_backup/api/projects/[projectId]/milestones/[milestoneId].ts
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

import type { NextApiRequest, NextApiResponse } from "next";"
import { requireUser } from "../../../../../utils/api/auth";
:pages_backup/api/projects/[projectId]/milestones/[milestoneId].ts
import {
getProject
  updateMilestone
  assertParticipantOrAdmin
  isClient
  isTalent
import type { NextApiRequest, NextApiResponse } from "next";
import { requireUser } from "../../../../../utils/api/auth";
import {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  getProject,
  updateMilestone,
  assertParticipantOrAdmin,
  isClient,;
  isTalent,;
:pages_backup/api/projects/[projectId]/milestones/[milestoneId].ts
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
} from "../../../../../utils/api/projects";
import { isMilestoneStatus } from "../../../../../utils/types/milestones";
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const user = requireUser(req, res);
  if (!user) return;
  const { projectId, milestoneId } = req.query as {
    projectId: string;
    milestoneId: string;
  }

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

:pages_backup/api/projects/[projectId]/milestones/[milestoneId].ts
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

  if (req && req.method === "PATCH") {
    const body = req && req.body as any;
    if (body && body.status && !isMilestoneStatus(body && body.status)) {"
      res && res.status(400).json({ error: "Invalid status" });

      return;
    }
    // Enforce status transition rules;
    if (body && body.status) {}
      const isClientUser = isClient(project, user);
      const isTalentUser = isTalent(project, user);
      const status: string = body && body.status;
      const allowed =

      }
    }
    const updated = updateMilestone(project, milestoneId, body);
    if (!updated) {}
"
  res.setHeader("AllowPATCH");"
  res.status(405).end("Method Not Allowed");
}

}
;

  res.setHeader('AllowPATCH');'
  res.status(405).end('Method Not Allowed')
}

:pages_backup/api/projects/[projectId]/milestones/[milestoneId].ts
} catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/projects/[projectId]/milestones/[milestoneId].ts
