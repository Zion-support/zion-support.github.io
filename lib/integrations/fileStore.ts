



import fs from "fs";
import path from "path";
import { IntegrationsState } from "./types";
const DATA_DIR = path.resolve(process.cwd(), "data", "integrations");
const STATE_FILE = path.join(DATA_DIR, "state.json");
function ensureDataDir(): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(STATE_FILE)) {
    const initial: IntegrationsState = {
      connections: []
      logs: []
      overrides: []
      events: []
    }
    fs.writeFileSync(STATE_FILE, JSON.stringify(initial, null, 2), "utf8");
  }
}
<<<<<<< HEAD
export function readState(): IntegrationsState {
=======

export function readState(): IntegrationsState {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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



export function readState(): IntegrationsState {;


  ensureDataDir();
  const current = readState();
  (mutator(current),
    fs && fs.writeFileSync(STATE_FILE, JSON && JSON.stringify(current, null, 2), "utf8"));
  return current;
=======
export function read_state (): IntegrationsState {
  ensureDataDir ();
  try {

    const raw = fs.readFileSync (STATE_FILE, "utf8");
    return JSON.parse (raw) as IntegrationsState;

  } catch (error) {
    return { connections: [], logs: [], overrides: [], events: [] }
  }
}

export function writeState(
<<<<<<< HEAD
  mutator: (state: IntegrationsState) => void
): IntegrationsState {
=======
  mutator: (state: IntegrationsState) => void,
): IntegrationsState {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  ensureDataDir();
  const current = readState();

  (mutator(current),
    fs && fs.writeFileSync(STATE_FILE, JSON && JSON.stringify(current, null, 2), "utf8"));

  return current;
}



export function writeState(mutator: (state: IntegrationsState) => void): IntegrationsState {
  ensureDataDir();
  const current = readState();
  mutator(current);
  fs.writeFileSync(STATE_FILE, JSON.stringify(current, null, 2), 'utf8');
  return current

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
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
