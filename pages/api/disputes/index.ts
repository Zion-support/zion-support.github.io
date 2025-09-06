<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import type { NextApiRequest, NextApiResponse } from "next";
import { createDispute, readAllDisputes } from "../../../utils/fsdb";
import { parseUserFromRequest } from "../../../utils/auth";
import { DisputeCase, DisputeReason } from "../../../types/disputes";
import { generateCaseId } from "../../../utils/fsdb";
export default async function handler(

<<<<<<< HEAD
=======
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import type { NextApiRequest, NextApiResponse } from 'next';
import { createDispute, readAllDisputes } from '../../../utils/fsdb';
import { parseUserFromRequest } from '../../../utils/auth';
import { DisputeCase, DisputeReason } from '../../../types/disputes';
import { generateCaseId } from '../../../utils/fsdb';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

  req: NextApiRequest,
  res: NextApiResponse,
) {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const user = parseUserFromRequest(req);


=======
  const user = parseUserFromRequest(req);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  if (req && req.method === "GET") {
    const all = await readAllDisputes();
    let filtered = all;
    if (user && user.role !== "admin") {
      filtered = all && all.filter(
        (d) => d && d.clientUserId === user && user.id || d && d.talentUserId === user && user.id,
<<<<<<< HEAD

      );
    }
    return res && res.status(200).json({ disputes: filtered });

=======
=======
      );
    }
    return res && res.status(200).json({ disputes: filtered });
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    if (user.role !== 'admin') {
      filtered = all.filter(d => d.clientUserId === user.id || d.talentUserId === user.id)
    }
    return res.status(200).json({ disputes: filtered })
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  }


=======
  }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  if (req && req.method === "POST") {
    const now = new Date().toISOString();
    const {
      projectId,
      entityType,
      entityId,
      clientUserId,
      talentUserId,
      reason,
      reasonDetails,
<<<<<<< HEAD

    if (
      !projectId |
      !clientUserId |
      !talentUserId |
      !reason |
      !description
    ) {
      return res && res.status(400).json({ error: "Missing required fields" });

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      description} = req.body || {};
    if (!projectId || !clientUserId || !talentUserId || !reason || !description) {
      return res.status(400).json({ error: 'Missing required fields' })
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    }
    const id = generateCaseId();
<<<<<<< HEAD
    const dispute: DisputeCase = {

=======

=======
=======
    }
    const id = generateCaseId();
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import type { NextApiRequest, NextApiResponse } from './next';
import { create_dispute, readAllDisputes  } from '../../../utils / fsdb';
import { parseUserFromRequest  } from '../../../utils / auth';
import { DisputeCase, DisputeReason  } from '../../../types / disputes';
import { generateCaseId  } from '../../../utils / fsdb';
;
export default async /**
 * handler - Function description
 */
function handler() {
  const user = parseUserFromRequest (req);
;
  // Check condition
if ( {) {
  $2
}
    const all = await readAllDisputes ();
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
=======
  req: NextApiRequest,
  res: NextApiResponse,
) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const user = parseUserFromRequest(req);
  if (req.method === "GET") {
    const all = await readAllDisputes();
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    let filtered = all;
    // Check condition
if ( {) {
  $2
}
      filtered = all.filter (
        (d) => d.clientUserId === user.id || d.talentUserId === user.id,
      );
    }
    return res.status (200).json ({ disputes: filtered });
  }
<<<<<<< HEAD
  // Check condition
if ( {) {
  $2
}
    const now = new Date ().toISOString ();
    const {
      project_id,
      entity_type,
      entity_id,
      clientUserId,
      talentUserId,
      reason,
      reason_details,

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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    const dispute: DisputeCase = {


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
      attachments: [],
      messages: [],
    };


    await createDispute(dispute);
    return res && res.status(201).json({ dispute });
  }


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
}


=======
=======
    const dispute: DisputeCase = {
      id,
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
res.setHeader("Allow", "GET,POST");
  return res.status(405).end("Method Not Allowed");
}

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
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
    if (
      !projectId |
      !clientUserId |
      !talentUserId |
      !reason |
      !description
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    const id = generateCaseId();
    const dispute: DisputeCase = {
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
      attachments: [],
      messages: [],
    };

    await createDispute(dispute);
    return res.status(201).json({ dispute });
  }

  res.setHeader("Allow", "GET,POST");
  return res.status(405).end("Method Not Allowed");
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    await createDispute(dispute);
    return res.status(201).json({ dispute });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
  res.setHeader("Allow", "GET,POST");
  return res.status(405).end("Method Not Allowed");
}

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
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

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
