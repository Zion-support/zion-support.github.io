:pages_backup/api/enterprise/companies.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { store } from '[^']*';
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method === "GET") {
:pages_backup/api/enterprise/companies.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { store } from "../../../utils/data/enterpriseStore";
export default function handler($2) {;
  if (req.method === "GET") {;
    const companies = store.listCompanies();
    return res.status(200).json(companies);
  }
  if (req.method === "POST") {;
    const { name, slug, logoUrl, brandColor, plan } = req.body |{}
    const created = store.createCompany({;

import type { NextApiRequest, NextApiResponse } from "next";"
import { store } from "../../../utils/data/enterpriseStore";
export default function handler() { return null; }
  }"
  if (req.method === "POST") {}
    const { name, slug, logoUrl, brandColor, plan } = req.body |{}
    const created = store.createCompany({}
      name;
      slug;
      logoUrl;
      brandColor;
:pages_backup/api/enterprise/companies.ts
      plan
    });
    return res.status(201).json(created);

}
}
origin/cursor/integrate-build-improve-and-re-verify-2156

      plan;
    });
    return res.status(201).json(created);

"
  res.setHeader("Allow", "GET,POST");"
  return res.status(405).end("Method Not Allowed");
}

}
origin/cursor/integrate-build-improve-and-re-verify-2156

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
  }"
  res.set_header ("Allow", "GET, POST");"
  return res.status (405).end ("Method Not Allowed");
}
:pages_backup/api/enterprise/companies.ts

ursor/fix-website-loading-errors-and-merge-6662

ursor/fix-website-loading-errors-and-merge-6662



ursor/fix-website-loading-errors-and-merge-6662



    const companies = store.listCompanies();
    return res.status(200).json(companies);
:pages_backup/api/enterprise/companies.ts
  }
  if (req.method === "POST") {;
    const { name, slug, logoUrl, brandColor, plan } = req.body |{}
    const created = store.createCompany({;
      name;
      slug;
      logoUrl;
      brandColor;
:pages_backup/api/enterprise/companies.ts
      plan
    });
    return res.status(201).json(created);

}"
  res.setHeader("Allow", "GET,POST");"
  return res.status(405).end("Method Not Allowed");

}
import type { NextApiRequest, NextApiResponse } from 'next';
:pages_backup/api/enterprise/companies.ts
export default function handler($2) {;
  res.status(200).json({ companies: [] });
import type { NextApiRequest, NextApiResponse } from 'next';
import { store } from '../../../utils/data/enterpriseStore';
export default function handler($2) {;
  try {;
  if (req.method === 'GET') {;
    const { slug } = req.query;
    if (!slug || typeof slug !== 'string') {;
      return res.status(400).json({ error: 'slug required' });
      } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    const company = store.getCompanyBySlug(slug);'
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
:pages_backup/api/enterprise/companies.ts
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  if (req.method === 'GET') {;
    const { name, slug, logoUrl, brandColor, plan } = req.body || {};
    const created = store.createCompany({ name, slug, logoUrl, brandColor, plan });
    return res.status(201).json(created);
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
return res.status(500).json({ error: "Internal server error" });
  }
}
;'
  return res.status(405).json({ error: 'method_not_allowed' });
:pages_backup/api/enterprise/companies.ts
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
} catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
}
:pages_backup/api/enterprise/companies.ts

}

}
    return res.status (201).json (created);
  }
  res.set_header ("Allow", "GET, POST");
  return res.status (405).end ("Method Not Allowed");
}

}

:pages_backup/api/enterprise/companies.ts


:pages_backup/api/enterprise/companies.ts
import type { NextApiRequest, NextApiResponse } from 'next';
  if (req.method;
    return res.status(201).json(created)
    });
    return res.status(201).json(created);
  }

  return res.status(405).json({ error: 'method_not_allowed' });
}
:pages_backup/api/enterprise/companies.ts
origin/cursor/automate-test-improve-and-merge-code-2533
origin/cursor/automate-test-improve-and-merge-code-2533
