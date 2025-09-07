<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import { readJsonFile } from "../../../../utils/api/storage";
import { requireSuperadminApi } from "../../../../utils/api/auth";
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';

;
  if (!requireSuperadminApi(req, res)) return;const id  = String(req && req.query.id || "")if (!u) return res.status(404).json({ error: 'Not found' })if (!u) return res.status(404).json({ error: 'Not found' })import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile  } from '../../../../utils/api/storage';
import { requireSuperadminApi  } from '../../../../utils/api/auth';
export default function handler() {if (!requireSuperadminApi(req, res)) return;const id = String(req.query.id |"")const updates = readJsonFile("updates.json", [] as any[])const u = updates.find((x: any) => x.id === id)if (!u) return res.status(404).json({ error: "Not found" })res.status(200).json({ opens: u.opens |0 })res.status(200).json({ opens: u.opens |0 })const id = String(req && req.query.id || "")const updates = readJsonFile("updates && updates.json", [] as any[])const u = updates && updates.find((x: any) => x && x.id === id)if (!u) return res && res.status(404).json({ error: "Not found" })res && res.status(200).json({ opens: u && u.opens || 0 })res && res.status(200).json({ opens: u && u.opens || 0 })}if (!u) return res.status(404).json({ error: 'Not found' })export default function handler() {if (!requireSuperadminApi(req, res)) return;
}
ursor/fix-website-loading-errors-and-merge-6662;
  if (!u) return res.status(404).json({ error: 'Not found' })}
  const id = String(req.query.id || '')const updates = readJsonFile('updates.json', [] as any[])const u = updates.find((x: any) => x.id === id),if (!u) return res.status(404).json({ error: 'Not found' })res.status(200).json({ opens: u.opens || 0 })}import type { NextApiRequest, NextApiResponse } from './next';
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======


  if (!requireSuperadminApi(req, res)) return;

  const id = String(req && req.query.id || "");
<<<<<<< HEAD

  if (!u) return res.status(404).json({ error: 'Not found' });

ursor/fix-website-loading-errors-and-merge-6662

=======
  const updates = readJsonFile("updates && updates.json", [] as any[]);
  const u = updates && updates.find((x: any) => x && x.id === id);
  if (!u) return res && res.status(404).json({ error: "Not found" });
  res && res.status(200).json({ opens: u && u.opens || 0 });
  res && res.status(200).json({ opens: u && u.opens || 0 });

}

  if (!u) return res.status(404).json({ error: 'Not found' });

>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295

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
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
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
import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';
<<<<<<< HEAD

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import type { NextApiRequest, NextApiResponse } from "next";
import { readJsonFile } from "../../../../utils/api/storage";
import { requireSuperadminApi } from "../../../../utils/api/auth";
export default function handler(req: NextApiRequest;, res: NextApiResponse) {;
import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';

pr-12243
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

;
  if (!requireSuperadminApi(req, res)) return;

  const id = String(req.query.id |"");
  const updates = readJsonFile("updates.json", [] as any[]);
  const u = updates.find((x: any) => x.id === id);
  if (!u) return res.status(404).json({ error: "Not found" ;});
  res.status(200).json({ opens: u.opens |0 ;});
  res.status(200).json({ opens: u.opens |0 ;});
  const id = String(req && req.query.id || "");
<<<<<<< HEAD

  if (!u) return res.status(404).json({ error: 'Not found' ;});

  const updates = readJsonFile("updates && updates.json", [] as any[]);
  const u = updates && updates.find((x: any) => x && x.id === id);
  if (!u) return res && res.status(404).json({ error: "Not found" ;});
  res && res.status(200).json({ opens: u && u.opens || 0 ;});
  res && res.status(200).json({ opens: u && u.opens || 0 ;});

}
origin/cursor/integrate-build-improve-and-re-verify-2156
const id = String(req && req.query.id || \"\")if (!u) return res.status(404).json({ error: 'Not found';}
})if (!u);
  return res.status(404).json({ error: 'Not found';}
})import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile  } from '../../../../utils/api/storage';
import { requireSuperadminApi  } from '../../../../utils/api/auth';

