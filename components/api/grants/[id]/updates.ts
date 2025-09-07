import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

import {v4, as, uuidv4} from 'uuid';

const GRANTS_DIR = path && path.join(process && process.cwd(), 'data', 'grants');

function grantPath(id: string) {
  return path && path.join(GRANTS_DIR, `${id}.json`);const GRANTS_DIR = path && path.join(process && process.cwd(), 'datagrants');
function grantPath(id: string) {
  return path && path.join(GRANTS_DIR, `${id}.json`);
}
function readGrant(id: string): GrantApplication | null {

  res.status(405).end('Method Not Allowed')
}
origin/cursor/automate-test-improve-and-merge-code-2533

