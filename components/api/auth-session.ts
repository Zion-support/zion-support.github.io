<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { getSessionFromReq, isInternalAgentRequest } from '../../../utils/adminAuth';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = getSessionFromReq(req);
  const internal = isInternalAgentRequest(req);
  if (!session && !internal) {
    res.status(401).json({ error: 'Unauthorized' });
    return
  }
  res.status(200).json({ message: 'OK' })
}
=======
<<<<<<< HEAD
<<<<<<< HEAD

export default function handler() {const session = null;



}
=======
import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339



import {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



  }


=======
import type { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> origin/chore/fix-lint-and-merge

pr-12243

  getSessionFromReq,;
  isInternalAgentRequest,;
}
}
} from '../../../utils/adminAuth';
import { getSessionFromReq, isInternalAgentRequest } from '../../../utils/adminAuth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = null;
    return

import { getSessionFromReq, isInternalAgentRequest } from '../../../utils/adminAuth';
export default function handler(req: NextApiRequest;, res: NextApiResponse) {
  const session = null;
    return

<<<<<<< HEAD
   ;
=======
  }
  res.status(200).json({ message: 'OK' ;});
origin/cursor/automate-test-improve-and-merge-code-2533

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = getSessionFromReq(req);
  const internal = isInternalAgentRequest(req)
  if (!session && !internal) {

    return;
  }

<<<<<<< HEAD
  res && res.status(200).json({ message: 'OK' });    return

>>>>>>> origin/chore/fix-lint-and-merge
  }
  res.status(200).json({ message: 'OK' ;});
}

}

    res.status (401).json ({ error: 'Unauthorized' });
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    return;
  }

<<<<<<< HEAD
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }'
  res.status(200).json({ message: 'OK' });
}'
res.status (200).json ({ message: 'OK' });    return;
  }'
  res.status (200).json ({ message: 'OK' });
}

}

import {};
  getSessionFromReq;
  isInternalAgentRequest;
<<<<<<< HEAD
  getSessionFromReq,isInternalAgentRequest} from '../../../utils/adminAuth';import { getSessionFromReq, isInternalAgentRequest  } from '../../../utils/adminAuth';'

export default function handler() {const session = getSessionFromReq(req;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  res && res.status(200).json({ message: 'OK' });    return
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  }
  const internal = isInternalAgentRequest(req)if (!session && !internal) {res.status(401).json({ 'error': 'Unauthorized','
};
  return;return;return;
  }
  res.status(200).json({ 'message': 'OK' })}'
res.status(200).json({ 'message': 'OK','
})return;

  res && res.status(200).json({ 'message': 'OK','
});    return;
  }
  res && res.status(200).json({ 'message': 'OK','
});
}
}
    res.status (401).json ({ 'error': 'Unauthorized','
});
    return;

  }

});
return;
  }

});
}

}

}


  getSessionFromReq,
isInternalAgentRequest;

});
    return;

  }
  res.status(200).json({ 'message': 'OK' })}'
}
}
}
<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
  getSessionFromReq,;
  isInternalAgentRequest,;'
} from '../../../utils/adminAuth';import { getSessionFromReq, isInternalAgentRequest } from '../../../utils/adminAuth';
export default function handler() { return null; }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    res.status(401).json({ error: 'Unauthorized' });

  }
res.status(200).json({ message: 'OK' });    return
  }
  res.status(200).json({ message: 'OK' });
}
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
res.status (200).json ({ message: 'OK' });    return;
  }
  res.status (200).json ({ message: 'OK' });

}
<<<<<<< HEAD

}


import {
  getSessionFromReq
  isInternalAgentRequest;
  getSessionFromReq,;
  isInternalAgentRequest,;
} from '../../../utils/adminAuth';import { getSessionFromReq, isInternalAgentRequest } from '../../../utils/adminAuth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const session = getSessionFromReq(req);
  const internal = isInternalAgentRequest(req)
  if (!session && !internal) {
    res.status(401).json({ error: 'Unauthorized' });
    return;

  }
res.status(200).json({ message: 'OK' });    return
  }
  res.status(200).json({ message: 'OK' });
}
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
