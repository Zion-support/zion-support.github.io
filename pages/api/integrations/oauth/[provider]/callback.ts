<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    ok: true
    message:

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

=======

=======
<<<<<<< HEAD
res && res.status(200).json({
    ok: true,
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import type { NextApiRequest, NextApiResponse } from 'next';

import type { NextApiRequest, NextApiResponse } from "next";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    ok: true
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    message:
      "OAuth mock callback successful. Use /api/integrations/connect to finalize connection."
  });
<<<<<<< HEAD
<<<<<<< HEAD
}
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  res.status(200).json({ ok: true, message: 'OAuth mock callback successful. Use /api/integrations/connect to finalize connection.' })
}
import type { NextApiRequest, NextApiResponse } from './next';
export default /**
 * handler - Function description
 */
function handler() {
  res.status (200).json ({
    ok: true,
    message:;
      "OAuth mock callback successful. Use /api / integrations / connect to finalize connection.",
  });
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
