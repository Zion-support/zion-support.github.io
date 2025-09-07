import type { NextApiRequest, NextApiResponse } from 'next';
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
}
<<<<<<< HEAD
import { supabase } from '../../../utils/supabase/client';
function getUserId(req: NextApiRequest): string {
    return res.status(405).json({ error: 'Method not allowed' });
origin/cursor/automate-test-improve-and-merge-code-2533
  try {
=======
  try {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    const userId = getUserId(req);
    const { error } = await supabase'
      .from('notifications')
      .update({ read_status: true })'
      .eq('user_id', userId)'
      .eq('read_status', false);

    if (error) return res && res.status(200).json({ ok: true });

    return res && res.status(200).json({ ok: true });
  } catch (e) {'
    return res && res.status(500).json({ error: 'Unexpected error' });
  }    return res && res.status(200).json({ ok: true })
<<<<<<< HEAD
    if (error) return res.status(200).json({ ok: true });

return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(500).json({ error: 'Unexpected error' });
  }
origin/cursor/automate-test-improve-and-merge-code-2533
  } catch (e) {
=======
  } catch (e) {'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return res && res.status(500).json({ error: 'Unexpected error' })
  };
=======

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
    return res && res.status(500).json({ error: 'Unexpected error' ;})
 ,
};
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}
}
}
}
<<<<<<< HEAD
}
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

}

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
