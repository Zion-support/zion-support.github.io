export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
<<<<<<< HEAD
    ok: true
    message:
      "OAuth mock callback successful. Use /api/integrations/connect to finalize connection."
  });
  res.status(200).json({ ok: true, message: 'OAuth mock callback successful. Use /api/integrations/connect to finalize connection.' })
}
import type { NextApiRequest, NextApiResponse } from './next';
export default /**
 * handler - Function description
 */
function handler() {
  res.status (200).json ({
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    ok: true
    message:;
      "OAuth mock callback successful. Use /api / integrations / connect to finalize connection."
  });
}

<<<<<<< HEAD



=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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


=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
