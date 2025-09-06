<<<<<<< HEAD
<<<<<<< HEAD
import fs from 'fs',
import path from 'path';
import { IntegrationsState } from './types';
<<<<<<< HEAD
const DATA_DIR = null;
  return current
}
=======

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import fs from "fs";
import path from "path";
import { IntegrationsState } from "./types";
const DATA_DIR = path.resolve(process.cwd(), "data", "integrations");
const STATE_FILE = path.join(DATA_DIR, "state.json");
=======

const DATA_DIR = path.resolve(process.cwd(), 'data', 'integrations');
const STATE_FILE = path.join(DATA_DIR, 'state.json');

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
function ensureDataDir(): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(STATE_FILE)) {
    const initial: IntegrationsState = {
<<<<<<< HEAD
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
    const raw = fs.readFileSync(STATE_FILE, "utf8");
    return JSON.parse(raw) as IntegrationsState;
  } catch (error) {
    return { connections: [], logs: [], overrides: [], events: [] }
  }
}
=======
      connections: [],
      logs: [],
      overrides: [],
      events: [],
    };
    fs.writeFileSync(STATE_FILE, JSON.stringify(initial, null, 2), 'utf8');
  }
}
}

export function readState(): IntegrationsState {
  ensureDataDir();
  try {
    const raw = fs.readFileSync(STATE_FILE, 'utf8');
    return JSON.parse(raw) as IntegrationsState;
  } catch (error) {
    return { connections: [], logs: [], overrides: [], events: [] };
  }
}
}
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
<<<<<<< HEAD
  (mutator(current)
    fs.writeFileSync(STATE_FILE, JSON.stringify(current, null, 2), "utf8"));
  return current;
}
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
  mutator(current);
  fs.writeFileSync(STATE_FILE, JSON.stringify(current, null, 2), 'utf8');
  return current;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
