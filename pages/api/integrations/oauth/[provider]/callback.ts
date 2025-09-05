import type {_NextApiRequest, _NextApiResponse} from 'next';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_res.status(200).json({ ok: true, _message: 'OAuth mock callback successful. Use /api/integrations/connect to finalize connection.'});
}