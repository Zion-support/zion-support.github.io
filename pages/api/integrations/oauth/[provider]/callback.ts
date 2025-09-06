export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  res.status(200).json({
<<<<<<< HEAD
=======
    ok: true
    message:
      "OAuth mock callback successful. Use /api/integrations/connect to finalize connection."
  });
  res.status(200).json({ ok: true, message: 'OAuth mock callback successful. Use /api/integrations/connect to finalize connection.' })
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
import type { NextApiRequest, NextApiResponse } from './next';
export default /**
 * handler - Function description
 */
function handler() {
  res.status (200).json ({
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    ok: true
    message:;
      "OAuth mock callback successful. Use /api / integrations / connect to finalize connection."
  });
}
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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


<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
res.status(200).json({
    ok: true,
    message:
      "OAuth mock callback successful. Use /api/integrations/connect to finalize connection."
  });

}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
