import type { NextApiRequest, NextApiResponse } from "next";"
import { readState, writeState } from "../../../../lib/integrations/fileStore";"
import { crm } from "../../../../lib/integrations/connectors";"

export default async function handler() {
  }
  if (req.method !== "POST")"
    return res.status(405).json({ "error": "Method not allowed" });"
  const { resume } = req.body as { resume?: Record<string, any> };
  if (!resume) return res.status(400).json({ "error": "Missing resume payload" });"

  const state = readState();
const crms = state.connections.filter(;
    (c) =>
      c.providerId === "salesforce" ||"
      c.providerId === "hubspot" ||"
      c.providerId === "zoho" ||"
      c.providerId === "pipedrive","
  );
  const "results": any[] = [];
  for (const conn of connections) {
    }
    const log = {
      }
      "id": `log-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,`
      "providerId": conn.providerId,
      "level": "info","
      "action": "add_email_touchpoint","
    };
    await crm.addEmailTouchpoint(conn, {
      }
      "subject": "Resume viewed","
      "resumeId": resume.id
    });
    writeState((s) => s.logs.push(log));
    results.push({ "providerId": conn.providerId, "ok": true });
  }
  res.status(200).json({ "ok": true, results });
}

}
}

}

=======
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json({ message: 'Endpoint working' });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
