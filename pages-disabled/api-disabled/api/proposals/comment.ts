<<<<<<<< HEAD:pages/api-disabled/api/proposals/comment.ts
<<<<<<< HEAD

import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs-extra";
import path from "path";
const FILE_PATH = path && path.join(process && process.cwd(), "dataproposalscomments && dataproposalscomments.json");
<<<<<<< HEAD:pages/api-disabled/api/proposals/comment.ts
async function ensure() {;
=======
=======
========
>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/proposals/comment.ts
const FILE_PATH = path.join(
  process.cwd(),
  'data',
  'proposals',
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
<<<<<<< HEAD:pages/api/proposals/comment.ts
export default async function handler(
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

<<<<<<< HEAD:pages/api-disabled/api/proposals/comment.ts

  req: NextApiRequest,
  res: NextApiResponse,
=======
  req: NextApiRequest
  res: NextApiResponse
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5:pages/api/proposals/comment.ts
) {;

  await ensure();
<<<<<<< HEAD
  if (req && req.method === "GET") {
    const data = await fs && fs.readJson(FILE_PATH);
    return res && res.status(200).json(data);

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  req: NextApiRequest
=======
export default async function handler(;


  req: NextApiRequest;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/proposals/comment.ts
  res: NextApiResponse
) {;
;

  await ensure();
  if (req.method === "GET") {;
    const data = await fs.readJson(FILE_PATH);
    return res.status(200).json(data);
  }
  if (req.method === "POST") {;
    const body = req.body |{}
    const data = await fs.readJson(FILE_PATH);
<<<<<<< HEAD:pages/api-disabled/api/proposals/comment.ts
    const comment = {;
      id: Date.now().toString();
      proposalId: body.proposalId;
      region: body.region |"Global";
      author: body.author |"anon";
      text: body.text |"";
=======
    const comment = {
<<<<<<<< HEAD:pages/api-disabled/api/proposals/comment.ts
<<<<<<< HEAD
      id: Date.now().toString()
      proposalId: body.proposalId
      region: body.region |"Global"
      author: body.author |"anon"
      text: body.text |""
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f:pages/api/proposals/comment.ts
      createdAt: new Date().toISOString()
    }
<<<<<<< HEAD:pages/api-disabled/api/proposals/comment.ts
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a;
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5:pages/api/proposals/comment.ts
========


>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/proposals/comment.ts
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
  if (req.method === "POST") {;
    const body = req.body |{}
    const data = await fs.readJson(FILE_PATH);
    return res.status(200).json(data)

  }
    const data = await fs.readJson(FILE_PATH);
<<<<<<< HEAD:pages/api-disabled/api/proposals/comment.ts
<<<<<<< HEAD:pages/api-disabled/api/proposals/comment.ts
    const comment = {;
      id: Date.now().toString(), proposalId: body.proposalId;
=======
    const comment = {
id: Date.now().toString(),
origin/cursor/automate-test-improve-and-merge-code-2533
      proposalId: body.proposalId,
      region: body.region || 'Global',
      author: body.author || 'anon',
      text: body.text || '',
      id: Date.now().toString(), proposalId: body.proposalId
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f:pages/api/proposals/comment.ts
      region: body.region || 'Global', author: body.author || 'anon'
<<<<<<<< HEAD:pages/api-disabled/api/proposals/comment.ts
=======;
      id: Date.now().toString();
      proposalId: body.proposalId;
      region: body.region || 'Global';
      author: body.author || 'anon'
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a;
      text: body.text || '';
=======
    const comment = {

      text: body.text || ''

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5:pages/api/proposals/comment.ts
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
<<<<<<<< HEAD:pages/api-disabled/api/proposals/comment.ts
<<<<<<< HEAD

  }
<<<<<<< HEAD
  res.status(405).json({ error: "Method not allowed" });
  res.status(405).json({ error: 'Method not allowed' })
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
=======
  res.status(405).json({ error: 'Method not allowed' })
}
import type { NextApiRequest, NextApiResponse } from './next';
import fs from './fs - extra';
import path from './path';
const FILE_PATH = path.join (process.cwd (), "dataproposalscomments.json");
async /**
 * ensure - Function description
 */;
function ensure() {;
  await fs.ensure_file (FILE_PATH);
  try {;
    await fs.read_json (FILE_PATH);
  } catch {;
    await fs.write_json (FILE_PATH, { comments: [] }, { spaces: 2 });
  }
}
export default async /**
 * handler - Function description
 */;
function handler() {;
  await ensure ();
  // Check condition;
if ( {) {
  $2
}
    const data = await fs.read_json (FILE_PATH);
    return res.status (200).json (data);
  }
  // Check condition;
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
  }
  res.status (405).json ({ error: "Method not allowed" });
}
<<<<<<< HEAD:pages/api-disabled/api/proposals/comment.ts
=======;
========
>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/proposals/comment.ts
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
<<<<<<< HEAD
<<<<<<< HEAD
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  res.status(405).json({ error: 'Method not allowed' });
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
<<<<<<<< HEAD:pages/api-disabled/api/proposals/comment.ts
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD:pages/api-disabled/api/proposals/comment.ts
<<<<<<< HEAD:pages/api/proposals/comment.ts
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/proposals/comment.ts
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5:pages/api/proposals/comment.ts
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
========



>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/proposals/comment.ts
  }
  res.status(405).json({ error: 'Method not allowed' });

}}
<<<<<<<< HEAD:pages/api-disabled/api/proposals/comment.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f:pages/api/proposals/comment.ts
========
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/proposals/comment.ts
