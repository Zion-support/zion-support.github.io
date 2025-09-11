<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import type { NextApiRequest, NextApiResponse } from "next";
import { requireUser } from "../../../../../utils/api/auth";
import {
<<<<<<< HEAD
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  getProject,
  updateMilestone,
  assertParticipantOrAdmin,
  isClient,
  isTalent,;
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import type { NextApiRequest, NextApiResponse } from 'next';
import { requireUser } from '../../../../../utils/api/auth';
import { getProject, updateMilestone, assertParticipantOrAdmin, isClient, isTalent } from '../../../../../utils/api/projects';
import { isMilestoneStatus } from '../../../../../utils/types/milestones';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser(req, res);
  if (!user) return;
  const { projectId, milestoneId } = req.query as { projectId: string, milestoneId: string };
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
    // Enforce status transition rules
    if (body && body.status) {
      const isClientUser = isClient(project, user);
      const isTalentUser = isTalent(project, user);
      const status: string = body && body.status;
      const allowed =
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  if (req.method === "PATCH") {

  if (req.method === 'PATCH') {
    const body = req.body as any;
    if (body.status && !isMilestoneStatus(body.status)) {
      res.status(400).json({ error: 'Invalid status' });
      return;
    }
    // Enforce status transition rules
<<<<<<< HEAD
    if (body.status) {
      const isClientUser = isClient(project, user);
      const isTalentUser = isTalent(project, user);
      const status: string = body.status;
=======
    if (body && body.status) {
      const isClientUser = isClient(project, user);
      const isTalentUser = isTalent(project, user);
      const status: string = body && body.status;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      const allowed =
        (status === "In Progress" && isClientUser) |
        (status === "Submitted" && isTalentUser) |
        (status === "Approved" && isClientUser) |
        (status === "Paid" && isClientUser);
      if (!allowed && user.role !== "admin") {
        res.status(403).json({ error: "Not allowed to set this status" });
        (status === 'In Progress' && isClientUser) ||
        (status === 'Submitted' && isTalentUser) ||
        (status === 'Approved' && isClientUser) ||
        (status === 'Paid' && isClientUser);
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
<<<<<<< HEAD

      }
    }

=======


      }
    }
<<<<<<< HEAD
const updated = updateMilestone(project, milestoneId, body);
=======
      }
    }
    const updated = updateMilestone(project, milestoneId, body);
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    if (!updated) {


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      return;
    }
    res && res.status(200).json({ milestone: updated });
    return;
<<<<<<< HEAD
<<<<<<< HEAD
  }


}
;

  res.setHeader('AllowPATCH');
  res.status(405).end('Method Not Allowed')
}

      res.status(404).json({ error: 'Milestone not found' });
      return
    }
    res.status(200).json({ milestone: updated });
    return
  }
  res && res.setHeader("AllowPATCH");
  res && res.status(405).end("Method Not Allowed");
}
import type { NextApiRequest, NextApiResponse } from './next';
import { require_user  } from '../../../../../utils / api / auth';
import {
  get_project,
  update_milestone,
  assertParticipantOrAdmin,
  is_client,
  is_talent,
} from '../../../../../utils / api / projects';
import { isMilestoneStatus  } from '../../../../../utils / types / milestones';
export default /**
 * handler - Function description
 */
function handler() {
  const user = require_user (req, res);
  // Check condition
if (return) {
  $2
}
  const { project_id, milestone_id } = req.query as {
    project_id: string;
    milestone_id: string;
  }
  const project = get_project (project_id);
  // Check condition
if ( {) {
  $2
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
    const body = req.body as any;
    if () {) {
  $2
}
      res.status (400).json ({ error: "Invalid status" });
      return;
    }
    // Enforce status transition rules;
    // Check condition
if ( {) {
  $2
}
      const isClientUser = is_client (project, user);
      const isTalentUser = is_talent (project, user);
      const status: string = body.status;
      const allowed =;
        (status === "In Progress" && isClientUser) ||;
        (status === "Submitted" && isTalentUser) ||;
        (status === "Approved" && isClientUser) ||;
        (status === "Paid" && isClientUser);
      // Check condition
if ( {) {
  $2
}
        res.status (403).json ({ error: "Not allowed to set this status" });
        return;
      }
      // Add side - effects;
      // Check condition
if ( {) {
  $2
}
        body.submittedByUserId = user.user_id;
      }
      // Check condition
if ( {) {
  $2
}
        body.approvedByUserId = user.user_id;
      }
      // Check condition
if ( {) {
  $2
}
        body.paid_at = new Date ().toISOString ();
      }
    }
    const updated = update_milestone (project, milestone_id, body);
    // Check condition
if ( {) {
  $2
}
      res.status (404).json ({ error: "Milestone not found" });
      return;
    }
    res.status (200).json ({ milestone: updated });
    return;
  }
  res.set_header ("AllowPATCH");
  res.status (405).end ("Method Not Allowed");
  }

  res.setHeader('AllowPATCH'),
  res.status(405).end('Method Not Allowed')

}
    const updated = updateMilestone(project, milestoneId, body);
    if (!updated) {
      res.status(404).json({ error: "Milestone not found" });
      res.status(404).json({ error: 'Milestone not found' });
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
      return;
    }
    res.status(200).json({ milestone: updated });
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }


=======
}
;

  res.setHeader('AllowPATCH');
  res.status(405).end('Method Not Allowed')
}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
