      });
    } catch (e) {
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
  }

}

