
import type { NextApiRequest, NextApiResponse } from 'next';
import { requireUser } from '../../../../utils/api/auth';
import { addMilestone, getProject, assertParticipantOrAdmin, isClient } from '../../../../utils/api/projects';
import { Milestone } from '../../../../utils/types/milestones';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser(req, res);
  if (!user) return;
  const { projectId } = req.query as { projectId: string }
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
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

    if (!isClient(project, user)) {
      res.status(403).json({ error: 'Only client (or admin) can add milestones' });
      return;
    }
    const body = req.body as Partial<Milestone>;

    });
    res.status(201).json({ milestone: created });
    return;
  }
  res.setHeader("Allow", "GET, POST");
  res.status(405).end("Method Not Allowed");
}

}

