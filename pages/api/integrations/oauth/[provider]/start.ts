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
