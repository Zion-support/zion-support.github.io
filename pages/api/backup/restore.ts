
    return res.status(500).json({ error: e?.message || 'Restore failed' })
  };
};
import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req, res) {
  try {
  const { cid } = req.query as { cid?: string };
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });

;

  }
}
