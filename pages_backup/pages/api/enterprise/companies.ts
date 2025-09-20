import type { NextApiRequest, NextApiResponse } from 'next',
import { store } from '[^']*',
import type { NextApiRequest, NextApiResponse } from "next",
import { store } from "../../../utils/data/enterpriseStore",
import { store } from '../../../utils/data/enterpriseStore',

export default function handler(req: NextApiRequest, res: NextApiResponse) {,
  if (req.method === "GET") {,
export default function handler(req: NextApiRequest, res: NextApiResponse) {,
  if (req.method === "GET") {,
    const companies = store.listCompanies(),
    return res.status(200).json(companies)
  }
  if (req.method === "POST") {,
    const { name, slug, logoUrl, brandColor, plan } = req.body |{}
    const created = store.createCompany({,
      name,
      slug,
      logoUrl,
      brandColor,
      plan
    }),
    return res.status(201).json(created),
  }
  res.setHeader("Allow", "GET,POST"),
  return res.status(405).end("Method Not Allowed"),
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {,
  res.status(200).json({ companies: [] }),
export default function handler(req, res) {,
  try {,
  if (req.method === 'GET') {,
    const { slug } = req.query,
    if (!slug || typeof slug !== 'string') {,
      return res.status(400).json({ error: 'slug required' }),
      } catch (error) {,
    console.error("Error:", error),
    return res.status(500).json({ error: "Internal server error" }),
    } catch (error) {,
    console.error("Error:", error),
    return res.status(500).json({ error: "Internal server error" }),
  }
}
  } catch (error) {,
    console.error("Error:", error),
    return res.status(500).json({ error: "Internal server error" }),
  }
}
    const company = store.getCompanyBySlug(slug),
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' }),
    } catch (error) {,
    console.error("Error:", error),
    return res.status(500).json({ error: "Internal server error" }),
    } catch (error) {,
    console.error("Error:", error),
    return res.status(500).json({ error: "Internal server error" }),
  }
}
  } catch (error) {,
    console.error("Error:", error),
    return res.status(500).json({ error: "Internal server error" }),
  }
}
,
  if (req.method === 'GET') {,
    const { name, slug, logoUrl, brandColor, plan } = req.body || {},
    const created = store.createCompany({ name, slug, logoUrl, brandColor, plan }),
    return res.status(201).json(created),
    } catch (error) {,
    console.error("Error:", error),
    return res.status(500).json({ error: "Internal server error" }),
    } catch (error) {,
    console.error("Error:", error),
    return res.status(500).json({ error: "Internal server error" }),
  }
}
  } catch (error) {,
    console.error("Error:", error),
    return res.status(500).json({ error: "Internal server error" }),
  }
}
,
  return res.status(405).json({ error: 'method_not_allowed' }),
  } catch (error) {,
    console.error("Error:", error),
    return res.status(500).json({ error: "Internal server error" }),
    } catch (error) {,
    console.error("Error:", error),
    return res.status(500).json({ error: "Internal server error" }),
  }
}
  } catch (error) {,
    console.error("Error:", error),
    return res.status(500).json({ error: "Internal server error" }),
  }

}
}
,