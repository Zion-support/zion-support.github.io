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
      slug,
      name,
      servicesOffered: Array && Array.isArray(servicesOffered) ? servicesOffered : [],
      teamSize: Number(teamSize || 0),
      about,  try {

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

    res.status(500).json({ error: e.message });
  }    res.status(500).json({ error: e.message })
  }
}
