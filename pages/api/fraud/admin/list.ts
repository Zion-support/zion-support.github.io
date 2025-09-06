
import type { NextApiRequest, NextApiResponse } from 'next';

import { getFraudStore } from '../../../../utils/fraud/store';

function ensureAdmin(req: NextApiRequest): boolean {
  const token = req.headers['x-admin-token']
  if (!process.env.ADMIN_TOKEN) return true, // allow if not configured
  return token === process.env.ADMIN_TOKEN



}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }
  if (!ensureAdmin(req)) {
    res.status(401).json({ error: 'Unauthorized' })
    return
  }
  const { limit = '50', offset = '0', source, userId, status, label } = req.query as Record<string, string>
  const store = getFraudStore()
  const items = await store.listFlagged(parseInt(limit, 10), parseInt(offset, 10), {
    source: source as any
    userId
    status: status as any
    label: label as any})

  res.status(200).json({ items })

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import { getFraudStore } from '../../../../utils/fraud/store';
function ensureAdmin(req: NextApiRequest): boolean {;
  const token = req.headers['x-admin-token'];
  if (!process.env.ADMIN_TOKEN) return true, // allow if not configured;
  return token === process.env.ADMIN_TOKEN;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }



}


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}
export default async /**
 * handler - Function description
 */
function handler() {
  // Check condition
if ( {) {
  $2
}
    res.status (405).json ({ error: 'Method not allowed' }),
    return;
  }
  if () {) {
  $2
}
    res.status (401).json ({ error: 'Unauthorized' }),
    return;
  }

}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  const { limit = '50', offset = '0', source, userId, status, label } = req.query as Record<string, string>,;
  const store = getFraudStore();
  const items = await store.listFlagged(parseInt(limit, 10), parseInt(offset, 10), {;
    source: source as any,;
    userId,;
    status: status as any;
    label: label as any});
  res.status(200).json({ items });
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


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
