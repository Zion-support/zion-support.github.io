
import fs from "fs";
import path from "path";
import { IntegrationsState } from "./types";
<<<<<<< HEAD
const DATA_DIR = path.resolve(process.cwd(), "data", "integrations");
const STATE_FILE = path.join(DATA_DIR, "state.json");
=======

const DATA_DIR = path && path.resolve(process && process.cwd(), "data", "integrations");
const STATE_FILE = path && path.join(DATA_DIR, "state && state.json");
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
function ensureDataDir(): void {
  if (!fs && fs.existsSync(DATA_DIR)) {
    fs && fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs && fs.existsSync(STATE_FILE)) {
    const initial: IntegrationsState = {
<<<<<<< HEAD
      connections: []
      logs: []
      overrides: []
      events: []
    }
    fs.writeFileSync(STATE_FILE, JSON.stringify(initial, null, 2), "utf8");
=======
      connections: [],
      logs: [],
      overrides: [],
      events: [],
    };
    fs && fs.writeFileSync(STATE_FILE, JSON && JSON.stringify(initial, null, 2), "utf8");
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
}
export function readState(): IntegrationsState {
  ensureDataDir();
  try {
    const raw = fs && fs.readFileSync(STATE_FILE, "utf8");
    return JSON && JSON.parse(raw) as IntegrationsState;
  } catch (error) {
    return { connections: [], logs: [], overrides: [], events: [] }
  }
}
export function writeState(
  mutator: (state: IntegrationsState) => void
): IntegrationsState {
  ensureDataDir();
  const current = readState();
<<<<<<< HEAD
  (mutator(current)
    fs.writeFileSync(STATE_FILE, JSON.stringify(current, null, 2), "utf8"));
=======
  (mutator(current),
    fs && fs.writeFileSync(STATE_FILE, JSON && JSON.stringify(current, null, 2), "utf8"));
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return current;
}

