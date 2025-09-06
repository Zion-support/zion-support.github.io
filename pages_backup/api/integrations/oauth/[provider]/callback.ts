export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD:pages/api/integrations/oauth/[provider]/callback.ts
<<<<<<< HEAD
  res.status(200).json({
=======
    ok: true
    message:
      "OAuth mock callback successful. Use /api/integrations/connect to finalize connection."
  });
  res.status(200).json({ ok: true, message: 'OAuth mock callback successful. Use /api/integrations/connect to finalize connection.' })
}
origin/cursor/integrate-build-improve-and-re-verify-2156
import type { NextApiRequest, NextApiResponse } from './next';
export default /**
 * handler - Function description
 */
function handler() {
  res.status (200).json ({
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/integrations/oauth/[provider]/callback.ts

    ok: true
    message:;
      "OAuth mock callback successful. Use /api / integrations / connect to finalize connection."
  });
}

<<<<<<< HEAD:pages/api/integrations/oauth/[provider]/callback.ts
=======

ursor/fix-website-loading-errors-and-merge-6662



>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/integrations/oauth/[provider]/callback.ts
      "OAuth mock callback successful. Use /api/integrations/connect to finalize connection.",;
  });
}
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
export default function handler(req, res) {
  try {
  res.status(200).json({ ok: true, message: 'OAuth mock callback successful. Use /api/integrations/connect to finalize connection.' });
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
}

<<<<<<< HEAD
=======

    message:
      "OAuth mock callback successful. Use /api/integrations/connect to finalize connection."
  });
}
  res.status(200).json({ ok: true, message: 'OAuth mock callback successful. Use /api/integrations/connect to finalize connection.' })
}
import type { NextApiRequest, NextApiResponse } from './next';
export default /**
 * handler - Function description
 */
function handler() {
  res.status (200).json ({
    ok: true
    message:;
      "OAuth mock callback successful. Use /api / integrations / connect to finalize connection."
  });
}




res.status(200).json({
    ok: true,
    message:
      "OAuth mock callback successful. Use /api/integrations/connect to finalize connection."
  });

}
<<<<<<< HEAD:pages/api/integrations/oauth/[provider]/callback.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/integrations/oauth/[provider]/callback.ts
