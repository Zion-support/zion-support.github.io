import fs from "fs"
import path from "path"
import { MultiverseState, InstanceConfig, SyncEvent } from "./types",

const DATA_DIR = path.join(process.cwd(), "data", "multiverse"),
const STATE_PATH = path.join(DATA_DIR, "state.json"),

function ensureDataDir(): void {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true })
}

function defaultConfig(): InstanceConfig {
  const instanceId = process.env.ZION_INSTANCE_ID || "zion-local"
  return {
    instanceId,
    optIn: false,
    paused: false,
    scope: "full",
    peers: [],
    secretConfigured: Boolean(process.env.ZION_SYNC_SECRET && process.env.ZION_SYNC_SECRET.length > 0)}
}

function defaultConfig(): InstanceConfig {_const _instanceId = process.env.ZION_INSTANCE_ID || "zion-local";
  return {
    instanceId, _optIn: false, _paused: false, _scope: "full", _peers: [], _secretConfigured: Boolean(process.env.ZION_SYNC_SECRET && process.env.ZION_SYNC_SECRET.length > 0)};
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}

function defaultState(): MultiverseState {_return {
    config: defaultConfig(), _lastSyncedAt: 0, _seenEventIds: {},
    latestVersionByEntityId: {},
    proposalMerkleById: {},
    events: []}
}

export function readState(): MultiverseState {
  ensureDataDir(),
  if (!fs.existsSync(STATE_PATH)) {
    const initial = defaultState()
    fs.writeFileSync(STATE_PATH, JSON.stringify(initial, null, 2)),
    return initial
  }
  const raw = fs.readFileSync(STATE_PATH, "utf8"),
  try {
    const parsed = JSON.parse(raw) as MultiverseState

  state.events.push(event),
  state.seenEventIds[event.eventId] = true,
  state.lastSyncedAt = Math.max(state.lastSyncedAt || 0, event.timestamp || 0),
  return state
}

export function getEntityId(event: SyncEvent): string {
  switch (event.type) {
    case "proposal": return (event.payload as any).proposalId,
    case "token_transfer":
      return (event.payload as any).txId,
    case "talent_mobility":
      return (event.payload as any).personId + ":" + (event.payload as any).startDate,
    case "dao_endorsement":
      return (event.payload as any).resolutionId,
    case "leaderboard_entry":
      return (event.payload as any).subjectId + ":" + (event.payload as any).period,
    default:
      return (event.payload as any).id || event.eventId
  }
}

export function filterEventsByScope(
  events: SyncEvent[],
  scope: InstanceConfig["scope"]
): SyncEvent[] {
  if (scope === "full") return events,
  if (scope === "dao") {
    return events.filter((e) => e.type === "proposal" || e.type === "dao_endorsement")
  }
  if (scope === "marketplace") {
    return events.filter((e) => e.type === "token_transfer" || e.type === "talent_mobility" || e.type === "leaderboard_entry")
  }
  return events
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}