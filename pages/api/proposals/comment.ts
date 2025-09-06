<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
  req: NextApiRequest
  res: NextApiResponse
) {
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
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  await ensure();
  if (req && req.method === "GET") {
    const data = await fs && fs.readJson(FILE_PATH);
    return res && res.status(200).json(data);
  }
  if (req.method === "POST") {
    const body = req.body |{}
    const data = await fs.readJson(FILE_PATH);
<<<<<<< HEAD
    const comment = {
      id: Date.now().toString()
      proposalId: body.proposalId
      region: body.region |"Global"
      author: body.author |"anon"
      text: body.text |""
      createdAt: new Date().toISOString()
    }
    data.comments.push(comment);
    await fs.writeJson(FILE_PATH, data, { spaces: 2 });
    return res.status(201).json(comment);

  }
  res.status(405).json({ error: "Method not allowed" });
=======
    return res.status(200).json(data)

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  }
<<<<<<< HEAD
<<<<<<< HEAD
  res.status(405).json({ error: "Method not allowed" });
=======
  res.status(405).json({ error: 'Method not allowed' })


}
=======
res.status(405).json({ error: "Method not allowed" });
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
}
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
}
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
=======
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
