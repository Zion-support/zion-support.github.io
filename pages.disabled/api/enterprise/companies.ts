<<<<<<< HEAD:pages/api/enterprise/companies.ts
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { store } from '[^']*';
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method === "GET") {
import type { NextApiRequest, NextApiResponse } from "next";
import { store } from "../../../utils/data/enterpriseStore";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {;
    const companies = store.listCompanies();
    return res.status(200).json(companies);
  }
  if (req.method === "POST") {
    const { name, slug, logoUrl, brandColor, plan } = req.body |{}
    const created = store.createCompany({
      name
      slug
      logoUrl
      brandColor
      plan
    });
    return res.status(201).json(created);

res.setHeader("Allow", "GET,POST");
  return res.status(405).end("Method Not Allowed");
}

  res.setHeader("Allow", "GET,POST");
  return res.status(405).end("Method Not Allowed");
}

  res.setHeader("Allow", "GET,POST");
  return res.status(405).end("Method Not Allowed");
}

origin/cursor/integrate-build-improve-and-re-verify-2156
    return res.status (201).json (created);
  }
  res.set_header ("Allow", "GET, POST");
  return res.status (405).end ("Method Not Allowed");
}








ursor/fix-website-loading-errors-and-merge-6662


    const companies = store.listCompanies();
    return res.status(200).json(companies);
  }
  if (req.method === "POST") {
    const { name, slug, logoUrl, brandColor, plan } = req.body |{}
    const created = store.createCompany({
      name
      slug
      logoUrl
      brandColor
      plan
    });
    return res.status(201).json(created);

}
  res.setHeader("Allow", "GET,POST");
  return res.status(405).end("Method Not Allowed");

}
>>>>>>> b1bd2160a740f8569656e96922b453e70de0f5db:pages.disabled/api/enterprise/companies.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD:pages/api/enterprise/companies.ts
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
=======
  res.status(200).json({ companies: [] });
import type { NextApiRequest, NextApiResponse } from 'next';
import { store } from '../../../utils/data/enterpriseStore';
export default function handler(req, res) {
  try {
  if (req.method === 'GET') {
    const { slug } = req.query;
    if (!slug || typeof slug !== 'string') {;
      return res.status(400).json({ error: 'slug required' });
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
>>>>>>> b1bd2160a740f8569656e96922b453e70de0f5db:pages.disabled/api/enterprise/companies.ts
  }

  try {
    // TODO: Implement companies logic
    res.status(200).json({ message: 'companies endpoint' });
  } catch (error) {
    console.error('Error in companies:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
<<<<<<< HEAD:pages/api/enterprise/companies.ts
}
=======
}
    const company = store.getCompanyBySlug(slug);
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
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
  if (req.method === 'GET') {
    const { name, slug, logoUrl, brandColor, plan } = req.body || {};
    const created = store.createCompany({ name, slug, logoUrl, brandColor, plan });
    return res.status(201).json(created);
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
  return res.status(405).json({ error: 'method_not_allowed' });
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
}

}

}
    return res.status (201).json (created);
  }
  res.set_header ("Allow", "GET, POST");
  return res.status (405).end ("Method Not Allowed");
}

}


import type { NextApiRequest, NextApiResponse } from 'next';
  if (req.method;
    return res.status(201).json(created)
    });
    return res.status(201).json(created);
  }

  return res.status(405).json({ error: 'method_not_allowed' });
}
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> b1bd2160a740f8569656e96922b453e70de0f5db:pages.disabled/api/enterprise/companies.ts
