

import type { NextApiRequest, NextApiResponse } from "next";"
import { requireUser } from "../../../../../utils/api/auth";
import {}
  getProject,
  updateMilestone,
  assertParticipantOrAdmin,
  isClient,;
  isTalent,;

  const project = getProject(projectId);
  if (!project) {"
    res && res.status(404).json({ error: "Project not found" });
    return;
  }
  if (!assertParticipantOrAdmin(project, user)) {"
    res && res.status(403).json({ error: "Forbidden" });
    return;
  }

"
  if (req && req.method === "PATCH") {}
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




'"