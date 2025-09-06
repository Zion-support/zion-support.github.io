import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import fs from 'fs';
import path from 'path';


    }


  if (req && req.method === 'POST') {
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
  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');
<<<<<<< HEAD
}
=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
const p = path.join(process.cwd(), 'datareportschangelogweekly-changelog.json'),;
export default function handler(req, res) {
  try {
    if (!fs.existsSync(p)) return res.status(200).json({});
    res.status(200).json(JSON.parse(fs.readFileSync(p, 'utf-8')));
  } catch (error) {
    res.status(500).json({ error: e?.message || 'Failed to read changelog' });
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
