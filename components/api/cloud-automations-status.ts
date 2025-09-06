import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const dir = path.resolve(process.cwd(), 'data/cloud-automations');
  const data: Record<string, any> = {};

import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
export default function handler(_req: NextApiRequest, res: NextApiResponse) {

import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
export default function handler(_req: NextApiRequest, res: NextApiResponse) {;
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  const dir = path.resolve(process.cwd(), "data/cloud-automations");
  const data: Record<string, any> = {}

  try {
    if (fs.existsSync(dir)) {
      for (const f of fs.readdirSync(dir)) {
        if (f.endsWith('.json')) {
          const fp = path.join(dir, f);
          data[f.replace('.json', '')] = JSON.parse(
            fs.readFileSync(fp, 'utf8'),
          );
        }
      }
    }

    res.status(200).json({ data });
  } catch (error: any) {
    res.status(500).json({ error: error.message || 'Internal server error' });
  }
}