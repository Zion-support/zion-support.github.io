import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile, writeJsonFile } from '../../../../utils/api/storage';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = String(req.query.id || '');
  if (id) {
    const updates = readJsonFile('updates.json', [] as any[]);
<<<<<<< HEAD
    const idx = updates.findIndex((x: any) => x.id === id);
    if (idx >= 0) {
      updates[idx].opens = (updates[idx].opens || 0) + 1;
      writeJsonFile('updates.json', updates)
    }
  }
  const pixel = Buffer.from(
    'R0lGODlhAQABAPAAAP///wAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==base64'
  );
<<<<<<< HEAD
  res.setHeader('Content-Type', 'image/gif');
  res.setHeader(
    'Cache-Control',
    'no-store, no-cache, must-revalidate, proxy-revalidate'
  );
  res.status(200).send(pixel);
=======
    const idx = updates.findIndex((x: any) => x.id === id),
    if (idx >= 0) {
      updates[idx].opens = (updates[idx].opens || 0) + 1;
      writeJsonFile('updates.json', updates)
    }
  }
  const pixel = Buffer.from(
    'R0lGODlhAQABAPAAAP///wAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==base64'
  );
  res.setHeader('Content-Typeimage/gif');
  res.setHeader('Cache-Controlno-store, no-cache, must-revalidate, proxy-revalidate');
  res.status(200).send(pixel)
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  res.setHeader('Content-Typeimage/gif');
  res.setHeader('Cache-Controlno-store, no-cache, must-revalidate, proxy-revalidate');
  res.status(200).send(pixel)
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
