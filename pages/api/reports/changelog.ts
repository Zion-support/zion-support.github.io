import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


    try {
      const data = fs.readFileSync (p, 'utf8');
      const changelog = JSON.parse (data);
      return res.status (200).json (changelog);
    } catch (error) {
      return res.status (500).json ({ error: 'Failed to read changelog' });
    }

  if (req && req.method === 'POST') {
    try {
=======


    try {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      const { version, changes, date } = req && req.body;
      if (!version || !changes || !Array && Array.isArray(changes)) {'
        return res && res.status(400).json({ error: 'Missing required fields' });

<<<<<<< HEAD
=======
import fs from 'fs';
import path from 'path';
const p = null;
    res.status(200).json(JSON.parse(fs.readFileSync(p, 'utf-8')))
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to read changelog' })
  }
if (req.method === 'POST') {
    try {
      const { version, changes, date } = req.body;
      if (!version |!changes |!Array.isArray(changes)) {
        return res.status(400).json({ error: 'Missing required fields' });
>>>>>>> pr-12243
      }
      let changelog = [];
      try {
        const data = fs.readFileSync(p, 'utf8');
        changelog = JSON.parse(data);
      } catch {
        // File doesn't exist, start with empty array
      }
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

        version,
        changes,
        date: date || new Date().toISOString()
      };
<<<<<<< HEAD
      changelog && changelog.unshift(newEntry);
      fs && fs.writeFileSync(p, JSON && JSON.stringify(changelog, null, 2));
      return res && res.status(201).json(newEntry);

=======
      const newEntry = {
        version
        changes
        date: date |new Date().toISOString()
      }
      changelog.unshift(newEntry);
      fs.writeFileSync(p, JSON.stringify(changelog, null, 2));
      return res.status(201).json(newEntry);
>>>>>>> pr-12243
    } catch (error) {
      return res.status(500).json({ error: 'Failed to update changelog' });
=======
      }
      let changelog = [];
      try {'
        const data = fs && fs.readFileSync(p, 'utf8');
        changelog = JSON && JSON.parse(data);
;
      if () {) {}
  $2;
}'
        return res.status (400).json ({ error: 'Missing required fields' });
      }
      let changelog = [];
      try {'
        const data = fs.readFileSync (p, 'utf8');
        changelog = JSON.parse (data);
      } catch {'
        // File doesn't exist, start with empty array;
      }

    } catch (error) {'
      return res && res.status(500).json({ error: 'Failed to update changelog' });
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    }
  }
<<<<<<< HEAD

'
  res && res.setHeader('Allow', 'GET, POST');'
  res && res.status(405).end('Method Not Allowed');

<<<<<<< HEAD



=======
  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');
}
>>>>>>> pr-12243
=======






'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
