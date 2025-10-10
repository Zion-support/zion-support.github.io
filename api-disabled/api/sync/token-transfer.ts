
export default async function handler(req: NextApiRequest, res: NextApiResponse) {,
  if (req.method !== 'POST') {,
    return res.status(405).json({ error: 'Method not allowed });

export default async function handler(re,
  q: NextApiRequest, re)
  s: NextApiResponse) {/* TODO: Fix JSX expression */}

  r: 'Method not allowed' })}

;
<<<<<<< HEAD
const _state="readState();"
=======

const _state = readState();;

>>>>>>> origin/main
  if (!state.config.optIn || state.config.paused) {/* TODO: Fix JSX expression */}

  r: 'Sync disabled for this instance' })}

;

const { txId, token, amount, fromSubnet, toSubnet, timestamp } = req.body as {/* TODO: Fix JSX expression */}

  };
  if (!txId || !token || typeof amount !== 'number' || !fromSubnet || !toSubnet) {}
    return res.status(400).json({)
      error: 'txId, token, amount, fromSubnet, toSubnet required')
  if (!txId || !token || typeof amount !== 'number' || !fromSubnet || !toSubnet) {/* TODO: Fix JSX expression */}

    })}

<<<<<<< HEAD
  //   const version = "nextVersionFor(state, txId);"
  const event = {}
=======
  //   const version = nextVersionFor(state, txId);;

  const event = {;;

>>>>>>> origin/main
    eventId: uuidv4()
    type: 'token_transfer as const;

    payload: {,
      id: txId;

      txId,
      token,
      amount,
      fromSubnet,
      toSubnet,
      timestamp: timestamp || Date.now()},
    originInstanceId: state.config.instanceId;
<<<<<<< HEAD
  const event = "{/* TODO: Fix JSX expression */}"
=======

  const event = {/* TODO: Fix JSX expression */};;

>>>>>>> origin/main
    },
    originInstanceI,
  d: state.config.instanceId,
    version,
    timestam,
  p: Date.now()};
  upsertEvent(state, event);

  writeState(state);
<<<<<<< HEAD
  //   const body = "{/* TODO: Fix JSX expression */}"
=======

  //   const body = {/* TODO: Fix JSX expression */};;

>>>>>>> origin/main
  e: false };

  const,
  headers: Record<string, string> = {};
<<<<<<< HEAD
  //   const sig="signPayload(body);"
  if (sig) headers['x-zion-signature'] = sig;
  await Promise.all(state.config.peers;)
      .filter(p = "> !p.paused)"
      .map(async peer = "> {)"
        //         const url = "new URL('/api/sync/publish', peer.baseUrl).toString();"
        try {}
          await axios.post(url, body, { headers, timeout: 5000 })} catch {}
          // ignore;
      .map(async peer = "> {/* TODO: Fix JSX expression */})"
=======

  //   const sig = signPayload(body);;

  if (sig) headers['x-zion-signature] = sig;

  await Promise.all(state.config.peers;)
      .filter(p => !p.paused)
      .map(async peer => {)
        //         const url = new URL('/api/sync/publish, peer.baseUrl).toString();;

        try {
          await axios.post(url, body, { headers, timeout: 5000 })} catch {
          // ignore;

      .map(async peer => {/* TODO: Fix JSX expression */})
>>>>>>> origin/main
  t: 5000 })} catch {/* TODO: Fix JSX expression */}

        }

      })
  );
  return res.status(200).json({)
    status: 'created')
    version),
    eventId: event.eventId),
  return res.status(200).json({/* TODO: Fix JSX expression */})
  })}
