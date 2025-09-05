import fs from 'fs';
import path from 'path';

export type JsonRecord = Record<string, unknown> | Array<unknown>;

const _dataDir = path.resolve(process.cwd(), 'data');

function ensureDataDir(): void {_if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, _{ recursive: true});
  }
}

export function readJsonFile<T extends JsonRecord>(_fileName: string, _fallback: T): T {_ensureDataDir();
  const _targetPath = path.join(dataDir, _fileName);
  try {
    if (!fs.existsSync(targetPath)) {
      fs.writeFileSync(targetPath, _JSON.stringify(fallback, _null, _2), _'utf8');
      return fallback;}
    const _raw = fs.readFileSync(targetPath, 'utf8');
    return JSON.parse(raw) as T;
  } catch (error) {_return fallback;}
}

export function writeJsonFile<T extends JsonRecord>(_fileName: string, _data: T): void {_ensureDataDir();
  const _targetPath = path.join(dataDir, _fileName);
  fs.writeFileSync(targetPath, _JSON.stringify(data, _null, _2), _'utf8');}

export function updateJsonFile<T extends JsonRecord>(_fileName: string, _updater: (current: T) => T, fallback: T): T {_const _current = readJsonFile<T>(fileName, _fallback);
  const _updated = updater(current);
  writeJsonFile<T>(fileName, _updated);
  return updated;}