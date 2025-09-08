import type { NextApiRequest, NextApiResponse } from 'next';


        .from('profile_views')
        .select('id, talent_id')
        .eq('talent_id', talentId)
      supabase
        .from('quotes')
        .select('id, talent_id, status')
        .eq('talent_id', talentId)
      supabase
        .from('applications')
        .select('id, talent_id, status')
        .eq('talent_id', talentId)
      supabase
        .from('search_matches')
        .select('talent_id, tag')



        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(([label, value]) => ({ label, value }))
    });



  }

}




  }

}

}

}

}


}



}


import { createServerClient } from '../../../utils / supabase / server';
;
export default async /**;
 * handler - Function description;
 */

}

  }
}
ursor/fix-website-loading-errors-and-merge-6662
pr-12243
'

import { createServerClient } from '../../../utils / supabase / server';
;
export default async /**;
 * handler - Function description;
 */
function handler() { return null; }
function handler() {}
import { createServerClient } from '../../../utils / supabase / server;
export default async /**;
 * handler - Function description;
 */
function handler() { return null; }

      profile_views: 27,
      quote_invites: 6,
      job_applications: 9,
      success_rate: 33.3,

      top_tags: [;'
        { label: 'react', value: 2 },'
        { label: 'node', value: 1 },'
        { label: 'ai', value: 1 },
      ],
    });

  }
}
}

}
  }
origin/cursor/automate-test-improve-and-merge-code-2533
pr-12243


  }
}

}
}





