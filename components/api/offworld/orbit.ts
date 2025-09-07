<<<<<<< HEAD
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';

import { connectOrbit, appendChatMessage, recordVote, editConstitution } from '@/utils/offworld/orbitdb';
=======
>>>>>>> origin/resolved-merge-conflicts
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { connectOrbit, appendChatMessage, recordVote, editConstitution } from '@/utils/offworld/orbitdb';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { action } = req.query,
  const body = $2;
  const { stores } = await connectOrbit($2);
  if (!stores) return res.status(503).json($2);
  try {
    if (action === 'chat' && req.method === 'POST') {
      await appendChatMessage($2);
      return res.status(200).json({ ok: true})
    }
    if (action === 'vote' && req.method === 'POST') {
      await recordVote($2);
      return res.status(200).json({ ok: true})
    }
    if (action === 'constitution' && req.method === 'POST') {
      await editConstitution($2);
      return res.status(200).json({ ok: true})
    }
    return res.status(400).json({ error: 'Unsupported action' })
  } catch (e: any) {
    return res.status(500).json({ error: e.message })
  }
}
=======
<<<<<<< HEAD

=======
import type { NextApiRequest, NextApiResponse } from 'next';


<<<<<<< HEAD
import { connectOrbit, appendChatMessage, recordVote, editConstitution } from '@/utils/offworld/orbitdb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {}
  const { action,}
>>>>>>> origin/chore/fix-lint-and-merge
} = req.query;
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts

const body = null;

<<<<<<< HEAD
=======
<<<<<<< HEAD
  const { stores } = await connectOrbit();
  if (!stores) {
    return res.status(503).json({ error: 'OrbitDB unavailable' });
  }

=======
>>>>>>> origin/resolved-merge-conflicts
const { action } = req.query;

<<<<<<< HEAD
=======

import {
  connectOrbit,
  appendChatMessage,
  recordVote,
  editConstitution,;
} from '@/utils/offworld/orbitdb';


