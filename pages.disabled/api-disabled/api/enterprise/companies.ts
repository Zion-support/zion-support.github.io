:pages_backup/api/enterprise/companies.ts
<<<<<<< HEAD:pages_backup/api/enterprise/companies.ts
<<<<<<<< HEAD:pages/api-disabled/api/enterprise/companies.ts
<<<<<<< HEAD:pages/api-disabled/api/enterprise/companies.ts
<<<<<<< HEAD:pages/api/enterprise/companies.ts
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { store } from '[^']*';
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method === "GET") {
:pages_backup/api/enterprise/companies.ts
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/enterprise/companies.ts
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f:pages/api/enterprise/companies.ts
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
=======

import type { NextApiRequest, NextApiResponse } from "next";"
import { store } from "../../../utils/data/enterpriseStore";
export default function handler() { return null; }
  }"
  if (req.method === "POST") {}
    const { name, slug, logoUrl, brandColor, plan } = req.body |{}
    const created = store.createCompany({}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/enterprise/companies.ts
      name;
      slug;
      logoUrl;
      brandColor;
:pages_backup/api/enterprise/companies.ts
      plan
    });
    return res.status(201).json(created);

<<<<<<< HEAD:pages/api-disabled/api/enterprise/companies.ts
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
========
}
origin/cursor/integrate-build-improve-and-re-verify-2156

>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/enterprise/companies.ts
=======
      plan;
    });
    return res.status(201).json(created);

"
  res.setHeader("Allow", "GET,POST");"
  return res.status(405).end("Method Not Allowed");
}

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/enterprise/companies.ts
=======
}
origin/cursor/integrate-build-improve-and-re-verify-2156

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/enterprise/companies.ts
    return res.status (201).json (created);
  }"
  res.set_header ("Allow", "GET, POST");"
  return res.status (405).end ("Method Not Allowed");
}
:pages_backup/api/enterprise/companies.ts
<<<<<<< HEAD:pages_backup/api/enterprise/companies.ts
<<<<<<<< HEAD:pages/api-disabled/api/enterprise/companies.ts
<<<<<<< HEAD:pages/api-disabled/api/enterprise/companies.ts
========
=======
=======
=======

ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/enterprise/companies.ts

ursor/fix-website-loading-errors-and-merge-6662

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/enterprise/companies.ts

ursor/fix-website-loading-errors-and-merge-6662

>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/enterprise/companies.ts

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5:pages/api/enterprise/companies.ts

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
<<<<<<< HEAD:pages_backup/api/enterprise/companies.ts
<<<<<<<< HEAD:pages/api-disabled/api/enterprise/companies.ts
<<<<<<< HEAD:pages/api-disabled/api/enterprise/companies.ts
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/enterprise/companies.ts

}

}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    return res.status (201).json (created);
  }
  res.set_header ("Allow", "GET, POST");
  return res.status (405).end ("Method Not Allowed");
}

}

:pages_backup/api/enterprise/companies.ts
<<<<<<<< HEAD:pages/api-disabled/api/enterprise/companies.ts
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD:pages/api-disabled/api/enterprise/companies.ts

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5:pages/api/enterprise/companies.ts
=======
========

:pages_backup/api/enterprise/companies.ts
>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/enterprise/companies.ts
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/enterprise/companies.ts
import type { NextApiRequest, NextApiResponse } from 'next';
  if (req.method;
    return res.status(201).json(created)
    });
    return res.status(201).json(created);
  }

  return res.status(405).json({ error: 'method_not_allowed' });
}
:pages_backup/api/enterprise/companies.ts
<<<<<<<< HEAD:pages/api-disabled/api/enterprise/companies.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f:pages/api/enterprise/companies.ts
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/enterprise/companies.ts
