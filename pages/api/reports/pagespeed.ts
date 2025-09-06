import type { NextApiRequest, NextApiResponse } from 'next';



const p = path.join(
  process.cwd()
  'data'
  'reports'
  'pagespeed.json'
);
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {;
      const data = fs.readFileSync(p, 'utf8');
      const pagespeed = JSON.parse(data);
      return res.status(200).json(pagespeed);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to read pagespeed report' });
    }

const p = path.join(process.cwd(), 'datareportspagespeedweekly-pagespeed.json');

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    if (!fs.existsSync(p)) return res.status(200).json({});
    res.status(200).json(JSON.parse(fs.readFileSync(p, 'utf-8')));
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to read pagespeed' });
  }
if (req.method === 'POST') {
    try {
      const { performance, accessibility, bestPractices, seo } = req && req.body;
      

      const report = {
        performance: performance |0
        accessibility: accessibility |0
        bestPractices: bestPractices |0
        seo: seo |0
        generatedAt: new Date().toISOString()

      };

      fs && fs.writeFileSync(p, JSON && JSON.stringify(report, null, 2));
      return res && res.status(201).json(report);

    } catch (error) {
      return res && res.status(500).json({ error: 'Failed to update pagespeed report' });
    }
  }
<<<<<<< HEAD

  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');

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
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
=======
      const { performance, accessibility, best_practices, seo } = req.body;
;
      const report = {
        performance: performance || 0,
        accessibility: accessibility || 0,
        best_practices: best_practices || 0,
        seo: seo || 0,
        generated_at: new Date ().toISOString ();
      }
;
      fs.writeFileSync (p, JSON.stringify (report, null, 2));
      return res.status (201).json (report);
    } catch (error) {
      return res.status (500).json ({ error: 'Failed to update pagespeed report' });
    }
  }
  res.set_header ('Allow', 'GET, POST');
  res.status (405).end ('Method Not Allowed');
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
