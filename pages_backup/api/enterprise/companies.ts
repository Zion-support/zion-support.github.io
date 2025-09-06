}
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/api/enterprise/companies.ts
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/enterprise/companies.ts
=======
origin/cursor/integrate-build-improve-and-re-verify-2156


>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    return res.status (201).json (created);
  }
  res.set_header ("Allow", "GET, POST");
  return res.status (405).end ("Method Not Allowed");
}
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/api/enterprise/companies.ts
<<<<<<< HEAD
=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/enterprise/companies.ts
=======


ursor/fix-website-loading-errors-and-merge-6662


>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc


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
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
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
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
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
    return res.status (201).json (created);
  }
  res.set_header ("Allow", "GET, POST");
  return res.status (405).end ("Method Not Allowed");
}


<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/api/enterprise/companies.ts
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======


>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import type { NextApiRequest, NextApiResponse } from 'next';
  if (req.method;
    return res.status(201).json(created)
    });
    return res.status(201).json(created);
  }

  return res.status(405).json({ error: 'method_not_allowed' });
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/enterprise/companies.ts
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
