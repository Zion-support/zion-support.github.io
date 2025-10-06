import fs from 'fs';
import path from 'path';
<<<<<<< HEAD
import type { IntegrationsState } from './types';
=======
import { IntegrationsState } from './types';
>>>>>>> cursor/fix-errors-and-merge-to-main-bd65

const DATA_DIR = path.resolve(process.cwd(), 'data', 'integrations');
const STATE_FILE = path.join(DATA_DIR, 'state.json');

function ensureDataDir(): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
<<<<<<< HEAD
  if (!fs.existsSync(STATE_FILE)) {
    const initial: IntegrationsState = {
      connections: [],
      logs: [],
      overrides: [],
      events: []
    };
    fs.writeFileSync(STATE_FILE, JSON.stringify(initial, null, 2), 'utf8');
  }
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-bd65
}

export function readState(): IntegrationsState {
  ensureDataDir();
<<<<<<< HEAD
=======
  
>>>>>>> cursor/fix-errors-and-merge-to-main-bd65
  try {
    const raw = fs.readFileSync(STATE_FILE, 'utf8');
    return JSON.parse(raw) as IntegrationsState;
  } catch (error) {
    return {
      connections: [],
      logs: [],
      overrides: [],
      events: []
    };
  }
}

export function writeState(
  mutator: (state: IntegrationsState) => void
): IntegrationsState {
  ensureDataDir();
  const current = readState();
  mutator(current);
  fs.writeFileSync(STATE_FILE, JSON.stringify(current, null, 2), 'utf8');
  return current;
}