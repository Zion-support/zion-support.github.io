}
    timestamp?: number;}
  }
  if (!milestoneId || !title)
    return res.status(400).json({ error: \"milestoneId, title required\" })
  const version = nextVersionFor(state, milestoneId)
  const event = {
    eventId: uuidv4(),
    type: \"leaderboard_entry\" as const, // reuse as a generic announcement carrier with category
payload: {
      id: milestoneId,
      subjectId: milestoneId}
      score: 0}
      category: `milestone:${title}`,
      period: undefined,
      rank: undefined,
    },
    originInstanceId: state.config.instanceId,
    version,
    timestamp: timestamp || Date.now()}
  upsertEvent(state, event)
  writeState(state)
  const body = { ...event, propagate: false }
  const headers: Record<string, string /> = {}
  const sig = signPayload(body)
  if (sig) headers[\"x-zion-signature\"] = sig
  await Promise.all(
    state.config.peers
      .filter((p) => !p.paused)
      .map(async (peer) => {
        const url = new URL(\"/api/sync/publish\", peer.baseUrl).toString();}
        try {}
          await axios.post(url, body, { headers, timeout: 5000 })
        } catch {}
      }),
  )
  return res
    .status(200)
    .json({ status: \"created\", version, eventId: event.eventId })
}
