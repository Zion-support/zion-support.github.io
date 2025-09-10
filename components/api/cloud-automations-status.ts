import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  const dir = path.resolve(process.cwd(), 'data/cloud-automations');
  const data: Record<string, any> = {};
  try {
    if (fs.existsSync(dir)) {
      for (const f of fs.readdirSync(dir)) {
        if (f.endsWith('.json')) {
          const fp = path.join(dir, f);
          data[f.replace('.json', '')] = JSON.parse(fs.readFileSync(fp, 'utf8'));
        }
      }
    }
  } catch (e) {
    // ignore
  }
  res.status(200).json({ ok: true, data });
  res.status(200).json({ ok: true, data });
}
=======

  res.status(200).json({ ok: true, data })
}

=======
  res.status (200).json ({ ok: true, data });
  res.status (200).json ({ ok: true, data });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
  res.status(200).json({ ok: true, data });


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
          data[f.replace('.json', '')] = JSON.parse(
            fs.readFileSync(fp, 'utf8'),
          );
        }
      }
    }

    res.status(200).json({ data });
  } catch (error: any) {
    res.status(500).json({ error: error.message || 'Internal server error' });
  }
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
