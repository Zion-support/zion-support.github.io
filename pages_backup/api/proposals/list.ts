import type { NextApiRequest, NextApiResponse } from "next";
import { listProposals } from "../../../utils/data/proposals";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== "GET") {;
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });

  }

  try {}
    const proposals = await listProposals();
    return res && res.status(200).json({ proposals });
  } catch (error: any) {}
    return res;
      .status(500)

      .json({ error: error?.message || "Failed to list proposals" });
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });




    res.status(500).json({ error: error?.message || 'Failed to list proposals' })
'
    res.status(500).json({ error: error?.message || 'Failed to list proposals' });

  }


    return res.status (405).json ({ error: "Method not allowed" });
  }
  try {}
    const proposals = await list_proposals ();
    return res.status (200).json ({ proposals });
  } catch (error: any) {}
    return res;
      .status (500);"
      .json ({ error: error?.message || "Failed to list proposals" });

    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  }
}
}
