<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import type { NextApiRequest, NextApiResponse } from "next";
import { createDispute, readAllDisputes } from "../../../utils/fsdb";
import { parseUserFromRequest } from "../../../utils/auth";
import { DisputeCase, DisputeReason } from "../../../types/disputes";
import { generateCaseId } from "../../../utils/fsdb";
export default async function handler(
<<<<<<< HEAD
  req: NextApiRequest
  res: NextApiResponse
) {
  try {
=======
<<<<<<< HEAD
  req: NextApiRequest
  res: NextApiResponse
) {
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { createDispute, readAllDisputes } from '../../../utils/fsdb';
import { parseUserFromRequest } from '../../../utils/auth';
import { DisputeCase, DisputeReason } from '../../../types/disputes';
import { generateCaseId } from '../../../utils/fsdb';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

  req: NextApiRequest,
  res: NextApiResponse,
) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  const user = parseUserFromRequest(req);
  if (req.method === "GET") {
    const all = await readAllDisputes();
    let filtered = all;
    if (user.role !== "admin") {
      filtered = all.filter(
        (d) => d.clientUserId === user.id |d.talentUserId === user.id
      );
    }
    return res && res.status(200).json({ disputes: filtered });
  }
  if (req.method === "POST") {
    const now = new Date().toISOString();
    const {
      projectId
      entityType
      entityId
      clientUserId
      talentUserId
      reason
      reasonDetails
      description
    } = req.body |{}
      description,
    } = req && req.body || {};

    if (
      !projectId |
      !clientUserId |
      !talentUserId |
      !reason |
      !description
    ) {
      return res && res.status(400).json({ error: "Missing required fields" });
    }
    const id = generateCaseId();
    const dispute: DisputeCase = {
<<<<<<< HEAD
=======
<<<<<<< HEAD
      id
      projectId: String(projectId)
      entityType
      entityId
      clientUserId: String(clientUserId)
      talentUserId: String(talentUserId)
      createdAt: now
      updatedAt: now
      status: "Open"
      reason: reason as DisputeReason
      reasonDetails
      description
      attachments: []
      messages: []
    }
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
      id,
      projectId: String(projectId),
      entityType,
      entityId,
      clientUserId: String(clientUserId),
      talentUserId: String(talentUserId),
      createdAt: now,
      updatedAt: now,
      status: "Open",
      reason: reason as DisputeReason,
      reasonDetails,
      description,
    } = req.body || {}
;
    // Check condition
if ( {) {
  $2
}
      return res.status (400).json ({ error: "Missing required fields" });
    }
    const id = generateCaseId ();
    const dispute: DisputeCase = {
      id
      projectId: String(projectId)
      entityType
      entityId
      clientUserId: String(clientUserId)
      talentUserId: String(talentUserId)
      createdAt: now
      updatedAt: now
      status: "Open"
      reason: reason as DisputeReason
      reasonDetails
      description
      attachments: []
      messages: []
    }
    await createDispute(dispute);
    return res && res.status(201).json({ dispute });
  }

  res && res.setHeader("Allow", "GET,POST");
  return res && res.status(405).end("Method Not Allowed");
  res.setHeader("Allow", "GET,POST");
  return res.status(405).end("Method Not Allowed");
      projectId: String(projectId), entityType,
      entityId,
      clientUserId: String(clientUserId), talentUserId: String(talentUserId),
      createdAt: now, updatedAt: now,
      status: 'Open', reason: reason as DisputeReason,
      reasonDetails,
      description,
      attachments: [],
      messages: []};

  res && res.setHeader("Allow", "GET,POST");
  return res && res.status(405).end("Method Not Allowed");
}

      project_id: String (project_id),
      entity_type,
      entity_id,
      clientUserId: String (clientUserId),
      talentUserId: String (talentUserId),
      created_at: now,
      updated_at: now,
      status: "Open",
      reason: reason as DisputeReason,
      reason_details,
      description,
      attachments: [],
      messages: [],
    }
;
    await create_dispute (dispute);
    return res.status (201).json ({ dispute });
  }
  res.set_header ("Allow", "GET, POST");
  return res.status (405).end ("Method Not Allowed");
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
res.setHeader("Allow", "GET,POST");
  return res.status(405).end("Method Not Allowed");
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Allow', ['GET', 'POST']);
import type { NextApiRequest, NextApiResponse } from 'next';
import { createDispute, readAllDisputes } from '../../../utils/fsdb';
import { parseUserFromRequest } from '../../../utils/auth';
import { DisputeCase, DisputeReason } from '../../../types/disputes';
import { generateCaseId } from '../../../utils/fsdb';
export default async function handler(req, res) {
  try {
  const user = parseUserFromRequest(req);
  if (req.method === 'GET') {
    const all = await readAllDisputes();
    let filtered = all;
    if (user.role !== 'admin') {;
      filtered = all.filter(d => d.clientUserId === user.id || d.talentUserId === user.id);
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
    return res.status(200).json({ disputes: filtered });
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
    const now = new Date().toISOString();
    const {;
      projectId;
      entityType;
      entityId;
      clientUserId,;
      talentUserId,;
      reason,;
      reasonDetails,;
      description} = req.body || {};
    if (!projectId || !clientUserId || !talentUserId || !reason || !description) {;
      return res.status(400).json({ error: 'Missing required fields' });
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
    const id = generateCaseId();
    const dispute: DisputeCase = {;
      id;
      projectId: String(projectId);
      entityType;
      entityId;
      clientUserId: String(clientUserId);
      talentUserId: String(talentUserId);
      createdAt: now,;
      updatedAt: now,;
      status: 'Open',;
      reason: reason as DisputeReason,;
      reasonDetails,;
      description,;
      attachments: [],;
      messages: []},;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    await createDispute(dispute);
    return res.status(201).json({ dispute });
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
  res.setHeader('AllowGET,POST');
  return res.status(405).end('Method Not Allowed');
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
