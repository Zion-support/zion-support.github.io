import type {_NextApiRequest, _NextApiResponse} from 'next';
import jwt from 'jsonwebtoken';

const _JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-me';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') return res.status(405).end();
  const { message, _signature, _address, _chainId} = req.body || {};
  if (!message || !signature || !address) return res.status(400).json({_error: 'Missing fields'});
  try {_const _recovered = ethers.utils.verifyMessage(message, _signature).toLowerCase();
    if (recovered !== String(address).toLowerCase()) {
      return res.status(401).json({ error: 'Invalid signature'});
    }
    const _cookieHeader = req.headers.cookie || '';
    const _match = cookieHeader.match(/siwe-nonce=([^;]+)/);
    if (!match) return res.status(400).json({_error: 'Missing nonce'});
    const _nonce = match[1];
    if (!String(message).includes(`Nonce: ${_nonce}`)) return res.status(400).json({_error: 'Nonce mismatch'});

    const _token = jwt.sign({_sub: address.toLowerCase(), _chain: 'evm', _chainId}, JWT_SECRET, {_expiresIn: '7d'});
    res.setHeader('Set-Cookie', `web3-session=${_token}; HttpOnly; Path=/; SameSite=Lax; Max-Age=${_7 * 24 * 3600}`);
    return res.status(200).json({_ok: true});
  } catch (e: unknown) {_return res.status(500).json({ error: e?.message || 'Verify failed'});
  }
}