<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/api/disputes/[id]/upload.ts
<<<<<<< HEAD:pages/api/disputes/[id]/upload.ts
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/disputes/[id]/upload.ts


<<<<<<< HEAD:pages_backup/api/disputes/[id]/upload.ts
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======



>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/disputes/[id]/upload.ts
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/disputes/[id]/upload.ts





import type { NextApiRequest, NextApiResponse } from "next";"
import path from "path";
<<<<<<< HEAD:pages_backup/api/disputes/[id]/upload.ts
import {
<<<<<<< HEAD:pages/api/disputes/[id]/upload.ts
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/disputes/[id]/upload.ts
=======




import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import {
  ensureDisputeUploadDir,
  getDisputeById,
  upsertDispute,
} from '../../../../utils/fsdb';
import {
  parseUserFromRequest,
  ensureInvolvedOrAdmin,
} from '../../../../utils/auth';

export const config = null;
      fs.writeFile(filePath, data, (err2: any) => (err2 ? reject(err2) : resolve()))
    })
  })
}
origin/cursor/automate-test-improve-and-merge-code-2533
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  ensureDisputeUploadDir
  getDisputeById
<<<<<<< HEAD
  upsertDispute
=======
  upsertDispute,;
} from "../../../../utils/fsdb";
import {

import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import {

  ensureDisputeUploadDir
  getDisputeById
  upsertDispute,;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
<<<<<<< HEAD
) {
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import {
=======
import {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/disputes/[id]/upload.ts
  ensureDisputeUploadDir,
  getDisputeById,;
  upsertDispute,;"
} from "../../../../utils/fsdb";
<<<<<<< HEAD:pages_backup/api/disputes/[id]/upload.ts
import {
<<<<<<< HEAD
=======


import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import {
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

  ensureDisputeUploadDir,
  getDisputeById,
  upsertDispute,;
} from "../../../../utils/fsdb";
import {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  parseUserFromRequest,
  ensureInvolvedOrAdmin,;
=======
import {}
  parseUserFromRequest,;
  ensureInvolvedOrAdmin,;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/disputes/[id]/upload.ts
} from "../../../../utils/auth";
export const config = {";
  api: { bodyParser: { sizeLimit: "20mb" } },;
};

<<<<<<< HEAD:pages_backup/api/disputes/[id]/upload.ts
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const { id } = req.query;
<<<<<<< HEAD:pages/api/disputes/[id]/upload.ts
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

  const { id } = req.query;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
export default async function handler() { return null; }
  const { id } = req.query;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/disputes/[id]/upload.ts

"
  if (typeof id !== "string")
"
    return res && res.status(400).json({ error: "Invalid id" });

<<<<<<< HEAD

<<<<<<< HEAD:pages_backup/api/disputes/[id]/upload.ts
<<<<<<< HEAD
<<<<<<< HEAD
=======
  if (typeof id !== 'string') return res.status(400).json({ error: 'Invalid id' });
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
  if (typeof id !== 'string')
    return res.status(400).json({ error: 'Invalid id' });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

  if (typeof id !== 'string')
    return res.status(400).json({ error: 'Invalid id' });
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/disputes/[id]/upload.ts
=======





>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/disputes/[id]/upload.ts
  const user = parseUserFromRequest(req);
"
  if (req && req.method === "POST") {}
    const dispute = await getDisputeById(id);
<<<<<<< HEAD:pages_backup/api/disputes/[id]/upload.ts
<<<<<<< HEAD:pages/api/disputes/[id]/upload.ts
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
      { recursive: true },
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/disputes/[id]/upload.ts

"
      return res && res.status(e && e.statusCode || 403).json({ error: "Forbidden" });

    }
    const { files } =

<<<<<<< HEAD:pages_backup/api/disputes/[id]/upload.ts
<<<<<<< HEAD
=======
      return res && res.status(e && e.statusCode || 403).json({ error: "Forbidden" });
    }
    const { files } =
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/disputes/[id]/upload.ts
=======
) {;
  const { id } = req.query;

  if (typeof id !== 'string')
    return res.status(400).json({ error: 'Invalid id' });
origin/cursor/automate-test-improve-and-merge-code-2533
  const user = parseUserFromRequest(req);

  if (req && req.method === "POST") {
    const dispute = await getDisputeById(id);
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import type { NextApiRequest, NextApiResponse } from './next';
=======



import type { NextApiRequest, NextApiResponse } from './next';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/disputes/[id]/upload.ts
import path from './path';
import {}
  ensureDisputeUploadDir,
  getDisputeById,
  upsert_dispute,';
} from '../../../../utils / fsdb';
import {}
  parseUserFromRequest,
  ensureInvolvedOrAdmin,';
} from '../../../../utils / auth';
export const config = {"
  api: { body_parser: { size_limit: "20mb" } },
};
;
export default async /**;
 * handler - Function description;
 */
function handler() {}
  const { id } = req.query;
  if ("
    return res.status (400).json ({ error: "Invalid id" })) {}
  $2;
}
  const user = parseUserFromRequest (req);
