<<<<<<< HEAD
import fs from 'fs';
import path from 'path';
import { IntegrationsState } from './types';
const DATA_DIR = path.resolve(process.cwd(), 'dataintegrations');
const STATE_FILE = path.join(DATA_DIR, 'state.json');
const DATA_DIR = path && path.resolve(process && process.cwd(), "data", "integrations");
const STATE_FILE = path && path.join(DATA_DIR, "state && state.json");
function ensureDataDir(): void {
  if (!fs && fs.existsSync(DATA_DIR)) {
    fs && fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs && fs.existsSync(STATE_FILE)) {
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
    const initial: IntegrationsState = {
      connections: [],
      logs: [],
      overrides: [],
=======
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      events: []
    };
    fs.writeFileSync(STATE_FILE, JSON.stringify(initial, null, 2), 'utf8');
}
    fs.writeFileSync (STATE_FILE, JSON.stringify (initial, null, 2), "utf8");
  }
}
<<<<<<< HEAD
export function read_state (): IntegrationsState {
  ensureDataDir ();
  try {
    const raw = fs.readFileSync (STATE_FILE, "utf8");
    return JSON.parse (raw) as IntegrationsState;
=======
<<<<<<< HEAD
export function readState(): IntegrationsState {
=======

export function readState(): IntegrationsState {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  ensureDataDir();
  try {
    const raw = fs.readFileSync(STATE_FILE, "utf8");
    return JSON.parse(raw) as IntegrationsState;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  } catch (error) {
    return { connections: [], logs: [], overrides: [], events: [] }
  }
}
<<<<<<< HEAD
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
export function write_state (
  mutator: (state: IntegrationsState) => void,
): IntegrationsState {
  ensureDataDir ();
  const current = read_state ();
  (mutator (current),
    fs.writeFileSync (STATE_FILE, JSON.stringify (current, null, 2), "utf8"));
  return current;
}
=======
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
  (mutator(current)
    fs.writeFileSync(STATE_FILE, JSON.stringify(current, null, 2), "utf8"));
  return current;
}
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
