<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
<<<<<<< HEAD
import { ensureDisputeUploadDir, getDisputeById, upsertDispute } from '[^']*';
import { parseUserFromRequest, ensureInvolvedOrAdmin } from '[^']*';
=======
import {
  ensureDisputeUploadDir,
  getDisputeById,
  upsertDispute,;
} from '../../../../utils/fsdb';
import {
  parseUserFromRequest,
  ensureInvolvedOrAdmin,;
} from '../../../../utils/auth';
}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b

export const config = null;
      fs.writeFile(filePath, data, (err2: any) => (err2 ? reject(err2) : resolve()))
    })
  })
}
=======
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
<<<<<<< HEAD
  api: { bodyParser: { sizeLimit: "20mb" } }
}
=======
  api: { bodyParser: { sizeLimit: '20mb' } },
};
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  const { id } = req.query;
<<<<<<< HEAD
  if (typeof id !== "string")
    return res.status(400).json({ error: "Invalid id" });
  const user = parseUserFromRequest(req);
  if (req.method === "POST") {
=======
  if (typeof id !== 'string')
    return res.status(400).json({ error: 'Invalid id' });
  
}

const user = parseUserFromRequest(req);

  if (req.method === 'POST') {
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    const dispute = await getDisputeById(id);
    if (!dispute) return res.status(404).json({ error: "Dispute not found" });
    try {
      ensureInvolvedOrAdmin(user, dispute.clientUserId, dispute.talentUserId);
    } catch (e: any) {
<<<<<<< HEAD
      return res.status(e.statusCode |403).json({ error: "Forbidden" });
    }
=======
      return res.status(e.statusCode || 403).json({ error: 'Forbidden' });
   
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    const { files } =
      req.body |
      ({} as {
        files: { fileName: string; mimeType: string; base64: string }[];
      });
<<<<<<< HEAD
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
=======
    if (!Array.isArray(files) || files.length === 0)
      return res.status(400).json({ error: 'No files' });

    
}

const now = new Date().toISOString();
    const dir = await ensureDisputeUploadDir(dispute.id);

    -${safeName}`,
        fileName: safeName,
        fileSize: buffer.length,
        mimeType: f.mimeType || 'application/octet-stream',
        path: filePath,
        uploadedAt: now,
        uploadedByUserId: user.id,
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      });
    }
    dispute.updatedAt = now;
    await upsertDispute(dispute);
    return res.status(201).json({ dispute });
<<<<<<< HEAD
  }
  res.setHeader("Allow", "POST");
  return res.status(405).end("Method Not Allowed");
}
=======
 
}

  res.setHeader('Allow', 'POST');
  return res.status(405).end('Method Not Allowed');

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
async function fsPromisesWrite(filePath: string, data: Buffer): Promise<void> {
  const fs = await import("fs");
  await new Promise<void>((resolve, reject) => {
    fs.mkdir(
      require("path").dirname(filePath)
      { recursive: true }
      (err: any) => {
        if (err) return reject(err);
        fs.writeFile(filePath, data, (err2: any) =>
          err2 ? reject(err2) : resolve()
        );
      }
    );
  });
<<<<<<< HEAD
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