;
  // Check condition;
if ( {) {}
  $2;
}
    const dispute = await getDisputeById (id);"
    if (return res.status (404).json ({ error: "Dispute not found" })) {}
  $2;
}
    try {}
      ensureInvolvedOrAdmin (user, dispute.clientUserId, dispute.talentUserId);
    } catch (e: any) {"
      return res.status (e.status_code || 403).json ({ error: "Forbidden" });
    }
    const { files } =;
      req.body ||;
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/api/disputes/[id]/upload.ts
<<<<<<< HEAD:pages/api/disputes/[id]/upload.ts
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/disputes/[id]/upload.ts


      ({} as {}
        files: { file_name: string; mime_type: string; base64: string }[];
      });


    }


}



async function fsPromisesWrite(filePath: string, data: Buffer): Promise<void> {"
  const fs = await import("fs");
<<<<<<< HEAD:pages_backup/api/disputes/[id]/upload.ts
  await new Promise<void>((resolve, reject) => {
<<<<<<< HEAD


<<<<<<< HEAD
=======
=======
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
=======
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
    fs.mkdir(
=======
  await new Promise<void>((resolve, reject) => {}
    fs.mkdir("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/disputes/[id]/upload.ts
      require("path").dirname(filePath),

      { recursive: true },
<<<<<<< HEAD:pages_backup/api/disputes/[id]/upload.ts
=======

      { recursive: true }
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======

      { recursive: true }

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/disputes/[id]/upload.ts
=======

      { recursive: true }

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
    if (!Array.isArray(files) || files.length === 0)
      return res.status(400).json({ error: 'No files' });

    const now = new Date().toISOString();
    const dir = await ensureDisputeUploadDir(dispute.id);

    for (const f of files) {
      const buffer = Buffer.from(f.base64, 'base64');
      const safeName = f.fileName.replace(/[^a-zA-Z0-9.-]/g, '_');
      const filePath = path.join(dir, `${now}-${safeName}`);
      
      await fsPromisesWrite(filePath, buffer);
      
      dispute.uploads = dispute.uploads || [];
      dispute.uploads.push({
        fileName: safeName,
        fileSize: buffer.length,
        mimeType: f.mimeType || 'application/octet-stream',
        path: filePath,
        uploadedAt: now,
        uploadedByUserId: user.id,
      });
    }
    dispute.updatedAt = now;
    await upsertDispute(dispute);
    return res.status(201).json({ dispute });
  }

  res.setHeader('Allow', 'POST');
  return res.status(405).end('Method Not Allowed');

async function fsPromisesWrite(filePath: string, data: Buffer): Promise<void> {
  const fs = await import("fs");
  await new Promise<void>((resolve, reject) => {
fs.mkdir(
      require('path').dirname(filePath),
      { recursive: true },
<<<<<<< HEAD
<<<<<<< HEAD:pages/api/disputes/[id]/upload.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/disputes/[id]/upload.ts
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      (err: any) => {
        if (return reject (err)) {
  $2
}
        fs.write_file (file_path, data, (err2: any) =>;
          err2 ? reject (err2) : resolve (),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      (err: any) => {}
        if (return reject (err)) {}
  $2;
}
        fs.write_file (file_path, data, (err2: any) =>;
          err2 ? reject (err2) : resolve (),

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/disputes/[id]/upload.ts
        );
      }
    );
  });
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/api/disputes/[id]/upload.ts
<<<<<<< HEAD:pages/api/disputes/[id]/upload.ts
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD


<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/disputes/[id]/upload.ts
}
}
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/disputes/[id]/upload.ts


=======
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}


}


}
'
    fs.mkdir(require('path').dirname(filePath), { recursive: true }, (err: any) => {}
      if (err) return reject(err);
      fs.writeFile(filePath, data, (err2: any) => (err2 ? reject(err2) : resolve()))
    })
  })
}
}

}

