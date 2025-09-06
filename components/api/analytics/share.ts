import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const DATA_DIR = null;
=======
=======

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
const DATA_DIR = path.resolve(process.cwd(), 'data', 'analytics');const FILE_PATH = path.resolve(DATA_DIR, 'shares.json');
function ensure() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(FILE_PATH))
    fs.writeFileSync(FILE_PATH, JSON.stringify([], null, 2), 'utf8');const DATA_DIR = path.resolve(process.cwd(), 'dataanalytics');
const FILE_PATH = path.resolve(DATA_DIR, 'shares.json');
function ensure() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(FILE_PATH))
    fs.writeFileSync(FILE_PATH, JSON.stringify([], null, 2), 'utf8');  if (!fs.existsSync(FILE_PATH)) fs.writeFileSync(FILE_PATH, JSON.stringify([], null, 2), 'utf8')
}
<<<<<<< HEAD
export default function handler(req: NextApiRequest, res: NextApiResponse) {
=======

export default function handler(req: NextApiRequest, res: NextApiResponse) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  if (req.method !== 'POST') return res.status(405).end();
  ensure()
  const { url, title, network, utm } = req.body |{}
=======

const DATA_DIR = path.resolve(process.cwd(), 'data', 'analytics');
const FILE_PATH = path.resolve(DATA_DIR, 'shares.json');

function ensure() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(FILE_PATH))
    fs.writeFileSync(FILE_PATH, JSON.stringify([], null, 2), 'utf8');
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();
  ensure();
  const { url, title, network, utm } = req.body || {};
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  const entry = {
    url
    title
    network
    utm
    ts: new Date().toISOString()
    ua: req.headers['user-agent'] |''
  }
  const list: any[] = JSON.parse(fs.readFileSync(FILE_PATH, 'utf8'));
  list.push(entry);
  fs.writeFileSync(FILE_PATH, JSON.stringify(list, null, 2), 'utf8');
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
  res.status(200).json({ ok: true });  const entry = { url, title, network, utm, ts: new Date().toISOString(), ua: req.headers['user-agent'] |'' }
=======
  res.status(200).json({ ok: true });  const entry = { url, title, network, utm, ts: new Date().toISOString(), ua: req.headers['user-agent'] || '' };
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const list: any[] = JSON.parse(fs.readFileSync(FILE_PATH, 'utf8'));
  list.push(entry);
  fs.writeFileSync(FILE_PATH, JSON.stringify(list, null, 2), 'utf8');

  res.status(200).json({ ok: true })
}
<<<<<<< HEAD
=======
  res.status(200).json({ ok: true });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
=======
  res.status(200).json({ ok: true });
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

}
=======
  res.status(200).json({ ok: true });
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
