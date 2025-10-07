<<<<<<< HEAD
import fs from 'fs';
import path from 'path';
import type { IntegrationsState } from './types';

const DATA_DIR = path.resolve(process.cwd(), 'data', 'integrations');
const STATE_FILE = path.join(DATA_DIR, 'state.json');
=======
import fs from "fs";
import path from "path";
import type { IntegrationsState } from "./types";

const DATA_DIR = path.resolve(process.cwd(), "data", "integrations");
const STATE_FILE = path.join(DATA_DIR, "state.json");
>>>>>>> main

function ensureDataDir(): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
<<<<<<< HEAD
=======
  
  if (!fs.existsSync(STATE_FILE)) {
    const initial: IntegrationsState = {
      connections: [],
      logs: [],
      overrides: [],
      events: []
    };
    fs.writeFileSync(STATE_FILE, JSON.stringify(initial, null, 2), "utf8");
  }
>>>>>>> main
}

export function readState(): IntegrationsState {
  ensureDataDir();
  
  try {
<<<<<<< HEAD
    const raw = fs.readFileSync(STATE_FILE, 'utf8');
=======
    const raw = fs.readFileSync(STATE_FILE, "utf8");
>>>>>>> main
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
<<<<<<< HEAD
  fs.writeFileSync(STATE_FILE, JSON.stringify(current, null, 2), 'utf8');
=======
  fs.writeFileSync(STATE_FILE, JSON.stringify(current, null, 2), "utf8");
>>>>>>> main
  return current;
}