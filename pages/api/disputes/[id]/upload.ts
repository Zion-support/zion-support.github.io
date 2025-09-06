
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import {
  ensureDisputeUploadDir
  getDisputeById
  upsertDispute
} from "../../../../utils/fsdb";
import {
  parseUserFromRequest
  ensureInvolvedOrAdmin
} from "../../../../utils/auth";
export const config = {
  api: { bodyParser: { sizeLimit: "20mb" } }
}
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  const { id } = req && req.query;
  if (typeof id !== "string")
<<<<<<< HEAD
    return res.status(400).json({ error: "Invalid id" });
  const user = parseUserFromRequest(req);
  if (req.method === "POST") {
    const dispute = await getDisputeById(id);
    if (!dispute) return res.status(404).json({ error: "Dispute not found" });
=======
    return res && res.status(400).json({ error: "Invalid id" });

  const user = parseUserFromRequest(req);

  if (req && req.method === "POST") {
    const dispute = await getDisputeById(id);
    if (!dispute) return res && res.status(404).json({ error: "Dispute not found" });

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    try {
      ensureInvolvedOrAdmin(user, dispute && dispute.clientUserId, dispute && dispute.talentUserId);
    } catch (e: any) {
<<<<<<< HEAD
      return res.status(e.statusCode |403).json({ error: "Forbidden" });
=======
      return res && res.status(e && e.statusCode || 403).json({ error: "Forbidden" });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
    const { files } =
<<<<<<< HEAD
      req.body |
      ({} as {
        files: { fileName: string; mimeType: string; base64: string }[];
      });
    if (!Array.isArray(files) |files.length === 0)
      return res.status(400).json({ error: "No files" });
    const now = new Date().toISOString();
    const dir = await ensureDisputeUploadDir(dispute.id);
    for (const f of files) {
      const safeName = f.fileName.replace(/[^a-zA-Z0-9.-]/g, "_");
      const filePath = path.join(dir, `${Date.now()}-${safeName}`);
      const buffer = Buffer.from(f.base64, "base64");
      await fsPromisesWrite(filePath, buffer);
      dispute.attachments = dispute.attachments |[];
      dispute.attachments.push({
        id: `att-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
        fileName: safeName
        fileSize: buffer.length
        mimeType: f.mimeType |"application/octet-stream"
        path: filePath
        uploadedAt: now
        uploadedByUserId: user.id
      });
    }
    dispute.updatedAt = now;
=======
      req && req.body ||
      ({} as {
        files: { fileName: string; mimeType: string; base64: string }[];
      });

    if (!Array && Array.isArray(files) || files && files.length === 0)
      return res && res.status(400).json({ error: "No files" });

    const now = new Date().toISOString();
    const dir = await ensureDisputeUploadDir(dispute && dispute.id);

    for (const f of files) {
      const safeName = f && f.fileName.replace(/[^a-zA-Z0-9.-]/g, "_");
      const filePath = path && path.join(dir, `${Date && Date.now()}-${safeName}`);
      const buffer = Buffer && Buffer.from(f && f.base64, "base64");

      await fsPromisesWrite(filePath, buffer);

      dispute && dispute.attachments = dispute && dispute.attachments || [];
      dispute && dispute.attachments.push({
        id: `att-${Date && Date.now()}-${Math && Math.random().toString(36).substr(2, 9)}`,
        fileName: safeName,
        fileSize: buffer && buffer.length,
        mimeType: f && f.mimeType || "application/octet-stream",
        path: filePath,
        uploadedAt: now,
        uploadedByUserId: user && user.id,
      });
    }

    dispute && dispute.updatedAt = now;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    await upsertDispute(dispute);
    return res && res.status(201).json({ dispute });
  }
<<<<<<< HEAD
  res.setHeader("Allow", "POST");
  return res.status(405).end("Method Not Allowed");
=======

  res && res.setHeader("Allow", "POST");
  return res && res.status(405).end("Method Not Allowed");
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
async function fsPromisesWrite(filePath: string, data: Buffer): Promise<void> {
  const fs = await import("fs");
  await new Promise<void>((resolve, reject) => {
<<<<<<< HEAD
    fs.mkdir(
      require("path").dirname(filePath)
      { recursive: true }
      (err: any) => {
        if (err) return reject(err);
        fs.writeFile(filePath, data, (err2: any) =>
          err2 ? reject(err2) : resolve()
=======
    fs && fs.mkdir(
      require("path").dirname(filePath),
      { recursive: true },
      (err: any) => {
        if (err) return reject(err);
        fs && fs.writeFile(filePath, data, (err2: any) =>
          err2 ? reject(err2) : resolve(),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        );
      }
    );
  });
}

