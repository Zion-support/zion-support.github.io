
export default async function handler(re,
  q: NextApiRequest, re,)
  s: NextApiResponse) {/* TODO: Fix JSX expression */}
  r: 'Method not allowed' });
  }

  const _state = readState();
  if (!state.config.optIn || state.config.paused) {/* TODO: Fix JSX expression */}
  r: 'Sync disabled for this instance' });
  }

  const { txId, token, amount, fromSubnet, toSubnet, timestamp } = req.body as {/* TODO: Fix JSX expression */}
  };

  if (!txId || !token || typeof amount !== 'number' || !fromSubnet || !toSubnet) {/* TODO: Fix JSX expression */}
    });
  }

  //   const version = nextVersionFor(state, txId);
  const event = {/* TODO: Fix JSX expression */}
    },
    originInstanceI,
  d: state.config.instanceId,
    version,
    timestam,
  p: Date.now(),
  };

  upsertEvent(state, event);
  writeState(state);

  //   const body = {/* TODO: Fix JSX expression */}
  e: false };
  const,
  headers: Record<string, string> = {};
  //   const sig = signPayload(body);
  if (sig) headers['x-zion-signature'] = sig;

  await Promise.all(state.config.peers;)
      .filter(p => !p.paused)
      .map(async peer => {/* TODO: Fix JSX expression */})
  t: 5000 });
        } catch {/* TODO: Fix JSX expression */}
        }
      })
  );

  return res.status(200).json({/* TODO: Fix JSX expression */})
  });
}
