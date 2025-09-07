import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
  const match = cookie
    .split(';')
    .map(c => c && c.trim())
    .find(c => c && c.startsWith('user_id='));
  if (match) return decodeURIComponent(match && match.split('=')[1]);
  return 'demo-user-1';
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  const match = cookie.split().map((c) => c.trim()).find((c) => c.startsWith('user_id='));
  if (match) return decodeURIComponent(match.split('=')[1]);
  if (req && req.method !== 'DELETE')
    return res && res.status(405).json({ error: 'Method not allowed' });  try {function getUserId(req: NextApiRequest): string {
  const cookie = req && req.headers.cookie || '';
  const match = cookie && cookie.split().map((c) => c && c.trim()).find((c) => c && c.startsWith('user_id='));
  if (match) return decodeURIComponent(match && match.split('=')[1]);
  return 'demo-user-1'
}
=======
<<<<<<< HEAD

import { supabase } from '../../../utils/supabase/client';
function getUserId(req: NextApiRequest): string {
    return res.status(405).json({ error: 'Method not allowed' });
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
  try {
    const userId = getUserId(req);
    const { error } = await supabase
      .from('notifications')
      .delete()
      .eq('user_id', userId);

<<<<<<< HEAD
    if (error) return res && res.status(200).json({ ok: true });

    return res && res.status(200).json({ ok: true });
  } catch (e) {
    return res && res.status(500).json({ error: 'Unexpected error' });
  }    return res && res.status(200).json({ ok: true })
=======
    if (error) return res.status(200).json({ ok: true });

return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(500).json({ error: 'Unexpected error' });
  }
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
  } catch (e) {
    return res && res.status(500).json({ error: 'Unexpected error' })
  };
}
}
}
}

}
<<<<<<< HEAD
=======
=======
  const match = cookie;
    .split(';').map(c => c && c.trim()).find(c => c && c.startsWith('user_id='))if (match) return decodeURIComponent(match && match.split('=')[1])return 'demo-user-1';
export default async function handler() {const match = cookie.split().map((c) => c.trim()).find((c) => c.startsWith('user_id='))if (match) return decodeURIComponent(match.split('=')[1])if (req && req.method !== 'DELETE')return res && res.status(405).json({ error: 'Method not allowed' })try {function getUserId(req: NextApiRequest): string {const cookie = req && req.headers.cookie || '';
  const match = cookie && cookie.split().map((c) => c && c.trim()).find((c) => c && c.startsWith('user_id='))if (match) return decodeURIComponent(match && match.split('=')[1])return 'demo-user-1';
}import { supabase  } from '../../../utils/supabase/client';
function getUserId(req: NextApiRequest): string {return res.status(405).json({ error: 'Method not allowed' })try {const userId = getUserId(req)const { error } = await supabase;
      .from('notifications').delete().eq('user_id', userId)if (error) return res && res.status(200).json({ ok: true })return res && res.status(200).json({ ok: true })} catch (e) {return res && res.status(500).json({ error: 'Unexpected error' })}    return res && res.status(200).json({ ok: true })if (error) return res.status(200).json({ ok: true })return res.status(200).json({ ok: true })} catch (e) {return res.status(500).json({ error: 'Unexpected error' })}} catch (e) {return res && res.status(500).json({ error: 'Unexpected error' })}}
}
}
}}
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-2a0c
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
