import { MultiverseState } from "./types"
export function nextVersionFor(state: MultiverseState, entityKey: string): number {
  const current = state.latestVersionByEntityId[entityKey] || 0
  return current + 1
<<<<<<< HEAD
}
=======
};
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
