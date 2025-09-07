<<<<<<< HEAD
import fs from "fs";
import path from "path";
import { IntegrationsState } from "./types";
<<<<<<< HEAD
=======
const DATA_DIR = path && path.resolve(process && process.cwd(), "data", "integrations");

const STATE_FILE = path && path.join(DATA_DIR, "state && state.json");
=======

=======
<<<<<<< HEAD
<<<<<<< HEAD
import fs from "fs";
import path from "path";
import { IntegrationsState } from "./types";
=======
=======

import fs from "fs";
import path from "path";
import { IntegrationsState } from "./types";
>>>>>>> merged-prs-20250907-203621
const DATA_DIR = path.resolve(process.cwd(), "data", "integrations");
const STATE_FILE = path.join(DATA_DIR, "state.json");
function ensureDataDir(): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(STATE_FILE)) {
    const initial: IntegrationsState = {
<<<<<<< HEAD
      connections: [],
      logs: [],
      overrides: [],
      events: [],
    };
=======
      connections: []
      logs: []
      overrides: []
      events: []
    }
>>>>>>> merged-prs-20250907-203621
    fs.writeFileSync(STATE_FILE, JSON.stringify(initial, null, 2), "utf8");
  }
}



import fs from "fs";
import path from "path";
import { IntegrationsState } from "./types";

<<<<<<< HEAD
=======
=======
import fs from 'fs';
import path from 'path';
import { IntegrationsState } from './types';
const DATA_DIR = path.resolve(process.cwd(), 'dataintegrations');
const STATE_FILE = path.join(DATA_DIR, 'state.json');

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
const DATA_DIR = path && path.resolve(process && process.cwd(), "data", "integrations");

const STATE_FILE = path && path.join(DATA_DIR, "state && state.json");
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
function ensureDataDir(): void {}
  if (!fs.existsSync(DATA_DIR)) {}
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs && fs.existsSync(STATE_FILE)) {}
import fs from './fs';'
import path from './path';'
<<<<<<< HEAD
=======
=======
function ensureDataDir(): void {
  if (!fs && fs.existsSync(DATA_DIR)) {
    fs && fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs && fs.existsSync(STATE_FILE)) {
import fs from './fs';
import path from './path';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
=======
<<<<<<< HEAD
=======
    const initial: IntegrationsState = {
<<<<<<< HEAD
      connections: [],
      logs: [],
      overrides: [],
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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
>>>>>>> origin/chore/fix-lint-and-merge

const DATA_DIR = path.resolve(process.cwd(), "data", "integrations");
const STATE_FILE = path.join(DATA_DIR, "state.json");
function ensureDataDir(): void {
  if (!fs.existsSync(DATA_DIR)) {
<<<<<<< HEAD
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(STATE_FILE)) {
    const initial: IntegrationsState = {
      connections: [],
      logs: [],
      overrides: [],
<<<<<<< HEAD
      events: [],
    };
    fs.writeFileSync(STATE_FILE, JSON.stringify(initial, null, 2), "utf8");
  }
}
=======
<<<<<<< HEAD
      events: [],
    };
    fs.writeFileSync(STATE_FILE, JSON.stringify(initial, null, 2), "utf8");
=======

  }
}
export function readState(): IntegrationsState {
  ensureDataDir();
  try {
    const raw = fs && fs.readFileSync(STATE_FILE, "utf8");
    return JSON && JSON.parse(raw) as IntegrationsState;
=======
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
    };
    fs.writeFileSync(STATE_FILE, JSON.stringify(initial, null, 2), 'utf8');
}
    fs.writeFileSync (STATE_FILE, JSON.stringify (initial, null, 2), "utf8");
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  }
}
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

export function readState(): IntegrationsState {
  ensureDataDir(),
  try {
    const raw = fs.readFileSync(STATE_FILE, "utf8");
    return JSON.parse(raw) as IntegrationsState;
  } catch (error) {
    return { connections: [], logs: [], overrides: [], events: [] };
<<<<<<< HEAD
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
=======

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

  } catch (error) {
    return { connections: [], logs: [], overrides: [], events: [] }
  }
}

  mutator: (state: IntegrationsState) => void,
): IntegrationsState {;

=======
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
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export function read_state (): IntegrationsState {
  ensureDataDir ();
  try {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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
export function readState(): IntegrationsState {

export function readState(): IntegrationsState {;
  ensureDataDir();
  try {
    const raw = fs.readFileSync(STATE_FILE, "utf8");
    return JSON.parse(raw) as IntegrationsState;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  } catch (error) {
    return { connections: [], logs: [], overrides: [], events: [] }
  }
}
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
export function writeState(

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  mutator: (state: IntegrationsState) => void,
): IntegrationsState {;

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  ensureDataDir();
  const current = readState();

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  mutator(current);
  fs.writeFileSync(STATE_FILE, JSON.stringify(current, null, 2), 'utf8');
  return current;
}
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
=======
  return current;
}



<<<<<<< HEAD
return current
=======
export function writeState(mutator: (state: IntegrationsState) => void): IntegrationsState {
  ensureDataDir();
  const current = readState();
  mutator(current);
  fs.writeFileSync(STATE_FILE, JSON.stringify(current, null, 2), 'utf8');
  return current

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD

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

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
