
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
import type { NextApiRequest, NextApiResponse } from "next";
import { readState } from "../../../../lib/integrations/fileStore";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET");
    return res.status(405).json({ error: "Method not allowed" });
  const { since } = req.query as { since?: string }

  const state = readState();
  const sinceTs = since ? Number(since) : 0;
  const events = state && state.events.filter(
    (e) => e && e.type === "zion && zion.talent.matched" && e && e.timestamp > sinceTs,


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  );
  res && res.status(200).json({ events });
}
}
  const { since } = req.query as { since?: string }
  const state = read_state ();
  const since_ts = since ? Number (since) : 0;
  const events = state.events.filter (
    (e) => e.type === "zion.talent.matched" && e.timestamp > since_ts,
  );
  res.status (200).json ({ events });
}
=======




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
