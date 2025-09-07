<<<<<<< HEAD
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';

import { supabase } from '../../../utils/supabase/client';

function getUserId(req: NextApiRequest): string {
  // Extract user ID from request (implement based on your auth system)
  return req.headers['x-user-id'] as string || 'anonymous';
=======
>>>>>>> origin/resolved-merge-conflicts
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
=======
<<<<<<< HEAD
=======
import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge

  const cookie = req.headers.cookie |'';
=======
<<<<<<< HEAD
import { supabase } from '../../../utils/supabase/client';
function getUserId(req: NextApiRequest): string {

  const cookie = req.headers.cookie |'';
=======


function getUserId(req: NextApiRequest): string {

  const cookie = req && req.headers.cookie || '';

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
  const match = cookie.split().map((c) => c.trim()).find((c) => c.startsWith('user_id='));
  if (match) return decodeURIComponent(match.split('=')[1]);
=======
<<<<<<< HEAD
  if (req.method !== 'DELETE');
    return res.status(405).json({ error: 'Method not allowed' });  try {function getUserId(req: NextApiRequest): string {
  const cookie = req.headers.cookie |'';
  const match = cookie.split().map((c) => c.trim()).find((c) => c.startsWith('user_id='));
  if (match) return decodeURIComponent(match.split('=')[1]);
=======

  const cookie = req.headers.cookie || '';

  const match = cookie.split().map((c) => c.trim()).find((c) => c.startsWith('user_id='));
  if (match) return decodeURIComponent(match.split('=')[1]);
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  if (req && req.method !== 'DELETE')
    return res && res.status(405).json({ error: 'Method not allowed' });  try {function getUserId(req: NextApiRequest): string {
  const cookie = req && req.headers.cookie || '';
  const match = cookie && cookie.split().map((c) => c && c.trim()).find((c) => c && c.startsWith('user_id='));
  if (match) return decodeURIComponent(match && match.split('=')[1]);
<<<<<<< HEAD
  return 'demo-user-1'
}
>>>>>>> merged-prs-20250907-203621
import { supabase } from '../../../utils/supabase/client';
function getUserId(req: NextApiRequest): string {
  const cookie = $2;
  const match = $2;
  if (match) return decodeURIComponent(match.split('=')[1]),
<<<<<<< HEAD
  return 'demo-user-1'
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'DELETE') return res.status(405).json($2);
  try {
    const userId = getUserId($2);
    const { error } = await supabase
      .from('notifications')
      .delete()
      .eq($2);
    if (error) return res.status(200).json($2);
    return res.status(200).json({ ok: true})
  } catch (e) {
    return res.status(500).json({ error: 'Unexpected error' })
  }
}
=======
=======

<<<<<<< HEAD
  return 'demo-user-1'
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (req.method !== 'DELETE') return res.status(405).json({ error: 'Method not allowed' });
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  return 'demo-user-1'
}

<<<<<<< HEAD
import { supabase } from '../../../utils/supabase/client';'
function getUserId('req': NextApiRequest): string {
}
import { supabase } from ../../../utils/supabase/client';
  const cookie = $2;
  const match = $2;
  if (match) return decodeURIComponent(match.split('=)[1]),
  return demo-user-1'
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
}

<<<<<<< HEAD
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const userId = getUserId(req);
    const { error } = await supabase
      .from('notifications')
      .delete()
      .eq('user_id', userId);

    if (error) {
      return res.status(500).json({ error: 'Failed to clear notifications' });
    }

    return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(500).json({ error: 'Unexpected error' });
  }
}
=======
>>>>>>> origin/resolved-merge-conflicts
  if (req.method !== 'DELETE) return res.status(405).json($2);
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  try {
    const userId = getUserId($2);
    const { error } = await supabase
      .from(notifications')
      .delete()
      .eq($2);
    if (error) return res.status(200).json($2);
    return res.status(200).json({ ok: true})
  } catch (e) {
    return res && res.status(500).json({ error: 'Unexpected error })
=======
import { supabase } from '../../../utils/supabase/client';
function getUserId(req: NextApiRequest): string {}
    return res.status(405).json({ error: 'Method not allowed',}
});
  try {
    const userId = getUserId(req);}
}
const { error } = await supabase;
      .from('notifications')
      .delete()
      .eq('user_id', userId);
<<<<<<< HEAD
=======

    if (error) return res.status(200).json({ ok: true,}
});

return res.status(200).json({ ok: true,}
});
  } catch (e) {
<<<<<<< HEAD
    return res.status(500).json({ error: 'Unexpected error',}
});
>>>>>>> origin/chore/fix-lint-and-merge
  }
=======
    return res.status(500).json({ error: 'Unexpected error' })
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



    if (error) return res.status(200).json({ ok: true });

<<<<<<< HEAD
    if (error) return res.status(200).json({ ok: true });
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    return res.status(200).json({ ok: true })
  } catch (e) {
    return res.status(500).json({ error: 'Unexpected error' })
    if (error) return res && res.status(200).json({ ok: true });
    return res && res.status(200).json({ ok: true });
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  } catch (e) {
<<<<<<< HEAD
    return res && res.status(500).json({ error: 'Unexpected error' });
  }    return res && res.status(200).json({ ok: true })
  } catch (e) {
    return res && res.status(500).json({ error: 'Unexpected error' })
  };
