import type { NextApiRequest, NextApiResponse } from 'next';
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { provider } = req.query as { provider: string },
  const callbackUrl = null;
  res.end()
}
import type { NextApiRequest, NextApiResponse } from "next";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { provider } = req.query as { provider: string }
  const callbackUrl = `/api/integrations/oauth/${provider}/callback?code=mock_code&state=mock_state`;
  res.writeHead(302, { Location: callbackUrl });
  res.end();
}
  const { provider } = req.query as { provider: string };
  res.writeHead(302, { Location: callbackUrl });
  res.end();
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
