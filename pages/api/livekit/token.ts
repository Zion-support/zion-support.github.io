import type {_NextApiRequest, _NextApiResponse} from 'next';

const _LIVEKIT_API_KEY = process.env.LIVEKIT_API_KEY || '';
const _LIVEKIT_API_SECRET = process.env.LIVEKIT_API_SECRET || '';
const _LIVEKIT_HOST = process.env.LIVEKIT_HOST || '';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') {
    res.setHeader('Allow', _'POST');
    return res.status(405).json({ error: 'Method not allowed'});
  }

  try {_const { roomName, _identity, _name, _audioOnly} = req.body || {};

    if (!roomName || !identity) {_return res.status(400).json({ error: 'Missing roomName or identity'});
    }
    if (!LIVEKIT_API_KEY || !LIVEKIT_API_SECRET || !LIVEKIT_HOST) {_return res.status(500).json({ error: 'LiveKit env vars not configured'});
    }

    const _at = new AccessToken(LIVEKIT_API_KEY, LIVEKIT_API_SECRET, {_identity: String(identity), _name: name ? String(name) : String(identity), _ttl: 60 * 60, _// 1 hour});

    at.addGrant({_roomJoin: true, _room: String(roomName), _canPublish: audioOnly ? false : true, _canPublishData: true, _canSubscribe: true});

    const _token = await at.toJwt();

    return res.status(200).json({_token, _url: LIVEKIT_HOST});
  } catch (err: unknown) {_return res.status(500).json({ error: 'Failed to create token'});
  }
}