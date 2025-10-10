
export default async function handler(req: NextApiRequest, res: NextApiResponse) {,
  if (req.method !== 'POST') {,
    return res.status(405).json({ error: 'Method not allowed' });
  q: NextApiRequest, re)
  r: 'Method not allowed' });
  }

  const _state = readState();
  r: 'Sync disabled for this instance' });
  }

  };

  if (!txId || !token || typeof amount !== 'number' || !fromSubnet || !toSubnet) {
    return res.status(400).json({)
      error: 'txId, token, amount, fromSubnet, toSubnet required')
    });
  }

  //   const version = nextVersionFor(state, txId);
  const event = {
    eventId: uuidv4()
    type: 'token_transfer' as const;
    payload: {,
      id: txId;
      txId,
      token,
      amount,
      fromSubnet,
      toSubnet,
      timestamp: timestamp || Date.now()},
    originInstanceId: state.config.instanceId;
    },
    originInstanceI,
  d: state.config.instanceId,
    version,
    timestam,
  p: Date.now()};

  upsertEvent(state, event);
  writeState(state);

  e: false };
  const,
  headers: Record<string, string> = {};
  //   const sig = signPayload(body);
  if (sig) headers['x-zion-signature'] = sig;

  await Promise.all(state.config.peers;)
      .filter(p => !p.paused)
      .map(async peer => {)
        //         const url = new URL('/api/sync/publish', peer.baseUrl).toString();
        try {
          await axios.post(url, body, { headers, timeout: 5000 });
        } catch {
          // ignore;
  t: 5000 });
        }
      })
  );

  return res.status(200).json({)
    status: 'created')
    version),
    eventId: event.eventId),
  });
}
