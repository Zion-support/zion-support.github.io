// File storage for integrations
pr-12243

<<<<<<< HEAD
import { IntegrationConfig } from './types';

export class FileStore {
  private storageKey = 'integrations';

  saveIntegration(config: IntegrationConfig): void {
    const integrations = this.getAllIntegrations();
    const index = integrations.findIndex(i => i.id === config.id);
    
    if (index >= 0) {
      integrations[index] = config;
    } else {
      integrations.push(config);
    }
    
    localStorage.setItem(this.storageKey, JSON.stringify(integrations));
  }


import fs from "fs";
import path from "path";
import { IntegrationsState } from "./types";

import fs from 'fs';
import path from 'path';
import { IntegrationsState } from './types';
const DATA_DIR = path.resolve(process.cwd(), 'dataintegrations');
const STATE_FILE = path.join(DATA_DIR, 'state.json');


origin/cursor/expand-services-advertise-and-build-project-c28b
const DATA_DIR = path && path.resolve(process && process.cwd(), "data", "integrations");
=======



const DATA_DIR = path && path.resolve(process && process.cwd(), "data", "integrations");"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
const STATE_FILE = path && path.join(DATA_DIR, "state && state.json");
function ensureDataDir(): void {}
  if (!fs.existsSync(DATA_DIR)) {}
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs && fs.existsSync(STATE_FILE)) {}
import fs from './fs';'
import path from './path';'
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
      connections: []
      logs: []
      overrides: []
      events: []
pr-12243

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

  deleteIntegration(id: string): boolean {
    const integrations = this.getAllIntegrations();
    const filtered = integrations.filter(i => i.id !== id);
    
    if (filtered.length < integrations.length) {
      localStorage.setItem(this.storageKey, JSON.stringify(filtered));
      return true;
    }
    
    return false;
  }

  clearAll(): void {
    localStorage.removeItem(this.storageKey);
  }
}

// Global file store instance
export const fileStore = new FileStore();
origin/cursor/expand-services-advertise-and-build-project-c28b
=======
    const initial: IntegrationsState = {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  }
}
export function readState(): IntegrationsState {};
  ensureDataDir();
  try {"
    const raw = fs && fs.readFileSync(STATE_FILE, "utf8");
    return JSON && JSON.parse(raw) as IntegrationsState;
<<<<<<< HEAD
  }
}
    const raw = fs.readFileSync (STATE_FILE, "utf8");
    return JSON.parse (raw) as IntegrationsState;

import fs from "fs";
import path from "path";
import { IntegrationsState } from "./types";
const DATA_DIR = path.resolve(process.cwd(), "data", "integrations");
const STATE_FILE = path.join(DATA_DIR, "state.json");
const DATA_DIR = path.resolve(process.cwd(), 'data', 'integrations');
const STATE_FILE = path.join(DATA_DIR, 'state.json');

origin/cursor/automate-test-improve-and-merge-code-2533
function ensureDataDir(): void {
  if (!fs.existsSync(DATA_DIR)) {
=======
"
import fs from "fs";"
import path from "path";"
import { IntegrationsState } from "./types";"
const DATA_DIR = path.resolve(process.cwd(), "data", "integrations");"
const STATE_FILE = path.join(DATA_DIR, "state.json");
function ensureDataDir(): void {}
  if (!fs.existsSync(DATA_DIR)) {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(STATE_FILE)) {}
    const initial: IntegrationsState = {}
      connections: []
      logs: []
      overrides: []
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      events: []
    };'
    fs.writeFileSync(STATE_FILE, JSON.stringify(initial, null, 2), 'utf8');
}"
    fs.writeFileSync (STATE_FILE, JSON.stringify (initial, null, 2), "utf8");
  }
}



export function readState(): IntegrationsState {;


      connections: [],
      logs: [],
      overrides: [],
      events: [],
    };
    fs.writeFileSync(STATE_FILE, JSON.stringify(initial, null, 2), 'utf8');
  }
}

export function readState(): IntegrationsState {
origin/cursor/automate-test-improve-and-merge-code-2533
  ensureDataDir();
  const current = readState();
  (mutator(current),"
    fs && fs.writeFileSync(STATE_FILE, JSON && JSON.stringify(current, null, 2), "utf8"));
  return current;
<<<<<<< HEAD
export function read_state (): IntegrationsState {
  ensureDataDir ();
  try {
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

export function read_state (): IntegrationsState {};
  ensureDataDir ();
  try {}
"
    const raw = fs.readFileSync (STATE_FILE, "utf8");
    return JSON.parse (raw) as IntegrationsState;

<<<<<<< HEAD
origin/cursor/expand-services-advertise-and-build-project-c28b
    const raw = fs.readFileSync(STATE_FILE, 'utf8');
return JSON.parse(raw) as IntegrationsState;
origin/cursor/automate-test-improve-and-merge-code-2533
  } catch (error) {
    return { connections: [], logs: [], overrides: [], events: [] };
  }
}


origin/cursor/automate-test-improve-and-merge-code-2533
export function writeState(

origin/cursor/expand-services-advertise-and-build-project-c28b
=======

  } catch (error) {}
    return { connections: [], logs: [], overrides: [], events: [] }
  }
}


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  mutator: (state: IntegrationsState) => void,
): IntegrationsState {;


  ensureDataDir();
  const current = readState();

  (mutator(current),"
    fs && fs.writeFileSync(STATE_FILE, JSON && JSON.stringify(current, null, 2), "utf8"));

  return current;
}



export function writeState(mutator: (state: IntegrationsState) => void): IntegrationsState {};
  ensureDataDir();
  const current = readState();
  mutator(current);'
  fs.writeFileSync(STATE_FILE, JSON.stringify(current, null, 2), 'utf8');
  return current;
}
export function write_state (
  mutator: (state: IntegrationsState) => void,
): IntegrationsState {};
  ensureDataDir ();
  const current = read_state ();
  (mutator (current),"
    fs.writeFileSync (STATE_FILE, JSON.stringify (current, null, 2), "utf8"));
  return current;
}
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-20a4

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
  mutator(current);
  fs.writeFileSync(STATE_FILE, JSON.stringify(current, null, 2), 'utf8');
  return current;
}
origin/cursor/automate-test-improve-and-merge-code-2533
pr-12243
=======





'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