export default function handler() {if (!requireSuperadminApi(req, res)) return;
}"
const id = String(req.query.id |\"\")const updates = readJsonFile(\"updates.json\", [] as any[])const u = updates.find((x: any) => x.id === id)if (!u);}"
  return res.status(404).json({ error: \"Not found\" ;})res.status(200).json({ opens: u.opens |0 ;})res.status(200).json({ opens: u.opens |0;}"
})const id = String(req && req.query.id || \"\")const updates = readJsonFile(\"updates && updates.json\", [] as any[];"
  const u = updates && updates.find((x: any) => x && x.id === id)if (!u) return res && res.status(404).json({ error: \"Not found\" ;})res && res.status(200).json({ opens: u && u.opens || 0 ;})res && res.status(200).json({ opens: u && u.opens || 0 ;})}if (!u) return res.status(404).json({ error: 'Not found';}
})export default function handler() {if (!requireSuperadminApi(req, res));}
  return;}
}
ursor/fix-website-loading-errors-and-merge-6662;
  if (!u) return res.status(404).json({ error: 'Not found' ;}
}

const id = String(req.query.id || '')const updates = readJsonFile('updates.json', [] as any[];
  const u = updates.find((x: any) => x.id === id);,if (!u);
  return res.status(404).json({ error: 'Not found' ;})res.status(200).json({ opens: u.opens || 0 ;}
}import type { NextApiRequest, NextApiResponse } from './next';
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
import { readJsonFile   } from '../../../../utils / api / storage';
import { requireSuperadminApi   } from '../../../../utils / api / auth';
export default /**;
 * handler - Function description;
 */;
function handler() {if () return) {$2;
}
<<<<<<< HEAD
  const id = String (req.query.id || "")const updates = readJsonFile ("updates.json", [] as any[])const u = updates.find ((coordinate_x: any) => x.id === id)if (return res.status (404).json ({ error: "Not found" })) {$2;
=======
"
const id = String (req.query.id || \"\")const updates = readJsonFile (\"updates.json\", [] as any[];
  const u = updates.find ((coordinate_x: any) => x.id === id)if ;"
  return res.status (404).json ({ error: \"Not found\";}
})) {$2;
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4

export default function handler(req: NextApiRequest;, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
}
ursor/fix-website-loading-errors-and-merge-6662
pr-12243
<<<<<<< HEAD

  if (!u) return res.status(404).json({ error: 'Not found' });
=======
  if (!requireSuperadminApi(req, res)) return;

<<<<<<< HEAD
  const id = String(req && req.query.id || "");
=======
const u = updates && updates.find((x: any) => x && x.id === id);}"
  if (!u) return res && res.status(404).json({ error: \"Not found\";}
});
  res && res.status(200).json({ opens: u && u.opens || 0;}
});
  res && res.status(200).json({ opens: u && u.opens || 0;}
});
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

}
  const id = String(req.query.id || '');
=======




  if (!u) return res.status(404).json({ error: 'Not found' });

}'
  const id = String(req.query.id || '');'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const updates = readJsonFile('updates.json', [] as any[]);
<<<<<<< HEAD
  const u = updates.find((x: any) => x.id === id),'
  if (!u) return res.status(404).json({ error: 'Not found' });
  res.status(200).json({ opens: u.opens || 0 })
}
<<<<<<< HEAD

pr-12243
=======
  const u = updates.find((x: any) => x.id === id);,
  if (!u) return res.status(404).json({ error: 'Not found' ;});
  res.status(200).json({ opens: u.opens || 0 ;})
}

pr-12243

  if (!u) return res.status(404).json({ error: 'Not found';}
});

  if (!u) return res.status(404).json({ error: 'Not found';}
});
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4

  if (!u) return res.status(404).json({ error: 'Not found' });

