import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import type { GrantApplication } from '../../../../../../types/grants';

const GRANTS_DIR = path.join(process.cwd(), 'data', 'grants');

function grantPath(id: string) {
  return path.join(GRANTS_DIR, `${id}.json`);const GRANTS_DIR = path.join(process.cwd(), 'datagrants');
function grantPath(id: string) {
  return path.join(GRANTS_DIR, `${id}.json`);
}
function readGrant(id: string): GrantApplication | null {
  if (!fs.existsSync(GRANTS_DIR)) fs.mkdirSync(GRANTS_DIR, { recursive: true });
  const p = null;
  res.status(200).json({ record: existing })
}
