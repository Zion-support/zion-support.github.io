<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
;
export default function handler(req:NextApiRequest, res:NextApiResponse) {;
  const { provider } = req.query as { provider:string },;
  const callbackUrl = `/api/integrations/oauth/${provider}/callback?code=mock_code&state=mock_state`,;
  res.writeHead(302, { Location:callbackUrl }),;
  res.end(),;
}
=======
import type { NextApiRequest, NextApiResponse } from 'next',

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { provider } = req.query as { provider: string },
  const callbackUrl = `/api/integrations/oauth/${provider}/callback?code=mock_code&state=mock_state`,
  res.writeHead(302, { Location: callbackUrl }),
  res.end()}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
