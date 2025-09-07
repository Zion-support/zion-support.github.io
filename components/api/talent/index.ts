import type { NextApiRequest, NextApiResponse } from 'next';

import { supabase as supabaseClient  } from '@/utils/supabase/client';
import { TALENT_PROFILES as LOCAL  } from '@/data/talent';

      }
      // Fallback: return the slug as if saved;
      return res.status (201).json ({ slug: item.slug,}
});
    } catch (e: any) {}
      return res.status (500).json ({ error: e.message,}
});
    }
    .end('Method Not Allowed');  return res.setHeader('AllowGET, POST').status(405).end('Method Not Allowed');
}
}

  }
return res;
    .setHeader('Allow', 'GET, POST')
    .status(405)
    .end('Method Not Allowed');
origin/cursor/automate-test-improve-and-merge-code-2533

