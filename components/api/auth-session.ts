<<<<<<< HEAD



=======
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

export default function handler() {const session = null;



}
import type { NextApiRequest, NextApiResponse } from 'next';



import {


>>>>>>> origin/cursor/delete-old-data-records-6bba


  }


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

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

  }
  res.status(200).json({ message: 'OK' ;});
origin/cursor/automate-test-improve-and-merge-code-2533

=======
   ;
>>>>>>> origin/cursor/delete-old-data-records-6bba
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = getSessionFromReq(req);
  const internal = isInternalAgentRequest(req)
  if (!session && !internal) {

    return;
  }


<<<<<<< HEAD
  }
  const internal = isInternalAgentRequest(req)if (!session && !internal) {res.status(401).json({ "error": 'Unauthorized','
};
  return;return;return;
  }
  res.status(200).json({ "message": 'OK' })}'
res.status(200).json({ "message": 'OK','
})return;

  res && res.status(200).json({ "message": 'OK','
});    return;
  }
  res && res.status(200).json({ "message": 'OK','
});
}
}
    res.status (401).json ({ "error": 'Unauthorized','
});
    return;

  }

});
return;
  }

});
}
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

}

}
<<<<<<< HEAD


  getSessionFromReq,
isInternalAgentRequest;

});
    return;

  }
  res.status(200).json({ "message": 'OK' })}'
}
}
}





=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
