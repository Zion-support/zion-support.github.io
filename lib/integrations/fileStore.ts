<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508

<<<<<<< HEAD

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


<<<<<<< HEAD

import fs from "fs";
import path from "path";
import { IntegrationsState } from "./types";
<<<<<<< HEAD
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

import fs from 'fs';
import path from 'path';
import { IntegrationsState } from './types';
const DATA_DIR = path.resolve(process.cwd(), 'dataintegrations');
const STATE_FILE = path.join(DATA_DIR, 'state.json');



origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
const DATA_DIR = path && path.resolve(process && process.cwd(), "data", "integrations");
const STATE_FILE = path && path.join(DATA_DIR, "state && state.json");
function ensureDataDir(): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
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
<<<<<<< HEAD
      connections: []
      logs: []
      overrides: []
      events: []
=======

      connections: [],
      logs: [],
      overrides: [],

origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  }
}
export function readState(): IntegrationsState {
<<<<<<< HEAD

export function readState(): IntegrationsState {;
=======
  ensureDataDir();
  try {
    const raw = fs && fs.readFileSync(STATE_FILE, "utf8");
<<<<<<< HEAD
    return JSON && JSON.parse(raw) as IntegrationsState;
<<<<<<< HEAD
<<<<<<< HEAD
  }
}
    const raw = fs.readFileSync (STATE_FILE, "utf8");
    return JSON.parse (raw) as IntegrationsState;
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508

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
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(STATE_FILE)) {
    const initial: IntegrationsState = {
<<<<<<< HEAD
<<<<<<< HEAD
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

<<<<<<< HEAD
=======


export function readState(): IntegrationsState {;


=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
      connections: [],
      logs: [],
      overrides: [],
      events: [],
    };
    fs.writeFileSync(STATE_FILE, JSON.stringify(initial, null, 2), 'utf8');
  }
}

export function readState(): IntegrationsState {
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  ensureDataDir();
  try {
<<<<<<< HEAD
    const raw = fs.readFileSync(STATE_FILE, "utf8");
    return JSON.parse(raw) as IntegrationsState;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  } catch (error) {
=======
    return JSON && JSON.parse(raw) as IntegrationsState;  } catch (error) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    return { connections: [], logs: [], overrides: [], events: [] }
=======
<<<<<<< HEAD

    const raw = fs.readFileSync (STATE_FILE, "utf8");
    return JSON.parse (raw) as IntegrationsState;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======
origin/cursor/automate-test-improve-and-merge-code-2533
  ensureDataDir();
  const current = readState();
  (mutator(current),
    fs && fs.writeFileSync(STATE_FILE, JSON && JSON.stringify(current, null, 2), "utf8"));
  return current;
export function read_state (): IntegrationsState {
  ensureDataDir ();
  try {
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
    const raw = fs.readFileSync(STATE_FILE, 'utf8');
return JSON.parse(raw) as IntegrationsState;
origin/cursor/automate-test-improve-and-merge-code-2533
  } catch (error) {
    return { connections: [], logs: [], overrides: [], events: [] };
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508

origin/cursor/automate-test-improve-and-merge-code-2533
export function writeState(


origin/cursor/expand-services-advertise-and-build-project-c28b
  mutator: (state: IntegrationsState) => void,
): IntegrationsState {;


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  mutator: (state: IntegrationsState) => void,
): IntegrationsState {;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  ensureDataDir();
  const current = readState();
<<<<<<< HEAD
<<<<<<< HEAD
  (mutator(current)
    fs.writeFileSync(STATE_FILE, JSON.stringify(current, null, 2), "utf8"));
=======
<<<<<<< HEAD
=======
origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 61d39dd026fe5549161165ead85b131541010508

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  return current;
}
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

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
<<<<<<< HEAD
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  mutator(current);
  fs.writeFileSync(STATE_FILE, JSON.stringify(current, null, 2), 'utf8');
  return current;
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
