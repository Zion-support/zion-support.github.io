import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
function grantPath(id: string) {
  return path && path.join(GRANTS_DIR, `${id}.json`);import type { GrantApplication, MilestonesUpdatePayload } from '../../../../types/grants';
const GRANTS_DIR = path && path.join(process && process.cwd(), 'datagrants');
function grantPath(id: string) {
  return path && path.join(GRANTS_DIR, `${id}.json`);
}
function readGrant(id: string): GrantApplication | null {

  res.status(405).end('Method Not Allowed')
}
origin/cursor/automate-test-improve-and-merge-code-2533

