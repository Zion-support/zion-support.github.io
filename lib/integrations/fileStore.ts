import fs from 'fs';
import path from 'path';

const _DATA_DIR = path.resolve(process.cwd(), 'data', 'integrations');
const _STATE_FILE = path.join(DATA_DIR, 'state.json');

function ensureDataDir(): void {_if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, _{ recursive: true});
  }
  if (!fs.existsSync(STATE_FILE)) {_const initial: IntegrationsState = {
      connections: [], _logs: [], _overrides: [], _events: []};
    fs.writeFileSync(STATE_FILE, JSON.stringify(initial, null, 2), 'utf8');
  }
}

export function readState(): IntegrationsState {_ensureDataDir();
  try {
    const _raw = fs.readFileSync(STATE_FILE, _'utf8');
    return JSON.parse(raw) as IntegrationsState;} catch (error) {_return { connections: [], _logs: [], _overrides: [], _events: []};
  }
}

export function writeState(_mutator: (state: IntegrationsState) => void): IntegrationsState {_ensureDataDir();
  const _current = readState();
  mutator(current);
  fs.writeFileSync(STATE_FILE, _JSON.stringify(current, _null, _2), _'utf8');
  return current;}