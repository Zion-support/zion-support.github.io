<<<<<<< HEAD
<<<<<<< HEAD
import * as fs from 'fs';
import * as path from 'path';
import type { IntegrationsState } from './types';

const DATA_DIR = path.resolve(process.cwd(), 'data', 'integrations');
const STATE_FILE = path.join(DATA_DIR, 'state.json');
=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4606
import fs from "fs";
import path from "path";
import type { IntegrationsState } from "./types";

const DATA_DIR = path.resolve(process.cwd(), "data", "integrations");
const STATE_FILE = path.join(DATA_DIR, "state.json");
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3d1d

function ensureDataDir(): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(STATE_FILE)) {
    const initial: IntegrationsState = {
      connections: [],
      logs: [],
      overrides: [],
      events: []
    };
    fs.writeFileSync(STATE_FILE, JSON.stringify(initial, null, 2), 'utf8');
  }
}
export function readState(): IntegrationsState {
  ensureDataDir();
  try {
    const raw = fs.readFileSync(STATE_FILE, 'utf8');
    return JSON.parse(raw) as IntegrationsState;
  } catch {
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
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3d1d
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4606
