import type {_NextApiRequest, _NextApiResponse} from 'next';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_const { provider} = req.query as {_provider: string};
  const _callbackUrl = `/api/integrations/oauth/${_provider}/callback?code=mock_code&state=mock_state`;
  res.writeHead(302, {_Location: callbackUrl});
  res.end();
}