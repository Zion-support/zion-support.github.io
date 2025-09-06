import type { NextApiRequest, NextApiResponse } from 'next';
import { store } from '../../../utils/data/enterpriseStore';
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { slug } = req.query;
    if (!slug || typeof slug !== 'string') {
<<<<<<< HEAD
<<<<<<< HEAD
      return res.status(400).json({ error: 'slug required' });
    }
    const company = store.getCompanyBySlug(slug);
    if (!company) return res.status(404).json({ error: 'not_found' });
    return res.status(200).json(company);
=======
      return res.status(400).json({ error: 'slug required' })
    }
    const company = store.getCompanyBySlug(slug);
    if (!company) return res.status(404).json({ error: 'not_found' });
    return res.status(200).json(company)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      return res.status(400).json({ error: 'slug required' })
    }
    const company = store.getCompanyBySlug(slug);
    if (!company) return res.status(404).json({ error: 'not_found' });
    return res.status(200).json(company)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }

  if (req.method === 'POST') {
    const { name, slug, logoUrl, brandColor, plan } = req.body || {};
<<<<<<< HEAD
<<<<<<< HEAD
    const created = store.createCompany({
      name,
      slug,
      logoUrl,
      brandColor,
      plan,
    });
    return res.status(201).json(created);
  }

  return res.status(405).json({ error: 'method_not_allowed' });
=======
    const created = store.createCompany({ name, slug, logoUrl, brandColor, plan });
    return res.status(201).json(created)
  }

  return res.status(405).json({ error: 'method_not_allowed' })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    const created = store.createCompany({ name, slug, logoUrl, brandColor, plan });
    return res.status(201).json(created)
  }

  return res.status(405).json({ error: 'method_not_allowed' })
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
