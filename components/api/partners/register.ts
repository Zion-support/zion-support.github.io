<<<<<<< HEAD
<<<<<<< HEAD
=======

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

          id: partner && partner.id,
          name: partner && partner.name,
          status: partner && partner.status,
          entityType: partner && partner.entityType,
          useCaseType: partner && partner.useCaseType,
          createdAt: partner && partner.createdAt,
        },
        apiKey: apiKey && apiKey.key,
        dashboardUrl: `/partners/dashboard?pid=${partner && partner.id}`,

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      });
    } catch (e) {
      return res && res.status(500).json({ error: "Failed to create partner" });
    }
<<<<<<< HEAD
<<<<<<< HEAD

    return res && res.status(500).json({ error: "Failed to create partner" });

  }



  }

=======
  }
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
}
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
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
      entityType;
      pointOfContact;
      useCaseType;
      brand});
    return res.status(201).json({
      partner: {
        id: partner.id;
        name: partner.name;
        status: partner.status;
        entityType: partner.entityType;
        useCaseType: partner.useCaseType;
        createdAt: partner.createdAt},
      apiKey: apiKey.key;
      dashboardUrl: `/partners/dashboard?pid=${partner.id}`})
  } catch (e) {
    return res.status(500).json({ error: "Failed to create partner" })
  }
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
