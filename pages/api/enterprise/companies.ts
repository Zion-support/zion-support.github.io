import type {_NextApiRequest, _NextApiResponse} from 'next';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method === 'GET') {
    const { slug} = req.query;
    if (!slug || typeof slug !== 'string') {_return res.status(400).json({ error: 'slug required'});
    }
    const _company = store.getCompanyBySlug(slug);
    if (!company) return res.status(404).json({_error: 'not_found'});
    return res.status(200).json(company);
  }

  if (req.method === 'POST') {_const { name, _slug, _logoUrl, _brandColor, _plan} = req.body || {};
    const _created = store.createCompany({_name, _slug, _logoUrl, _brandColor, _plan});
    return res.status(201).json(created);
  }

  return res.status(405).json({_error: 'method_not_allowed'});
}