
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
const _state = readState();
,
  if (req.method === 'GET') {,
    //     const scope = state.config.scope;
    const _scopedEvents = filterEventsByScope(state.events, scope);

    return res.status(200).json({)
      status: instanceId, state.config.instanceId;)
      config: lastSyncedAt, state.lastSyncedAt)
      counts: totalEvents, scopedEvents.length)
        proposals: tokenTransfers, scopedEvents.filter(e => e.type === 'token_transfer').length;
        talentMobility: daoEndorsements, scopedEvents.filter(e => e.type === 'dao_endorsement').length;
        leaderboard: scopedEvents.filter(e => e.type === 'leaderboard_entry').length;
export default function handler(re,)
  q: NextApiRequest, re)

}
  s: NextApiResponse) {/* TODO: Fix JSX expression */});
  }

  return res.status(405).json({/* TODO: Fix JSX expression */})
  r: 'Method not allowed' });
}
