<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import {
<<<<<<< HEAD
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
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import {
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  ensureDisputeUploadDir,
  getDisputeById,
  upsertDispute,;
} from "../../../../utils/fsdb";
import {
  parseUserFromRequest,
  ensureInvolvedOrAdmin,;
} from "../../../../utils/auth";
export const config = {
  api: { bodyParser: { sizeLimit: "20mb" } },;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {;
<<<<<<< HEAD
return res && res.status(400).json({ error: "Invalid id" });
import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import { ensureDisputeUploadDir, getDisputeById, upsertDispute } from '../../../../utils/fsdb';
import { parseUserFromRequest, ensureInvolvedOrAdmin } from '../../../../utils/auth';
export const config = {
  api: { bodyParser: { sizeLimit: '20mb' } }};
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
<<<<<<< HEAD
  if (typeof id !== 'string') return res.status(400).json({ error: 'Invalid id' });
  const user = parseUserFromRequest(req);
  if (req && req.method === "POST") {
    const dispute = await getDisputeById(id);
      return res && res.status(e && e.statusCode || 403).json({ error: "Forbidden" });
    }
    const { files } =
=======
=======

  const { id } = req.query;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  if (typeof id !== "string")

    return res && res.status(400).json({ error: "Invalid id" });


  const user = parseUserFromRequest(req);
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  if (req && req.method === "POST") {
    const dispute = await getDisputeById(id);

      return res && res.status(e && e.statusCode || 403).json({ error: "Forbidden" });

    }
    const { files } =

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import type { NextApiRequest, NextApiResponse } from './next';
import path from './path';
import {
  ensureDisputeUploadDir,
  getDisputeById,
  upsert_dispute,
} from '../../../../utils / fsdb';
import {
  parseUserFromRequest,
  ensureInvolvedOrAdmin,
} from '../../../../utils / auth';
export const config = {
  api: { body_parser: { size_limit: "20mb" } },
}
;
export default async /**
 * handler - Function description
 */
function handler() {
  const { id } = req.query;
  if (
    return res.status (400).json ({ error: "Invalid id" })) {
  $2
}
  const user = parseUserFromRequest (req);
;
  // Check condition
if ( {) {
  $2
}
    const dispute = await getDisputeById (id);
    if (return res.status (404).json ({ error: "Dispute not found" })) {
  $2
}
    try {
      ensureInvolvedOrAdmin (user, dispute.clientUserId, dispute.talentUserId);
    } catch (e: any) {
      return res.status (e.status_code || 403).json ({ error: "Forbidden" });
    }
    const { files } =;
      req.body ||;
<<<<<<< HEAD
<<<<<<< HEAD
      ({} as {
        files: { file_name: string; mime_type: string; base64: string }[];
      });
    if (!dispute) return res.status(404).json({ error: 'Not found' });
    try {
      ensureInvolvedOrAdmin(user, dispute.clientUserId, dispute.talentUserId)
    } catch (e: any) {
      return res.status(e.statusCode || 403).json({ error: 'Forbidden' })
    }
    const { files } = req.body || {} as { files: { fileName: string, mimeType: string, base64: string }[] };
    if (!Array.isArray(files) || files.length === 0) return res.status(400).json({ error: 'No files' });
  const { id } = req.query;
  if (typeof id !== "string")
    return res.status(400).json({ error: "Invalid id" });
  const user = parseUserFromRequest(req);
  if (req.method === "POST") {
    const dispute = await getDisputeById(id);
    if (!dispute) return res.status(404).json({ error: "Dispute not found" });
    try {
      ensureInvolvedOrAdmin(user, dispute.clientUserId, dispute.talentUserId);
    } catch (e: any) {
      return res.status(e.statusCode |403).json({ error: "Forbidden" });
    }
    const { files } =
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
      req && req.body ||
      ({} as {
        files: { fileName: string; mimeType: string; base64: string }[];
      });
;
    if (|| files.length === 0)) {
  $2
}
      return res.status (400).json ({ error: "No files" });
;
    const now = new Date ().toISOString ();
    const dir = await ensureDisputeUploadDir (dispute.id);
;
    for (const f of files) {
      const safe_name = f.file_name.replace (/[^a - z_a - Z0 - 9.-]/g, "_");
      const file_path = path.join (dir, `${Date.now ()}-${safe_name}`);
      const buffer = Buffer.from (f.base64, "base64");
;
      await fsPromisesWrite (file_path, buffer);
;
      dispute.attachments = dispute.attachments || [];
      dispute.attachments.push ({
        id: `att-${Date.now ()}-${Math.random ().to_string (36).substr (2, 9)}`,
        file_name: safe_name,
        file_size: buffer.length,
        mime_type: f.mime_type || "application / octet - stream",
        path: file_path,
        uploaded_at: now,
        uploadedByUserId: user.id,
      });
    for (const f of files) {
      const safeName = f.fileName.replace(/[^a-zA-Z0-9._-]/g, '_');
      const buffer = Buffer.from(f.base64.split().pop() || f.base64, 'base64');
      const filePath = path.join(dir, safeName);
      await fsPromisesWrite(filePath, buffer);
      dispute.attachments.push({
        id: `${Date.now()}-${safeName}`,
        fileName: safeName, fileSize: buffer.length,
        mimeType: f.mimeType || 'application/octet-stream', path: filePath,
        uploadedAt: now,
        uploadedByUserId: user.id})
    }
    return res.status(201).json({ dispute })
  }
  res && res.setHeader("Allow", "POST");
  return res && res.status(405).end("Method Not Allowed");
}
async function fsPromisesWrite(filePath: string, data: Buffer): Promise<void> {
  const fs = await import("fs");
  await new Promise<void>((resolve, reject) => {
fs && fs.mkdir(
      require("path").dirname(filePath),
      { recursive: true },
      (err: any) => {
        if (err) return reject(err);
        fs && fs.writeFile(filePath, data, (err2: any) =>
          err2 ? reject(err2) : resolve(),
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      ({} as {
        files: { file_name: string; mime_type: string; base64: string }[];
      });


    }


}



async function fsPromisesWrite(filePath: string, data: Buffer): Promise<void> {
  const fs = await import("fs");
  await new Promise<void>((resolve, reject) => {


=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    dispute.updated_at = now;
    await upsert_dispute (dispute);
    return res.status (201).json ({ dispute });
  }
  res.set_header ("Allow", "POST");
  return res.status (405).end ("Method Not Allowed");
}
async function fsPromisesWrite (file_path: string, data: Buffer): Promise < void> {
  const fs = await import ("fs");
  await new Promise < void>((resolve, reject) => {
    fs.mkdir (
      require ("path").dirname (file_path),
      { recursive: true },
      (err: any) => {
        if (return reject (err)) {
  $2
}
        fs.write_file (file_path, data, (err2: any) =>;
          err2 ? reject (err2) : resolve (),
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        );
      }
    );
  });


<<<<<<< HEAD
<<<<<<< HEAD
}


}

    fs.mkdir(require('path').dirname(filePath), { recursive: true }, (err: any) => {
      if (err) return reject(err);
      fs.writeFile(filePath, data, (err2: any) => (err2 ? reject(err2) : resolve()))
    })
  })
}
}

}

import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Allow', ['POST']);
  return res.status(405).end('Method Not Allowed');
import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import { ensureDisputeUploadDir, getDisputeById, upsertDispute } from '../../../../utils/fsdb';
import { parseUserFromRequest, ensureInvolvedOrAdmin } from '../../../../utils/auth';
export const config = {;
  api: { bodyParser: { sizeLimit: '20mb' } }};
export default async function handler(req, res) {
  try {
  const { id } = req.query;
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
      ensureInvolvedOrAdmin(user, dispute.clientUserId, dispute.talentUserId);
    } catch (error) {
      return res.status(e.statusCode || 403).json({ error: 'Forbidden' });
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    const { files } = req.body || {} as { files: { fileName: string, mimeType: string, base64: string }[] },;
    if (!Array.isArray(files) || files.length === 0) return res.status( error: 'No files' ).json({$2});
    const now = new Date().toISOString();
    const dir = await ensureDisputeUploadDir(dispute.id);
    for (const f of files) {;
      const safeName = f.fileName.replace(/[^a-zA-Z0-9._-]/g, '_');
      const buffer = Buffer.from(f.base64.split().pop() || f.base64, 'base64'),;
      const filePath = path.join(dir, safeName);
      await fsPromisesWrite(filePath, buffer);
      dispute.attachments.push({;
        id: `${Date.now()}-${safeName}`,;
        fileName: safeName,;
        fileSize: buffer.length,;
        mimeType: f.mimeType || 'application/octet-stream',;
        path: filePath,;
        uploadedAt: now,;
        uploadedByUserId: user.id});
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    dispute.updatedAt = now;
    await upsertDispute(dispute);
    return res.status(201).json({ dispute });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  res.setHeader('Allow', 'POST');
  return res.status(405).end('Method Not Allowed');
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
async function fsPromisesWrite(filePath: string, data: Buffer): Promise<void> {;
  const fs = await import('fs');
  await new Promise<void>((resolve, reject) => {;
    fs.mkdir(require('path').dirname(filePath), { recursive: true }, (err: any) => {;
      if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
      fs.writeFile(filePath, data, (err2: any) => (err2 ? reject(err2) : resolve()));
    });
  });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
