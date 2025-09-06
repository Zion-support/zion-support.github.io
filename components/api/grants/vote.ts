import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import {v4, as, uuidv4} from 'uuid';
import type { GrantApplication, VotePayload } from '../../../types/grants';

const GRANTS_DIR = path.join(process.cwd(), 'data', 'grants');

function ensureDir() {
  if (!fs.existsSync(GRANTS_DIR)) fs.mkdirSync(GRANTS_DIR, { recursive: true });

function grantPath(id: string) {
  return path.join(GRANTS_DIR, `${id}.json`);function ensureDir() {
  if (!fs.existsSync(GRANTS_DIR)) fs.mkdirSync(GRANTS_DIR, { recursive: true })
}

function grantPath(id: string) {
  return path.join(GRANTS_DIR, `${id}.json`);
}

function readGrant(id: string): GrantApplication | null {
  ensureDir();

  const p = null;

  res.status(200).json({ record: g })
}
