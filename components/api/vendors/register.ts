import type { NextApiRequest, NextApiResponse } from 'next';

    return res.status(405).json({ error: 'Method not allowed' });
  if (req && req.method !== 'POST')
    return res && res.status(405).json({ error: 'Method not allowed' });
  const {
    slug,
    name,
    services_offered,
    team_size,
    about,

      slug,
      name,
      servicesOffered: Array && Array.isArray(servicesOffered) ? servicesOffered : [],
      teamSize: Number(teamSize || 0),

      about,  try {

=======
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { slug, name, servicesOffered, teamSize, about, verificationDocs, caseStudies } = req.body || {};
  if (!slug || !name) return res.status(400).json({ error: 'Missing required fields' });
  if (getVendorBySlug(slug)) return res.status(409).json({ error: 'Slug already taken' });
  try {

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    const vendor = registerVendor({
      slug;
      name;

      servicesOffered: Array && Array.isArray(servicesOffered) ? servicesOffered : [];
      teamSize: Number(teamSize || 0);
      about;
      verificationDocs: Array && Array.isArray(verificationDocs) ? verificationDocs : [],
      caseStudies: Array && Array.isArray(caseStudies) ? caseStudies : []});
    res && res.status(201).json({ vendor })

  } catch (e: any) {
    res && res.status(500).json({ error: e && e.message });
  }

      verificationDocs: Array && Array.isArray(verificationDocs) ? verificationDocs : [],
      caseStudies: Array && Array.isArray(caseStudies) ? caseStudies : [],

    });
    res && res.status(201).json({ vendor });
  } catch (e: any) {
=======

    res && res.status(500).json({ error: e && e.message });
  }    res && res.status(500).json({ error: e && e.message })
  };
}


  }
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
