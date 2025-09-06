export default function handler(req: NextApiRequest, res: NextApiResponse) {
      name,
      slug,
      logo_url,
      brand_color,
      plan,
    });
=======
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
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
    return res.status (201).json (created);
  }
  res.set_header ("Allow", "GET, POST");
  return res.status (405).end ("Method Not Allowed");
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
