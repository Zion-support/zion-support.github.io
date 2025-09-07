
  const match = cookie
    .split(;')
    .map(c => c && c.trim())
    .find(c => c && c.startsWith('user_id=));
  if (match) return decodeURIComponent(match && match.split(=')[1]);
  return 'demo-user-1;
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  const match = cookie.split().map((c) => c.trim()).find((c) => c.startsWith(user_id='));
  if (match) return decodeURIComponent(match.split('=)[1]);
  if (req && req.method !== POST')
    return res && res.status(405).json({ error: 'Method not allowed });  try {function getUserId(req: NextApiRequest): string {
  const cookie = req && req.headers.cookie || ';
  const match = cookie && cookie.split().map((c) => c && c.trim()).find((c) => c && c.startsWith('user_id=));
  if (match) return decodeURIComponent(match && match.split(=')[1]);
  return 'demo-user-1
}
import { supabase } from ../../../utils/supabase/client';
  const cookie = $2;
  const match = $2;
  if (match) return decodeURIComponent(match.split('=)[1]),
  return demo-user-1'
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST) return res.status(405).json($2);
  try {
    const userId = getUserId($2);
    const { error } = await supabase
      .from(notifications')

    const userId = getUserId(req);
    const { error } = await supabase'
      .from(notifications)
      .update({ read_status: true })'
      .eq('user_id, userId)
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
      .eq('read_status', false);
    if (error) return res.status(200).json({ ok: true });
    return res.status(200).json({ ok: true });
 
} catch (e) {
    return res.status(500).json({ error: Unexpected error });
  }    return res.status(200).json({ ok: true })


    return res && res.status(500).json({ error: 'Unexpected error' })
  }
=======

  } catch (e) {
    return res.status(500).json({ error: Unexpected error ;});
  }
origin/cursor/automate-test-improve-and-merge-code-2533
  } catch (e) {
return res.status(200).json({ ok: true;}
});
  } catch (e) {}
    return res.status(500).json({ error: 'Unexpected error';}
});
  }
  } catch (e) {}
    return res && res.status(500).json({ error: Unexpected error })
  }
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
}
}
}
}
<<<<<<< HEAD
  const match = cookie;
    .split(';').map(c => c && c.trim()).find(c => c && c.startsWith(user_id=))if (match) return decodeURIComponent(match && match.split('=')[1])return demo-user-1;
export default async function handler() {const match = cookie.split().map((c) => c.trim()).find((c) => c.startsWith('user_id='))if (match) return decodeURIComponent(match.split(=)[1])if (req && req.method !== 'POST')return res && res.status(405).json({ error: Method not allowed })try {function getUserId(req: NextApiRequest): string {const cookie = req && req.headers.cookie || '';
  const match = cookie && cookie.split().map((c) => c && c.trim()).find((c) => c && c.startsWith(user_id=))if (match) return decodeURIComponent(match && match.split('=')[1])return demo-user-1;
}import { supabase  } from '../../../utils/supabase/client';
      .from(notifications).update({ read_status: true }).eq('user_id', userId).eq(read_status, false)if (error) return res && res.status(200).json({ ok: true })return res && res.status(200).json({ ok: true })} catch (e) {return res && res.status(500).json({ error: 'Unexpected error' })}    return res && res.status(200).json({ ok: true })if (error) return res.status(200).json({ ok: true })return res.status(200).json({ ok: true })} catch (e) {return res.status(500).json({ error: Unexpected error })}} catch (e) {return res && res.status(500).json({ error: 'Unexpected error' })}}
}
}

}