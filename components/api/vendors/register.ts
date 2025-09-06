import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD

import { getVendorBySlug, registerVendor } from '../../../utils/vendor-store';
export default function handler(req: NextApiRequest, res: NextApiResponse) {

    return res.status(405).json({ error: 'Method not allowed' });

=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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

      about,  try {


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

    res && res.status(500).json({ error: e && e.message });
  }    res && res.status(500).json({ error: e && e.message })
  };
}


  }
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
