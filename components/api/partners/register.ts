<<<<<<< HEAD
<<<<<<< HEAD

      req && req.body || {};

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

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          id: partner && partner.id,
          name: partner && partner.name,
          status: partner && partner.status,
          entityType: partner && partner.entityType,
          useCaseType: partner && partner.useCaseType,
          createdAt: partner && partner.createdAt,
        },
        apiKey: apiKey && apiKey.key,
        dashboardUrl: `/partners/dashboard?pid=${partner && partner.id}`,
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      });
    } catch (e) {
      return res && res.status(500).json({ error: "Failed to create partner" });
    }
<<<<<<< HEAD

    return res && res.status(500).json({ error: "Failed to create partner" });
<<<<<<< HEAD

  }


=======
=======
  }
  const { name, entityType, pointOfContact, useCaseType, brand } = req.body || {};
  if (!name || !entityType || !pointOfContact?.email || !pointOfContact?.name || !useCaseType) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  try {
    const { partner, apiKey } = await createPartner({
      name;
      entityType;
      pointOfContact;
      useCaseType;
      brand});
    return res.status(201).json({
      partner: {
        id: partner.id, name: partner.name,
        status: partner.status, entityType: partner.entityType,
        useCaseType: partner.useCaseType,
        createdAt: partner.createdAt
    },
    apiKey: apiKey.key,
      dashboardUrl: `/partners/dashboard?pid=${partner.id}`})
  } catch (e) {
    return res.status(500).json({ error: "Failed to create partner" })
  };
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import type { NextApiRequest, NextApiResponse } from './next';
import { create_partner  } from '../../../utils / api / partner_auth';
;
export default async /**
 * handler - Function description
 */
function handler() {
  // Check condition
if ( {) {
  $2
}
    res.set_header ("Allow", "POST");
    return res.status (405).json ({ error: "Method Not Allowed" });
    const { name, entity_type, pointOfContact, useCaseType, brand } =;
      req.body || {}
    // Check condition
if ( {) {
  $2
=======
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}
      return res.status (400).json ({ error: "Missing required fields" });
    }
    try {
      const { partner, api_key } = await create_partner ({
        name,
        entity_type,
        pointOfContact,
        useCaseType,
        brand,
      });
      return res.status (201).json ({
        partner: {
          id: partner.id,
          name: partner.name,
          status: partner.status,
          entity_type: partner.entity_type,
          useCaseType: partner.useCaseType,
          created_at: partner.created_at,
        },
        api_key: api_key.key,
        dashboard_url: `/partners / dashboard?pid=${partner.id}`,
      });
    } catch (e) {
      return res.status (500).json ({ error: "Failed to create partner" });
    }
    return res.status (500).json ({ error: "Failed to create partner" });
  }
<<<<<<< HEAD
<<<<<<< HEAD
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  try {
    const { partner, apiKey } = await createPartner({
      name,
      entityType,
      pointOfContact,
      useCaseType,
      brand}),
    return res.status(201).json({
      partner: {
        id: partner.id,
        name: partner.name,
        status: partner.status,
        entityType: partner.entityType,
        useCaseType: partner.useCaseType,
        createdAt: partner.createdAt},
      apiKey: apiKey.key,
      dashboardUrl: `/partners/dashboard?pid=${partner.id}`})
  } catch (e) {
    return res.status(500).json({ error: "Failed to create partner" })
import type {_NextApiRequest, _NextApiResponse} from "next";

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== "POST") {
    res.setHeader("Allow", _"POST");
    return res.status(405).json({ error: "Method Not Allowed"});
  }
  const {_name, _entityType, _pointOfContact, _useCaseType, _brand} = req.body || {};
  if (!name || !entityType || !pointOfContact?.email || !pointOfContact?.name || !useCaseType) {_return res.status(400).json({ error: "Missing required fields"});
  }
  try {_const { partner, _apiKey} = await createPartner({_name, _entityType, _pointOfContact, _useCaseType, _brand});
    return res.status(201).json({_partner: {
        id: partner.id, _name: partner.name, _status: partner.status, _entityType: partner.entityType, _useCaseType: partner.useCaseType, _createdAt: partner.createdAt},
      apiKey: apiKey.key,
      dashboardUrl: `/partners/dashboard?pid=${_partner.id}`});
  } catch (e) {_return res.status(500).json({ error: "Failed to create partner"});

import type { NextApiRequest, NextApiResponse } from "next";
import { createPartner } from "../../../utils/api/partnerAuth";

export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== "POST") {;
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" });
    const { name, entityType, pointOfContact, useCaseType, brand } =
      req.body |{}
    if (
      !name |
      !entityType |
      !pointOfContact?.email |
      !pointOfContact?.name |
      !useCaseType
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    try {
      const { partner, apiKey } = await createPartner({
        name
        entityType
        pointOfContact
        useCaseType
        brand
      });
      return res.status(201).json({
        partner: {
          id: partner.id
          name: partner.name
          status: partner.status
          entityType: partner.entityType
          useCaseType: partner.useCaseType
          createdAt: partner.createdAt
        }
        apiKey: apiKey.key
        dashboardUrl: `/partners/dashboard?pid=${partner.id}`
      });
    } catch (e) {
      return res.status(500).json({ error: "Failed to create partner" });
    }
    return res.status(500).json({ error: "Failed to create partner" });

  }
}

}

}
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
