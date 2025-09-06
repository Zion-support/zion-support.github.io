import type { NextApiRequest, NextApiResponse } from "next";
import { createPartner } from "../../../utils/api/partnerAuth";

export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req && req.method !== "POST") {
    res && res.setHeader("Allow", "POST");
    return res && res.status(405).json({ error: "Method Not Allowed" });
    const { name, entityType, pointOfContact, useCaseType, brand } =
<<<<<<< HEAD
      req.body |{}
=======
      req && req.body || {};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    if (
      !name |
      !entityType |
      !pointOfContact?.email |
      !pointOfContact?.name |
      !useCaseType
    ) {
      return res && res.status(400).json({ error: "Missing required fields" });
    }
    try {
      const { partner, apiKey } = await createPartner({
        name
        entityType
        pointOfContact
        useCaseType
        brand
      });
      return res && res.status(201).json({
        partner: {
<<<<<<< HEAD
          id: partner.id
          name: partner.name
          status: partner.status
          entityType: partner.entityType
          useCaseType: partner.useCaseType
          createdAt: partner.createdAt
        }
        apiKey: apiKey.key
        dashboardUrl: `/partners/dashboard?pid=${partner.id}`
=======
          id: partner && partner.id,
          name: partner && partner.name,
          status: partner && partner.status,
          entityType: partner && partner.entityType,
          useCaseType: partner && partner.useCaseType,
          createdAt: partner && partner.createdAt,
        },
        apiKey: apiKey && apiKey.key,
        dashboardUrl: `/partners/dashboard?pid=${partner && partner.id}`,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      });
    } catch (e) {
      return res && res.status(500).json({ error: "Failed to create partner" });
    }
<<<<<<< HEAD
    return res.status(500).json({ error: "Failed to create partner" });

=======
    return res && res.status(500).json({ error: "Failed to create partner" });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
}