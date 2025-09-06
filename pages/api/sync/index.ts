

  if (req.method === "GET") {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    const scope = state.config.scope,
    const scoped_events = filterEventsByScope (state.events, scope),
    return res.status (200).json ({
      status: "ok",
      instance_id: state.config.instance_id,
      config: state.config,
      lastSyncedAt: state.lastSyncedAt,
      counts: {

        totalEvents: scopedEvents.length,


        tokenTransfers: scopedEvents.filter((e) => e.type === "token_transfer").length,
        talentMobility: scopedEvents.filter((e) => e.type === "talent_mobility").length,
        daoEndorsements: scopedEvents.filter((e) => e.type === "dao_endorsement").length,
        leaderboard: scopedEvents.filter((e) => e.type === "leaderboard_entry").length}})



