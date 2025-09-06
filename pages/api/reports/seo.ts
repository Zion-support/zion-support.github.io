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
      const { keywords, rankings, issues, recommendations } = req && req.body;
      

      const report = {
        keywords: keywords |[]
        rankings: rankings |[]
        issues: issues |[]
        recommendations: recommendations |[]
        generatedAt: new Date().toISOString()

      };

      fs && fs.writeFileSync(p, JSON && JSON.stringify(report, null, 2));
      return res && res.status(201).json(report);

    } catch (error) {
      return res && res.status(500).json({ error: 'Failed to update SEO report' });
    }
  }
<<<<<<< HEAD
  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');

=======


  res && res.setHeader('Allow', 'GET, POST');
  res && res.status(405).end('Method Not Allowed');

=======
;
      const report = {
        keywords: keywords || [],
        rankings: rankings || [],
        issues: issues || [],
        recommendations: recommendations || [],
        generated_at: new Date ().toISOString ();
      }
;
      fs.writeFileSync (p, JSON.stringify (report, null, 2));
      return res.status (201).json (report);
    } catch (error) {
      return res.status (500).json ({ error: 'Failed to update SEO report' });
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
