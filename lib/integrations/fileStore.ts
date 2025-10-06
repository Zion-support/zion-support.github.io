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
