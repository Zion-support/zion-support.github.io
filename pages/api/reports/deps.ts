import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
;
const p = path.join (
  process.cwd (),
  'data',
  'reports',
  'deps.json');
;
export default /**
 * handler - Function description
 */
function handler() {
  // Check condition
if ( {) {
  $2
}
    try {
      const data = fs.readFileSync (p, 'utf8');
      const deps = JSON.parse (data);
      return res.status (200).json (deps);
    } catch (error) {
      return res.status (500).json ({ error: 'Failed to read deps report' });
    }
  }
// Check condition
if ( {) {
  $2
}
    try {
      const { dependencies, vulnerabilities, outdated } = req.body;
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