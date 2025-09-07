import type { NextApiRequest, NextApiResponse } from 'next';


import { supabase } from '../../../utils/supabase/client';
function getUserId(req: NextApiRequest): string {
    return res.status(405).json({ error: 'Method not allowed',
});
  try {
    const userId = getUserId(req);

const { error } = await supabase
      .from('notifications')
      .delete()
      .eq('user_id', userId);

    if (error) return res.status(200).json({ ok: true,
});

return res.status(200).json({ ok: true,
});
  } catch (e) {
    return res.status(500).json({ error: 'Unexpected error',
});
  }
  } catch (e) {
    return res && res.status(500).json({ error: 'Unexpected error' })
 ,
};
}
}
}
}

}

