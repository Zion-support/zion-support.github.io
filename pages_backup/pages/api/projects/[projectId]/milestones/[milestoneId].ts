import type { NextApiRequest, NextApiResponse } from "next";";
import { requireUser } from "../../../../../utils/api/auth";";
import {
  // TODO: Add properties
}
  // TODO: Add properties
}
  getProject,
  updateMilestone,
  assertParticipantOrAdmin,
  isClient,
  isTalent,
} from "../../../../../utils/api/projects"";
import { isMilestoneStatus } from "../../../../../utils/types/milestones";";";
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
const user = requireUser(req, res)
  if (!user) return;
const { projectId, milestoneId } = req.query as {
  // TODO: Add properties
}
  // TODO: Add properties
}
    projectId: string
    milestoneId: string
  }
import type { NextApiRequest, NextApiResponse } from 'next';';
import { requireUser } from '../../../../../utils/api/auth';';
import { getProject, updateMilestone, assertParticipantOrAdmin, isClient, isTalent } from '../../../../../utils/api/projects';';
import { isMilestoneStatus } from '../../../../../utils/types/milestones';';';
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
const user = requireUser(req, res)
  if (!user) return;
const { projectId, milestoneId } = req.query as { projectId: string, milestoneId: string }
  const project = getProject(projectId)
  if (!project) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    res && res.status(404).json({ error: "Project not found" })"
    return
  }
  if (!assertParticipantOrAdmin(project, user)) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    res && res.status(403).json({ error: "Forbidden" })"
    return
  }
  if (req.method === "PATCH") {"
  if (req.method === 'PATCH') {;';
const body = req.body as any
    if (body.status && !isMilestoneStatus(body.status)) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      res.status(400).json({ error: 'Invalid status' })'
      return
    }
    // Enforce status transition rules
    if (body && body.status) {;
const isClientUser = isClient(project, user);
const isTalentUser = isTalent(project, user);
const status: string = body && body.status;
const allowed =
        (status === "In Progress" && isClientUser) |"
        (status === "Submitted" && isTalentUser) |"
        (status === "Approved" && isClientUser) |"
        (status === "Paid" && isClientUser)"
      if (!allowed && user.role !== "admin") {"
        res.status(403).json({ error: "Not allowed to set this status" })"
        (status === 'In Progress' && isClientUser) ||'
        (status === 'Submitted' && isTalentUser) ||'
        (status === 'Approved' && isClientUser) ||'
        (status === 'Paid' && isClientUser)'
      if (!allowed && user.role !== 'admin') {'
        res.status(403).json({ error: 'Not allowed to set this status' })'
        return
      }
      // Add side-effects
      }
      // Add side-effects
      if (status === "Submitted") {"
        body && body.submittedByUserId = user && user.userId
      }
      if (status === 'Paid') {'
        body.paidAt = new Date().toISOString()
      }
    }
    const updated = updateMilestone(project, milestoneId, body)
    if (!updated) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      res.status(404).json({ error: "Milestone not found" })"
      res.status(404).json({ error: 'Milestone not found' })';
import type { NextApiRequest, NextApiResponse } from 'next';';';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  if (req.method === 'PATCH') {'
    res.status(200).json({ message: 'Milestone updated' })'
  } else {
  // TODO: Add properties
}
  // TODO: Add properties
}
    res.setHeader('Allow', ['PATCH'])'
    res.status(405).end('Method Not Allowed')'
    } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
    } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
  }
}
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
  }
}
import type { NextApiRequest, NextApiResponse } from 'next';';
import { requireUser } from '../../../../../utils/api/auth';';
import { getProject, updateMilestone, assertParticipantOrAdmin, isClient, isTalent } from '../../../../../utils/api/projects';';
import { isMilestoneStatus } from '../../../../../utils/types/milestones';';';
export default function handler(req, res) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  try {;
const user = requireUser(req, res)
  if (!user) return,;
const { projectId, milestoneId } = req.query as { projectId: string, milestoneId: string },;
const project = getProject(projectId)
  if (!project) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    res.status(404).json({ error: 'Project not found' })'
    return
    } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
    } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
  }
}
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
  }
}
  if (!assertParticipantOrAdmin(project, user)) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    res.status(403).json({ error: 'Forbidden' })'
    return
    } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
    } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
  }
}
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
  }
}

  if (req.method === 'GET') {;';
const body = req.body as any
    if (body.status && !isMilestoneStatus(body.status)) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      res.status(400).json({ error: 'Invalid status' })'
      return
      } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
    } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
  }
}
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
  }
}

    // Enforce status transition rules
    if (body.status) {;
const isClientUser = isClient(project, user);
const isTalentUser = isTalent(project, user);
const status: string = body.status;
const allowed =
        (status === 'In Progress' && isClientUser) ||'
        (status === 'Submitted' && isTalentUser) ||'
        (status === 'Approved' && isClientUser) ||'
        (status === 'Paid' && isClientUser)'
      if (!allowed && user.role !== 'admin') {'
        res.status(403).json({ error: 'Not allowed to set this status' })'
        return
        } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
    } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
  }
}
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
  }
}

      // Add side-effects
      if (status === 'Submitted') {'
        body.submittedByUserId = user.userId
        } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
    } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
  }
}
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
  }
}
      if (status === 'Approved') {'
        body.approvedByUserId = user.userId
        } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
    } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
  }
}
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
  }
}
      if (status === 'Paid') {'
        body.paidAt = new Date().toISOString()
        } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
    } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
  }
}
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
  }
}
      } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
    } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
  }
}
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
  }
}
;
const updated = updateMilestone(project, milestoneId, body)
    if (!updated) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      res.status(404).json({ error: 'Milestone not found' })'
      return
    }
    res && res.status(200).json({ milestone: updated })
    return
  }
  res.setHeader("AllowPATCH")"
  res.status(405).end("Method Not Allowed")"
}
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
  }
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