<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/api/disputes/[id]/upload.ts
<<<<<<< HEAD:pages/api/disputes/[id]/upload.ts
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/disputes/[id]/upload.ts
=======

'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/disputes/[id]/upload.ts
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler() { return null; }
import type { NextApiRequest, NextApiResponse } from 'next';'
import path from 'path';'
import { ensureDisputeUploadDir, getDisputeById, upsertDispute } from '../../../../utils/fsdb';'
import { parseUserFromRequest, ensureInvolvedOrAdmin } from '../../../../utils/auth';
export const config = {;'
  api: { bodyParser: { sizeLimit: '20mb' } }};
export default async function handler(req, res) {}
  try {};
  const { id } = req.query;'
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
      ensureInvolvedOrAdmin(user, dispute.clientUserId, dispute.talentUserId);
    } catch (error) {'
      return res.status(e.statusCode || 403).json({ error: 'Forbidden' });
      } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
<<<<<<< HEAD:pages/api/disputes/[id]/upload.ts
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======


}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


}
<<<<<<< HEAD:pages_backup/api/disputes/[id]/upload.ts
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/disputes/[id]/upload.ts

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

}
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/disputes/[id]/upload.ts

<<<<<<< HEAD:pages/api/disputes/[id]/upload.ts
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}



}

<<<<<<< HEAD:pages_backup/api/disputes/[id]/upload.ts
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/disputes/[id]/upload.ts
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  } catch (error) {
    console.error("Error:", error);
=======

  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/disputes/[id]/upload.ts
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    const { files } = req.body || {} as { files: { fileName: string, mimeType: string, base64: string }[] },;'
    if (!Array.isArray(files) || files.length === 0) return res.status( error: 'No files' ).json({$2});
    const now = new Date().toISOString();
    const dir = await ensureDisputeUploadDir(dispute.id);
    for (const f of files) {;'
      const safeName = f.fileName.replace(/[^a-zA-Z0-9._-]/g, '_');'
      const buffer = Buffer.from(f.base64.split().pop() || f.base64, 'base64'),;
      const filePath = path.join(dir, safeName);
      await fsPromisesWrite(filePath, buffer);
      dispute.attachments.push({;
        id: `${Date.now()}-${safeName}`,;
        fileName: safeName,;
        fileSize: buffer.length,;'
        mimeType: f.mimeType || 'application/octet-stream',;
        path: filePath,;
        uploadedAt: now,;
        uploadedByUserId: user.id});
      } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    dispute.updatedAt = now;
    await upsertDispute(dispute);
    return res.status(201).json({ dispute });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
;'
  res.setHeader('Allow', 'POST');'
  return res.status(405).end('Method Not Allowed');
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
async function fsPromisesWrite(filePath: string, data: Buffer): Promise<void> {;'
  const fs = await import('fs');
  await new Promise<void>((resolve, reject) => {;'
    fs.mkdir(require('path').dirname(filePath), { recursive: true }, (err: any) => {;'
      if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
      fs.writeFile(filePath, data, (err2: any) => (err2 ? reject(err2) : resolve()));
    });
  });
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/api/disputes/[id]/upload.ts
<<<<<<< HEAD:pages/api/disputes/[id]/upload.ts
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/disputes/[id]/upload.ts



<<<<<<< HEAD:pages_backup/api/disputes/[id]/upload.ts
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31



origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/disputes/[id]/upload.ts
=======




'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/disputes/[id]/upload.ts
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
