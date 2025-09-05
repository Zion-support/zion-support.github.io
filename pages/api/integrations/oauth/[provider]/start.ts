<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { provider } = req.query as { provider: string },
  const callbackUrl = `/api/integrations/oauth/${provider}/callback?code=mock_code&state=mock_state`,
  res.writeHead(302, { Location: callbackUrl }),
  res.end()
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_const { provider} = req.query as {_provider: string};
  const _callbackUrl = `/api/integrations/oauth/${_provider}/callback?code=mock_code&state=mock_state`;
  res.writeHead(302, {_Location: callbackUrl});
  res.end();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}