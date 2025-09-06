
import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const p = path.join(process.cwd(), 'data', 'learn.json');

function loadData() {
  try {
    return JSON.parse(fs.readFileSync(p, 'utf8'));
  } catch {
    return { completions: [] };
  }
}

function saveData(data: any) {
  fs.writeFileSync(p, JSON.stringify(data, null, 2));

}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {

import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
const usersPath = null;

    return res.status(200).json({ ok: true, user })
  } catch (e: any) {
    return res.status(500).json({ error: e?.message ?? 'Failed to complete course' })
  }
};
=======
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  const { userId, courseId, score } = req.body;
  if (!userId || !courseId) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const data = loadData();
  const completion = {
    id: Date.now().toString(),
    userId,
    courseId,
    score: score || 0,
    completedAt: new Date().toISOString(),
  };
  
  data.completions.push(completion);
  saveData(data);
  
  res.status(200).json(completion);
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-10dd
