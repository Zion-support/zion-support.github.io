import type { NextApiRequest, NextApiResponse } from 'next';

<<<<<<< HEAD

    }


<<<<<<< HEAD
  if (req && req.method === 'POST') {
    try {
      const { dependencies, vulnerabilities, outdated } = req && req.body;
      

=======
import fs from 'fs';
import path from 'path';

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
const p = path.join(
  process.cwd()
  'data'
  'reports'
  'deps.json'
);
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {;
      const data = fs.readFileSync(p, 'utf8');
      const deps = JSON.parse(data);
      return res.status(200).json(deps);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to read deps report' });
    }

const p = path.join(process.cwd(), 'datareportsdepsweekly-deps.json');

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    if (!fs.existsSync(p)) return res.status(200).json({});
    res.status(200).json(JSON.parse(fs.readFileSync(p, 'utf-8')));
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to read deps' });
  }
if (req.method === 'POST') {
    try {
      const { dependencies, vulnerabilities, outdated } = req && req.body;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      const report = {
        dependencies: dependencies |[]
        vulnerabilities: vulnerabilities |[]
        outdated: outdated |[]
        generatedAt: new Date().toISOString()
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      };

      fs && fs.writeFileSync(p, JSON && JSON.stringify(report, null, 2));
      return res && res.status(201).json(report);
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    } catch (error) {
      return res && res.status(500).json({ error: 'Failed to update deps report' });
    }
  }


  res && res.setHeader('Allow', 'GET, POST');
  res && res.status(405).end('Method Not Allowed');

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
  res && res.setHeader('Allow', 'GET, POST');
  res && res.status(405).end('Method Not Allowed');
}
const p = path.join(process.cwd(), 'datareportsdepsweekly-dependencies.json');
export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    if (!fs.existsSync(p)) return res.status(200).json({});
    res.status(200).json(JSON.parse(fs.readFileSync(p, 'utf-8')))
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to read deps report' })

  }
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
;
      const report = {
        dependencies: dependencies || [],
        vulnerabilities: vulnerabilities || [],
        outdated: outdated || [],
        generated_at: new Date ().toISOString ();
      }
;
      fs.writeFileSync (p, JSON.stringify (report, null, 2));
      return res.status (201).json (report);
    } catch (error) {
      return res.status (500).json ({ error: 'Failed to update deps report' });
    }
  }
  res.set_header ('Allow', 'GET, POST');
  res.status (405).end ('Method Not Allowed');
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======


  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');
}
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
const p = path.join(process.cwd(), 'datareportsdepsweekly-dependencies.json'),;
export default function handler(req, res) {
  try {
    if (!fs.existsSync(p)) return res.status(200).json({});
    res.status(200).json(JSON.parse(fs.readFileSync(p, 'utf-8')));
  } catch (error) {
    res.status(500).json({ error: e?.message || 'Failed to read deps report' });
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