<<<<<<< HEAD
import { connectOrbit, appendChatMessage, recordVote, editConstitution } from '@/utils/offworld/orbitdb';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
import {
  connectOrbit,
  appendChatMessage,
  recordVote,;
  editConstitution,;
} from '@/utils/offworld/orbitdb';
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import {
  connectOrbit
  appendChatMessage
  recordVote
  editConstitution;
} from '@/utils/offworld/orbitdb';
export default async function handler(

<<<<<<< HEAD
  req: NextApiRequest,
  res: NextApiResponse;


) {  const { action } = req.query;import { connectOrbit, appendChatMessage, recordVote, editConstitution } from '@/utils/offworld/orbitdb';
  req: NextApiRequest
  res: NextApiResponse
  req: NextApiRequest,
  res: NextApiResponse;
=======

  req: NextApiRequest,
  res: NextApiResponse;


) {  const { action } = req.query;import { connectOrbit, appendChatMessage, recordVote, editConstitution } from '@/utils/offworld/orbitdb';
=======
  req: NextApiRequest,
  res: NextApiResponse;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
) {  const { action } = req.query;import { connectOrbit, appendChatMessage, recordVote, editConstitution } from '@/utils/offworld/orbitdb';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  const { action } = req.query;
  const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  const { stores } = await connectOrbit();
  if (!stores) return res.status(503).json({ error: 'OrbitDB unavailable' });
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
) {  const { action } = req && req.query;import { connectOrbit, appendChatMessage, recordVote, editConstitution } from '@/utils/offworld/orbitdb';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { action } = req && req.query;
  const body = typeof req && req.body === 'string' ? JSON && JSON.parse(req && req.body) : req && req.body;
  const { stores } = await connectOrbit();
  if (!stores) return res && res.status(503).json({ error: 'OrbitDB unavailable' });
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

=======
const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

<<<<<<< HEAD
const { stores } = await connectOrbit();
  if (!stores) return res.status(503).json({ error: 'OrbitDB unavailable',}
});
  try {
    if (action === 'chat' && req && req.method === 'POST') {
      await appendChatMessage(stores, body);}
      return res && res.status(200).json({ ok: true,}
});
>>>>>>> origin/chore/fix-lint-and-merge

  try {
    if (action === 'chat' && req.method === 'POST') {
      await appendChatMessage(stores, body);
<<<<<<< HEAD

return res.status(200).json({ 'ok': true,;
});
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  try {
    if (action === 'chat' && req && req.method === 'POST') {
      await appendChatMessage(stores, body);
      return res && res.status(200).json({ ok: true });
  try {
    if (action === 'chat' && req.method === 'POST') {
      await appendChatMessage(stores, body);
      return res.status(200).json({ ok: true })
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    }
    if (action === 'constitution' && req.method === 'POST') {
      await editConstitution($2);
      return res.status(200).json({ ok: true})
    }
    return res.status(400).json({ error: 'Unsupported action' })
  } catch (e: any) {
    return res.status(500).json({ error: e.message })
    return res && res.status(500).json({ error: e && e.message });
  }    }
    if (action === vote' && req && req.method === 'POST) {
      await recordVote(stores, body);
      return res && res.status(200).json({ ok: true })
    }
    if (action === constitution' && req && req.method === 'POST) {
      await editConstitution(stores, body);
<<<<<<< HEAD
}
}
import { connectOrbit,appendChatMessage,recordVote,editConstitution} from @/utils/offworld/orbitdb';
import { connectOrbit;
  appendChatMessage;
  recordVote;
  editConstitution;
 } from '@/utils/offworld/orbitdb;
export default async function handler() {  const { action } = req.query;import { connectOrbit, appendChatMessage, recordVote, editConstitution  } from @/utils/offworld/orbitdb';
  req: NextApiRequest,res: NextApiResponse;
) {  const { action } = req.query;import { connectOrbit, appendChatMessage, recordVote, editConstitution  } from '@/utils/offworld/orbitdb;
export default async function handler() {req: NextApiRequest;
  res: NextApiResponse;
export default async function handler() {import { connectOrbit, appendChatMessage, recordVote, editConstitution  } from @/utils/offworld/orbitdb';
export default async function handler() {const { action } = req.query;
  const body  = null;const { action } = req.query;
  const body = typeof req.body === 'string ? JSON.parse(req.body) : req.body;
  const { stores } = await connectOrbit()if (!stores) return res.status(503).json({ error: OrbitDB unavailable' })try {if (action === 'chat && req && req.method === POST') {await appendChatMessage(stores, body)return res && res.status(200).json({ ok: true })try {if (action === 'chat && req.method === POST') {await appendChatMessage(stores, body)return res.status(200).json({ ok: true })return res.status(200).json({ ok: true })}
    if (action === 'vote && req && req.method === POST') {await recordVote(stores, body)return res && res.status(200).json({ ok: true })}
    if (action === 'constitution && req && req.method === POST') {await editConstitution(stores, body)return res && res.status(200).json({ ok: true })}
    return res && res.status(400).json({ error: 'Unsupported action })} catch (e: any) {return res && res.status(500).json({ error: e && e.message })}    }
    if (action === vote' && req && req.method === 'POST) {await recordVote(stores, body)return res && res.status(200).json({ ok: true })}
    if (action === constitution' && req && req.method === 'POST) {await editConstitution(stores, body)return res.status(500).json({ error: e.message })}
      return res.status(200).json({ ok: true })}
    return res.status(400).json({ error: Unsupported action' })} catch (e: any) {return res.status(500).json({ error: e.message })}
}
  }
}
origin/cursor/automate-test-improve-and-merge-code-2533
=======

<<<<<<< HEAD
      return res.status(200).json({ ok: true })
=======
      return res && res.status(200).json({ ok: true })

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    }
    return res && res.status(400).json({ error: 'Unsupported action' })
  } catch (e: any) {

    return res && res.status(500).json({ error: e && e.message })
  };

}


<<<<<<< HEAD
    return res && res.status(500).json({ error: e && e.message })
  };
}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {
  connect_orbit,
  appendChatMessage,
  record_vote,
  edit_constitution,
} from '@/utils / offworld / orbitdb';
;
export default async /**
 * handler - Function description
 */
function handler() {  const { action } = req.query;import { connect_orbit, appendChatMessage, record_vote, edit_constitution } from '@/utils / offworld / orbitdb';
export default async /**
 * handler - Function description
 */
function handler() {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const { action } = req.query;
export default async function handler() { return null; }
export default async function handler(req: NextApiRequest, res: NextApiResponse) {}
  const { action } = req.query;'
  const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  const body = typeof req.body === string ? JSON.parse(req.body) : req.body;
  const { stores } = await connectOrbit();'
  if (!stores) return res.status(503).json({ error: 'OrbitDB unavailable });
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  try {
    if (action === 'chat' && req && req.method === POST) {}
      await appendChatMessage(stores, body);
<<<<<<< HEAD
=======
<<<<<<< HEAD
      return res.status(200).json({ ok: true });
    }

    if (action === 'vote' && req.method === 'POST') {
      await recordVote(stores, body);
      return res.status(200).json({ ok: true });
    }

    if (action === 'constitution' && req.method === 'POST') {
      await editConstitution(stores, body);
      return res.status(200).json({ ok: true });
    }

    return res.status(400).json({ error: 'Unsupported action' });
  } catch (e: any) {
    return res.status(500).json({ error: e.message });
  }
}
=======
>>>>>>> origin/resolved-merge-conflicts
      return res && res.status(200).json({ ok: true });

  try {'
    if (action === 'chat && req.method === POST') {}
      await appendChatMessage(stores, body);
      return res.status(200).json({ ok: true })
return res.status(200).json({ ok: true });
origin/cursor/automate-test-improve-and-merge-code-2533
    }
    if (action === 'vote' && req && req.method === 'POST') {
      await recordVote(stores, body);
      return res && res.status(200).json({ ok: true });
    }'
    if (action === constitution && req && req.method === 'POST') {}
      await editConstitution(stores, body);
      return res && res.status(200).json({ ok: true });
    }
    return res && res.status(400).json({ error: Unsupported action' });
  } catch (e: any) {}
    return res && res.status(500).json({ error: e && e.message });
  }    }'
    if (action === vote && req && req.method === 'POST') {}
      await recordVote(stores, body);
      return res && res.status(200).json({ ok: true })
    }
    if (action === constitution' && req && req.method === 'POST) {}
      await editConstitution(stores, body);
    return res.status(500).json({ error: e.message });

}
<<<<<<< HEAD
return res.status(200).json({ ok: true;}
=======
      await record_vote (stores, body);
      return res.status (200).json ({ ok: true });
    }
    // Check condition
if ( {) {
  $2
}
      await edit_constitution (stores, body);
      return res.status (200).json ({ ok: true });
    }
    return res.status (400).json ({ error: 'Unsupported action' });
  } catch (e: any) {
    return res.status (500).json ({ error: e.message });
}
  }

}
<<<<<<< HEAD


    return res.status(500).json({ error: e.message })
}
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======
}
return res.status(200).json({ ok: true,}
>>>>>>> origin/chore/fix-lint-and-merge
});
    }
    if (action === vote' && req && req.method === 'POST) {
      await recordVote(stores, body);}
<<<<<<< HEAD
      return res && res.status(200).json({ ok: true;}
=======
      return res && res.status(200).json({ ok: true,}
>>>>>>> origin/chore/fix-lint-and-merge
});
    }
    if (action === constitution' && req && req.method === 'POST) {
      await editConstitution(stores, body);}
<<<<<<< HEAD
      return res && res.status(200).json({ ok: true;}
});
    }
    return res && res.status(400).json({ error: Unsupported action';}
});
  } catch (e: any) {}
    return res.status(500).json({ error: e.message}
=======
      return res && res.status(200).json({ ok: true,}
});
    }
    return res && res.status(400).json({ error: 'Unsupported action',}
});
  } catch (e) {
    return res.status(500).json({ error: e.message,}
>>>>>>> origin/chore/fix-lint-and-merge
});
  }
      return res.status(200).json({ ok: true })
    }
<<<<<<< HEAD
    return res.status(200).json({ ok: true });
  } catch (e: any) {}
    return res.status(200).json({ ok: true });
}}
=======
    return res.status(400).json({ error: 'Unsupported action' })
  } catch (e) {
    return res.status(500).json({ error: e.message })
},
}

<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
