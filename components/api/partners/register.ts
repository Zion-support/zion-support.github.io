export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== \"POST\) {}
    res.setHeader(\"Allow\", \POST\);}"
    return res.status(405).json({ error: \"Method Not Allowed\ })


=======
}
}
      return res.status (400).json ({ error: "Missing required fields" });
    }
    try {}
      const { partner, api_key } = await create_partner ({}
        name,
        entity_type,
        pointOfContact,
        useCaseType,
        brand});
      return res.status (201).json ({}
        partner: {}
          id: partner.id,
          name: partner.name,
          status: partner.status,
          entity_type: partner.entity_type,
          useCaseType: partner.useCaseType,
          created_at: partner.created_at},
        api_key: api_key.key,
        dashboard_url: `/partners / dashboard?pid=${partner.id}`});
    } catch (e) {
      return res.status (500).json ({ error: Failed to create partner" });
    }"
    return res.status (500).json ({ error: Failed to create partner });
  }

>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
}
=======
origin/cursor/automate-test-improve-and-merge-code-2533
=======
"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
