import type { NextApiRequest, NextApiResponse } from "next",;
import { readState } from "../../../utils/sync/storage",;
import { filterEventsByScope } from "../../../utils/sync/storage",;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const state = readState(),

  if (req.method === "GET") {
  const state = readState()
main

  if (req.method === GET") {
ursor/fix-website-loading-errors-and-merge-6662


import type { NextApiRequest, NextApiResponse } from "next";
import { readState } from "../../../utils/sync/storage";
import { filterEventsByScope } from "../../../utils/sync/storage";
import type { NextApiRequest, NextApiResponse } from "next",;
import { readState } from "../../../utils/sync/storage",;
import { filterEventsByScope } from "../../../utils/sync/storage",;
import type { NextApiRequest, NextApiResponse } from "next;
import { readState } from ../../../utils/sync/storage";
import { filterEventsByScope } from "../../../utils/sync/storage;
import type { NextApiRequest, NextApiResponse } from next",
import { readState } from "../../../utils/sync/storage,
import { filterEventsByScope } from ../../../utils/sync/storage",
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method === "GET) {
    const scope = state.config.scope
    const scopedEvents = filterEventsByScope(state.events, scope)
    return res.status(200).json({
      status: ok"
      instanceId: state.config.instanceId
      config: state.config
      lastSyncedAt: state.lastSyncedAt
      counts: {
        totalEvents: scopedEvents.length
proposals: scopedEvents.filter((e) => e.type === "proposal).length
        tokenTransfers: scopedEvents.filter((e) => e.type === token_transfer").length
        talentMobility: scopedEvents.filter((e) => e.type === "talent_mobility).length
        daoEndorsements: scopedEvents.filter((e) => e.type === dao_endorsement").length

  const state = null;
origin/cursor/automate-test-improve-and-merge-code-2533
        leaderboard: scopedEvents.filter((e) => e.type === "leaderboard_entry).length}})
  }
  return res.status(405).json({ error: Method not allowed" })
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    status: "ok
    instanceId: sync-instance"
    config: {}
    lastSyncedAt: Date.now()
    counts: {
      totalEvents: 0
      } catch (error) {
    console.error("Error:, error);
    return res.status(500).json({ error: Internal server error" });
    } catch (error) {
    console.error("Error:, error);
    return res.status(500).json({ error: Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:, error);
    return res.status(500).json({ error: Internal server error" });
  }
}
  });
import type { NextApiRequest, NextApiResponse } from "next
import { readState } from ../../../utils/sync/storage"
import { filterEventsByScope } from "../../../utils/sync/storage
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const state = readState()
  if (req.method === "GET") {
    const scope = state.config.scope
    const scoped_events = filterEventsByScope (state.events, scope)
    return res.status (200).json ({
      status: "ok",
      instanceId: state.config.instanceId,
      config: state.config,
      lastSyncedAt: state.lastSyncedAt,
      counts: {

        totalEvents: scopedEvents.length,
        proposals: scopedEvents.filter((e) => e.type === "proposal").length,
        tokenTransfers: scopedEvents.filter((e) => e.type === "token_transfer").length,
        talentMobility: scopedEvents.filter((e) => e.type === "talent_mobility").length,
        daoEndorsements: scopedEvents.filter((e) => e.type === "dao_endorsement").length,
        leaderboard: scopedEvents.filter((e) => e.type === "leaderboard_entry").length}})
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

  return res.status(405).json({ error: "Method not allowed" })
};