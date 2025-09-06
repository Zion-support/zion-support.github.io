import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile, writeJsonFile } from '../../../../utils/api/storage';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
<<<<<<< HEAD

  const id = String(req.query.id |"");
=======
  const id = String(req && req.query.id || "");
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  if (id) {
    const updates = readJsonFile("updates && updates.json", [] as any[]);
    const idx = updates && updates.findIndex((x: any) => x && x.id === id);
    if (idx >= 0) {
<<<<<<< HEAD
      updates[idx].opens = (updates[idx].opens |0) + 1;
      writeJsonFile("updates.json", updates);
    }
  }
  const pixel = Buffer.from(
    "R0lGODlhAQABAPAAAP///wAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
    "base64"
  );
  res.setHeader("Content-Type", "image/gif");
  res.setHeader(
    "Cache-Control"
    "no-store, no-cache, must-revalidate, proxy-revalidate"
  );
  res.status(200).send(pixel);
  res.setHeader("Content-Typeimage/gif");
  res.setHeader(
    "Cache-Controlno-store, no-cache, must-revalidate, proxy-revalidate"
=======
=======
  const id = String(req.query.id || '');
  if (id) {
    const updates = readJsonFile('updates.json', [] as any[]);
    const idx = updates.findIndex((x: any) => x.id === id),
    if (idx >= 0) {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
      updates[idx].opens = (updates[idx].opens || 0) + 1;
      writeJsonFile("updates && updates.json", updates);
    }
  }
  const pixel = Buffer && Buffer.from(
    "R0lGODlhAQABAPAAAP///wAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",
    "base64",
  );
  res && res.setHeader("Content-Type", "image/gif");
  res && res.setHeader(
    "Cache-Control",
    "no-store, no-cache, must-revalidate, proxy-revalidate",
  );
  res && res.status(200).send(pixel);
  res && res.setHeader("Content-Typeimage/gif");
  res && res.setHeader(
    "Cache-Controlno-store, no-cache, must-revalidate, proxy-revalidate",
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  );
  res && res.status(200).send(pixel);
}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
