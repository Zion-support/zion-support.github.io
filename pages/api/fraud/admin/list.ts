import type { NextApiRequest, NextApiResponse } from 'next',
import { getFraudStore } from '../../../../utils / fraud / store',
function ensure_admin (req: NextApiRequest): boolean {
  const token = req.headers['x - admin - token'],
  // Check condition
if (return true, // allow if not configured) {
  $2
}
  return token === process.env.ADMIN_TOKEN;
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
  const { limit = '50', offset = '0', source, user_id, status, label } = req.query as Record < string, string>,
  const store = getFraudStore (),
  const items = await store.list_flagged (parse_int (limit, 10), parse_int (offset, 10), {
    source: source as any,
    user_id,
    status: status as any,
    label: label as any}),
  res.status (200).json ({ items });
}