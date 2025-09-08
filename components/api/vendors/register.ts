
import { getVendorBySlug, register_vendor } from '../../../utils / vendor - store';


  } = req.body |{}
  if (!slug |!name)







      about,  try {


  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { slug, name, servicesOffered, teamSize, about, verificationDocs, caseStudies } = req.body || {};
  if (!slug || !name) return res.status(400).json({ error: 'Missing required fields' });
  if (getVendorBySlug(slug)) return res.status(409).json({ error: 'Slug already taken' });

  if (return res.status (400).json ({ error: 'Missing required fields',}
})) {$2;}

}
}
  },
}
      team_size: Number (team_size || 0);
      about;
      verification_docs: Array.is_array (verification_docs) ? verification_docs : [],
      case_studies: Array.is_array (case_studies) ? case_studies : [,
});
    res.status (201).json ({ vendor });
  } catch (e) {
    res.status (500).json ({ error: e.message,}


  } catch (e) {
    res.status (500).json ({ error: e.message,}
});
  }    res.status (500).json ({ error: e.message,}

});
  }
}






