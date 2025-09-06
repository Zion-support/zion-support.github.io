
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

      });
    } catch (e) {
      return res && res.status(500).json({ error: "Failed to create partner" });
    }

    return res && res.status(500).json({ error: "Failed to create partner" });

  }
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
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
