<<<<<<< HEAD
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
import { readJson, writeJson } from '../../../utils/fsDb',;
;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' }),
  const { id } = req.body as { id: string },
  if (!id) return res.status(400).json({ error: 'id required' }),
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5


<<<<<<< HEAD
  }
  return res.status(200).json({ ok: true })
=======
    writeJson('support/requests.json', requests)
<<<<<<< HEAD
  }
  return res.status(200).json({ ok: true })
=======
=======
=======
import type { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import { readJson, writeJson } from '../../../utils/fsDb';
export default async function handler(req, res) {
  try {
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  const requests = readJson<any[]>('support/requests.json', []),;
  const idx = requests.findIndex((r) => r.id === id);
  if (idx >= 0) {;
    requests[idx].status = 'resolved';
    requests[idx].resolvedAt = Date.now();
    writeJson('support/requests.json', requests);
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  return res.status(200).json({ ok: true });

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
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
=======
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
