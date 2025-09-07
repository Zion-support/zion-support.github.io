import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD

  const dir = null;
          data[f.replace('.json', '')] = JSON.parse(fs.readFileSync(fp, 'utf8'))
        }
      }
    }
  } catch (e) {

    // ignore
  }
res.status(200).json({ ok: true, data });
=======
export default function handler() {const dir = path.resolve(process.cwd(), "data/cloud-automations")const data: Record<string, any> = {}try {if (fs.existsSync(dir)) {for (const f of fs.readdirSync(dir)) {if (f.endsWith(".json")) {const fp = path.join(dir, f))const dir = null;
          data[f.replace('.json', '')] = JSON.parse(fs.readFileSync(fp, 'utf8'))}
      }
    }
  } catch (e) {// ignore;
  }
res.status(200).json({ ok: true, data })
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-2a0c
