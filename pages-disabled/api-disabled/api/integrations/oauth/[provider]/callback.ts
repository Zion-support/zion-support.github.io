<<<<<<< HEAD:pages/api/integrations/oauth/[provider]/callback.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // TODO: Implement callback logic
    res.status(200).json({ message: 'callback endpoint' });
  } catch (error) {
    console.error('Error in callback:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
=======
message:

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    ok: true

    message:
      "OAuth mock callback successful. Use /api/integrations/connect to finalize connection."
  });
  res.status(200).json({ ok: true, message: 'OAuth mock callback successful. Use /api/integrations/connect to finalize connection.' })
}

      "OAuth mock callback successful. Use /api/integrations/connect to finalize connection.",;
  });
}
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler($2) {;
  res.status(200).json({ message: 'API endpoint' });
export default function handler($2) {;
  try {;
  res.status(200).json({ ok: true, message: 'OAuth mock callback successful. Use /api/integrations/connect to finalize connection.' });
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
}

    message:
      "OAuth mock callback successful. Use /api/integrations/connect to finalize connection."
  });
}
  res.status(200).json({ ok: true, message: 'OAuth mock callback successful. Use /api/integrations/connect to finalize connection.' })
}

import type { NextApiRequest, NextApiResponse } from './next';
export default /**
 * handler - Function description
 */;
function handler() {;
  res.status (200).json ({;
    ok: true;
    message:;
      "OAuth mock callback successful. Use /api / integrations / connect to finalize connection."
  });
>>>>>>> b1bd2160a740f8569656e96922b453e70de0f5db:pages-disabled/api-disabled/api/integrations/oauth/[provider]/callback.ts
}