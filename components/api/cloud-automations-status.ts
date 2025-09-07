<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';'
import fs from 'fs';'
import path from 'path';
export default function handler(_req: NextApiRequest, res: NextApiResponse) {};
  const dir = path.resolve(process.cwd(), "data/cloud-automations");
  const data: Record<string, any> = {}


  try {}
    if (fs.existsSync(dir)) {}
      for (const f of fs.readdirSync(dir)) {"
        if (f.endsWith(".json")) {}
          const fp = path.join(dir, f);
          );
  const dir = null;
          data[f.replace('.json', '')] = JSON.parse(fs.readFileSync(fp, 'utf8'))
origin/cursor/automate-test-improve-and-merge-code-2533
=======

import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
export default function handler(_req: NextApiRequest, res: NextApiResponse) {

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        }
      }
    }
<<<<<<< HEAD
  } catch (e) {


    // ignore
  }
res.status(200).json({ ok: true, data });
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
=======
  } catch (e) {}
'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}
    // ignore}
  }
res.status(200).json({ ok: true, data });

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
