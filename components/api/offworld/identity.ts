import type {_NextApiRequest, _NextApiResponse} from 'next';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_try {
    const { address} = req.query as {_address?: string};
    const _profile = await buildIdentityProfile(address);
    return res.status(200).json(profile);
  } catch (e: unknown) {_return res.status(500).json({ error: e.message});
  }
}