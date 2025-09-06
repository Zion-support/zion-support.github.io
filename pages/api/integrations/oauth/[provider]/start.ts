<<<<<<< HEAD
const { provider } = req && req.query as { provider: string };
  const callbackUrl = `/api/integrations/oauth/${provider}/callback?code=mock_code&state=mock_state`;
  res && res.writeHead(302, { Location: callbackUrl });
  res && res.end();
}
  const { provider } = req.query as { provider: string };
  const callbackUrl = `/api/integrations/oauth/${provider}/callback?code=mock_code&state=mock_state`;
  res.writeHead(302, { Location: callbackUrl });
  res.end()
import type { NextApiRequest, NextApiResponse } from './next';
export default /**
 * handler - Function description
 */
function handler() {
  const { provider } = req.query as { provider: string }
  const callback_url = `/api / integrations / oauth/${provider}/callback?code = mock_code & state = mock_state`;
  res.write_head (302, { Location: callback_url });
  res.end ();
}
=======
<<<<<<< HEAD
<<<<<<< HEAD

import type { NextApiRequest, NextApiResponse } from "next";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { provider } = req.query as { provider: string }
  const callbackUrl = `/api/integrations/oauth/${provider}/callback?code=mock_code&state=mock_state`;
  res.writeHead(302, { Location: callbackUrl });
  res.end();
}

=======
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req, res) {
  try {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  const { provider } = req.query as { provider: string };
  const callbackUrl = `/api/integrations/oauth/${provider}/callback?code=mock_code&state=mock_state`;
  res.writeHead(302, { Location: callbackUrl });
  res.end();
<<<<<<< HEAD
=======
<<<<<<< HEAD
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
