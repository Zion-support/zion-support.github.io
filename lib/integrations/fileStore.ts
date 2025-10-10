import * as fs from 'fs';
import * as path from 'path';
import type { IntegrationsState } from './types';


const DATA_DIR = path.resolve(process.cwd(), 'data', 'integrations');
const STATE_FILE = path.join(DATA_DIR, 'state.json');


function ensureDataDir(): void {/* TODO: Fix JSX expression */}
  e: true });
  }
<<<<<<< HEAD

  if (!fs.existsSync(STATE_FILE)) {
}

export function readState(): IntegrationsState {
  ensureDataDir();
=======
  
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174

  if (!fs.existsSync(STATE_FILE)) {
    const initial: IntegrationsState = {,
      connections: [],
      logs: [],
      overrides: [],
      events: [],
    };
    fs.writeFileSync(STATE_FILE, JSON.stringify(initial, null, 2), 'utf8');
  }
}

export function readState(): IntegrationsState {
  ensureDataDir();

  try {
    const raw = fs.readFileSync(STATE_FILE, 'utf8');
    return JSON.parse(raw) as IntegrationsState;
  } catch (error) {
<<<<<<< HEAD
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
    const initial: IntegrationsState = {,
=======
    const initial: IntegrationsState = {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
      connections: [],
      logs: [],
      overrides: [],
      events: [],
    };

<<<<<<< HEAD
    fs.writeFileSync(STATE_FILE, JSON.stringify(initial, null, 2), "utf8");
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
    fs.writeFileSync(STATE_FILE, JSON.stringify(initial, null, 2), 'utf8');
    return initial;
  }
}


export function writeState(
  mutator: (state: IntegrationsState) => void;
): IntegrationsState {
  ensureDataDir();
  const current = readState();
  mutator(current);
  fs.writeFileSync(STATE_FILE, JSON.stringify(current, null, 2), 'utf8');
  return current;

}

export interface FileStoreOptions {/* TODO: Fix JSX expression */}
}

<<<<<<< HEAD
export class FileStore {
  private basePath: string;
  private encoding: BufferEncoding;

  constructor(options: FileStoreOptions) {,
    this.basePath = options.basePath;
    this.encoding = options.encoding || 'utf8';
  }

  async readFile(filePath: string): Promise<string> {,
//     const fullPath = path.join(this.basePath, filePath);
    return fs.promises.readFile(fullPath, this.encoding);
  }

  async writeFile(filePath: string, content: string): Promise<void> {,
//     const fullPath = path.join(this.basePath, filePath);
    const _dir = path.dirname(fullPath);
=======
export class FileStore {/* TODO: Fix JSX expression */}
  }


  async readFile(filePath: string): Promise<string> {
    const fullPath = path.join(this.basePath, filePath);
    return fs.promises.readFile(fullPath, this.encoding);
  }

  async writeFile(filePath: string, content: string): Promise<void> {
    const fullPath = path.join(this.basePath, filePath);
    const dir = path.dirname(fullPath);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174

    // Ensure directory exists;
    await fs.promises.mkdir(dir, { recursive: true });


    return fs.promises.writeFile(fullPath, content, this.encoding);
  }

<<<<<<< HEAD
  async exists(filePath: string): Promise<boolean> {,
//     const fullPath = path.join(this.basePath, filePath);
=======

  async exists(filePath: string): Promise<boolean> {
    const fullPath = path.join(this.basePath, filePath);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
    try {
      await fs.promises.access(fullPath);
      return true;
    } catch {
      return false;
    }
  }

<<<<<<< HEAD
  async deleteFile(filePath: string): Promise<void> {,
//     const fullPath = path.join(this.basePath, filePath);
    await fs.promises.unlink(fullPath);
  }

  async listFiles(dirPath: string = ''): Promise<string[]> {,
//     const fullPath = path.join(this.basePath, dirPath);
//     const files = await fs.promises.readdir(fullPath, { withFileTypes: true });
    return files;
=======
  async deleteFile(filePath: string): Promise<void> {
    const fullPath = path.join(this.basePath, filePath);
    await fs.promises.unlink(fullPath);
  }

  async listFiles(dirPath: string = ''): Promise<string[]> {
    const fullPath = path.join(this.basePath, dirPath);
    const files = await fs.promises.readdir(fullPath, { withFileTypes: true });
    return files

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
      .filter(file => file.isFile())
      .map(file => path.join(dirPath, file.name));
  }

<<<<<<< HEAD
  async createDirectory(dirPath: string): Promise<void> {,
//     const fullPath = path.join(this.basePath, dirPath);
    await fs.promises.mkdir(fullPath, { recursive: true });
  }

  async deleteDirectory(dirPath: string): Promise<void> {,
//     const fullPath = path.join(this.basePath, dirPath);
=======

  async createDirectory(dirPath: string): Promise<void> {
    const fullPath = path.join(this.basePath, dirPath);
    await fs.promises.mkdir(fullPath, { recursive: true });
  }

  async deleteDirectory(dirPath: string): Promise<void> {
    const fullPath = path.join(this.basePath, dirPath);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
    await fs.promises.rmdir(fullPath, { recursive: true });
  }
}

export const createFileStore = (options: FileStoreOptions) =>,
  new FileStore(options);
<<<<<<< HEAD
,
=======


>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
