import type { NextApiRequest, NextApiResponse } from 'next';'


import { supabase } from '../../../utils/supabase/client';'
function getUserId("req": NextApiRequest): string {
}
return res.status(405).json({ "error": 'Method not allowed',;'
});
  try {
    }
    const userId = getUserId(req);

const { error } = await supabase;
      .from('notifications')'
      .update({ "read_status": true
})
      .eq('id', id)'
      .eq('user_id', userId);'


if (error) return res.status(200).json({ "ok": true
}); // tolerate in dev,
return res.status(200).json({ "ok": true,;
});
  } catch (e) {
}
return res && res.status(500).json({ "error": 'Unexpected error',;'
});
  }


