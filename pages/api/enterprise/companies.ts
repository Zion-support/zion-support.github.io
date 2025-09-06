export default function handler(req: NextApiRequest, res: NextApiResponse) {
import type { NextApiRequest, NextApiResponse } from './next';
import { store  } from '../../../utils / data / enterprise_store';
export default /**
 * handler - Function description
 */
function handler() {
  // Check condition
if ( {) {
  $2
}
    const companies = store.list_companies ();
    return res.status (200).json (companies);
  }
  // Check condition
if ( {) {
  $2
}
    const { name, slug, logo_url, brand_color, plan } = req.body || {}
    const created = store.create_company ({
      name,
      slug,
      logo_url,
      brand_color,
      plan,
    });
}
import { store } from '../../../utils/data/enterpriseStore';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { slug } = req.query;
    if (!slug || typeof slug !== 'string') {
      return res.status(400).json({ error: 'slug required' })
    }
    const company = store.getCompanyBySlug(slug);
    if (!company) return res.status(404).json({ error: 'not_found' });
    return res.status(200).json(company)
  }

  if (req.method === 'POST') {
    const { name, slug, logoUrl, brandColor, plan } = req.body || {};
    const created = store.createCompany({ name, slug, logoUrl, brandColor, plan });
    return res.status(201).json(created)
  }

  return res.status(405).json({ error: 'method_not_allowed' })
}
    return res.status (201).json (created);
  }
  res.set_header ("Allow", "GET, POST");
  return res.status (405).end ("Method Not Allowed");
}
