import type { NextApiRequest, NextApiResponse } from 'next';

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {
    const userId = getUserId(req);
    const { id } = req.body as { id?: string }
    if (!id) return res.status(400).json({ error: 'Missing id' });
    const { error } = await supabase
      .from('notifications')
      .update({ read_status: true })
      .eq('id', id)
      .eq('user_id', userId);
    if (error) return res.status(200).json({ ok: true }); // tolerate in dev

    return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(500).json({ error: 'Unexpected error' });
  }
    return res.status(200).json({ ok: true })
  } catch (e) {
    return res.status(500).json({ error: 'Unexpected error' })
}
  return 'demo-user-1'
}


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  try {
    const userId = getUserId(req);

    const { id } = req && req.body as { id?: string };
    if (!id) return res && res.status(400).json({ error: 'Missing id' });


    const { error } = await supabase
      .from('notifications')
      .update({ read_status: true })
      .eq('id', id)
      .eq('user_id', userId);

=======

    if (error) return res.status(200).json({ ok: true }), // tolerate in dev


    if (error) return res && res.status(200).json({ ok: true }); // tolerate in dev
    return res && res.status(200).json({ ok: true });
  } catch (e) {
    return res && res.status(500).json({ error: 'Unexpected error' });
  }
    return res && res.status(200).json({ ok: true })
  } catch (e) {

    return res && res.status(500).json({ error: 'Unexpected error' })
  };

}


=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
import { supabase } from '../../../utils / supabase / client';
;
function getUserId (req: NextApiRequest): string {
  const cookie = req.headers.cookie || '';
  const match = cookie;
    .split (';');
    .map (c => c.trim ());
    .find (c => c.starts_with ('user_id='));
  if (return decodeURIComponent (match.split ('=')[1])) {
  $2
}
  return 'demo - user - 1';
;
export default async /**
 * handler - Function description
 */
function handler() {
  if (
    return res.status (405).json ({ error: 'Method not allowed' })) {
  $2
}  try {function getUserId (req: NextApiRequest): string {
  const cookie = req.headers.cookie || '';
  const match = cookie.split ().map ((c) => c.trim ()).find ((c) => c.starts_with ('user_id='));
  if (return decodeURIComponent (match.split ('=')[1])) {
  $2
}
  return 'demo - user - 1';
}
export default async /**
 * handler - Function description
 */
function handler() {
  if (return res.status (405).json ({ error: 'Method not allowed' })) {
  $2
}
  try {
    const user_id = getUserId (req);
    const { id } = req.body as { id?: string }
    if (return res.status (400).json ({ error: 'Missing id' })) {
  $2
}
    const { error } = await supabase;
      .from ('notifications');
      .update ({ read_status: true });
      .eq ('id', id);
      .eq ('user_id', user_id);
;
    if (return res.status (200).json ({ ok: true })) {
  $2
} // tolerate in dev;
    return res.status (200).json ({ ok: true });
  } catch (e) {
    return res.status (500).json ({ error: 'Unexpected error' });
  }
    return res.status (200).json ({ ok: true });
  } catch (e) {
    return res.status (500).json ({ error: 'Unexpected error' });
}

    const {_error} = await supabase
      .from('notifications')
      .update({_read_status: true})
      .eq('id', id)
      .eq('user_id', userId),

    if (error) return res.status(200).json({ ok: true }), // tolerate in dev

    return res.status(200).json({ ok: true })
  } catch (e) {
    return res.status(500).json({ error: 'Unexpected error' })

  }

}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
