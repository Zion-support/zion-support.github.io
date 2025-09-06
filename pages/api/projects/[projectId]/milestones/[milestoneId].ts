<<<<<<< HEAD

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

=======


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
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser(req, res);
  if (!user) return;
  const { projectId, milestoneId } = req && req.query as {
    projectId: string;
    milestoneId: string;
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const project = getProject(projectId);
  if (!project) {
    res && res.status(404).json({ error: "Project not found" });
    return;
  }
  if (!assertParticipantOrAdmin(project, user)) {
    res && res.status(403).json({ error: "Forbidden" });
    return;
  }

<<<<<<< HEAD
    const body = req.body as any;
    if (body.status && !isMilestoneStatus(body.status)) {
      res.status(400).json({ error: 'Invalid status' });
=======

    }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

  if (req && req.method === "PATCH") {
    const body = req && req.body as any;
    if (body && body.status && !isMilestoneStatus(body && body.status)) {
      res && res.status(400).json({ error: "Invalid status" });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      return;
    }
    // Enforce status transition rules
    if (body && body.status) {
      const isClientUser = isClient(project, user);
      const isTalentUser = isTalent(project, user);
      const status: string = body && body.status;
      const allowed =

<<<<<<< HEAD
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

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      }
    }
    const updated = updateMilestone(project, milestoneId, body);
    if (!updated) {

<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'PATCH') {
    res.status(200).json({ message: 'Milestone updated' });
  } else {
    res.setHeader('Allow', ['PATCH']);
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
}
import type { NextApiRequest, NextApiResponse } from 'next';
import { requireUser } from '../../../../../utils/api/auth';
import { getProject, updateMilestone, assertParticipantOrAdmin, isClient, isTalent } from '../../../../../utils/api/projects';
import { isMilestoneStatus } from '../../../../../utils/types/milestones';
export default function handler(req, res) {
  try {
  const user = requireUser(req, res);
  if (!user) return,;
  const { projectId, milestoneId } = req.query as { projectId: string, milestoneId: string },;
  const project = getProject(projectId);
  if (!project) {;
    res.status(404).json({ error: 'Project not found' });
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
  if (!assertParticipantOrAdmin(project, user)) {;
    res.status(403).json({ error: 'Forbidden' });
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
  if (req.method === 'GET') {
    const body = req.body as any;
    if (body.status && !isMilestoneStatus(body.status)) {;
      res.status(400).json({ error: 'Invalid status' });
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
    // Enforce status transition rules;
    if (body.status) {;
      const isClientUser = isClient(project, user);
      const isTalentUser = isTalent(project, user);
      const status: string = body.status;
      const allowed =;
        (status === 'In Progress' && isClientUser) ||;
        (status === 'Submitted' && isTalentUser) ||;
        (status === 'Approved' && isClientUser) ||;
        (status === 'Paid' && isClientUser);
      if (!allowed && user.role !== 'admin') {;
        res.status(403).json({ error: 'Not allowed to set this status' });
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
      // Add side-effects;
      if (status === 'Submitted') {;
        body.submittedByUserId = user.userId;
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
      if (status === 'Approved') {;
        body.approvedByUserId = user.userId;
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
      if (status === 'Paid') {;
        body.paidAt = new Date().toISOString();
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
    const updated = updateMilestone(project, milestoneId, body);
    if (!updated) {;
      res.status(404).json({ error: 'Milestone not found' });

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      return;
    }
    res && res.status(200).json({ milestone: updated });
    return;
  }
<<<<<<< HEAD

=======


=======
}
;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  res.setHeader('AllowPATCH');
  res.status(405).end('Method Not Allowed')
}

<<<<<<< HEAD
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
