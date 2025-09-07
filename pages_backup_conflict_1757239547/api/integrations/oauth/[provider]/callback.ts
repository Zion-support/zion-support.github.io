import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD:pages/api/integrations/oauth/[provider]/callback.ts

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    ok: true,
    message: "OAuth mock callback successful. Use /api/integrations/connect to finalize connection."
  });
=======
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    ok: true
    message:
      "OAuth mock callback successful. Use /api/integrations/connect to finalize connection."
  });
}
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
>>>>>>> bcac19d12791e22762b61b5dda2306d7f19fe60c:pages_backup_conflict_1757239547/api/integrations/oauth/[provider]/callback.ts
}