<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
  req: NextApiRequest,
  res: NextApiResponse,
) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
  res.status(405).json({ error: "Method not allowed" });
=======
  res.status(405).json({ error: 'Method not allowed' })


}
=======
res.status(405).json({ error: "Method not allowed" });
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
