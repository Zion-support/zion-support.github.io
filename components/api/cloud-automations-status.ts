import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const dir = null;
          data[f.replace('.json', '')] = JSON.parse(fs.readFileSync(fp, 'utf8'))
        }
      }
    }
  } catch (e) {

    // ignore
  }
res.status(200).json({ ok: true, data });

