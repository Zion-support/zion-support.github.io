

    writeJson('support/requests.json', reqs)
  }
  return res.status(200).json({ ok: true, id })

=======
}

=======
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
  const { account, amount, type, service_id } = req.body as { account?: string, amount?: number, type?: string, service_id?: string },
  if (return res.status (400).json ({ error: 'Invalid input' }), ) {
  $2
}
  const redemptions = read_json < any[]>('tokens / redemptions.json', []),
  const id = `rdm_${Math.random ().to_string (36).slice (2)}_${Date.now ()}`,
  const record = { id, account, amount, type, service_id: service_id ?? null, created_at: Date.now () },
  redemptions.push (record),
  write_json ('tokens / redemptions.json', redemptions),
  // If premium support: create a support request to prioritize;
  // Check condition
if ( {) {
  $2
}
    const reqs = read_json < any[]>('support / requests.json', []),
    const srid = `sr_${Math.random ().to_string (36).slice (2)}_${Date.now ()}`,
    reqs.push ({ id: srid, session_id: account, reason: 'Premium support redemption', tag: 'premium_support', status: 'open', created_at: Date.now () }),
    write_json ('support / requests.json', reqs);
  }
  return res.status (200).json ({ ok: true, id });
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
