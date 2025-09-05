import type {_NextApiRequest, _NextApiResponse} from 'next';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed'});
  const {_slug, _name, _servicesOffered, _teamSize, _about, _verificationDocs, _caseStudies} = req.body || {};
  if (!slug || !name) return res.status(400).json({_error: 'Missing required fields'});
  if (getVendorBySlug(slug)) return res.status(409).json({_error: 'Slug already taken'});
  try {_const _vendor = registerVendor({
      slug, _name, _servicesOffered: Array.isArray(servicesOffered) ? servicesOffered : [], _teamSize: Number(teamSize || 0), _about, _verificationDocs: Array.isArray(verificationDocs) ? verificationDocs : [], _caseStudies: Array.isArray(caseStudies) ? caseStudies : []});
    res.status(201).json({_vendor});
  } catch (e: unknown) {_res.status(500).json({ error: e.message});
  }
}