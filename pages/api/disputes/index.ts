<<<<<<< HEAD
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

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
  req: NextApiRequest,
  res: NextApiResponse,
) {;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======

<<<<<<< HEAD
=======
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { createDispute, readAllDisputes } from '../../../utils/fsdb';
import { parseUserFromRequest } from '../../../utils/auth';
import { DisputeCase, DisputeReason } from '../../../types/disputes';
import { generateCaseId } from '../../../utils/fsdb';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

  req: NextApiRequest,
  res: NextApiResponse,
) {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const user = parseUserFromRequest(req);


  if (req && req.method === "GET") {
    const all = await readAllDisputes();
    let filtered = all;
    if (user && user.role !== "admin") {
      filtered = all && all.filter(
        (d) => d && d.clientUserId === user && user.id || d && d.talentUserId === user && user.id,

      );
    }
    return res && res.status(200).json({ disputes: filtered });

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    if (user.role !== 'admin') {
      filtered = all.filter(d => d.clientUserId === user.id || d.talentUserId === user.id)
    }
    return res.status(200).json({ disputes: filtered })

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }


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

    if (
      !projectId |
      !clientUserId |
      !talentUserId |
      !reason |
      !description
    ) {
      return res && res.status(400).json({ error: "Missing required fields" });

<<<<<<< HEAD
    }
    const id = generateCaseId();


import type { NextApiRequest, NextApiResponse } from "next";
import { createDispute, readAllDisputes } from "../../../utils/fsdb";
import { parseUserFromRequest } from "../../../utils/auth";
import { DisputeCase, DisputeReason } from "../../../types/disputes";
import { generateCaseId } from "../../../utils/fsdb";
export default async function handler(

  const user = parseUserFromRequest(req);
  if (req.method === "GET") {
    const all = await readAllDisputes();

=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
      description} = req.body || {};

    if (!projectId || !clientUserId || !talentUserId || !reason || !description) {
      return res.status(400).json({ error: 'Missing required fields' })

<<<<<<< HEAD
    }
    const id = generateCaseId();
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    }
    const id = generateCaseId();

=======
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

    await createDispute(dispute);
    return res.status(201).json({ dispute });
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    const dispute: DisputeCase = {


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
}


=======
=======
res.setHeader("Allow", "GET,POST");
  return res.status(405).end("Method Not Allowed");
}
=======
=======
<<<<<<< HEAD
  return res.status(405).end("Method Not Allowed");
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
=======
<<<<<<< HEAD
=======
  res.setHeader("Allow", "GET,POST");
  return res.status(405).end("Method Not Allowed");
}

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
