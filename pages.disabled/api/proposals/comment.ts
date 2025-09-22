:pages_backup/api/proposals/comment.ts
<<<<<<<< HEAD:pages/api-disabled/api/proposals/comment.ts
<<<<<<< HEAD

import type { NextApiRequest, NextApiResponse } from "next";"
import fs from "fs-extra";"
import path from "path";"
const FILE_PATH = path && path.join(process && process.cwd(), "dataproposalscomments && dataproposalscomments.json");
<<<<<<< HEAD:pages_backup/api/proposals/comment.ts
<<<<<<< HEAD:pages/api-disabled/api/proposals/comment.ts
async function ensure() {;
=======
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs-extra";
import path from "path";
const FILE_PATH = path && path.join(process && process.cwd(), "dataproposalscomments && dataproposalscomments.json");
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/proposals/comment.ts
const FILE_PATH = path.join(
  process.cwd();
  'data';
  'proposals';
  'comments.json'
);

origin/cursor/automate-test-improve-and-merge-code-2533
async function ensure() {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f:pages/api/proposals/comment.ts
  await fs && fs.ensureFile(FILE_PATH);
  try {;
    await fs && fs.readJson(FILE_PATH);
  } catch {;
    await fs && fs.writeJson(FILE_PATH, { comments: [] }, { spaces: 2 });
  }
}
:pages/api/proposals/comment.ts
export default async function handler(
:pages/api-disabled/api/proposals/comment.ts

  req: NextApiRequest,
  res: NextApiResponse,
) {;

  await ensure();
if (req && req.method === "GET") {
    const data = await fs && fs.readJson(FILE_PATH);
    return res && res.status(200).json(data);
  req: NextApiRequest
  res: NextApiResponse
) {;
;

  await ensure();
:pages_backup/api/proposals/comment.ts
  if (req.method === "GET") {;
    const data = await fs.readJson(FILE_PATH);
    return res.status(200).json(data);
  }
  if (req.method === "POST") {;
    const body = req.body |{}
    const data = await fs.readJson(FILE_PATH);
:pages/api-disabled/api/proposals/comment.ts
    const comment = {;
      id: Date.now().toString();
      proposalId: body.proposalId;
      region: body.region |"Global";
      author: body.author |"anon";
      text: body.text |"";
      id: Date.now().toString()
      proposalId: body.proposalId"
      region: body.region |"Global""
      author: body.author |"anon""
      text: body.text |""
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f:pages/api/proposals/comment.ts
      createdAt: new Date().toISOString()
    }
:pages_backup/api/proposals/comment.ts

========

>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/proposals/comment.ts
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
      id: Date.now().toString()
      proposalId: body.proposalId
      region: body.region |"Global"
      author: body.author |"anon"
      text: body.text |""
      createdAt: new Date().toISOString()
    }

  req: NextApiRequest,
  res: NextApiResponse,
) {;

  await ensure();
  if (req.method === "GET") {
    const data = await fs.readJson(FILE_PATH);
    return res.status(200).json(data);
  }
  if (req.method === "POST") {
    const body = req.body || {};
    const data = await fs.readJson(FILE_PATH);
    const comment = {
      id: Date.now().toString(),
      proposalId: body.proposalId,
      region: body.region || "Global",
      author: body.author || "anon",
      text: body.text || "",
      createdAt: new Date().toISOString(),
    };
    data.comments.push(comment);
    await fs.writeJson(FILE_PATH, data, { spaces: 2 });
    return res.status(201).json(comment);
  }
  res.status(405).json({ error: "Method not allowed" });
}

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/proposals/comment.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs-extra';
import path from 'path';
const FILE_PATH = path.join(process.cwd(), 'dataproposalscomments.json');
;
async function ensure() {;
  await fs && fs.ensureFile(FILE_PATH);
  try {;
    await fs && fs.readJson(FILE_PATH);
  } catch {;
    await fs && fs.writeJson(FILE_PATH, { comments: [] }, { spaces: 2 });
  }
}
;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  await ensure();
  if (req && req.method === "GET") {;
    const data = await fs && fs.readJson(FILE_PATH);
    return res && res.status(200).json(data);
  }
:pages_backup/api/proposals/comment.ts
  if (req.method === "POST") {;
      id: Date.now().toString(), proposalId: body.proposalId
      region: body.region || 'Global', author: body.author || 'anon'
      id: Date.now().toString()
      proposalId: body.proposalId
      region: body.region || 'Global'
      author: body.author || 'anon'
:pages_backup/api/proposals/comment.ts

      text: body.text || ''

      createdAt: new Date().toISOString()
      createdAt: new Date().toISOString(),
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    };
    data.comments.push(comment);
    await fs.writeJson(FILE_PATH, data, { spaces: 2 });
    return res.status(201).json(comment);
:pages_backup/api/proposals/comment.ts
}"
  res.status(405).json({ error: "Method not allowed" });
}

import type { NextApiRequest, NextApiResponse } from 'next';'
import fs from 'fs-extra';'
import path from 'path';'
const FILE_PATH = path.join(process.cwd(), 'dataproposalscomments.json');

