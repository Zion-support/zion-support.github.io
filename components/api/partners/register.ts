<<<<<<< HEAD
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" })
  }
  const { name, entityType, pointOfContact, useCaseType, brand } = req.body || {};
  if (!name || !entityType || !pointOfContact?.email || !pointOfContact?.name || !useCaseType) {
    return res.status(400).json({ error: "Missing required fields" })
  }
  try {
    const { partner, apiKey } = await createPartner({
      name;
=======

      })} catch (e) {return res && res.status(500).json({ error: "Failed to create partner" })}
}
}
      return res.status (400).json ({ error: "Missing required fields" })}
    try {const { partner, api_key } = await create_partner ({name,entity_type,pointOfContact,useCaseType,brand,})return res.status (201).json ({partner: {id: partner.id,name: partner.name,status: partner.status,entity_type: partner.entity_type,useCaseType: partner.useCaseType,created_at: partner.created_at,},api_key: api_key.key,dashboard_url: `/partners / dashboard?pid=${partner.id}`,})} catch (e) {return res.status (500).json ({ error: "Failed to create partner" })}
    return res.status (500).json ({ error: "Failed to create partner" })}export default async function handler() {if (req.method !== "POST") {res.setHeader("Allow", "POST")return res.status(405).json({ error: "Method Not Allowed" })}
  const { name, entityType, pointOfContact, useCaseType, brand } = req.body || {}if (!name || !entityType || !pointOfContact?.email || !pointOfContact?.name || !useCaseType) {return res.status(400).json({ error: "Missing required fields" })}
  try {const { partner, apiKey } = await createPartner({name;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
      entityType;
      pointOfContact;
      useCaseType;
      brand})return res.status(201).json({partner: {id: partner.id;
        name: partner.name;
        status: partner.status;
        entityType: partner.entityType;
        useCaseType: partner.useCaseType;
<<<<<<< HEAD
        createdAt: partner.createdAt},
      apiKey: apiKey.key;
      dashboardUrl: `/partners/dashboard?pid=${partner.id}`})
  } catch (e) {
    return res.status(500).json({ error: "Failed to create partner" })
  }
}
origin/cursor/automate-test-improve-and-merge-code-2533
=======
        createdAt: partner.createdAt},apiKey: apiKey.key;
      dashboardUrl: `/partners/dashboard?pid=${partner.id}`})} catch (e) {return res.status(500).json({ error: "Failed to create partner" })}
}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
