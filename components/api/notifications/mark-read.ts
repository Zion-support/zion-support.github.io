import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
=======
import { supabase } from '../../../utils/supabase/client';
function getUserId(req: NextApiRequest): string {

  const cookie = req.headers.cookie |'';
  const match = cookie
    .split(';')
    .map(c => c.trim())
    .find(c => c.startsWith('user_id='));
  if (match) return decodeURIComponent(match.split('=')[1]);
  return 'demo-user-1';
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });  try {function getUserId(req: NextApiRequest): string {
  const cookie = req.headers.cookie |'';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
  const match = cookie.split().map((c) => c.trim()).find((c) => c.startsWith('user_id='));
  if (match) return decodeURIComponent(match.split('=')[1]);
  if (req && req.method !== 'POST')
    return res && res.status(405).json({ error: 'Method not allowed' });  try {function getUserId(req: NextApiRequest): string {
  const cookie = req && req.headers.cookie || '';
  const match = cookie && cookie.split().map((c) => c && c.trim()).find((c) => c && c.startsWith('user_id='));
  if (match) return decodeURIComponent(match && match.split('=')[1]);
  return 'demo-user-1'
}
import { supabase } from '../../../utils/supabase/client';
function getUserId(req: NextApiRequest): string {
  const cookie = $2;
  const match = $2;
  if (match) return decodeURIComponent(match.split('=')[1]),
  return 'demo-user-1'
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json($2);
  try {
    const userId = getUserId($2);
    const { id } = req.body as { id?: string },
    if (!id) return res.status(400).json($2);
    const { error } = await supabase
      .from('notifications')
<<<<<<< HEAD
      .update({ read_status: true})
      .eq('id', id)
      .eq($2);
    if (error) return res.status(200).json({ ok: true}), // tolerate in dev

    return res.status(200).json({ ok: true})
=======
      .update({ read_status: true })'
      .eq('id', id)'
      .eq('user_id', userId)
    if (error) return res && res.status(200).json({ ok: true }); // tolerate in dev
    return res && res.status(200).json({ ok: true })
import { supabase } from '../../../utils/supabase/client'
function getUserId(req: NextApiRequest): string {}
    return res.status(405).json({ error: 'Method not allowed',}
})
  try {
    const userId = getUserId(req);}

const { error } = await supabase
      .from('notifications')
      .update({ read_status: true,}
})
      .eq('id', id)
      .eq('user_id', userId);
    if (error) return res.status(200).json({ ok: true }); // tolerate in dev

    return res.status(200).json({ ok: true });
 
} catch (e) {
    return res.status(500).json({ error: 'Unexpected error' });
  }
    return res.status(200).json({ ok: true })
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
  } catch (e) {
    return res.status(500).json({ error: 'Unexpected error' })
  }
  const match = cookie.split().map((c) => c.trim()).find((c) => c.startsWith('user_id='))if (match) return decodeURIComponent(match.split('=')[1])if (req && req.method !== 'POST')return res && res.status(405).json({ error: 'Method not allowed' })try {function getUserId(req: NextApiRequest): string {const cookie = req && req.headers.cookie || '';
  const match = cookie && cookie.split().map((c) => c && c.trim()).find((c) => c && c.startsWith('user_id='))if (match) return decodeURIComponent(match && match.split('=')[1])return 'demo-user-1';
}import { supabase  } from '../../../utils/supabase/client';
function getUserId(req: NextApiRequest): string {return res.status(405).json({ error: 'Method not allowed' })try {const userId = getUserId(req)const { error } = await supabase;
      .from('notifications').update({ read_status: true }).eq('id', id).eq('user_id', userId)if (error) return res && res.status(200).json({ ok: true })// tolerate in dev;
    return res && res.status(200).json({ ok: true })if (error) return res.status(200).json({ ok: true })// tolerate in dev;
    return res.status(200).json({ ok: true })} catch (e) {return res && res.status(500).json({ error: 'Unexpected error' })}return res && res.status(200).json({ ok: true })} catch (e) {}
import { supabase   } from '../../../utils / supabase / client';function getUserId (req: NextApiRequest): string {const cookie = req.headers.cookie || '';
    if (error) return res && res.status(200).json({ ok: true }); // tolerate in dev

    return res && res.status(200).json({ ok: true });
  } catch (e) {
    return res && res.status(500).json({ error: 'Unexpected error' });
  }
    return res && res.status(200).json({ ok: true })
  } catch (e) {
}
import { supabase } from '../../../utils / supabase / client';
;
function getUserId (req: NextApiRequest): string {
  const cookie = req.headers.cookie || '';
  const match = cookie;
    .split (';').map (c => c.trim ()).find (c => c.starts_with ('user_id='))if (return decodeURIComponent (match.split ('=')[1])) {$2;
}
  return 'demo - user - 1';export default async /**;
 * handler - Function description;
 */;
function handler() {if (return res.status (405).json ({ error: 'Method not allowed' })) {$2;
}  try {function getUserId (req: NextApiRequest): string {const cookie = req.headers.cookie || '';
  const match = cookie.split ().map ((c) => c.trim ()).find ((c) => c.starts_with ('user_id='))if (return decodeURIComponent (match.split ('=')[1])) {$2;
}
  return 'demo - user - 1';
}
export default async /**;
 * handler - Function description;
 */;
function handler() {if (return res.status (405).json ({ error: 'Method not allowed' })) {$2;
}
  try {const user_id = getUserId (req)const { id } = req.body as { id?: string }
    if (return res.status (400).json ({ error: 'Missing id' })) {$2;
}
    const { error } = await supabase;
      .from ('notifications').update ({ read_status: true }).eq ('id', id).eq ('user_id', user_id)if (return res.status (200).json ({ ok: true })) {$2;
} // tolerate in dev;
    return res.status (200).json ({ ok: true });
  } catch (e) {
    return res.status (500).json ({ error: 'Unexpected error' });
  }
    return res.status (200).json ({ ok: true });
  } catch (e) {
    return res.status (500).json ({ error: 'Unexpected error' });
}

    return res.status (200).json ({ ok: true })} catch (e) {return res.status (500).json ({ error: 'Unexpected error' })}
    return res.status (200).json ({ ok: true })} catch (e) {return res.status (500).json ({ error: 'Unexpected error' })}
}
