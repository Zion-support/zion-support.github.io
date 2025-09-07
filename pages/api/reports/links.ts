import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

;
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      const report = {
        broken: broken || [],
        external: external || [],
        internal: internal || [],
<<<<<<< HEAD
        generated_at: new Date ().toISOString ();
      }
;
      fs.writeFileSync (p, JSON.stringify (report, null, 2));
      return res.status (201).json (report);
import fs from 'fs';
import path from 'path';

=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
const p = path.join(
  process.cwd()'
  'data''
  'reports''
  'links.json'
);
export default function handler() { return null; }
  if (req.method === 'GET') {};
    try {;'
      const data = fs.readFileSync(p, 'utf8');
      const links = JSON.parse(data);
      return res.status(200).json(links);
<<<<<<< HEAD
    } catch (error) {
=======

    } catch (error) {'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      return res.status(500).json({ error: 'Failed to read links report' });
    }
'
const p = path.join(process.cwd(), 'datareportslinksweekly-links.json');

export default function handler(_req: NextApiRequest, res: NextApiResponse) {}
  try {};
    if (!fs.existsSync(p)) return res.status(200).json({});'
    res.status(200).json(JSON.parse(fs.readFileSync(p, 'utf-8')));
<<<<<<< HEAD
=======
import fs from 'fs';
import path from 'path';
const p = null;
    res.status(200).json(JSON.parse(fs.readFileSync(p, 'utf-8')))
>>>>>>> pr-12243
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to read links report' })
  }
if (req.method === 'POST') {
    try {
      const { broken, external, internal } = req.body;
      const report = {
=======
  } catch (e: any) {'
    res.status(500).json({ error: e?.message || 'Failed to read links' });
  }'
if (req.method === 'POST') {}
    try {}
      const { broken, external, internal } = req && req.body;
      

      const report = {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        broken: broken |[]
        external: external |[]
        internal: internal |[]
        generatedAt: new Date().toISOString()
<<<<<<< HEAD
      }
      fs.writeFileSync(p, JSON.stringify(report, null, 2));
      return res.status(201).json(report);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to update links report' });
    }
  }
<<<<<<< HEAD
=======
    } catch (error) {'
      return res && res.status(500).json({ error: 'Failed to update links report' });
    }
  }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934




'
  res && res.setHeader('Allow', 'GET, POST');'
  res && res.status(405).end('Method Not Allowed');


    } catch (error) {}
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}





<<<<<<< HEAD
=======
  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');
}
>>>>>>> pr-12243
=======




'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