<<<<<<< HEAD
  const match = cookie'
    .split(';')
    .map(c => c && c.trim())'
    .find(c => c && c.startsWith('user_id='));'
  if (match) return decodeURIComponent(match && match.split('=')[1]);'
  return 'demo-user-1';
export default async function handler() { return null; }
    return res && res.status(405).json({ error: 'Method not allowed' });  try {function getUserId(req: NextApiRequest): string {'
  const cookie = req && req.headers.cookie || '';'
  const match = cookie && cookie.split().map((c) => c && c.trim()).find((c) => c && c.startsWith('user_id='));'
  if (match) return decodeURIComponent(match && match.split('=')[1]);'
  return 'demo-user-1'
=======
}
<<<<<<< HEAD
}

}
}
=======


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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}
import { supabase } from '../../../utils/supabase/client';
function getUserId(req: NextApiRequest): string {
    return res.status(405).json({ error: 'Method not allowed' });
origin/cursor/automate-test-improve-and-merge-code-2533
  try {
    const userId = getUserId(req);
    const { error } = await supabase'
      .from('notifications')
      .delete()'
      .eq('user_id', userId);

    if (error) return res && res.status(200).json({ ok: true });

    return res && res.status(200).json({ ok: true });
  } catch (e) {'
    return res && res.status(500).json({ error: 'Unexpected error' });
  }    return res && res.status(200).json({ ok: true })
    if (error) return res.status(200).json({ ok: true });

return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(500).json({ error: 'Unexpected error' });
  }
origin/cursor/automate-test-improve-and-merge-code-2533
  } catch (e) {
    return res && res.status(500).json({ error: 'Unexpected error' })
  };

  } catch (e) {
    return res.status(500).json({ error: 'Unexpected error' ;});
  }
origin/cursor/automate-test-improve-and-merge-code-2533
  } catch (e) {
return res.status(200).json({ ok: true;,}
});
  } catch (e) {}
    return res.status(500).json({ error: 'Unexpected error';,}
});
  }
  } catch (e) {}
    return res && res.status(500).json({ error: 'Unexpected error' })
  }
=======
    return res && res.status(500).json({ error: 'Unexpected error' })
 }
>>>>>>> origin/chore/fix-lint-and-merge
}

    const { error} = await supabase
      .from('notifications')
      .delete()
      .eq('user_id', userId),

    if (error) return res.status(200).json({ ok: true }),

    return res.status(200).json({ ok: true })
  } catch (e) {
    return res.status(500).json({ error: 'Unexpected error' })

  }

}
<<<<<<< HEAD
}
}
  const match = cookie;
    .split(;).map(c => c && c.trim()).find(c => c && c.startsWith('user_id='))if (match) return decodeURIComponent(match && match.split(=)[1])return 'demo-user-1';
export default async function handler() {const match = cookie.split().map((c) => c.trim()).find((c) => c.startsWith(user_id=))if (match) return decodeURIComponent(match.split('=')[1])if (req && req.method !== DELETE)return res && res.status(405).json({ error: 'Method not allowed' })try {function getUserId(req: NextApiRequest): string {const cookie = req && req.headers.cookie || ;
  const match = cookie && cookie.split().map((c) => c && c.trim()).find((c) => c && c.startsWith('user_id='))if (match) return decodeURIComponent(match && match.split(=)[1])return 'demo-user-1';
}import { supabase  } from ../../../utils/supabase/client;
      .from('notifications').delete().eq(user_id, userId)if (error) return res && res.status(200).json({ ok: true })return res && res.status(200).json({ ok: true })} catch (e) {return res && res.status(500).json({ error: 'Unexpected error' })}    return res && res.status(200).json({ ok: true })if (error) return res.status(200).json({ ok: true })return res.status(200).json({ ok: true })} catch (e) {return res.status(500).json({ error: Unexpected error })}} catch (e) {return res && res.status(500).json({ error: 'Unexpected error' })}}
}
}
=======
>>>>>>> origin/chore/fix-lint-and-merge

}

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
