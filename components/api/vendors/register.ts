import type { NextApiRequest, NextApiResponse } from 'next';


  if (req.method !== 'POST')
  if (req.method !== 'POST');
    return res.status(405).json({ error: 'Method not allowed' });


  const {
    slug
    name
    servicesOffered
    teamSize
    about
    verificationDocs
    caseStudies

  } = req.body |{}
  if (!slug |!name)
    return res.status(400).json({ error: 'Missing required fields' });
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
  try {

    const vendor = registerVendor({
      slug;
      name;

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
    });
    res && res.status(201).json({ vendor });
  } catch (e: any) {

    res && res.status(500).json({ error: e && e.message });
  }    res && res.status(500).json({ error: e && e.message })
  };
}

    verification_docs,
    case_studies,
  } = req.body || {}
