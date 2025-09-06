<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { requireUser } from '[^']*';
import { getProject, updateMilestone, assertParticipantOrAdmin, isClient, isTalent } from '[^']*';
import { isMilestoneStatus } from '[^']*';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = null;
  res.status(405).end('Method Not Allowed')
}
=======
=======

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
import type { NextApiRequest, NextApiResponse } from "next";
import { requireUser } from "../../../../../utils/api/auth";
import {
  getProject
  updateMilestone
  assertParticipantOrAdmin
  isClient
  isTalent
=======
import type { NextApiRequest, NextApiResponse } from "next";
import { requireUser } from "../../../../../utils/api/auth";
import {
  getProject,
  updateMilestone,
  assertParticipantOrAdmin,
  isClient,
  isTalent,;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
} from "../../../../../utils/api/projects";
import { isMilestoneStatus } from "../../../../../utils/types/milestones";
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const user = requireUser(req, res);
  if (!user) return;
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { requireUser } from '../../../../../utils/api/auth';
import {
  getProject,
  updateMilestone,
  assertParticipantOrAdmin,
  isClient,
  isTalent,;
} from '../../../../../utils/api/projects';
import { isMilestoneStatus } from '../../../../../utils/types/milestones';
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser(req, res);
  if (!user) return;

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  const { projectId, milestoneId } = req.query as {
    projectId: string;
    milestoneId: string;
  }
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { requireUser } from '../../../../../utils/api/auth';
import { getProject, updateMilestone, assertParticipantOrAdmin, isClient, isTalent } from '../../../../../utils/api/projects';
import { isMilestoneStatus } from '../../../../../utils/types/milestones';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser(req, res);
  if (!user) return;
  const { projectId, milestoneId } = req.query as { projectId: string, milestoneId: string };
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
=======

  if (req.method === 'PATCH') {
<<<<<<< HEAD
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    const body = req.body as any;
    if (body.status && !isMilestoneStatus(body.status)) {
<<<<<<< HEAD
      res.status(400).json({ error: "Invalid status" });
=======
      res.status(400).json({ error: 'Invalid status' });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    const body = req.body as any;
    if (body.status && !isMilestoneStatus(body.status)) {
      res.status(400).json({ error: 'Invalid status' });
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
      return;
    }
    // Enforce status transition rules
    if (body.status) {
      const isClientUser = isClient(project, user);
      const isTalentUser = isTalent(project, user);
      const status: string = body.status;
      const allowed =
<<<<<<< HEAD
        (status === "In Progress" && isClientUser) |
        (status === "Submitted" && isTalentUser) |
        (status === "Approved" && isClientUser) |
        (status === "Paid" && isClientUser);
      if (!allowed && user.role !== "admin") {
        res.status(403).json({ error: "Not allowed to set this status" });
=======
        (status === 'In Progress' && isClientUser) ||
        (status === 'Submitted' && isTalentUser) ||
        (status === 'Approved' && isClientUser) ||
        (status === 'Paid' && isClientUser);
<<<<<<< HEAD

      if (!allowed && user.role !== 'admin') {
        res.status(403).json({ error: 'Not allowed to set this status' });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
        return;
      }
      // Add side-effects
<<<<<<< HEAD
      if (status === "Submitted") {
=======
      if (status === 'Submitted') {
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
        body.submittedByUserId = user.userId;
=======
      if (!allowed && user.role !== 'admin') {
        res.status(403).json({ error: 'Not allowed to set this status' });
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        return;
      }
      // Add side-effects
      if (status === 'Submitted') {
        body.submittedByUserId = user.userId
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
      }
      if (status === 'Approved') {
        body.approvedByUserId = user.userId
      }
      if (status === 'Paid') {
        body.paidAt = new Date().toISOString()
      }
    }
    const updated = updateMilestone(project, milestoneId, body);
    if (!updated) {
<<<<<<< HEAD
      res.status(404).json({ error: "Milestone not found" });
=======
<<<<<<< HEAD
      res.status(404).json({ error: 'Milestone not found' });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
      res.status(404).json({ error: 'Milestone not found' });
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
      return;
    }
    res.status(200).json({ milestone: updated });
    return;
  }
<<<<<<< HEAD
<<<<<<< HEAD
  res.setHeader("AllowPATCH");
  res.status(405).end("Method Not Allowed");
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======

  res.setHeader('Allow', 'PATCH');
  res.status(405).end('Method Not Allowed');
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
  res.setHeader("AllowPATCH");
  res.status(405).end("Method Not Allowed");
}

=======

=======

res.setHeader("AllowPATCH");
  res.status(405).end("Method Not Allowed");
}
=======
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  res.setHeader('AllowPATCH');
  res.status(405).end('Method Not Allowed')
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
