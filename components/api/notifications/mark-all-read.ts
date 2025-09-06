import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../utils/supabase/client';
function getUserId(req: NextApiRequest): string {
    return res.status(405).json({ error: 'Method not allowed' });
origin/cursor/automate-test-improve-and-merge-code-2533
  try {
    const userId = getUserId(req);
    const { error } = await supabase
      .from('notifications')
      .update({ read_status: true })
      .eq('user_id', userId)
      .eq('read_status', false);
<<<<<<< HEAD
<<<<<<< HEAD

    if (error) return res && res.status(200).json({ ok: true });

    return res && res.status(200).json({ ok: true });
  } catch (e) {
    return res && res.status(500).json({ error: 'Unexpected error' });
  }    return res && res.status(200).json({ ok: true })
=======
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308
    if (error) return res.status(200).json({ ok: true });

return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(500).json({ error: 'Unexpected error' });
  }
origin/cursor/automate-test-improve-and-merge-code-2533
  } catch (e) {
    return res && res.status(500).json({ error: 'Unexpected error' })
  };
}
}
}
}
}
origin/cursor/automate-test-improve-and-merge-code-2533
