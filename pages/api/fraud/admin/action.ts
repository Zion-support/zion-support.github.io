import type { NextApiRequest, NextApiResponse } from "next";"
import { getFraudStore } from "../../../../utils/fraud/store";"
import { AdminActionType } from "../../../../utils/fraud/types";"

export default async function handler() {
  }
  if (req.method !== "POST") {"
    }
    return res.status(405).json({ "error": "Method not allowed" });"
  }

  }
import type { NextApiRequest, NextApiResponse } from 'next';
import { getFraudStore } from '../../../../utils/fraud/store';
import { AdminActionType } from '../../../../utils/fraud/types';
function ensureAdmin(req: NextApiRequest): boolean {
  const token = req.headers['x-admin-token'];
  if (!process.env.ADMIN_TOKEN) return true; // allow if not configured
  return token === process.env.ADMIN_TOKEN;
}

  }
  if (!ensureAdmin(req)) {
    res.status(401).json({ error: 'Unauthorized' });
    return
  }

  }

  const act = (action as string).toUpperCase() as AdminActionType;
  if (!['SUSPENDWARNIGNORE'].includes(act)) {
    res.status(400).json({ error: 'Invalid action' });
    return
  }

  const store = getFraudStore();
  await store.recordAction({ fraudId, action: act, adminId: adminId || null, reason: reason || null });
  const newStatus = act === 'IGNORE' ? 'IGNORED' : act === 'WARN' ? 'WARNED' : 'SUSPENDED';
  await store.updateEventStatus(fraudId, newStatus);
  res.status(200).json({ ok: true, status: newStatus });
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
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json({ message: 'Endpoint working' });
}
