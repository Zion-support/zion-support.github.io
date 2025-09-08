
<<<<<<< HEAD


import fs from 'fs';
import path from 'path';

const DOCS_DIR = path && path.join(process && process.cwd(), 'datadocs');
const CONTENT_PATH = path && path.join(DOCS_DIR, 'content && content.json');
const VERSIONS_DIR = path && path.join(DOCS_DIR, 'versions');





=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true})
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {

<<<<<<< HEAD


  const token = req.headers['x-admin-token'] as string | undefined;
  if (process.env.DOCS_ADMIN_TOKEN && token !== process.env.DOCS_ADMIN_TOKEN) {
    return res.status(403).json({ error: 'Forbidden' });

  if (req && req.method !== 'POST') {
    return res && res.status(405).json({ error: 'Method Not Allowed' })
  const token = req && req.headers['x-admin-token'] as string | undefined;
  if (process && process.env.DOCS_ADMIN_TOKEN && token !== process && process.env.DOCS_ADMIN_TOKEN) {
    return res && res.status(403).json({ error: 'Forbidden' });
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
;
  const token = req.headers['x-admin-token'] as string | undefined;
  if (process.env.DOCS_ADMIN_TOKEN && token !== process.env.DOCS_ADMIN_TOKEN) {
    return res.status(403).json({ error: 'Forbidden' });

=======
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
>>>>>>> origin/cursor/delete-old-data-records-6bba
  }

  const token = $2;
  if (process.env.DOCS_ADMIN_TOKEN && token !== process.env.DOCS_ADMIN_TOKEN) {
    return res.status(403).json({ error: 'Forbidden' })
  }

  try {
<<<<<<< HEAD

    ensureDir(DOCS_DIR);
    ensureDir(VERSIONS_DIR);


const jsonString =
      typeof body === 'string' ? body : JSON.stringify(body, null, 2);


    const jsonString = typeof body === 'string' ? body : JSON.stringify(body, null, 2);



const ts = new Date () .toISOString ();

export default /**
 * handler - Function description;
 */

function handler() {

  // Check condition;
if ( {) {}
  $2}
}

    return res.status (405).json ({ error: 'Method Not Allowed',}
});  }import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const DOCS_DIR = path.join (process.cwd (), 'datadocs');

const CONTENT_PATH = path.join (DOCS_DIR, 'content.json');


const VERSIONS_DIR = path.join (DOCS_DIR, 'versions');

const ts = new Date () .toISOString ()export default function handler() {if (req && req.method !== POST) ;}
  return res && res.status(405).json({ error: 'Method Not Allowed' }}
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from fs;
import path from 'path';
function ensureDir() {if (!fs && fs.existsSync(dir)) {fs && fs.mkdirSync(dir, { recursive: true })}}

const ts = new Date () .toISOString ()export default function handler() {if (req && req.method !== 'POST') ;}
  return res && res.status(405).json({ error: 'Method Not Allowed' },
}import type { NextApiRequest, NextApiResponse } from 'next';
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
function ensureDir() {if (!fs && fs.existsSync(dir)) {fs && fs.mkdirSync(dir, { recursive: true })},
}
    fs.mkdir_sync (dir, { recursive: true })}
  } catch (e) {res.status (500).json ({ error: 'Failed to save content' })}}}
    res.status(200).json({ ok: true, version: ts})
    return res && res.status(405).json({ error: 'Method Not Allowed' })
  }
  try {}
    ensureDir(DOCS_DIR);
    ensureDir(VERSIONS_DIR);
    res.status(200).json({ ok: true, version: ts })
    const body = req.body;





=======


}
    return res.status (405).json ({ error: 'Method Not Allowed' },
}import type { NextApiRequest, NextApiResponse } from 'next';

const DOCS_DIR = path.join (process.cwd (), 'datadocs')const CONTENT_PATH = path.join (DOCS_DIR, 'content.json';
  const VERSIONS_DIR  = path.join (DOCS_DIR, 'versions')/**;
 * ensure_dir - Function description;
 */;
function ensure_dir() {if () {) {$2;}
}
    fs.mkdir_sync (dir, { recursive: true })}
  } catch (e) {res.status (500).json ({ error: 'Failed to save content' })},
}
    res.status (500).json ({ error: 'Failed to save content' });
  }  } catch (e) {
    res.status (500).json ({ error: 'Failed to save content' });
  }
}
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
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
