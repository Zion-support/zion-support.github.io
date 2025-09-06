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
    return res.status (201).json (created);
  }
  res.set_header ("Allow", "GET, POST");
  return res.status (405).end ("Method Not Allowed");
}