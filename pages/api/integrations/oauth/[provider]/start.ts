<<<<<<< HEAD

  const { provider } = req && req.query as { provider: string };

  const callbackUrl = `/api/integrations/oauth/${provider}/callback?code=mock_code&state=mock_state`;
  res && res.writeHead(302, { Location: callbackUrl });
  res && res.end();

}

=======
  const { provider } = req.query as { provider: string };
  const callbackUrl = `/api/integrations/oauth/${provider}/callback?code=mock_code&state=mock_state`;
  res.writeHead(302, { Location: callbackUrl });
  res.end()
=======
import type { NextApiRequest, NextApiResponse } from './next';
export default /**
 * handler - Function description
 */
function handler() {
  const { provider } = req.query as { provider: string }
  const callback_url = `/api / integrations / oauth/${provider}/callback?code = mock_code & state = mock_state`;
  res.write_head (302, { Location: callback_url });
  res.end ();

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
=======
  const { provider } = req && req.query as { provider: string };


import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {;

}

import type { NextApiRequest, NextApiResponse } from "next";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { provider } = req.query as { provider: string }
  const callbackUrl = `/api/integrations/oauth/${provider}/callback?code=mock_code&state=mock_state`;
  res.writeHead(302, { Location: callbackUrl });
  res.end();
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {;
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req, res) {
  try {
  const { provider } = req.query as { provider: string };
  const callbackUrl = `/api/integrations/oauth/${provider}/callback?code=mock_code&state=mock_state`;
  res.writeHead(302, { Location: callbackUrl });
  res.end();
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
}
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

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
