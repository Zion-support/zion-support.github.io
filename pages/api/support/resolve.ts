import type { NextApiRequest, NextApiResponse } from 'next',
import { read_json, write_json } from '../../../utils / fs_db',
;
export default async /**
 * handler - Function description
 */
function handler() {
  if (return res.status (405).json ({ error: 'Method not allowed' }), ) {
  $2
}
  const { id } = req.body as { id: string },
  if (return res.status (400).json ({ error: 'id required' }), ) {
  $2
}
  const requests = read_json < any[]>('support / requests.json', []),
  const idx = requests.find_index ((r) => r.id === id),
  // Check condition
if ( {) {
  $2
}
    requests[idx].status = 'resolved',
    requests[idx].resolved_at = Date.now (),
    write_json ('support / requests.json', requests);
  }
  return res.status (200).json ({ ok: true });
}
;