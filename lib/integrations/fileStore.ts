import fs from 'fs';
import path from 'path';
import { IntegrationsState } from './types';
<<<<<<< HEAD

const DATA_DIR = path.resolve(process.cwd(), 'data', 'integrations');
=======
const DATA_DIR = path.resolve(process.cwd(), 'dataintegrations');
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
const STATE_FILE = path.join(DATA_DIR, 'state.json');

function ensureDataDir(): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(STATE_FILE)) {
    const initial: IntegrationsState = {
      connections: [],
      logs: [],
      overrides: [],
<<<<<<< HEAD
      events: [],
    };
    fs.writeFileSync(STATE_FILE, JSON.stringify(initial, null, 2), 'utf8');
  }
=======
      events: []
    };
    fs.writeFileSync(STATE_FILE, JSON.stringify(initial, null, 2), 'utf8');
  }
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88

export function readState(): IntegrationsState {
  ensureDataDir();
  try {
    const raw = fs.readFileSync(STATE_FILE, 'utf8');
<<<<<<< HEAD
    return JSON.parse(raw) as IntegrationsState;
  } catch (error) {
    return { connections: [], logs: [], overrides: [], events: [] };
  }
}

export function writeState(
  mutator: (state: IntegrationsState) => void
): IntegrationsState {
=======
    return JSON.parse(raw) as IntegrationsState
  } catch (error) {
    return { connections: [], logs: [], overrides: [], events: [] }
  }
}

export function writeState(mutator: (state: IntegrationsState) => void): IntegrationsState {
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  ensureDataDir();
  const current = readState();
  mutator(current);
  fs.writeFileSync(STATE_FILE, JSON.stringify(current, null, 2), 'utf8');
<<<<<<< HEAD
  return current;
=======
  return current
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
