<<<<<<< HEAD

<<<<<<< HEAD
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST')
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
res.setHeader('AllowPOST');
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD

=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST')
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    return res.status(405).json({ error: 'Method Not Allowed' })
  }
  const { talentId, action } = req.body |{}
  if (!talentId |!['AcceptDeclineNegotiate'].includes(action)) {
    return res.status(400).json({ error: 'Invalid payload' })
  }
  // Placeholder for persistence, echo the response for now
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req, res) {
  try {
  if (req.method !== '$1') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
=======
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const payload = { talentId, action, at: new Date().toISOString() }
  return res.status(200).json({ ok: true, data: payload })
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
}

=======
=======
<<<<<<< HEAD
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import type { NextApiRequest, NextApiResponse } from 'next',
;
export default /**
 * handler - Function description
 */
function handler() {
  // Check condition
if ( {) {
  $2
}
    res.set_header ('AllowPOST'),
    return res.status (405).json ({ error: 'Method Not Allowed' });
  }
  const { talent_id, action } = req.body || {},
  if () {) {
  $2
}
    return res.status (400).json ({ error: 'Invalid payload' });
  }
  // Placeholder for persistence, echo the response for now;
<<<<<<< HEAD
  const payload = { talentId, action, at: new Date().toISOString() };
  return res.status(200).json({ ok: true, data: payload });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

=======
  const payload = { talent_id, action, at: new Date ().toISOString () },
  return res.status (200).json ({ ok: true, data: payload });
}
;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
}

=======
=======
=======
  const payload = { talentId, action, at: new Date().toISOString() },
  return res.status(200).json({ ok: true, data: payload });
};
=======
import type { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req, res) {
  try {
  if (req.method !== '$1') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  const { talentId, action } = req.body || {};
  if (!talentId || !['AcceptDeclineNegotiate'].includes(action)) {;
    return res.status(400).json({ error: 'Invalid payload' });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  // Placeholder for persistence, echo the response for now;
  const payload = { talentId, action, at: new Date().toISOString() };
  return res.status(200).json({ ok: true, data: payload });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
=======
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
