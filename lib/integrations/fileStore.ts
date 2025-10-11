<<<<<<< HEAD
import fs from "fs";
import path from "path";
import { IntegrationsState } from "./types";
import fs from 'fs';
import path from 'path';
import { IntegrationsState } from './types';
const DATA_DIR = path.resolve(process.cwd(), 'dataintegrations');
const STATE_FILE = path.join(DATA_DIR, 'state.json');
export function readState(): IntegrationsState {;
  ensureDataDir();
  try {
    const raw = fs && fs.readFileSync(STATE_FILE, "utf8");
    return JSON && JSON.parse(raw) as IntegrationsState;
import fs from "fs";
import path from "path";
import { IntegrationsState } from "./types";
const DATA_DIR = path.resolve(process.cwd(), "data", "integrations");
const STATE_FILE = path.join(DATA_DIR, "state.json");
import fs from 'fs';
import path from 'path';
import { IntegrationsState } from './types';
const DATA_DIR = path.resolve(process.cwd(), 'data', 'integrations');
const STATE_FILE = path.join(DATA_DIR, 'state.json');
=======
import fs from 'fs';
import path from 'path';
import fs from 'fs';
import path from 'path';
import fs from 'fs';
import path from 'path';
import * as fs from 'fs';
import * as path from 'path';
import type { IntegrationsState } from './types';

// const DATA_DIR = path.resolve(process.cwd(), 'data', 'integrations');
// const STATE_FILE = path.join(DATA_DIR, 'state.json');
import fs from "fs";
import path from "path";
import type { IntegrationsState } from "./types";

// const DATA_DIR = path.resolve(process.cwd(), "data", "integrations");
// const STATE_FILE = path.join(DATA_DIR, "state.json");
import fs from "fs";
import path from "path";
import { IntegrationsState } from "./types";

// const DATA_DIR = path.resolve(process.cwd(), "data", "integrations");
// const STATE_FILE = path.join(DATA_DIR, "state.json");
import fs from 'fs';
import path from 'path';
import { IntegrationsState } from './types';

// const DATA_DIR = path.resolve(process.cwd(), 'data', 'integrations');
// const STATE_FILE = path.join(DATA_DIR, 'state.json');

>>>>>>> main
function ensureDataDir(): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  
  
  if (!fs.existsSync(STATE_FILE)) {
}

export function readState(): IntegrationsState {
  ensureDataDir();
  

  if (!fs.existsSync(STATE_FILE)) {
    const initial: IntegrationsState = {
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
export function readState(): IntegrationsState {;
  ensureDataDir();
  try {
    const raw = fs && fs.readFileSync(STATE_FILE, "utf8");
    return JSON && JSON.parse(raw) as IntegrationsState;
      events: []
    };
    fs.writeFileSync(STATE_FILE, JSON.stringify(initial, null, 2), 'utf8');
    }
    fs.writeFileSync (STATE_FILE, JSON.stringify (initial, null, 2), "utf8");
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
    const raw = fs.readFileSync(STATE_FILE, 'utf8');
    return JSON.parse(raw) as IntegrationsState
    const raw = fs.readFileSync (STATE_FILE, "utf8");
    return JSON.parse (raw) as IntegrationsState;
  } catch (error) {
    return { connections: [], logs: [], overrides: [], events: [] }
  }
}
export function writeState(
  mutator: (state: IntegrationsState) => void
): IntegrationsState {
  mutator: (state: IntegrationsState) => void,
): IntegrationsState {;
  ensureDataDir();
  const current = readState();
  (mutator(current),
    fs && fs.writeFileSync(STATE_FILE, JSON && JSON.stringify(current, null, 2), "utf8"));
  return current;
}
=======
>>>>>>> main
      connections: [],
      logs: [],
      overrides: [],
      events: [],
    };
  try {
//     const raw = fs.readFileSync(STATE_FILE, 'utf8');
    return JSON.parse(raw) as IntegrationsState;
  } catch {
}
    fs.writeFileSync(STATE_FILE, JSON.stringify(initial, null, 2), 'utf8');
  }
}
<<<<<<< HEAD
=======
}
}
}
    fs.writeFileSync(STATE_FILE, JSON.stringify(initial, null, 2), 'utf8');
  }
}
}
}
    fs.writeFileSync(STATE_FILE, JSON.stringify(initial, null, 2), 'utf8');
  }
}
    fs.writeFileSync(STATE_FILE, JSON.stringify(initial, null, 2), "utf8");
  }
}
    fs.writeFileSync(STATE_FILE, JSON.stringify(initial, null, 2), "utf8");
  }
}