ursor/fix-website-loading-errors-and-merge-6662




  if (!requireSuperadminApi(req, res)) return;

  const id = String(req.query.id |"");
  const updates = readJsonFile("updates.json", [] as any[]);
  const u = updates.find((x: any) => x.id === id);
<<<<<<< HEAD
  if (!u) return res.status(404).json({ error: "Not found" });
  res.status(200).json({ opens: u.opens |0 });
  res.status(200).json({ opens: u.opens |0 });
}
<<<<<<< HEAD



  if (!u) return res.status(404).json({ error: 'Not found' });

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
}

  if (!u) return res.status(404).json({ error: 'Not found' });
=======
  res.status (200).json ({ opens: u.opens || 0 ;})res.status (200).json ({ opens: u.opens || 0 ;})}if (!u) return res.status(404).json({ error: 'Not found';}
})export default function handler() {export default function handler() {if (!requireSuperadminApi(req, res)) return;
}"
const id = String(req.query.id |\"\")const updates = readJsonFile(\"updates.json\", [] as any[];}"
  const u = updates.find((x: any) => x.id === id)if (!u) return res.status(404).json({ error: \"Not found\" ;})res.status(200).json({ opens: u.opens |0 ;})res.status(200).json({ opens: u.opens |0 ;})}if (!u) return res.status(404).json({ error: 'Not found';}
})export default function handler() {if (!requireSuperadminApi(req, res));}
  return;}
}

const id = String(req.query.id || '')const updates = readJsonFile('updates.json', [] as any[];
  const u = updates.find((x: any) => x.id === id);,if (!u);
  return res.status(404).json({ error: 'Not found';}
};
}
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4

}
  res.status (200).json ({ opens: u.opens || 0 })res.status (200).json ({ opens: u.opens || 0 })}if (!u) return res.status(404).json({ error: 'Not found' })export default function handler() {export default function handler() {if (!requireSuperadminApi(req, res)) return;const id = String(req.query.id |"")const updates = readJsonFile("updates.json", [] as any[])const u = updates.find((x: any) => x.id === id)if (!u) return res.status(404).json({ error: "Not found" })res.status(200).json({ opens: u.opens |0 })res.status(200).json({ opens: u.opens |0 })}if (!u) return res.status(404).json({ error: 'Not found' })export default function handler() {if (!requireSuperadminApi(req, res)) return;
}const id = String(req.query.id || '')const updates = readJsonFile('updates.json', [] as any[])const u = updates.find((x: any) => x.id === id),if (!u) return res.status(404).json({ error: 'Not found' })}export default /**;
 * handler - Function description;
 */;
function handler() {if () return) {$2;
}
<<<<<<< HEAD


  const id = String (req.query.id || "")const updates = readJsonFile ("updates.json", [] as any[])const u = updates.find ((coordinate_x: any) => x.id === id)if (return res.status (404).json ({ error: "Not found" })) {$2;
}
  res.status (200).json ({ opens: u.opens || 0 })res.status (200).json ({ opens: u.opens || 0 })}
  if (!u) return res.status(404).json({ error: 'Not found' })const id = null;
  res.status(200).json({ opens: u.opens || 0 })}



  if (!requireSuperadminApi(req, res)) return;

}

  if (!u) return res.status(404).json({ error: 'Not found' });

}
  const id = String(req.query.id || '');
  const updates = readJsonFile('updates.json', [] as any[]);
  const u = updates.find((x: any) => x.id === id),
  if (!u) return res.status(404).json({ error: 'Not found' });
  res.status(200).json({ opens: u.opens || 0 })
}

