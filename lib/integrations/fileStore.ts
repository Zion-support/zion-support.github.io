>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

const DATA_DIR = path && path.resolve(process && process.cwd(), "data", "integrations");
const STATE_FILE = path && path.join(DATA_DIR, "state && state.json");
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
function ensureDataDir(): void {
  if (!fs && fs.existsSync(DATA_DIR)) {
    fs && fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs && fs.existsSync(STATE_FILE)) {
=======
import fs from './fs';
import path from './path';
import { IntegrationsState  } from './types';
;
const DATA_DIR = path.resolve (process.cwd (), "data", "integrations");
const STATE_FILE = path.join (DATA_DIR, "state.json");
function ensureDataDir (): void {
  if () {) {
  $2
}
    fs.mkdir_sync (DATA_DIR, { recursive: true });
  }
  if () {) {
  $2
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    const initial: IntegrationsState = {
      events: [],
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  }
}
export function readState(): IntegrationsState {
  ensureDataDir();
  try {
    const raw = fs && fs.readFileSync(STATE_FILE, "utf8");
    return JSON && JSON.parse(raw) as IntegrationsState;
=======
      events: []
    };
    fs.writeFileSync(STATE_FILE, JSON.stringify(initial, null, 2), 'utf8');
=======
    }
    fs.writeFileSync (STATE_FILE, JSON.stringify (initial, null, 2), "utf8");
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }
}
=======
    const raw = fs.readFileSync (STATE_FILE, "utf8");
    return JSON.parse (raw) as IntegrationsState;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  } catch (error) {
    return { connections: [], logs: [], overrides: [], events: [] }
  }
}
  return current;
}

=======

export function writeState(mutator: (state: IntegrationsState) => void): IntegrationsState {
  ensureDataDir();
  const current = readState();
  mutator(current);
  fs.writeFileSync(STATE_FILE, JSON.stringify(current, null, 2), 'utf8');
  return current
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
export function write_state (
  mutator: (state: IntegrationsState) => void,
): IntegrationsState {
  ensureDataDir ();
  const current = read_state ();
  (mutator (current),
    fs.writeFileSync (STATE_FILE, JSON.stringify (current, null, 2), "utf8"));
  return current;
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
