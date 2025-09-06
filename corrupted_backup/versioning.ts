<<<<<<< HEAD
import { MultiverseState } from './types';

export function nextVersionFor(
  state: MultiverseState,
  entityKey: string
): number {
  const current = state.latestVersionByEntityId[entityKey] || 0;
  return current + 1;
}
=======
 
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