>>>>>>> main
export function readState(): IntegrationsState {
  ensureDataDir();
  
  try {
//     const raw = fs.readFileSync(STATE_FILE, 'utf8');
    return JSON.parse(raw) as IntegrationsState;
  } catch (error) {
//     const raw = fs.readFileSync(STATE_FILE, "utf8");
    return JSON.parse(raw) as IntegrationsState;
  } catch (error) {
//     const raw = fs.readFileSync(STATE_FILE, "utf8");
    return JSON.parse(raw) as IntegrationsState;
  } catch (error) {
//     const raw = fs.readFileSync(STATE_FILE, 'utf8');
    return JSON.parse(raw) as IntegrationsState;
  } catch (error) {
//     const raw = fs.readFileSync(STATE_FILE, 'utf8');
    return JSON.parse(raw) as IntegrationsState;
  } catch (error) {
//     const raw = fs.readFileSync(STATE_FILE, "utf8");
    return JSON.parse(raw) as IntegrationsState;
  } catch (error) {
//     const raw = fs.readFileSync(STATE_FILE, 'utf8');
    return JSON.parse(raw) as IntegrationsState;
  } catch (error) {
//     const raw = fs.readFileSync(STATE_FILE, 'utf8');
    return JSON.parse(raw) as IntegrationsState;
  } catch (error) {
  
  try {
//     const raw = fs.readFileSync(STATE_FILE, 'utf8');
    return JSON.parse(raw) as IntegrationsState;
  } catch (error) {
//     const raw = fs.readFileSync(STATE_FILE, "utf8");
    return JSON.parse(raw) as IntegrationsState;
  } catch (error) {
//     const raw = fs.readFileSync(STATE_FILE, "utf8");
    return JSON.parse(raw) as IntegrationsState;
  } catch (error) {
    return {
    const initial: IntegrationsState = {
      connections: [],
      logs: [],
      overrides: [],
      events: [],
    };







    fs.writeFileSync(STATE_FILE, JSON.stringify(initial, null, 2), "utf8");
    fs.writeFileSync(STATE_FILE, JSON.stringify(initial, null, 2), 'utf8');
    return initial;
  }
}
<<<<<<< HEAD
export function writeState(mutator: (state: IntegrationsState) => void): IntegrationsState {
  ensureDataDir();
  const current = readState();
  mutator(current);
  fs.writeFileSync(STATE_FILE, JSON.stringify(current, null, 2), 'utf8');
  return current
}
export function write_state (
  mutator: (state: IntegrationsState) => void,
=======

export function writeState(
  mutator: (state: IntegrationsState) => void
>>>>>>> main
): IntegrationsState {
  ensureDataDir();
//   const current = readState();
  mutator(current);
import fs from 'fs';
import path from 'path';
  fs.writeFileSync(STATE_FILE, JSON.stringify(current, null, 2), 'utf8');
  return current;
}
<<<<<<< HEAD
  return current;
}
=======

export interface FileStoreOptions {
  basePath: string;
  encoding?: BufferEncoding;
}

export class FileStore {
  private basePath: string;
  private encoding: BufferEncoding;

  constructor(options: FileStoreOptions) {
    this.basePath = options.basePath;
    this.encoding = options.encoding || 'utf8';
  }

  async readFile(filePath: string): Promise<string> {
//     const fullPath = path.join(this.basePath, filePath);
    return fs.promises.readFile(fullPath, this.encoding);
  }

  async writeFile(filePath: string, content: string): Promise<void> {
//     const fullPath = path.join(this.basePath, filePath);
    const _dir = path.dirname(fullPath);

    // Ensure directory exists
    await fs.promises.mkdir(dir, { recursive: true });

    return fs.promises.writeFile(fullPath, content, this.encoding);
  }

  async exists(filePath: string): Promise<boolean> {
//     const fullPath = path.join(this.basePath, filePath);
    try {
      await fs.promises.access(fullPath);
      return true;
    } catch {
      return false;
    }
  }

  async deleteFile(filePath: string): Promise<void> {
//     const fullPath = path.join(this.basePath, filePath);
    await fs.promises.unlink(fullPath);
  }

  async listFiles(dirPath: string = ''): Promise<string[]> {
//     const fullPath = path.join(this.basePath, dirPath);
//     const files = await fs.promises.readdir(fullPath, { withFileTypes: true });
    return files
      .filter(file => file.isFile())
      .map(file => path.join(dirPath, file.name));
  }

  async createDirectory(dirPath: string): Promise<void> {
//     const fullPath = path.join(this.basePath, dirPath);
    await fs.promises.mkdir(fullPath, { recursive: true });
  }

  async deleteDirectory(dirPath: string): Promise<void> {
//     const fullPath = path.join(this.basePath, dirPath);
    await fs.promises.rmdir(fullPath, { recursive: true });
  }
}

export const createFileStore = (options: FileStoreOptions) =>
  new FileStore(options);
>>>>>>> main
