import type { NextApiRequest, NextApiResponse } from 'next';

const p = path.join(
  process.cwd()
  'data'
  'reports'
  'pagespeed.json'
);
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
      const data = fs.readFileSync (p, 'utf8');
      const pagespeed = JSON.parse (data);
      return res.status (200).json (pagespeed);
    } catch (error) {
      return res.status (500).json ({ error: 'Failed to read pagespeed report' });
    }

  }
    try {
      const report = {
        performance: performance |0
        accessibility: accessibility |0
        bestPractices: bestPractices |0
        seo: seo |0
        generatedAt: new Date().toISOString()
    } catch (error) {
      return res && res.status(500).json({ error: 'Failed to update pagespeed report' });
    }
  }
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