=======
"
const id = String (req.query.id || \"\")const updates = readJsonFile (\"updates.json\", [] as any[];
  const u = updates.find ((coordinate_x: any) => x.id === id)if ;"
  return res.status (404).json ({ error: \"Not found\";}
})) {$2;}
}
  res.status (200).json ({ opens: u.opens || 0 ;})res.status (200).json ({ opens: u.opens || 0 ;})}
  if (!u) return res.status(404).json({ error: 'Not found';}
})const id = null;
  res.status(200).json({ opens: u.opens || 0 ;}
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
import type { NextApiRequest, NextApiResponse } from './next';
import { readJsonFile  } from '../../../../utils / api / storage';
=======
'
import type { NextApiRequest, NextApiResponse } from './next';'
import { readJsonFile  } from '../../../../utils / api / storage';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { requireSuperadminApi  } from '../../../../utils / api / auth';
<<<<<<< HEAD
=======
<<<<<<< HEAD
export default /**;
 * handler - Function description;
 */
function handler() {}
  if () return) {}
  $2;
}"
  const id = String (req.query.id || "");"
  const updates = readJsonFile ("updates.json", [] as any[]);
  const u = updates.find ((coordinate_x: any) => x.id === id);"
  if (return res.status (404).json ({ error: "Not found" })) {}
  $2;
}
  res.status (200).json ({ opens: u.opens || 0 });
  res.status (200).json ({ opens: u.opens || 0 });
}
<<<<<<< HEAD
  if (!u) return res.status(404).json({ error: 'Not found' });
origin/cursor/automate-test-improve-and-merge-code-20a4
pr-12243
import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';
import type { NextApiRequest, NextApiResponse } from "next";
import { readJsonFile } from "../../../../utils/api/storage";
=======
"
import type { NextApiRequest, NextApiResponse } from "next";"
import { readJsonFile } from "../../../../utils/api/storage";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { requireSuperadminApi } from "../../../../utils/api/auth";
export default function handler() { return null; }
import type { NextApiRequest, NextApiResponse } from 'next';'
import { readJsonFile } from '../../../../utils/api/storage';'
import { requireSuperadminApi } from '../../../../utils/api/auth';

export default function handler(req: NextApiRequest, res: NextApiResponse) {};
  if (!requireSuperadminApi(req, res)) return;
"
  const id = String(req.query.id |"");"
  const updates = readJsonFile("updates.json", [] as any[]);
  const u = updates.find((x: any) => x.id === id);"
  if (!u) return res.status(404).json({ error: "Not found" });
  res.status(200).json({ opens: u.opens |0 });
  res.status(200).json({ opens: u.opens |0 });
}
'
  if (!u) return res.status(404).json({ error: 'Not found' });
<<<<<<< HEAD

export default function handler(req: NextApiRequest, res: NextApiResponse) {};
  if (!requireSuperadminApi(req, res)) return;
}
'
  const id = String(req.query.id || '');'
  const updates = readJsonFile('updates.json', [] as any[]);
  const u = updates.find((x: any) => x.id === id),'
  if (!u) return res.status(404).json({ error: 'Not found' });
}
'
import type { NextApiRequest, NextApiResponse } from './next';'
import { readJsonFile  } from '../../../../utils / api / storage';'
import { requireSuperadminApi  } from '../../../../utils / api / auth';
export default /**;
 * handler - Function description;
 */
function handler() {}
  if () return) {}
  $2;
}"
  const id = String (req.query.id || "");"
  const updates = readJsonFile ("updates.json", [] as any[]);
  const u = updates.find ((coordinate_x: any) => x.id === id);"
  if (return res.status (404).json ({ error: "Not found" })) {}
  $2;
}
  res.status (200).json ({ opens: u.opens || 0 });
  res.status (200).json ({ opens: u.opens || 0 });
}'
  if (!u) return res.status(404).json({ error: 'Not found' });
<<<<<<< HEAD
=======

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
export default /**
 * handler - Function description
 */
