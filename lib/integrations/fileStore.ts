// File storage for integrations
import path from 'path';
import fs from 'fs';
 
import { IntegrationsState } from './types';

const DATA_DIR = path.resolve(process.cwd(), 'data', 'integrations');
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
    return { connections: [], logs: [], overrides: [], events: [] };
  }
}

// eslint-disable-next-line no-unused-vars
type StateMutator = (state: IntegrationsState) => void;

export function writeState(mutator: StateMutator): IntegrationsState {
  ensureDataDir();
  const current = readState();
  mutator(current);
  fs.writeFileSync(STATE_FILE, JSON.stringify(current, null, 2), 'utf8');
  return current;
}