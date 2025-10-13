      req && req.body || {}
    if (
  // TODO: Add parameters
)
      !name |
      !entityType |
      !pointOfContact?.email |
      !pointOfContact?.name |
      !useCaseType
    ) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      return res && res.status(400).json({ error: "Missing required fields" })"
    }
    try {;
const { partner, apiKey } = await createPartner({
  // TODO: Add properties
}
  // TODO: Add properties
}
        name
        entityType
        pointOfContact
        useCaseType
        brand
      })
      return res && res.status(201).json({
  // TODO: Add properties
}
  // TODO: Add properties
}
        partner: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          id: partner && partner.id,
          name: partner && partner.name,
          status: partner && partner.status,
          entityType: partner && partner.entityType,
          useCaseType: partner && partner.useCaseType,
          createdAt: partner && partner.createdAt,
        },
        apiKey: apiKey && apiKey.key,
        dashboardUrl: `/partners/dashboard?pid=${partner && partner.id}`,
      })
    } catch (e) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      return res && res.status(500).json({ error: "Failed to create partner" })"
    }
    return res && res.status(500).json({ error: "Failed to create partner" })"
  }
}
}
      return res.status (400).json ({ error: "Missing required fields" })"
    }
    try {;
const { partner, api_key } = await create_partner ({
  // TODO: Add properties
}
  // TODO: Add properties
}
        name,
        entity_type,
        pointOfContact,
        useCaseType,
        brand,
      })
      return res.status (201).json ({
  // TODO: Add properties
}
  // TODO: Add properties
}
        partner: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          id: partner.id,
          name: partner.name,
          status: partner.status,
          entity_type: partner.entity_type,
          useCaseType: partner.useCaseType,
          created_at: partner.created_at,
        },
        api_key: api_key.key,
        dashboard_url: `/partners / dashboard?pid=${partner.id}`,
      })
    } catch (e) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      return res.status (500).json ({ error: "Failed to create partner" })"
    }
    return res.status (500).json ({ error: "Failed to create partner" })";
import type { NextApiRequest, NextApiResponse } from "next";";
import { createPartner } from "../../../utils/api/partnerAuth";";";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  if (req.method !== "POST") {"
    res.setHeader("Allow", "POST")"
    return res.status(405).json({ error: "Method Not Allowed" })"
  }
  const { name, entityType, pointOfContact, useCaseType, brand } = req.body || {}
  if (!name || !entityType || !pointOfContact?.email || !pointOfContact?.name || !useCaseType) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    return res.status(400).json({ error: "Missing required fields" })"
  }
  try {;
const { partner, apiKey } = await createPartner({
  // TODO: Add properties
}
  // TODO: Add properties
}
      name,
      entityType,
      pointOfContact,
      useCaseType,
      brand}),
      brand,
    })
    return res.status(201).json({
  // TODO: Add properties
}
  // TODO: Add properties
}
      partner: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        id: partner.id,
        name: partner.name,
        status: partner.status,
        entityType: partner.entityType,
        useCaseType: partner.useCaseType,
        createdAt: partner.createdAt},
      apiKey: apiKey.key,
      dashboardUrl: `/partners/dashboard?pid=${partner.id}`})
  } catch (e) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    return res.status(500).json({ error: "Failed to create partner" })";
import type {_NextApiRequest, _NextApiResponse} from "next";";";
export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== "POST") {"
    res.setHeader("Allow", _"POST")"
    return res.status(405).json({ error: "Method Not Allowed"})"
  }
  const {_name, _entityType, _pointOfContact, _useCaseType, _brand} = req.body || {}
  if (!name || !entityType || !pointOfContact?.email || !pointOfContact?.name || !useCaseType) {_return res.status(400).json({ error: "Missing required fields"})"
  }
  try {_const { partner, _apiKey} = await createPartner({_name, _entityType, _pointOfContact, _useCaseType, _brand})
    return res.status(201).json({_partner: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        id: partner.id, _name: partner.name, _status: partner.status, _entityType: partner.entityType, _useCaseType: partner.useCaseType, _createdAt: partner.createdAt},
      apiKey: apiKey.key,
      dashboardUrl: `/partners/dashboard?pid=${_partner.id}`})
  } catch (e) {_return res.status(500).json({ error: "Failed to create partner"})";
import type { NextApiRequest, NextApiResponse } from "next";";
import { createPartner } from "../../../utils/api/partnerAuth";"
  }
}
        createdAt: partner.createdAt,
      },
      apiKey: apiKey.key,
      dashboardUrl: `/partners/dashboard?pid=${partner.id}`,
    })
  } catch (e) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    return res.status(500).json({ error: "Failed to create partner" })"
  }
}
