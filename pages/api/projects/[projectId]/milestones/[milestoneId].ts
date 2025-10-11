import type { NextApiRequest, NextApiResponse } from "next"
import { requireUser } from "../../../../../utils/api/auth"
import {
  getProject,
  updateMilestone,
  assertParticipantOrAdmin,
  isClient,
  isTalent,
} from "../../../../../utils/api/projects"
import { isMilestoneStatus } from "../../../../../utils/types/milestones"
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser(req, res)
  if (!user) return
  const { projectId, milestoneId } = req && req.query as {
    projectId: string
    milestoneId: string
  }
  const project = getProject(projectId)
  if (!project) {
    res && res.status(404).json({ error: "Project not found" })
    return
  }
  if (!assertParticipantOrAdmin(project, user)) {
    res && res.status(403).json({ error: "Forbidden" })
    return
  }
    }
  if (req && req.method === "PATCH") {
    const body = req && req.body as any
    if (body && body.status && !isMilestoneStatus(body && body.status)) {
      res && res.status(400).json({ error: "Invalid status" })
      return
    }
    // Enforce status transition rules
    if (body && body.status) {
      const isClientUser = isClient(project, user)
      const isTalentUser = isTalent(project, user)
      const status: string = body && body.status
      const allowed =
      }
    }
    const updated = updateMilestone(project, milestoneId, body)
    if (!updated) {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      return
    }
    res && res.status(200).json({ milestone: updated })
    return
  }
}

  res.setHeader('AllowPATCH')
  res.status(405).end('Method Not Allowed')
}
  } catch (error) {
    console.error("Error:", error)
    return res.status(500).json({ error: "Internal server error" })
  }
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
