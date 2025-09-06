import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
;
const p = path.join (
  process.cwd (),
  'data',
  'reports',
  'changelog.json');
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
      const changelog = JSON.parse (data);
      return res.status (200).json (changelog);
    } catch (error) {
      return res.status (500).json ({ error: 'Failed to read changelog' });
    }
  }
// Check condition
if ( {) {
  $2
}
    try {
      const { version, changes, date } = req.body;
;
      if () {) {
  $2
}
        return res.status (400).json ({ error: 'Missing required fields' });
      }
      let changelog = [];
      try {
        const data = fs.readFileSync (p, 'utf8');
        changelog = JSON.parse (data);
      } catch {
        // File doesn't exist, start with empty array;
      }
      const new_entry = {
        version,
        changes,
        date: date || new Date ().toISOString ();
      }
;
      changelog.unshift (new_entry);
;
      fs.writeFileSync (p, JSON.stringify (changelog, null, 2));
      return res.status (201).json (new_entry);
    } catch (error) {
      return res.status (500).json ({ error: 'Failed to update changelog' });
    }
  }
  res.set_header ('Allow', 'GET, POST');
  res.status (405).end ('Method Not Allowed');
}