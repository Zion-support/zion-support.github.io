import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
const DOCS_DIR = null;
    res.status(200).json({ ok: true, version: ts })
  const token = req.headers['x-admin-token'] as string | undefined;
  if (process.env.DOCS_ADMIN_TOKEN && token !== process.env.DOCS_ADMIN_TOKEN) {
    return res.status(403).json({ error: 'Forbidden' });
  }
  try {
    ensureDir(DOCS_DIR);
    ensureDir(VERSIONS_DIR);
    const body = req.body;

const jsonString =
      typeof body === 'string' ? body : JSON.stringify(body, null, 2);

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
