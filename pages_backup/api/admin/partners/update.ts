<<<<<<< HEAD:pages/api/admin/partners/update.ts
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/admin/partners/update.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../../utils/supabase/server',;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  const { code, status, commission_rate } = req.body || {}
  if (!code) return res.status(400).json({ error: 'Missing code' })

  try {
    if (usingPlaceholder) {
      return res.status(200).json({ ok: true, mock: true })
    }
    const supabase = getServerSupabase()
    const updates: any = {}
    if (status) updates.status = status
    if (typeof commission_rate === 'number') updates.commission_rate = commission_rate

    const { error } = await supabase.from('partners').update(updates).eq('code', String(code).toLowerCase())
    if (error) return res.status(500).json({ error: error.message })

<<<<<<< HEAD:pages/api/admin/partners/update.ts
<<<<<<< HEAD
=======
<<<<<<< HEAD

      const updates: any = {};
      if (status) updates.status = status;
      if (typeof commission_rate === 'number') updates.commission_rate = commission_rate;

=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/admin/partners/update.ts
    return res.status(200).json({ ok: true })
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { code, status, commission_rate } = req.body || {};
  if (!code) return res.status(400).json({ error: 'Missing code' });
  try {
    const usingPlaceholder = true; // Mock implementation
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ ok: true });
origin/cursor/automate-test-improve-and-merge-code-2533
  } catch (e: any) {
    return res.status(500).json({ error: e?.message })
  }
}
<<<<<<< HEAD:pages/api/admin/partners/update.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/admin/partners/update.ts
