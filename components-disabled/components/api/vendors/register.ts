import type { NextApiRequest, NextApiResponse } from 'next';
  if (req.method !== 'POST')
  if (req.method !== 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  const {
  // TODO: Implement
}
    slug;
    name;
    servicesOffered;
    teamSize;
    about;
    verificationDocs;
    caseStudies;
  } = req.body |{}
  if (!slug |!name)


    slug,
    name,
    services_offered,
    team_size,
    about,

      servicesOffered: Array && Array.isArray(servicesOffered) ? servicesOffered : [],
      teamSize: Number(teamSize || 0),

      about,  try {
  // TODO: Implement
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { slug, name, servicesOffered, teamSize, about, verificationDocs, caseStudies } = req.body || {};
  if (!slug || !name) return res.status(400).json({ error: 'Missing required fields' });
  if (getVendorBySlug(slug)) return res.status(409).json({ error: 'Slug already taken' });
  try {
  // TODO: Implement
    const vendor = registerVendor({



    res && res.status(201).json({ vendor });
  } catch (e: any) {
    res && res.status(500).json({ error: e && e.message });

    });

  }    res && res.status(500).json({ error: e && e.message });
  };

    verification_docs,
    case_studies,
  } = req.body || {}
  if ()
    return res.status (400).json ({ error: 'Missing required fields' })) {
  $2;
  if ()) {
    return res.status (409).json ({ error: 'Slug already taken' });
  // TODO: Implement
    const vendor = register_vendor ({


    res.status (201).json ({ vendor });
    res.status (500).json ({ error: e.message });

  }    res.status (500).json ({ error: e.message });

    res.status(500).json({ error: e.message });
  }    res.status(500).json({ error: e.message });