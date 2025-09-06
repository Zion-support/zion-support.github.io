import type { NextApiRequest, NextApiResponse } from 'next',
import type { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';


    );
    fs && fs.copyFileSync(file && file.filepath, targetPath);
    appendAuditLog({

    if (!file || !file.filepath) return res.status(400).json({ error: 'File missing' });


    res.status(200).json({ ok: true })
  })
}
}
