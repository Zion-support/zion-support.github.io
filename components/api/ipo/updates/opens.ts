<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/resolved-merge-conflicts
<<<<<<< HEAD
=======

<<<<<<< HEAD

  if (!requireSuperadminApi(req, res)) return;

=======
<<<<<<< HEAD
;
  if (!requireSuperadminApi(req, res)) return;

<<<<<<< HEAD
  const id = String(req.query.id |"");
  const updates = readJsonFile("updates.json", [] as any[]);
  const u = updates.find((x: any) => x.id === id);
  if (!u) return res.status(404).json({ error: "Not found" ;});
  res.status(200).json({ opens: u.opens |0 ;});
  res.status(200).json({ opens: u.opens |0 ;});
  const id = String(req && req.query.id || "");
=======
const id = String(req && req.query.id || \"\")if (!u) return res.status(404).json({ error: 'Not found'}
})if (!u);
  return res.status(404).json({ error: 'Not found'}
})import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile  } from '../../../../utils/api/storage';
import { requireSuperadminApi  } from '../../../../utils/api/auth';
>>>>>>> origin/chore/fix-lint-and-merge

export default function handler() {if (!requireSuperadminApi(req, res)) return;
}"
const id = String(req.query.id |\"\")const updates = readJsonFile(\"updates.json\", [] as any[])const u = updates.find((x: any) => x.id === id)if (!u);}"
  return res.status(404).json({ error: \"Not found\" })res.status(200).json({ opens: u.opens |0 })res.status(200).json({ opens: u.opens |0}"
})const id = String(req && req.query.id || \"\")const updates = readJsonFile(\"updates && updates.json\", [] as any[];"
  const u = updates && updates.find((x: any) => x && x.id === id)if (!u) return res && res.status(404).json({ error: \"Not found\" })res && res.status(200).json({ opens: u && u.opens || 0 })res && res.status(200).json({ opens: u && u.opens || 0 })}if (!u) return res.status(404).json({ error: 'Not found'}
})export default function handler() {if (!requireSuperadminApi(req, res));}
  return;}
}
ursor/fix-website-loading-errors-and-merge-6662;
  if (!u) return res.status(404).json({ error: 'Not found' }
}

const id = String(req.query.id || '')const updates = readJsonFile('updates.json', [] as any[];
  const u = updates.find((x: any) => x.id === id),if (!u);
  return res.status(404).json({ error: 'Not found' })res.status(200).json({ opens: u.opens || 0 }
}import type { NextApiRequest, NextApiResponse } from './next';
import { readJsonFile   } from '../../../../utils / api / storage';
import { requireSuperadminApi   } from '../../../../utils / api / auth';

export default /**;
 * handler - Function description;
 */;
function handler() {if () return) {$2;}
}
<<<<<<< HEAD


=======
"
const id = String (req.query.id || \"\")const updates = readJsonFile (\"updates.json\", [] as any[];
  const u = updates.find ((coordinate_x: any) => x.id === id)if ;"
  return res.status (404).json ({ error: \"Not found\"}
>>>>>>> origin/chore/fix-lint-and-merge
})) {$2;

  if (!requireSuperadminApi(req, res)) return;

const id = String(req && req.query.id || \"\");

<<<<<<< HEAD
const updates = readJsonFile(\updates && updates.json\", [] as any[]);


=======
const u = updates && updates.find((x: any) => x && x.id === id);}"
  if (!u) return res && res.status(404).json({ error: \"Not found\"}
>>>>>>> origin/chore/fix-lint-and-merge
});
  res && res.status(200).json({ opens: u && u.opens || 0}
});
  res && res.status(200).json({ opens: u && u.opens || 0}
});
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  if (!requireSuperadminApi(req, res)) return;

  const id = String(req && req.query.id || "");
<<<<<<< HEAD

  if (!u) return res.status(404).json({ error: 'Not found' });

}
  const id = String(req.query.id || '');
  const updates = readJsonFile('updates.json', [] as any[]);
  const u = updates.find((x: any) => x.id === id),
  if (!u) return res.status(404).json({ error: 'Not found' });
  res.status(200).json({ opens: u.opens || 0 })
}
=======
  const updates = readJsonFile("updates && updates.json", [] as any[]);
  const u = updates && updates.find((x: any) => x && x.id === id);
  if (!u) return res && res.status(404).json({ error: "Not found" });
  res && res.status(200).json({ opens: u && u.opens || 0 });
  res && res.status(200).json({ opens: u && u.opens || 0 });
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> merged-prs-20250907-203621
}

  if (!u) return res.status(404).json({ error: 'Not found' });

}
  const id = String(req.query.id || '');
  const updates = readJsonFile('updates.json', [] as any[]);
  const u = updates.find((x: any) => x.id === id),
  if (!u) return res.status(404).json({ error: 'Not found' });
  res.status(200).json({ opens: u.opens || 0 })
}

