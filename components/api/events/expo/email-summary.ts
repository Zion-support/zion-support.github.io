<<<<<<< HEAD

<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    }
    // TODO: Integrate with actual provider
    return res.status(200).json({ status: 'queued, provider });
  } catch (e: any) {
return res
      .status(500)
<<<<<<< HEAD
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
  }
  if (req.method !== 'POST') return res.status(405).json({ "error": 'Method not allowed','
});
  try {
    }
=======
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {
    const provider = null;
      return res.status(200).json({ status: 'queued', provider: 'stub' })
>>>>>>> origin/chore/fix-lint-and-merge

    }
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      .json({ error: e && e.message || 'Failed to queue emails' });
  }    return res && res.status(500).json({ error: e && e.message || 'Failed to queue emails' })
  };
}
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
;
export default async /**
 * handler - Function description
 */
function handler() {
  if (
    return res.status (405).json ({ error: 'Method not allowed' })) {
  $2
}
    const provider = process.env.MAIL_PROVIDER || 'none';
    // Check condition
if ( {) {
  $2
}
      console.log ('[EmailSummary] Stub: no provider configured');
      return res.status (200).json ({ status: 'queued', provider: 'stub' });
    }
    // TODO: Integrate with actual provider;
    return res.status (200).json ({ status: 'queued', provider });
  } catch (e: any) {
return res;
      .status (500);
      .json ({ error: e.message || 'Failed to queue emails' });
  }    return res.status (500).json ({ error: e.message || 'Failed to queue emails' });
    }
    // TODO: Integrate with actual provider
    return res.status(200).json({ status: 'queued', provider })
  } catch (e: any) {
    return res.status(500).json({ error: e.message || 'Failed to queue emails' })


export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
    const provider = process.env.MAIL_PROVIDER |'none';
    if (provider === 'none') {
      console.log('[EmailSummary] Stub: no provider configured');
      return res.status(200).json({ status: 'queued', provider: 'stub' });

    }
    // TODO: Integrate with actual provider
    return res.status(200).json({ status: 'queued', provider });
  } catch (e: any) {
return res
      .status(500)
      .json({ error: e.message |'Failed to queue emails' });
  }    return res.status(500).json({ error: e.message |'Failed to queue emails' })
  }
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      .json({ error: e.message || 'Failed to queue emails' });
  }    return res.status(500).json({ error: e.message || 'Failed to queue emails' })
  };
}
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
