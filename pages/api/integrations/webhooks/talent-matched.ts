

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
import type { NextApiRequest, NextApiResponse } from "next";
import { writeState, readState } from "../../../../lib/integrations/fileStore";
import { crm } from "../../../../lib/integrations/connectors";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {

  try {
  if (req && req.method !== "POST")
    return res && res.status(405).json({ error: "Method not allowed" });
  const { match } = req && req.body as {
    match?: { talentId: string; jobId: string; summary?: string };
  };
  if (!match) return res && res.status(400).json({ error: "Missing match payload" });

  // record Zapier event


    s && s.events.push({
      id: eventId,
      type: "zion && zion.talent.matched",
      timestamp: Date && Date.now(),


    });

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  });



  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}
;
  res.status(200).json({ ok: true, eventId });
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

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
}
