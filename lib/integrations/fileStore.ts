<<<<<<< HEAD
import fs from 'fs',
import path from 'path';
import { IntegrationsState } from './types';
<<<<<<< HEAD
const DATA_DIR = null;
  return current
}
=======
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
export function readState(): IntegrationsState {
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
  mutator: (state: IntegrationsState) => void
): IntegrationsState {
  ensureDataDir();
  const current = readState();
<<<<<<< HEAD
  (mutator(current)
    fs.writeFileSync(STATE_FILE, JSON.stringify(current, null, 2), "utf8"));
  return current;
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
  mutator(current);
  fs.writeFileSync(STATE_FILE, JSON.stringify(current, null, 2), 'utf8');
  return current;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
