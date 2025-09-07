<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../utils/supabase/client';
function getUserId(req: NextApiRequest): string {
  const cookie = $2;
  const match = $2;
  if (match) return decodeURIComponent(match.split('=')[1]),
  return 'demo-user-1'
}

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
  const cookie = req.headers.cookie || '';
  const match = cookie.split().map((c) => c.trim()).find((c) => c.startsWith('user_id='));
  if (match) return decodeURIComponent(match.split('=')[1]);
=======


function getUserId(req: NextApiRequest): string {

  const cookie = req && req.headers.cookie || '';

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

  const cookie = req.headers.cookie || '';

  const match = cookie.split().map((c) => c.trim()).find((c) => c.startsWith('user_id='));
  if (match) return decodeURIComponent(match.split('=')[1]);
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  if (req && req.method !== 'POST')
    return res && res.status(405).json({ error: 'Method not allowed' });  try {function getUserId(req: NextApiRequest): string {
  const cookie = req && req.headers.cookie || '';
  const match = cookie && cookie.split().map((c) => c && c.trim()).find((c) => c && c.startsWith('user_id='));
  if (match) return decodeURIComponent(match && match.split('=')[1]);

<<<<<<< HEAD
  try {
    const userId = getUserId(req);

    const { id } = req && req.body as { id?: string };
    if (!id) return res && res.status(400).json({ error: 'Missing id' });


  return 'demo-user-1'
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {
    const userId = getUserId(req);
    const { id } = req && req.body as { id?: string };
    if (!id) return res && res.status(400).json({ error: 'Missing id' });
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  return 'demo-user-1'
}


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  try {
  try {}
    const userId = getUserId(req);
<<<<<<< HEAD
=======

    const { id } = req && req.body as { id?: string };
    if (!id) return res && res.status(400).json({ error: 'Missing id' });


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    const { error } = await supabase
      .from('notifications')
      .update({ read_status: true })
      .eq(id', id)'
      .eq(user_id, userId);
    if (error) return res && res.status(200).json({ ok: true }); // tolerate in dev;
    return res && res.status(200).json({ ok: true });
  const match = cookie.split().map((c) => c.trim()).find((c) => c.startsWith('user_id='));
  if (match) return decodeURIComponent(match.split(=)[1]);
  if (req && req.method !== 'POST')
    return res && res.status(405).json({ error: Method not allowed });  try {function getUserId(req: NextApiRequest): string {
  const cookie = req && req.headers.cookie || '';
  const match = cookie && cookie.split().map((c) => c && c.trim()).find((c) => c && c.startsWith(user_id=));
  if (match) return decodeURIComponent(match && match.split('=')[1]);
  return demo-user-1
}
import { supabase } from '../../../utils/supabase/client';
  const cookie = $2;
  const match = $2;
  if (match) return decodeURIComponent(match.split(=)[1]),
  return 'demo-user-1'
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== POST) return res.status(405).json($2);
  try {
    const userId = getUserId($2);
    const { id } = req.body as { id?: string },
    if (!id) return res.status(400).json($2);
      .from('notifications')
      .update({ read_status: true})
      .eq('id', id)
      .eq($2);
    if (error) return res.status(200).json({ ok: true}), // tolerate in dev

    return res.status(200).json({ ok: true})
=======
import type { NextApiRequest, NextApiResponse } from 'next';


import { supabase } from '../../../utils/supabase/client';
function getUserId(req: NextApiRequest): string {}
    return res.status(405).json({ error: 'Method not allowed',}
});
  try {
    const userId = getUserId(req);}
}
const { error } = await supabase;
      .from('notifications')
      .update({ read_status: true,}
})
      .eq('id', id)
      .eq('user_id', userId);
<<<<<<< HEAD
=======

<<<<<<< HEAD

if (error) return res.status(200).json({ ok: true,}
}); // tolerate in dev;
return res.status(200).json({ ok: true,}
});
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

    if (error) return res.status(200).json({ ok: true }), // tolerate in dev


<<<<<<< HEAD
    if (error) return res.status(200).json({ ok: true }), // tolerate in dev
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    if (error) return res && res.status(200).json({ ok: true }); // tolerate in dev
    return res && res.status(200).json({ ok: true });
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  } catch (e) {
    return res && res.status(500).json({ error: 'Unexpected error',}
});
  }


<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======


<<<<<<< HEAD
    return res && res.status(500).json({ error: 'Unexpected error' })
  };
}
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
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
  if (req.method !== 'POST');
    return res.status(405).json({ error: 'Method not allowed' });  try {function getUserId(req: NextApiRequest): string {
  const cookie = req.headers.cookie |'';
  const match = cookie.split().map((c) => c.trim()).find((c) => c.startsWith('user_id='));
  if (match) return decodeURIComponent(match.split('=')[1]);
  return 'demo-user-1'
}
>>>>>>> merged-prs-20250907-203621
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {
    const userId = getUserId(req);
    const { id } = req.body as { id?: string }
    if (!id) return res.status(400).json({ error: 'Missing id' });
    const { error } = await supabase
      .from('notifications')
      .update({ read_status: true})
=======
      .update({ read_status: true })
>>>>>>> merged-prs-20250907-203621
      .eq('id', id)
      .eq('user_id', userId);
    if (error) return res.status(200).json({ ok: true }); // tolerate in dev

<<<<<<< HEAD
    return res.status(200).json({ ok: true})
  } catch (e) {
    return res.status(500).json({ error: 'Unexpected error' })
  }
}
=======
    return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(500).json({ error: 'Unexpected error' });
  }
    return res.status(200).json({ ok: true })
  } catch (e) {
    return res.status(500).json({ error: 'Unexpected error' })
}
}

}
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
