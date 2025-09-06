import { MultiverseState } from "./types"
export function nextVersionFor(state: MultiverseState, entityKey: string): number {
  const current = state.latestVersionByEntityId[entityKey] || 0
  return current + 1
}
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
