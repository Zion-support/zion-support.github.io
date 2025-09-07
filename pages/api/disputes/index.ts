<<<<<<< HEAD

import type { NextApiRequest, NextApiResponse } from "next";
import { createDispute, readAllDisputes } from "../../../utils/fsdb";
import { parseUserFromRequest } from "../../../utils/auth";
import { DisputeCase, DisputeReason } from "../../../types/disputes";
import { generateCaseId } from "../../../utils/fsdb";
export default async function handler(

) {;

=======
import type { NextApiRequest, NextApiResponse } from "next";"
import { createDispute, readAllDisputes } from "../../../utils/fsdb";"
import { parseUserFromRequest } from "../../../utils/auth";"
import { DisputeCase, DisputeReason } from "../../../types/disputes";"
import { generateCaseId } from "../../../utils/fsdb";

export default async function handler(

) {;

>>>>>>> origin/chore/fix-lint-and-merge
  const user = parseUserFromRequest(req);

  if (req && req.method === "GET") {
    const all = await readAllDisputes();
    let filtered = all;
<<<<<<< HEAD
    if (user && user.role !== "admin") {
=======

>>>>>>> origin/chore/fix-lint-and-merge
      filtered = all && all.filter(
        (d) => d && d.clientUserId === user && user.id || d && d.talentUserId === user && user.id

      );
    }
    return res && res.status(200).json({ disputes: filtered });

<<<<<<< HEAD
    if (user.role !== 'admin') {
=======
>>>>>>> origin/chore/fix-lint-and-merge
      filtered = all.filter(d => d.clientUserId === user.id || d.talentUserId === user.id)
    }
    return res.status(200).json({ disputes: filtered })

  }

<<<<<<< HEAD
  if (req && req.method === "POST") {
    const now = new Date().toISOString();
    const {
      projectId
      entityType
      entityId
      clientUserId
      talentUserId
      reason
      reasonDetails

    if (
      !projectId |
      !clientUserId |
      !talentUserId |
      !reason |
      !description
    ) {
      return res && res.status(400).json({ error: "Missing required fields" });

      description} = req.body || {};

    if (!projectId || !clientUserId || !talentUserId || !reason || !description) {
      return res.status(400).json({ error: 'Missing required fields' })

    }
    const id = generateCaseId();

    };

    await createDispute(dispute);
    return res && res.status(201).json({ dispute });
  }

  return res.status(405).end("Method Not Allowed");
}

import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Allow', ['GET', 'POST']);
import type { NextApiRequest, NextApiResponse } from 'next';
import { createDispute, readAllDisputes } from '../../../utils/fsdb';
import { parseUserFromRequest } from '../../../utils/auth';
import { DisputeCase, DisputeReason } from '../../../types/disputes';
import { generateCaseId } from '../../../utils/fsdb';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = parseUserFromRequest(req);

  if (req.method === 'GET') {
    const all = await readAllDisputes();
    let filtered = all;
    if (user.role !== 'admin') {
      filtered = all.filter(d => d.clientUserId === user.id || d.talentUserId === user.id)
    }
    return res.status(200).json({ disputes: filtered })
  }

  if (req.method === 'POST') {
    const now = new Date().toISOString();
    const {
=======
>>>>>>> origin/chore/fix-lint-and-merge
      projectId,
      entityType,
      entityId,
      clientUserId,
      talentUserId,
      reason,
      reasonDetails,
description,
    } = req.body || {};

<<<<<<< HEAD
    if (!projectId || !clientUserId || !talentUserId || !reason || !description) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    const id = generateCaseId();
    const dispute: DisputeCase = {
      id,
      projectId: String(projectId),
=======
    if (
      !projectId |
      !clientUserId |
      !talentUserId |
      !reason |

      description} = req.body || {};

    if (!projectId || !clientUserId || !talentUserId || !reason || !description) {'
      return res.status(400).json({ error: 'Missing required fields' })

      id,
      projectId: String(projectId),

>>>>>>> origin/chore/fix-lint-and-merge
      entityType,
      entityId,
      clientUserId: String(clientUserId),
      talentUserId: String(talentUserId),
      createdAt: now,
<<<<<<< HEAD
      updatedAt: now,
      status: 'Open',
=======

      status: "Open",

>>>>>>> origin/chore/fix-lint-and-merge
      reason: reason as DisputeReason,
      reasonDetails,
      description,
      attachments: [],
<<<<<<< HEAD
      messages: []};
=======
      messages: [],

    };

    };
>>>>>>> origin/chore/fix-lint-and-merge

    await createDispute(dispute);
    return res && res.status(201).json({ dispute });
  }

<<<<<<< HEAD
  res.setHeader('AllowGET,POST');
  return res.status(405).end('Method Not Allowed')
}
=======
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler() { return null; }
import type { NextApiRequest, NextApiResponse } from 'next';'
import { createDispute, readAllDisputes } from '../../../utils/fsdb';'
import { parseUserFromRequest } from '../../../utils/auth';'
import { DisputeCase, DisputeReason } from '../../../types/disputes';'
import { generateCaseId } from '../../../utils/fsdb';
export default async function handler(req, res) {}
  try {};
  const user = parseUserFromRequest(req);'
  if (req.method === 'GET') {}
    const all = await readAllDisputes();
    let filtered = all;'
    if (user.role !== 'admin') {;
      filtered = all.filter(d => d.clientUserId === user.id || d.talentUserId === user.id);
      } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
    return res.status(200).json({ disputes: filtered });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
;'
  if (req.method === 'GET') {}
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
    if (!projectId || !clientUserId || !talentUserId || !reason || !description) {;'
      return res.status(400).json({ error: 'Missing required fields' });
      } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);"
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
      updatedAt: now,;'
      status: 'Open',;
      reason: reason as DisputeReason,;
      reasonDetails,;
      description,;
      attachments: [],;
      messages: []},;

    await createDispute(dispute);
    return res.status(201).json({ dispute });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }

}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
;'
  res.setHeader('AllowGET,POST');'
  return res.status(405).end('Method Not Allowed');
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> origin/chore/fix-lint-and-merge
