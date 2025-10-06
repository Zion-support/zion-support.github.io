<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import * as fs from 'fs';
import * as path from 'path';
=======
import fs from 'fs';
import path from 'path';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
import type { IntegrationsState } from './types';

const DATA_DIR = path.resolve(process.cwd(), 'data', 'integrations');
const STATE_FILE = path.join(DATA_DIR, 'state.json');
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4606
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2e3b
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b781
import fs from "fs";
import path from "path";
import type { IntegrationsState } from "./types";

const DATA_DIR = path.resolve(process.cwd(), "data", "integrations");
const STATE_FILE = path.join(DATA_DIR, "state.json");
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3d1d
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b781
=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8344
import fs from "fs";
import path from "path";
import { IntegrationsState } from "./types";

const DATA_DIR = path.resolve(process.cwd(), "data", "integrations");
const STATE_FILE = path.join(DATA_DIR, "state.json");
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a8c
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8344

function ensureDataDir(): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
  
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4854
=======
  
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b781
=======
  
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
  if (!fs.existsSync(STATE_FILE)) {
    const initial: IntegrationsState = {
      connections: [],
      logs: [],
      overrides: [],
      events: []
    };
<<<<<<< HEAD
<<<<<<< HEAD
    fs.writeFileSync(STATE_FILE, JSON.stringify(initial, null, 2), 'utf8');
  }
}
export function readState(): IntegrationsState {
  ensureDataDir();
<<<<<<< HEAD
=======
  
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4854
  try {
    const raw = fs.readFileSync(STATE_FILE, 'utf8');
    return JSON.parse(raw) as IntegrationsState;
  } catch {
=======
    fs.writeFileSync(STATE_FILE, JSON.stringify(initial, null, 2), "utf8");
  }
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a8c
}
=======
    fs.writeFileSync(STATE_FILE, JSON.stringify(initial, null, 2), 'utf8');
  }
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8344

export function readState(): IntegrationsState {
  ensureDataDir();
  
  try {
<<<<<<< HEAD
<<<<<<< HEAD
    const raw = fs.readFileSync(STATE_FILE, "utf8");
    return JSON.parse(raw) as IntegrationsState;
  } catch (error) {
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b781
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a8c
=======
    const raw = fs.readFileSync(STATE_FILE, 'utf8');
    return JSON.parse(raw) as IntegrationsState;
  } catch (error) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
=======
    const raw = fs.readFileSync(STATE_FILE, "utf8");
    return JSON.parse(raw) as IntegrationsState;
  } catch (error) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8344
    return {
      connections: [],
      logs: [],
      overrides: [],
      events: []
    };
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b781
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a8c
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8344
export function writeState(
  mutator: (state: IntegrationsState) => void
): IntegrationsState {
  ensureDataDir();
  const current = readState();
  mutator(current);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  fs.writeFileSync(STATE_FILE, JSON.stringify(current, null, 2), 'utf8');
  return current;
<<<<<<< HEAD
<<<<<<< HEAD
}
<<<<<<< HEAD
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3d1d
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4606
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2e3b
=======
import fs from 'fs';
import path from 'path';

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
    const fullPath = path.join(this.basePath, filePath);
    return fs.promises.readFile(fullPath, this.encoding);
  }

  async writeFile(filePath: string, content: string): Promise<void> {
    const fullPath = path.join(this.basePath, filePath);
    const dir = path.dirname(fullPath);
    
    // Ensure directory exists
    await fs.promises.mkdir(dir, { recursive: true });
    
    return fs.promises.writeFile(fullPath, content, this.encoding);
  }

  async exists(filePath: string): Promise<boolean> {
    const fullPath = path.join(this.basePath, filePath);
    try {
      await fs.promises.access(fullPath);
      return true;
    } catch {
      return false;
    }
  }

  async deleteFile(filePath: string): Promise<void> {
    const fullPath = path.join(this.basePath, filePath);
    await fs.promises.unlink(fullPath);
  }

  async listFiles(dirPath: string = ''): Promise<string[]> {
    const fullPath = path.join(this.basePath, dirPath);
    const files = await fs.promises.readdir(fullPath, { withFileTypes: true });
    return files
      .filter(file => file.isFile())
      .map(file => path.join(dirPath, file.name));
  }

  async createDirectory(dirPath: string): Promise<void> {
    const fullPath = path.join(this.basePath, dirPath);
    await fs.promises.mkdir(fullPath, { recursive: true });
  }

  async deleteDirectory(dirPath: string): Promise<void> {
    const fullPath = path.join(this.basePath, dirPath);
    await fs.promises.rmdir(fullPath, { recursive: true });
  }
}

export const createFileStore = (options: FileStoreOptions) => new FileStore(options);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-895b
=======
  fs.writeFileSync(STATE_FILE, JSON.stringify(current, null, 2), "utf8");
  return current;
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b781
=======
  fs.writeFileSync(STATE_FILE, JSON.stringify(current, null, 2), "utf8");
  return current;
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a8c
=======
  fs.writeFileSync(STATE_FILE, JSON.stringify(current, null, 2), 'utf8');
  return current;
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
=======
  fs.writeFileSync(STATE_FILE, JSON.stringify(current, null, 2), "utf8");
  return current;
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8344
