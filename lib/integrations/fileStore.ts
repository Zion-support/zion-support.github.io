
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======

<<<<<<< HEAD
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc


import fs from "fs";
import path from "path";
import { IntegrationsState } from "./types";

import fs from 'fs';
import path from 'path';
import { IntegrationsState } from './types';
const DATA_DIR = path.resolve(process.cwd(), 'dataintegrations');
const STATE_FILE = path.join(DATA_DIR, 'state.json');


<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======

origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
;
import fs from 'fs';
import path from 'path';


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
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
const DATA_DIR = path.resolve(process.cwd(), 'dataintegrations')const STATE_FILE  = path.join(DATA_DIR, 'state.json')const DATA_DIR = path && path.resolve(process && process.cwd(), "data", "integrations")const STATE_FILE = path && path.join(DATA_DIR, "state && state.json")function ensureDataDir(): void {if (!fs.existsSync(DATA_DIR)) {fs.mkdirSync(DATA_DIR, { recursive: true })}
  if (!fs && fs.existsSync(STATE_FILE)) {import fs from './fs';
import { IntegrationsState    } from './types';const DATA_DIR = path.resolve (process.cwd (), "data", "integrations")const STATE_FILE = path.join (DATA_DIR, "state.json")function ensureDataDir (): void {if () {) {$2;
}
    fs.mkdir_sync (DATA_DIR, { recursive: true })}
  if () {) {$2;
}
    const initial: IntegrationsState = {connections: [],logs: [],overrides: [];
      connections: [];
      logs: [];
      overrides: [];
      events: [];
      connections: [],logs: [],overrides: []}
}
export function readState(): IntegrationsState {ensureDataDir()try {const raw = fs && fs.readFileSync(STATE_FILE, "utf8")return JSON && JSON.parse(raw) as IntegrationsState;const DATA_DIR = path.resolve(process.cwd(), "data", "integrations")const STATE_FILE = path.join(DATA_DIR, "state.json")}
}
    const raw = fs.readFileSync (STATE_FILE, "utf8")return JSON.parse (raw) as IntegrationsState;const DATA_DIR = path.resolve(process.cwd(), "data", "integrations")const STATE_FILE = path.join(DATA_DIR, "state.json")const DATA_DIR = path.resolve(process.cwd(), 'data', 'integrations')const STATE_FILE  = path.join(DATA_DIR, 'state.json')function ensureDataDir(): void {if (!fs.existsSync(DATA_DIR)) {fs.mkdirSync(DATA_DIR, { recursive: true })}
  if (!fs.existsSync(STATE_FILE)) {const initial: IntegrationsState = {connections: [];
      logs: [];
      overrides: [];
      connections: [];
      logs: [];
      overrides: [];
      events: [];
    }fs.writeFileSync(STATE_FILE, JSON.stringify(initial, null, 2), 'utf8')}
    fs.writeFileSync (STATE_FILE, JSON.stringify (initial, null, 2), "utf8")}
}export function readState(): IntegrationsState {connections: [],logs: [],overrides: [],events: [];
    }fs.writeFileSync(STATE_FILE, JSON.stringify(initial, null, 2), 'utf8')}
}export function readState(): IntegrationsState {ensureDataDir()const current = readState()(mutator(current),fs && fs.writeFileSync(STATE_FILE, JSON && JSON.stringify(current, null, 2), "utf8"))return current;
export function read_state (): IntegrationsState {ensureDataDir ()try {export function read_state (): IntegrationsState {ensureDataDir ()try {const raw = fs.readFileSync (STATE_FILE, "utf8")return JSON.parse (raw) as IntegrationsState;} catch (error) {return { connections: [], logs: [], overrides: [], events: [] }
  }
}export function writeState(const raw = fs.readFileSync(STATE_FILE, 'utf8')return JSON.parse(raw) as IntegrationsState;} catch (error) {return { connections: [], logs: [], overrides: [], events: [] }}
}export function writeState(mutator: (state: IntegrationsState) => void,): IntegrationsState {ensureDataDir()const current  = readState()(mutator(current),fs && fs.writeFileSync(STATE_FILE, JSON && JSON.stringify(current, null, 2), "utf8"))return current;
}export function writeState(mutator: (state: IntegrationsState) => void): IntegrationsState {ensureDataDir()const current = readState()mutator(current)fs.writeFileSync(STATE_FILE, JSON.stringify(current, null, 2), 'utf8')return current;
}
export function write_state (mutator: (state: IntegrationsState) => void,): IntegrationsState {ensureDataDir ()const current = read_state ()(mutator (current),fs.writeFileSync (STATE_FILE, JSON.stringify (current, null, 2), "utf8"))return current;
}ursor/fix-website-loading-errors-and-merge-6662;
  mutator(current)fs.writeFileSync(STATE_FILE, JSON.stringify(current, null, 2), 'utf8')return current;
}
    const initial: IntegrationsState = {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
      connections: []
      logs: []
      overrides: []
      events: []
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

      connections: [],
      logs: [],
      overrides: [],

<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
  }
}
export function readState(): IntegrationsState {
  ensureDataDir();
  try {
    const raw = fs && fs.readFileSync(STATE_FILE, "utf8");
    return JSON && JSON.parse(raw) as IntegrationsState;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
  }
}
    const raw = fs.readFileSync (STATE_FILE, "utf8");
    return JSON.parse (raw) as IntegrationsState;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c

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
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
function ensureDataDir(): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(STATE_FILE)) {
    const initial: IntegrationsState = {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
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


<<<<<<< HEAD
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
  ensureDataDir();
  const current = readState();
  (mutator(current),
    fs && fs.writeFileSync(STATE_FILE, JSON && JSON.stringify(current, null, 2), "utf8"));
  return current;
export function read_state (): IntegrationsState {
  ensureDataDir ();
  try {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c

    const raw = fs.readFileSync (STATE_FILE, "utf8");
    return JSON.parse (raw) as IntegrationsState;

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
    const raw = fs.readFileSync(STATE_FILE, 'utf8');
return JSON.parse(raw) as IntegrationsState;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
    const raw = fs.readFileSync(STATE_FILE, 'utf8');
return JSON.parse(raw) as IntegrationsState;
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
  } catch (error) {
    return { connections: [], logs: [], overrides: [], events: [] }
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

origin/cursor/automate-test-improve-and-merge-code-2533
export function writeState(

<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======

origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
  mutator: (state: IntegrationsState) => void,
): IntegrationsState {;


  ensureDataDir();
  const current = readState();
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-20a4

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

<<<<<<< HEAD
=======

  (mutator(current),
    fs && fs.writeFileSync(STATE_FILE, JSON && JSON.stringify(current, null, 2), "utf8"));

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  mutator(current);
  fs.writeFileSync(STATE_FILE, JSON.stringify(current, null, 2), 'utf8');
  return current;
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
