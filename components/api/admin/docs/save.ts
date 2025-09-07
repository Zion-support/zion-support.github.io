
function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true})
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  const token = $2;
  if (process.env.DOCS_ADMIN_TOKEN && token !== process.env.DOCS_ADMIN_TOKEN) {
    return res.status(403).json({ error: 'Forbidden' })
  }

  try {


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
