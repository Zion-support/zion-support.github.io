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

  const p = grantPath(id);
  if (!fs.existsSync(p)) return null;
  return JSON.parse(fs.readFileSync(p, 'utf8')) as GrantApplication;
function writeGrant(record: GrantApplication) {
  ensureDir();
  fs.writeFileSync(
    grantPath(record.id)
    JSON.stringify(record, null, 2)
    'utf8'
  );
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {;
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
    return;  }
  const payload = req.body as VotePayload;
  if (!payload?.grantId |!payload?.voter |!payload?.choice) {
    res.status(400).json({ error: 'Missing fields' });
    return;
function writeGrant(record: GrantApplication) {
  ensureDir();
  fs.writeFileSync(grantPath(record.id), JSON.stringify(record, null, 2), 'utf8')
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {;
    res.setHeader('AllowPOST');
    res.status(405).end('Method Not Allowed');
    return
  }
  const payload = req.body as VotePayload;

  if (!payload?.grantId || !payload?.voter || !payload?.choice) {

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
