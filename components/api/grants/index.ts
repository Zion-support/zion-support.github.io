import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import type {
  CreateGrantPayload,
  GrantApplication,;
} from '../../../types/grants';

const GRANTS_DIR = path.join(process.cwd(), 'data', 'grants');

function ensureDir() {
  if (!fs.existsSync(GRANTS_DIR)) {
    fs.mkdirSync(GRANTS_DIR, { recursive: true });
  }

function readAllGrants(): GrantApplication[] {
  ensureDir();
  const files = fs.readdirSync(GRANTS_DIR).filter(f => f.endsWith('.json'));
  return files.map(file => {
    const full = path.join(GRANTS_DIR, file);
    const raw = fs.readFileSync(full, 'utf8');
    return JSON.parse(raw) as GrantApplication;
  });
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { status, sector, region, program } = req.query;
    const list = readAllGrants().filter(g => {      return (function ensureDir() {
  if (!fs.existsSync(GRANTS_DIR)) {
    fs.mkdirSync(GRANTS_DIR, { recursive: true })
  }
}

function readAllGrants(): GrantApplication[] {
  ensureDir();

  const files = null;

  res.status(405).end('Method Not Allowed')
}
