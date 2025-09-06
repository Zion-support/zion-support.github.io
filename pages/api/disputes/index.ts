=======
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

import type { NextApiRequest, NextApiResponse } from "next";
import { createDispute, readAllDisputes } from "../../../utils/fsdb";
import { parseUserFromRequest } from "../../../utils/auth";
import { DisputeCase, DisputeReason } from "../../../types/disputes";
import { generateCaseId } from "../../../utils/fsdb";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  req: NextApiRequest,
  res: NextApiResponse,
) {;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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

=======
      description} = req.body || {};

    if (!projectId || !clientUserId || !talentUserId || !reason || !description) {
      return res.status(400).json({ error: 'Missing required fields' })

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
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
res.setHeader("Allow", "GET,POST");
  return res.status(405).end("Method Not Allowed");
}
=======

    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
=======
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
    await createDispute(dispute);
    return res.status(201).json({ dispute });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
  res.setHeader("Allow", "GET,POST");
  return res.status(405).end("Method Not Allowed");
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
