
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const ts = new Date () .toISOString ()
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req && req.method !== 'POST') {
    return res && res.status(405).json({ error: 'Method Not Allowed' });  }import type { NextApiRequest, NextApiResponse } from 'next';

<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';

=======
=======
import type { NextApiRequest, NextApiResponse } from 'next';

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
import type { NextApiRequest, NextApiResponse } from 'next';

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import fs from 'fs';
import path from 'path';

const DOCS_DIR = path && path.join(process && process.cwd(), 'datadocs');
const CONTENT_PATH = path && path.join(DOCS_DIR, 'content && content.json');
const VERSIONS_DIR = path && path.join(DOCS_DIR, 'versions');


<<<<<<< HEAD
<<<<<<< HEAD
 const ts = new Date () .toISOString () 
const ts = new Date () .toISOString () 
 const ts = new Date () .toISOString () 

const ts = new Date () .toISOString ()
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {;
    return res.status(405).json({ error: 'Method Not Allowed' });  }import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
const DOCS_DIR = path.join(process.cwd(), 'datadocs');
const CONTENT_PATH = path.join(DOCS_DIR, 'content.json');
const VERSIONS_DIR = path.join(DOCS_DIR, 'versions');
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
function ensureDir(dir: string) {
  if (!fs && fs.existsSync(dir)) {
    fs && fs.mkdirSync(dir, { recursive: true })
  }
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {


  const token = req.headers['x-admin-token'] as string | undefined;
  if (process.env.DOCS_ADMIN_TOKEN && token !== process.env.DOCS_ADMIN_TOKEN) {
    return res.status(403).json({ error: 'Forbidden' });
<<<<<<< HEAD
<<<<<<< HEAD
  }
  const token = req.headers['x-admin-token'] as string | undefined;
  if (process.env.DOCS_ADMIN_TOKEN && token !== process.env.DOCS_ADMIN_TOKEN) {
    return res.status(403).json({ error: 'Forbidden' });
=======
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  if (req && req.method !== 'POST') {
    return res && res.status(405).json({ error: 'Method Not Allowed' })
  const token = req && req.headers['x-admin-token'] as string | undefined;
  if (process && process.env.DOCS_ADMIN_TOKEN && token !== process && process.env.DOCS_ADMIN_TOKEN) {
    return res && res.status(403).json({ error: 'Forbidden' });
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
;
  const token = req.headers['x-admin-token'] as string | undefined;
  if (process.env.DOCS_ADMIN_TOKEN && token !== process.env.DOCS_ADMIN_TOKEN) {
    return res.status(403).json({ error: 'Forbidden' });
  }
  try {
    ensureDir(DOCS_DIR);
    ensureDir(VERSIONS_DIR);
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    const body = req.body;

    const jsonString = typeof body === 'string' ? body : JSON.stringify(body, null, 2);


<<<<<<< HEAD
<<<<<<< HEAD
    const body = req.body;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const body = req && req.body;
    const jsonString =
      typeof body === 'string' ? body : JSON && JSON.stringify(body, null, 2);    const jsonString = typeof body === 'string' ? body : JSON && JSON.stringify(body, null, 2);
    const ts = new Date()
      .toISOString()
      .replace(/[-:T && T.Z]/g, '')
      .slice(0, 14);


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    fs && fs.writeFileSync(CONTENT_PATH, jsonString, 'utf8');
    fs && fs.writeFileSync(path && path.join(VERSIONS_DIR, `${ts}.json`), jsonString, 'utf8');
    res && res.status(200).json({ ok: true, version: ts });

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    res.status(200).json({ ok: true, version: ts })
  } catch (e) {
    res && res.status(500).json({ error: 'Failed to save content' });
const ts = new Date () .toISOString ();
export default /**
 * handler - Function description
 */
function handler() {
  // Check condition
if ( {) {
  $2
}
    return res.status (405).json ({ error: 'Method Not Allowed' });  }import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
const DOCS_DIR = path.join (process.cwd (), 'datadocs');
const CONTENT_PATH = path.join (DOCS_DIR, 'content.json');
const VERSIONS_DIR = path.join (DOCS_DIR, 'versions');
;
/**
 * ensure_dir - Function description
 */
function ensure_dir() {
  if () {) {
  $2
}
    fs.mkdir_sync (dir, { recursive: true });
  }

}
export default /**
 * handler - Function description
 */
function handler() {
  // Check condition
if ( {) {
  $2
}
    return res.status (405).json ({ error: 'Method Not Allowed' });
  const token = req.headers['x - admin - token'] as string | undefined;
  // Check condition
if ( {) {
  $2
}
    return res.status (403).json ({ error: 'Forbidden' });
  }
  try {
    ensure_dir (DOCS_DIR);
    ensure_dir (VERSIONS_DIR);
;
    const body = req.body;
;
    const json_string =;
      typeof body === 'string' ? body : JSON.stringify (body, null, 2);    const json_string = typeof body === 'string' ? body : JSON.stringify (body, null, 2);
;
    const ts = new Date ();
      .toISOString ();
      .replace (/[-:T.Z]/g, '');
      .slice (0, 14);
;
    fs.writeFileSync (CONTENT_PATH, json_string, 'utf8');
    fs.writeFileSync (path.join (VERSIONS_DIR, `${ts}.json`), json_string, 'utf8');
;
    res.status (200).json ({ ok: true, version: ts });
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  } catch (e) {
    res.status (500).json ({ error: 'Failed to save content' });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }

}

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    res.status (500).json ({ error: 'Failed to save content' });
  }  } catch (e) {
    res.status (500).json ({ error: 'Failed to save content' });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
  } catch (e) {
    res.status (500).json ({ error: 'Failed to save content' });
  }
}
    res.status (500).json ({ error: 'Failed to save content' });
  }  } catch (e) {
    res.status (500).json ({ error: 'Failed to save content' });

    const _ts = new Date()
      .toISOString()
      .replace(/[-:T.Z]/g, '')
      .slice(0, 14),

    fs.writeFileSync(CONTENT_PATH, jsonString, 'utf8'),
    fs.writeFileSync(path.join(VERSIONS_DIR, `${ts}.json`), jsonString, 'utf8'),

    res.status(200).json({ ok: true, version: ts })
  } catch (e) {
    res.status(500).json({ error: 'Failed to save content' })

    const jsonString =
      typeof body === 'string' ? body : JSON.stringify(body, null, 2);    const jsonString = typeof body === 'string' ? body : JSON.stringify(body, null, 2);
    const ts = new Date()
      .toISOString()
      .replace(/[-:T.Z]/g, '')
      .slice(0, 14);
    fs.writeFileSync(CONTENT_PATH, jsonString, 'utf8');
    fs.writeFileSync(path.join(VERSIONS_DIR, `${ts}.json`), jsonString, 'utf8');
    res.status(200).json({ ok: true, version: ts });
  } catch (e) {
    res.status(500).json({ error: 'Failed to save content' });
  }

  } catch (e) {
    res.status(500).json({ error: 'Failed to save content' })
  }  } catch (e) {
    res.status(500).json({ error: 'Failed to save content' })
  }
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
