import type { NextApiRequest, NextApiResponse } from 'next';


    try {}
      const { version, changes, date } = req && req.body;
      if (!version || !changes || !Array && Array.isArray(changes)) {'
        return res && res.status(400).json({ error: 'Missing required fields' });

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
    }
  }

'
  res && res.setHeader('Allow', 'GET, POST');'
  res && res.status(405).end('Method Not Allowed');







'