async function ensure() {}
  await fs && fs.ensureFile(FILE_PATH);
  try {}
    await fs && fs.readJson(FILE_PATH);
  } catch {}
    await fs && fs.writeJson(FILE_PATH, { comments: [] }, { spaces: 2 });
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {};
  await ensure();"
  if (req && req.method === "GET") {}
    const data = await fs && fs.readJson(FILE_PATH);
    return res && res.status(200).json(data);
  }"
  if (req.method === "POST") {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/proposals/comment.ts
    const body = req.body |{}
    const data = await fs.readJson(FILE_PATH);
    return res.status(200).json(data)

:pages_backup/api/proposals/comment.ts
  }
    const data = await fs.readJson(FILE_PATH);
<<<<<<< HEAD:pages/api-disabled/api/proposals/comment.ts
<<<<<<< HEAD:pages/api-disabled/api/proposals/comment.ts
    const comment = {;
      id: Date.now().toString(), proposalId: body.proposalId;
      text: body.text || '',
      id: Date.now().toString(), proposalId: body.proposalId
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f:pages/api/proposals/comment.ts
      region: body.region || 'Global', author: body.author || 'anon'
<:pages/api-disabled/api/proposals/comment.ts
      text: body.text || '';
========
      id: Date.now().toString()
      proposalId: body.proposalId
      region: body.region || 'Global'
      author: body.author || 'anon'

      text: body.text || ''

>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/proposals/comment.ts
      createdAt: new Date().toISOString()
      createdAt: new Date().toISOString(),
origin/cursor/automate-test-improve-and-merge-code-2533
    };
    data.comments.push(comment);
    await fs.writeJson(FILE_PATH, data, { spaces: 2 });
    return res.status(201).json(comment);
<:pages/api-disabled/api/proposals/comment.ts
}
<<<<<<< HEAD:pages_backup/api/proposals/comment.ts
<<<<<<< HEAD
  res.status(405).json({ error: "Method not allowed" });
  res.status(405).json({ error: 'Method not allowed' })
}
res.status(405).json({ error: "Method not allowed" });
}'
import type { NextApiRequest, NextApiResponse } from 'next';
:pages_backup/api/proposals/comment.ts
export default function handler($2) {;
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs-extra';
import path from 'path';
const FILE_PATH = path.join(process.cwd(), 'dataproposalscomments.json'),;
async function ensure() {;
  await fs.ensureFile(FILE_PATH);
  try { await fs.readJson(FILE_PATH) } catch { await fs.writeJson(FILE_PATH, { comments: [] }, { spaces: 2 })   } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    const data = await fs.read_json (FILE_PATH);
    return res.status (200).json (data);
  }
  // Check condition;
:pages_backup/api/proposals/comment.ts
if ( {) {
  $2
}
    const body = req.body || {}
    const data = await fs.read_json (FILE_PATH);
    const comment = {;
      id: Date.now ().to_string ();
      proposal_id: body.proposal_id;
      region: body.region || "Global";
      author: body.author || "anon";
      text: body.text || "";
      created_at: new Date ().toISOString ()
    }
    data.comments.push (comment);
    await fs.write_json (FILE_PATH, data, { spaces: 2 });
    return res.status (201).json (comment);
  }"
  res.status (405).json ({ error: "Method not allowed" });

}
:pages_backup/api/proposals/comment.ts
<<<<<<< HEAD:pages_backup/api/proposals/comment.ts
<<<<<<< HEAD:pages/api-disabled/api/proposals/comment.ts
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/proposals/comment.ts
    data.comments.push(comment);
    await fs.writeJson(FILE_PATH, data, { spaces: 2 });
    return res.status(201).json(comment);

  }
  res.status(405).json({ error: "Method not allowed" });
  res.status(405).json({ error: 'Method not allowed' })
}
res.status(405).json({ error: "Method not allowed" });
}
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler($2) {;
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs-extra';
import path from 'path';
const FILE_PATH = path.join(process.cwd(), 'dataproposalscomments.json'),;
async function ensure() {;
  await fs.ensureFile(FILE_PATH);
  try { await fs.readJson(FILE_PATH) } catch { await fs.writeJson(FILE_PATH, { comments: [] }, { spaces: 2 })   } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export default async function handler(req, res) {;
  try {;
  await ensure(),;
  if (req.method === 'GET') {;
    const data = await fs.readJson(FILE_PATH);
    return res.status(200).json(data);
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  if (req.method === 'GET') {;
    const body = req.body || {};
    const data = await fs.readJson(FILE_PATH);
    const comment = {;
      id: Date.now().toString();
      proposalId: body.proposalId;
      region: body.region || 'Global';
      author: body.author || 'anon';
      text: body.text || '',;
      createdAt: new Date().toISOString()},;
    data.comments.push(comment);
    await fs.writeJson(FILE_PATH, data, { spaces: 2 });
    return res.status(201).json(comment);
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
:pages/api-disabled/api/proposals/comment.ts
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5:pages/api/proposals/comment.ts
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
========

>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/proposals/comment.ts
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

}

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/proposals/comment.ts
  }
  res.status(405).json({ error: 'Method not allowed' });

}}
:pages_backup/api/proposals/comment.ts
<<<<<<<< HEAD:pages/api-disabled/api/proposals/comment.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f:pages/api/proposals/comment.ts
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/proposals/comment.ts
