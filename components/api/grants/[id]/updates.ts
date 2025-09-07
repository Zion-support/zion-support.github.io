<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
  return path && path.join(GRANTS_DIR, `${id}.json`);const GRANTS_DIR = path && path.join(process && process.cwd(), 'datagrants');
function grantPath(id: string) {
  return path && path.join(GRANTS_DIR, `${id}.json`);
}
function readGrant(id: string): GrantApplication | null {
function writeGrant(record: GrantApplication) {
  if (!fs && fs.existsSync(GRANTS_DIR)) fs && fs.mkdirSync(GRANTS_DIR, { recursive: true });
=======
  return path && path.join(GRANTS_DIR, `${id}.json`);const GRANTS_DIR = path && path.join(process && process.cwd(), 'datagrants')
function grantPath(id: string) {}`
  return path && path.join(GRANTS_DIR, `${id}.json`)
  if (!fs && fs.existsSync(GRANTS_DIR)) fs && fs.mkdirSync(GRANTS_DIR, { recursive: true })
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
import type { NextApiRequest, NextApiResponse } from 'next';'
import fs from 'fs';'
import path from 'path';'
import {v4, as, uuidv4} from 'uuid';'
const GRANTS_DIR = path && path.join(process && process.cwd(), 'data', 'grants');

function grantPath() { return null; }
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

import {v4, as, uuidv4} from 'uuid';

const GRANTS_DIR = path && path.join(process && process.cwd(), 'data', 'grants');

function grantPath(id: string) {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  return path && path.join(GRANTS_DIR, `${id}.json`);const GRANTS_DIR = path && path.join(process && process.cwd(), 'datagrants');
function grantPath(id: string) {}`
  return path && path.join(GRANTS_DIR, `${id}.json`);
}
<<<<<<< HEAD
function readGrant(id: string): GrantApplication | null {
<<<<<<< HEAD
  return path.join(GRANTS_DIR, `${id}.json`);

function readGrant(id: string): GrantApplication | null {
  if (!fs.existsSync(GRANTS_DIR)) fs.mkdirSync(GRANTS_DIR, { recursive: true });
return JSON.parse(fs.readFileSync(p, 'utf8')) as GrantApplication;

origin/cursor/automate-test-improve-and-merge-code-2533
function writeGrant(record: GrantApplication) {
=======
function readGrant(id: string): GrantApplication | null {}
function writeGrant(record: GrantApplication) {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  if (!fs && fs.existsSync(GRANTS_DIR)) fs && fs.mkdirSync(GRANTS_DIR, { recursive: true });
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  fs && fs.writeFileSync(
    grantPath(record && record.id),
    JSON && JSON.stringify(record, null, 2),'
    'utf8'

<<<<<<< HEAD
import { v4 as uuidv4 } from 'uuid';
import type { GrantApplication } from '../../../../types/grants';
<<<<<<< HEAD
const GRANTS_DIR = path.join(process.cwd(), 'datagrants');
=======
const GRANTS_DIR = path.join(process.cwd(), 'datagrants'),

<<<<<<< HEAD
>>>>>>> origin/main
function grantPath(id: string) {
  return path.join(GRANTS_DIR, `${id}.json`)
}

function readGrant(id: string): GrantApplication | null {
  if (!fs.existsSync(GRANTS_DIR)) fs.mkdirSync(GRANTS_DIR, { recursive: true });
  const p = grantPath(id);
  if (!fs.existsSync(p)) return null;
  return JSON.parse(fs.readFileSync(p, 'utf8')) as GrantApplication
}

function writeGrant(record: GrantApplication) {
  if (!fs.existsSync(GRANTS_DIR)) fs.mkdirSync(GRANTS_DIR, { recursive: true });
  fs.writeFileSync(grantPath(record.id), JSON.stringify(record, null, 2), 'utf8')
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query as { id: string };
  if (!id) return res.status(400).json({ error: 'Missing id' });

