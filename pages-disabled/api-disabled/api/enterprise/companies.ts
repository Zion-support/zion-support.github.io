<<<<<<<< HEAD:pages/api-disabled/api/enterprise/companies.ts
<<<<<<< HEAD:pages/api-disabled/api/enterprise/companies.ts
<<<<<<< HEAD:pages/api/enterprise/companies.ts
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import type { NextApiRequest, NextApiResponse } from 'next';
import { store } from '[^']*';
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method === "GET") {
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/enterprise/companies.ts
=======
<<<<<<< HEAD
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
      name;
      slug;
      logoUrl;
      brandColor;
      plan
    });
    return res.status(201).json(created);

<<<<<<< HEAD:pages/api-disabled/api/enterprise/companies.ts
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a;
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5:pages/api/enterprise/companies.ts
========
}
origin/cursor/integrate-build-improve-and-re-verify-2156


>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/enterprise/companies.ts
    return res.status (201).json (created);
  }
  res.set_header ("Allow", "GET, POST");
  return res.status (405).end ("Method Not Allowed");
}
<<<<<<<< HEAD:pages/api-disabled/api/enterprise/companies.ts
<<<<<<< HEAD:pages/api-disabled/api/enterprise/companies.ts
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a;
========


ursor/fix-website-loading-errors-and-merge-6662


>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/enterprise/companies.ts

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5:pages/api/enterprise/companies.ts

    const companies = store.listCompanies();
    return res.status(200).json(companies);
  }
  if (req.method === "POST") {;
    const { name, slug, logoUrl, brandColor, plan } = req.body |{}
    const created = store.createCompany({;
      name;
      slug;
      logoUrl;
      brandColor;
      plan
    });
    return res.status(201).json(created);

}
  res.setHeader("Allow", "GET,POST");
  return res.status(405).end("Method Not Allowed");

}
import type { NextApiRequest, NextApiResponse } from 'next';
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
    const company = store.getCompanyBySlug(slug);
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
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
;
  return res.status(405).json({ error: 'method_not_allowed' });
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
<<<<<<<< HEAD:pages/api-disabled/api/enterprise/companies.ts
<<<<<<< HEAD:pages/api-disabled/api/enterprise/companies.ts
=======
<<<<<<< HEAD
=======
========
>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/enterprise/companies.ts


}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    return res.status (201).json (created);
  }
  res.set_header ("Allow", "GET, POST");
  return res.status (405).end ("Method Not Allowed");
}


<<<<<<<< HEAD:pages/api-disabled/api/enterprise/companies.ts
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD:pages/api-disabled/api/enterprise/companies.ts
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5:pages/api/enterprise/companies.ts
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
========


>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/enterprise/companies.ts
import type { NextApiRequest, NextApiResponse } from 'next';
  if (req.method;
    return res.status(201).json(created)
    });
    return res.status(201).json(created);
  }

  return res.status(405).json({ error: 'method_not_allowed' });
}
<<<<<<<< HEAD:pages/api-disabled/api/enterprise/companies.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f:pages/api/enterprise/companies.ts
========
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/enterprise/companies.ts