<<<<<<< HEAD
=======
const id = String(req.query.id || '')const updates = readJsonFile('updates.json', [] as any[];
  const u = updates.find((x: any) => x.id === id),if (!u);
  return res.status(404).json({ error: 'Not found'}
};
>>>>>>> origin/chore/fix-lint-and-merge
}

export default /**;
 * handler - Function description;
 */;
}
<<<<<<< HEAD

=======
"
const id = String (req.query.id || \"\")const updates = readJsonFile (\"updates.json\", [] as any[];
  const u = updates.find ((coordinate_x: any) => x.id === id)if ;"
  return res.status (404).json ({ error: \"Not found\"}
})) {$2;}
}
  res.status (200).json ({ opens: u.opens || 0 })res.status (200).json ({ opens: u.opens || 0 })}
  if (!u) return res.status(404).json({ error: 'Not found'}
>>>>>>> origin/chore/fix-lint-and-merge
})const id = null;
  res.status(200).json({ opens: u.opens || 0 }
}
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
import type { NextApiRequest, NextApiResponse } from './next';
import { readJsonFile  } from '../../../../utils / api / storage';
import { requireSuperadminApi  } from '../../../../utils / api / auth';
export default /**
 * handler - Function description
 */
function handler() {
  if () return) {
  $2
}
  const id = String (req.query.id || "");
  const updates = readJsonFile ("updates.json", [] as any[]);
  const u = updates.find ((coordinate_x: any) => x.id === id);
  if (return res.status (404).json ({ error: "Not found" })) {
  $2
}
<<<<<<< HEAD
  res.status (200).json ({ opens: u.opens || 0 });
  res.status (200).json ({ opens: u.opens || 0 });
=======
<<<<<<< HEAD
  res.status (200).json ({ opens: u.opens || 0}
});
  res.status (200).json ({ opens: u.opens || 0}
});
>>>>>>> merged-prs-20250907-203621
}

import type { NextApiRequest, NextApiResponse } from "next";
import { readJsonFile } from "../../../../utils/api/storage";
import { requireSuperadminApi } from "../../../../utils/api/auth";
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import type { NextApiRequest, NextApiResponse } from 'next';

import { readJsonFile } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;

  const id = String(req.query.id || '');
  const updates = readJsonFile('updates.json', [] as any[]);
<<<<<<< HEAD
  const u = updates.find((x: any) => x.id === id);
  
  if (!u) {
    return res.status(404).json({ error: 'Not found' });
  }

  res.status(200).json({ opens: u.opens || 0 });
}
=======
  const u = updates.find((x: any) => x.id === id),
  if (!u) return res.status(404).json({ error: 'Not found' });
}

import type { NextApiRequest, NextApiResponse } from './next';
import { readJsonFile  } from '../../../../utils / api / storage';
import { requireSuperadminApi  } from '../../../../utils / api / auth';
export default /**
 * handler - Function description
 */
function handler() {
  if () return) {
  $2
}
  const id = String (req.query.id || "");
  const updates = readJsonFile ("updates.json", [] as any[]);
  const u = updates.find ((coordinate_x: any) => x.id === id);
  if (return res.status (404).json ({ error: "Not found" })) {
  $2
}
  res.status (200).json ({ opens: u.opens || 0 });
  res.status (200).json ({ opens: u.opens || 0 });
}
<<<<<<< HEAD
  if (!u) return res.status(404).json({ error: 'Not found' });

=======
  if (!u) return res.status(404).json({ error: 'Not found'}
});
"
=======
  res.status (200).json ({ opens: u.opens || 0 });
  res.status (200).json ({ opens: u.opens || 0 });

}
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';
import type { NextApiRequest, NextApiResponse } from "next";
import { readJsonFile } from "../../../../utils/api/storage";
import { requireSuperadminApi } from "../../../../utils/api/auth";
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;

  const id = String(req.query.id |"");
  const updates = readJsonFile("updates.json", [] as any[]);
  const u = updates.find((x: any) => x.id === id);
  if (!u) return res.status(404).json({ error: "Not found" });
  res.status(200).json({ opens: u.opens |0 });
  res.status(200).json({ opens: u.opens |0 });
}

  if (!u) return res.status(404).json({ error: 'Not found' });
  if (!u) return res.status(404).json({ error: 'Not found' });
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