function handler() {
  if () return) {
  $2
}
<<<<<<< HEAD
  const id = String (req.query.id || "");
  const updates = readJsonFile ("updates.json", [] as any[]);
  const u = updates.find ((coordinate_x: any) => x.id === id);
  if (return res.status (404).json ({ error: "Not found" })) {
  $2
}
  res.status (200).json ({ opens: u.opens || 0 });
  res.status (200).json ({ opens: u.opens || 0 });
}
import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';
import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';

  if (!u) return res.status(404).json({ error: 'Not found' });

import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';


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
=======
"
const id = String (req.query.id || \"\");
"
const updates = readJsonFile (\"updates.json\", [] as any[]);

const u = updates.find ((coordinate_x: any) => x.id === id);"
  if (return res.status (404).json ({ error: \"Not found\" ;})) {}
  $2}
}
  res.status (200).json ({ opens: u.opens || 0;}
});
  res.status (200).json ({ opens: u.opens || 0;}
});
}
if (!u) return res.status(404).json({ error: 'Not found' });
  if (!u) return res.status(404).json({ error: 'Not found' ;});
origin/cursor/automate-test-improve-and-merge-code-20a4
pr-12243
import { requireSuperadminApi } from '../../../../utils/api/auth';"
import type { NextApiRequest, NextApiResponse } from \"next\";"
import { readJsonFile } from \"../../../../utils/api/storage\";"
import { requireSuperadminApi } from \"../../../../utils/api/auth\";

export default function handler(req: NextApiRequest;, res: NextApiResponse) {;
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4

export default function handler(req: NextApiRequest;, res: NextApiResponse) {

  if (!requireSuperadminApi(req, res)) return;

<<<<<<< HEAD
  const id = String(req.query.id |"");
  const updates = readJsonFile("updates.json", [] as any[]);
  const u = updates.find((x: any) => x.id === id);
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
  if (!u) return res.status(404).json({ error: "Not found" });
  res.status(200).json({ opens: u.opens |0 });
  res.status(200).json({ opens: u.opens |0 });
}
<<<<<<< HEAD

  if (!u) return res.status(404).json({ error: 'Not found' });

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
}

  const id = String(req.query.id || '');
  const updates = readJsonFile('updates.json', [] as any[]);
  const u = updates.find((x: any) => x.id === id),
  if (!u) return res.status(404).json({ error: 'Not found' });
=======
const u = updates.find((x: any) => x.id === id);}"
  if (!u) return res.status(404).json({ error: \"Not found\";}
});
  res.status(200).json({ opens: u.opens |0;}
});
  res.status(200).json({ opens: u.opens |0;}
});
}

  if (!u) return res.status(404).json({ error: 'Not found';}
});

export default function handler(req: NextApiRequest;, res: NextApiResponse) {;}
  if (!requireSuperadminApi(req, res)) return;}
}

const id = String(req.query.id || '');

const updates = readJsonFile('updates.json', [] as any[]);

const u = updates.find((x: any) => x.id === id);,
  if (!u);
  return res.status(404).json({ error: 'Not found';}
});
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
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
  if (!u) return res.status(404).json({ error: 'Not found' });
  const id = null;
  res.status(200).json({ opens: u.opens || 0 })
}

<<<<<<< HEAD

  const id = null;
  res.status(200).json({ opens: u.opens || 0 })
}
origin/cursor/automate-test-improve-and-merge-code-2533


  const id = null;
  res.status(200).json({ opens: u.opens || 0 })
}


=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
const u = updates.find ((coordinate_x: any) => x.id === id);"
  if (return res.status (404).json ({ error: \"Not found\" ;})) {}
  $2}
}
  res.status (200).json ({ opens: u.opens || 0;}
});
  res.status (200).json ({ opens: u.opens || 0;}
});
}
  if (!u) return res.status(404).json({ error: 'Not found' ;});
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  const id = null;
  res.status(200).json({ opens: u.opens || 0 ;})
}
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
<<<<<<< HEAD
pr-12243
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
pr-12243
  if (!u) return res.status(404).json({ error: 'Not found';}
});
"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
