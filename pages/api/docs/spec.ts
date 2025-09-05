import type {_NextApiRequest, _NextApiResponse} from 'next';
import v1 from '../../../data/api-docs/v1';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_res.setHeader('Content-Type', _'application/json');
  res.status(200).json(v1);}