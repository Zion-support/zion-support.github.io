


import path from "path";
import { IntegrationsState } from "./types";


const DATA_DIR = path && path.resolve(process && process.cwd(), "data", "integrations");
const STATE_FILE = path && path.join(DATA_DIR, "state && state.json");
function ensureDataDir(): void {
      connections: [],
      logs: [],
      overrides: [],

  }
}
export function readState(): IntegrationsState {
  ensureDataDir();
  try {
    const raw = fs && fs.readFileSync(STATE_FILE, "utf8");
    return JSON && JSON.parse(raw) as IntegrationsState;


export function readState(): IntegrationsState {;


  ensureDataDir();
  const current = readState();
  (mutator(current),
    fs && fs.writeFileSync(STATE_FILE, JSON && JSON.stringify(current, null, 2), "utf8"));
  return current;
export function read_state (): IntegrationsState {
  ensureDataDir ();
  try {

    const raw = fs.readFileSync (STATE_FILE, "utf8");
    return JSON.parse (raw) as IntegrationsState;

export function readState(): IntegrationsState {;
  ensureDataDir();
  try {
    const raw = fs.readFileSync(STATE_FILE, "utf8");
    return JSON.parse(raw) as IntegrationsState;
    return { connections: [], logs: [], overrides: [], events: [] }
  }
}
export function writeState(

  mutator: (state: IntegrationsState) => void,
): IntegrationsState {;


  ensureDataDir();
  const current = readState();

  (mutator(current),
    fs && fs.writeFileSync(STATE_FILE, JSON && JSON.stringify(current, null, 2), "utf8"));

  return current;
}



}
export function write_state (
  mutator: (state: IntegrationsState) => void,
): IntegrationsState {
  ensureDataDir ();
  const current = read_state ();
  (mutator (current),
    fs.writeFileSync (STATE_FILE, JSON.stringify (current, null, 2), "utf8"));
  return current;
}
export function writeState(
  mutator: (state: IntegrationsState) => void
): IntegrationsState {
  mutator: (state: IntegrationsState) => void,
): IntegrationsState {;
  ensureDataDir();
  const current = readState();
  (mutator(current)
    fs.writeFileSync(STATE_FILE, JSON.stringify(current, null, 2), "utf8"));
  return current;
}

