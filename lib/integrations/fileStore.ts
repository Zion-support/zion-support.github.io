<<<<<<< HEAD
// File storage for integrations
pr-12243
=======
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

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
<<<<<<< HEAD
=======

=======



>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
      connections: []
      logs: []
      overrides: []
      events: []
pr-12243
=======
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

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

<<<<<<< HEAD
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
=======
=======
      connections: []
      logs: []
      overrides: []
      events: []
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  }
}
    const raw = fs.readFileSync (STATE_FILE, "utf8");
    return JSON.parse (raw) as IntegrationsState;
<<<<<<< HEAD
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

import fs from "fs";
import path from "path";
import { IntegrationsState } from "./types";
const DATA_DIR = path.resolve(process.cwd(), "data", "integrations");
const STATE_FILE = path.join(DATA_DIR, "state.json");
<<<<<<< HEAD
const DATA_DIR = path.resolve(process.cwd(), 'data', 'integrations');
const STATE_FILE = path.join(DATA_DIR, 'state.json');

origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
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
<<<<<<< HEAD
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


=======
  if (!fs.existsSync(STATE_FILE)) {
    const initial: IntegrationsState = {
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
=======
      connections: []
      logs: []
      overrides: []
      events: []
    };
    fs.writeFileSync(STATE_FILE, JSON.stringify(initial, null, 2), 'utf8');
}
    fs.writeFileSync (STATE_FILE, JSON.stringify (initial, null, 2), "utf8");
  }
}



export function readState(): IntegrationsState {;


>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
  ensureDataDir();
  const current = readState();
  (mutator(current),"
    fs && fs.writeFileSync(STATE_FILE, JSON && JSON.stringify(current, null, 2), "utf8"));
  return current;
<<<<<<< HEAD
export function read_state (): IntegrationsState {
  ensureDataDir ();
  try {
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    const raw = fs.readFileSync(STATE_FILE, 'utf8');
return JSON.parse(raw) as IntegrationsState;
origin/cursor/automate-test-improve-and-merge-code-2533
=======

    const raw = fs.readFileSync (STATE_FILE, "utf8");
    return JSON.parse (raw) as IntegrationsState;

>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
  } catch (error) {
    return { connections: [], logs: [], overrides: [], events: [] }
  }
}

<<<<<<< HEAD

origin/cursor/automate-test-improve-and-merge-code-2533
export function writeState(

origin/cursor/expand-services-advertise-and-build-project-c28b
=======
<<<<<<< HEAD

  } catch (error) {}
    return { connections: [], logs: [], overrides: [], events: [] }
  }
}


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  mutator: (state: IntegrationsState) => void,
): IntegrationsState {;


  ensureDataDir();
  const current = readState();
<<<<<<< HEAD

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
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  mutator(current);
  fs.writeFileSync(STATE_FILE, JSON.stringify(current, null, 2), 'utf8');
  return current;
}
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
pr-12243
=======





'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
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

>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
