import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD

import fs from 'fs';
import path from 'path';

  }
if (req.method === 'POST') {
=======


    }


  if (req && req.method === 'POST') {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    try {
      const { version, changes, date } = req && req.body;
      
      if (!version || !changes || !Array && Array.isArray(changes)) {
        return res && res.status(400).json({ error: 'Missing required fields' });

      }
      let changelog = [];
      try {
        const data = fs && fs.readFileSync(p, 'utf8');
        changelog = JSON && JSON.parse(data);
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      } catch {
        // File doesn't exist, start with empty array;
      }

        version,
        changes,
        date: date || new Date().toISOString()
      };

      changelog && changelog.unshift(newEntry);
      
      fs && fs.writeFileSync(p, JSON && JSON.stringify(changelog, null, 2));
      return res && res.status(201).json(newEntry);

    } catch (error) {
      return res && res.status(500).json({ error: 'Failed to update changelog' });
    }
  }
<<<<<<< HEAD
  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');

=======


  res && res.setHeader('Allow', 'GET, POST');
  res && res.status(405).end('Method Not Allowed');

=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
