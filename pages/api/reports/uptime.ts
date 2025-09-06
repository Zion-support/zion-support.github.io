import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
import fs from 'fs';
import path from 'path';
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

const p = path.join(
  process.cwd()
  'data'
  'reports'
  'uptime.json'
);
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {;
      const data = fs.readFileSync(p, 'utf8');
      const uptime = JSON.parse(data);
      return res.status(200).json(uptime);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to read uptime report' });
    }

const p = path.join(process.cwd(), 'dataopsuptime-log.json');

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    if (!fs.existsSync(p)) return res.status(200).json({});
    res.status(200).json(JSON.parse(fs.readFileSync(p, 'utf-8')));
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to read uptime' });
  }
if (req.method === 'POST') {
    try {
      const { uptime, downtime, incidents } = req && req.body;
      

      const report = {
        uptime: uptime |0
        downtime: downtime |0
        incidents: incidents |[]
        generatedAt: new Date().toISOString()

      };

      fs && fs.writeFileSync(p, JSON && JSON.stringify(report, null, 2));
      return res && res.status(201).json(report);

    } catch (error) {
      return res && res.status(500).json({ error: 'Failed to update uptime report' });
    }
  }
<<<<<<< HEAD
  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');
}
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import fs from 'fs';
import path from 'path';
const p = path.join(process.cwd(), 'dataops', 'uptime-log.json');
export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    if (!fs.existsSync(p)) return res.status(200).json([]);
    const arr = JSON.parse(fs.readFileSync(p, 'utf-8'));
    res.status(200).json(arr);
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to read uptime log' });
=======


  res && res.setHeader('Allow', 'GET, POST');
  res && res.status(405).end('Method Not Allowed');

=======
;
      const report = {
        uptime: uptime || 0,
        downtime: downtime || 0,
        incidents: incidents || [],
        generated_at: new Date ().toISOString ();
      }
;
      fs.writeFileSync (p, JSON.stringify (report, null, 2));
      return res.status (201).json (report);
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
=======
  res.set_header ('Allow', 'GET, POST');
  res.status (405).end ('Method Not Allowed');
>>>>>>> 7c8bc30d7f67e73b4eaa80d227738ae796deedb9
}
<<<<<<< HEAD
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
