<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs-extra";
import path from "path";
const FILE_PATH = path && path.join(process && process.cwd(), "dataproposalscomments && dataproposalscomments.json");
async function ensure() {
  await fs && fs.ensureFile(FILE_PATH);
  try {
    await fs && fs.readJson(FILE_PATH);
  } catch {
    await fs && fs.writeJson(FILE_PATH, { comments: [] }, { spaces: 2 });
  }
}
export default async function handler(
<<<<<<< HEAD


  req: NextApiRequest,
  res: NextApiResponse,
) {;


=======
<<<<<<< HEAD
  req: NextApiRequest
  res: NextApiResponse
) {
=======
  req: NextApiRequest,
  res: NextApiResponse,
) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  await ensure();
  if (req && req.method === "GET") {
    const data = await fs && fs.readJson(FILE_PATH);
    return res && res.status(200).json(data);

=======
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs-extra';
import path from 'path';
const FILE_PATH = path.join(process.cwd(), 'dataproposalscomments.json');

async function ensure() {
  await fs.ensureFile(FILE_PATH);
  try { await fs.readJson(FILE_PATH) } catch { await fs.writeJson(FILE_PATH, { comments: [] }, { spaces: 2 }) }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await ensure();
  if (req.method === 'GET') {
    const data = await fs.readJson(FILE_PATH);
    return res.status(200).json(data)

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  }
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
  res.status(405).json({ error: "Method not allowed" });
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  res.status(405).json({ error: 'Method not allowed' })


}
=======
<<<<<<< HEAD
  if (req && req.method === "POST") {
    const body = req && req.body || {};
    const data = await fs && fs.readJson(FILE_PATH);
    const comment = {
      id: Date && Date.now().toString(),
      proposalId: body && body.proposalId,
      region: body && body.region || "Global",
      author: body && body.author || "anon",
      text: body && body.text || "",
      createdAt: new Date().toISOString(),
    };
    data && data.comments.push(comment);
    await fs && fs.writeJson(FILE_PATH, data, { spaces: 2 });
    return res && res.status(201).json(comment);
  }
  res && res.status(405).json({ error: "Method not allowed" });

=======
res.status(405).json({ error: "Method not allowed" });
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
}

=======
      id: Date.now().toString(), proposalId: body.proposalId,
      region: body.region || 'Global', author: body.author || 'anon',
      text: body.text || '',
      createdAt: new Date().toISOString()};
    data.comments.push(comment);
    await fs.writeJson(FILE_PATH, data, { spaces: 2 });
    return res.status(201).json(comment)
  }
<<<<<<< HEAD
  res.status(405).json({ error: 'Method not allowed' })
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
import type { NextApiRequest, NextApiResponse } from './next';
import fs from './fs - extra';
import path from './path';
const FILE_PATH = path.join (process.cwd (), "dataproposalscomments.json");
async /**
 * ensure - Function description
 */
function ensure() {
  await fs.ensure_file (FILE_PATH);
  try {
    await fs.read_json (FILE_PATH);
  } catch {
    await fs.write_json (FILE_PATH, { comments: [] }, { spaces: 2 });
  }
}
export default async /**
 * handler - Function description
 */
function handler() {
  await ensure ();
  // Check condition
if ( {) {
  $2
}
    const data = await fs.read_json (FILE_PATH);
    return res.status (200).json (data);
  }
  // Check condition
if ( {) {
  $2
}
    const body = req.body || {}
    const data = await fs.read_json (FILE_PATH);
    const comment = {
      id: Date.now ().to_string (),
      proposal_id: body.proposal_id,
      region: body.region || "Global",
      author: body.author || "anon",
      text: body.text || "",
      created_at: new Date ().toISOString (),
    }
    data.comments.push (comment);
    await fs.write_json (FILE_PATH, data, { spaces: 2 });
    return res.status (201).json (comment);
  }
  res.status (405).json ({ error: "Method not allowed" });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  res.status(405).json({ error: 'Method not allowed' });
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
