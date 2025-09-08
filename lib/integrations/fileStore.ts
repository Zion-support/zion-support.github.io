<<<<<<< HEAD



const DATA_DIR = path && path.resolve(process && process.cwd(), "data", "integrations");

const STATE_FILE = path && path.join(DATA_DIR, "state && state.json");

function ensureDataDir(): void {
  if (!fs && fs.existsSync(DATA_DIR)) {
    fs && fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs && fs.existsSync(STATE_FILE)) {
import fs from './fs';
import path from './path';
=======
import fs from "fs";
import path from "path";
import { IntegrationsState } from "./types";
>>>>>>> origin/cursor/delete-old-data-records-6bba

import { IntegrationsState  } from './types';
;"
const DATA_DIR = path.resolve (process.cwd (), "data", "integrations");"
const STATE_FILE = path.join (DATA_DIR, "state.json");
function ensureDataDir (): void {}
  if () {) {}
  $2;
}
    fs.mkdir_sync (DATA_DIR, { recursive: true });
  }
  if () {) {}
  $2;
}

<<<<<<< HEAD
    const initial: IntegrationsState = {

=======

  getIntegration(id: string): IntegrationConfig | null {
    const integrations = this.getAllIntegrations();
    return integrations.find(i => i.id === id) || null;
  }

  getAllIntegrations(): IntegrationConfig[] {
    try {
      const stored = localStorage.getItem(this.storageKey);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  }

  }
}

// Global file store instance
export const fileStore = new FileStore();
origin/cursor/expand-services-advertise-and-build-project-c28b

  }
}
export function readState(): IntegrationsState {};
  ensureDataDir();
  try {"
    const raw = fs && fs.readFileSync(STATE_FILE, "utf8");
    return JSON && JSON.parse(raw) as IntegrationsState;

  }
}
    const raw = fs.readFileSync (STATE_FILE, "utf8");
    return JSON.parse (raw) as IntegrationsState;

import fs from "fs";
import path from "path";
import { IntegrationsState } from "./types";
const DATA_DIR = path.resolve(process.cwd(), "data", "integrations");
const STATE_FILE = path.join(DATA_DIR, "state.json");
>>>>>>> origin/cursor/delete-old-data-records-6bba

const DATA_DIR = path.resolve(process.cwd(), "data", "integrations");
const STATE_FILE = path.join(DATA_DIR, "state.json");
function ensureDataDir(): void {
  if (!fs.existsSync(DATA_DIR)) {
<<<<<<< HEAD


  }
}
export function readState(): IntegrationsState {
  ensureDataDir();
  try {
    const raw = fs && fs.readFileSync(STATE_FILE, "utf8");
    return JSON && JSON.parse(raw) as IntegrationsState;

  }
}

=======
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(STATE_FILE)) {
    const initial: IntegrationsState = {
      connections: [],
      logs: [],
      overrides: [],

      events: [],
    };
    fs.writeFileSync(STATE_FILE, JSON.stringify(initial, null, 2), "utf8");
  }
}
>>>>>>> origin/cursor/delete-old-data-records-6bba

export function readState(): IntegrationsState {
  ensureDataDir(),
  try {
    const raw = fs.readFileSync(STATE_FILE, "utf8");
    return JSON.parse(raw) as IntegrationsState;
  } catch (error) {
    return { connections: [], logs: [], overrides: [], events: [] };
  }
}

export function writeState(
  mutator: (state: IntegrationsState) => void,
): IntegrationsState {
  ensureDataDir();
  const current = readState();
  (mutator(current),
    fs.writeFileSync(STATE_FILE, JSON.stringify(current, null, 2), "utf8"));
  return current;
}
<<<<<<< HEAD

=======
export function read_state (): IntegrationsState {
  ensureDataDir ();
  try {
>>>>>>> origin/cursor/delete-old-data-records-6bba

    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

      events: []
    };'
    fs.writeFileSync(STATE_FILE, JSON.stringify(initial, null, 2), 'utf8');
}"
    fs.writeFileSync (STATE_FILE, JSON.stringify (initial, null, 2), "utf8");
  }
}

export function readState(): IntegrationsState {;

<<<<<<< HEAD


=======
export function readState(): IntegrationsState {

export function readState(): IntegrationsState {;
  ensureDataDir();
  try {
    const raw = fs.readFileSync(STATE_FILE, "utf8");
    return JSON.parse(raw) as IntegrationsState;
>>>>>>> origin/cursor/delete-old-data-records-6bba
  } catch (error) {
    return { connections: [], logs: [], overrides: [], events: [] }
  }
}
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  mutator: (state: IntegrationsState) => void,
): IntegrationsState {;

  ensureDataDir();
  const current = readState();

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b


<<<<<<< HEAD
  return current;
}







=======
  mutator(current);
  fs.writeFileSync(STATE_FILE, JSON.stringify(current, null, 2), 'utf8');
  return current;
}
origin/cursor/automate-test-improve-and-merge-code-2533


>>>>>>> origin/cursor/delete-old-data-records-6bba
