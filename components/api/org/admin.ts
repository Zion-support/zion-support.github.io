import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
=======
<<<<<<< HEAD

import { readOrgData, writeOrgData } from '../../../utils/org-data';
import type { OrgData, BasePerson } from '../../../types/org';

const ADMIN_KEY = process.env.ORG_ADMIN_KEY || 'dev-admin-key';

type AdminAction =
  | { type: 'invite'; section: keyof OrgData; person: BasePerson }
  | { type: 'promote'; section: keyof OrgData; id: string; updates: Partial<BasePerson> }
  | { type: 'deactivate'; section: keyof OrgData; id: string };
=======
>>>>>>> origin/resolved-merge-conflicts
<<<<<<< HEAD
import { readOrgData, writeOrgData } from '../../../utils/org-data';
import type { OrgData, BasePerson } from '../../../types/org';
const ADMIN_KEY = $2;
type AdminAction =
  | { type: 'invite', section: keyof OrgData, person: BasePerson}
  | { type: 'promote', section: keyof OrgData, id: string, updates: Partial<BasePerson> }
  | { type: 'deactivate', section: keyof OrgData, id: string},

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const key = $2;
  if (key !== ADMIN_KEY) {
    return res.status(401).json({ error: 'Unauthorized' })
  }
=======
<<<<<<< HEAD
import {readOrgData, writeOrgData} from '../../../utils/org-data';
import type { OrgData, BasePerson } from '../../../types/org';
<<<<<<< HEAD
const ADMIN_KEY = process.env.ORG_ADMIN_KEY || 'dev-admin-key';
=======

const ADMIN_KEY = process.env.ORG_ADMIN_KEY |'dev-admin-key';
type AdminAction =
import {readOrgData, writeOrgData} from '../../../utils / org - data';
import type { OrgData, BasePerson } from '../../../types / org';
;
const ADMIN_KEY = process.env.ORG_ADMIN_KEY || 'dev - admin - key';
;
type AdminAction =;
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  | { type: 'invite'; section: keyof OrgData; person: BasePerson }
  | {
      type: 'promote';
      section: keyof OrgData;
      id: string;
      updates: Partial < BasePerson>;
    }
  | { type: 'deactivate'; section: keyof OrgData; id: string }
<<<<<<< HEAD
export default function handler(req: NextApiRequest, res: NextApiResponse) {

=======

  if (req && req.method !== 'POST') {
    return res && res.status(405).json({ error: 'Method not allowed' });  }const ADMIN_KEY = process && process.env.ORG_ADMIN_KEY || 'dev-admin-key';

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


<<<<<<< HEAD
import {readOrgData, writeOrgData} from '../../../utils/org-data';
import type { OrgData, BasePerson } from '../../../types/org';

const ADMIN_KEY = process.env.ORG_ADMIN_KEY || 'dev-admin-key';

>>>>>>> origin/chore/fix-lint-and-merge
type AdminAction = any;
    return res.status(200).json({ ok: true,}
})
const ADMIN_KEY = process.env.ORG_ADMIN_KEY |'dev-admin-key';

type AdminAction =
=======
<<<<<<< HEAD
  if (req.method !== 'POST') {;
    return res.status(405).json({ error: 'Method not allowed' });  }const ADMIN_KEY = process.env.ORG_ADMIN_KEY || 'dev-admin-key';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });  }const ADMIN_KEY = process.env.ORG_ADMIN_KEY |'dev-admin-key';
  if (req.method !== 'POST') {;
    return res.status(405).json({ error: 'Method not allowed' });  }const ADMIN_KEY = process.env.ORG_ADMIN_KEY || 'dev-admin-key';
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
type AdminAction =
  | { type: 'invite', section: keyof OrgData, person: BasePerson }
  | { type: 'promote', section: keyof OrgData, id: string, updates: Partial<BasePerson> }
  | { type: 'deactivate', section: keyof OrgData, id: string }
<<<<<<< HEAD
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  | { type: 'invite'; section: keyof OrgData; person: BasePerson,}
}
  | {type: 'promote';
      section: keyof OrgData;
      id: string;}
      updates: Partial < BasePerson>;}
    }

  | { type: 'deactivate'; section: keyof OrgData; id: string,}
}

<<<<<<< HEAD
export default function handler() {
  }

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
;

  const key = req.headers['x-admin-key'];
<<<<<<< HEAD
'
  const key = req && req.headers['x-admin-key'];
  if (key !== ADMIN_KEY) {'
    return res && res.status(401).json({ error: 'Unauthorized' });
  }
=======

  const key = req && req.headers['x-admin-key'];
  if (key !== ADMIN_KEY) {
    return res && res.status(401).json({ error: 'Unauthorized' });
  }


<<<<<<< HEAD
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }
=======
  const action = req && req.body as AdminAction;
  const data = readOrgData();
  if (action && action.type === 'invite') {
    const section = action && action.section;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    // @ts-expect-error Indexing into dynamic section
const arr: BasePerson[] = data[section] || [];
    // prevent duplicates
<<<<<<< HEAD
    if (arr.some(p => p.id === action.person.id)) {
      return res.status(400).json({ error: 'ID already exists' });
origin/cursor/automate-test-improve-and-merge-code-2533
=======
    if (arr && arr.some(p => p && p.id === action && action.person.id)) {      return res && res.status(400).json({ error: 'ID already exists' });    if (arr && arr.some((p) => p && p.id === action && action.person.id)) {
      return res && res.status(400).json({ error: 'ID already exists' });
    // @ts-expect-error Indexing into dynamic section
    const arr: BasePerson[] = data[section] || [],
    // prevent duplicates
    if (arr.some((p) => p.id === action.person.id)) {
      return res.status(400).json({ error: 'ID already exists' });
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    }
    arr && arr.push({ ...action && action.person, active: true });
    // @ts-expect-error write back dynamic section;
    data[section] = arr as any;
    writeOrgData(data);
<<<<<<< HEAD
  }
return res.status(200).json({ ok: true });
  }
  if (action.type === 'promote') {
    const section = action.section;
    // @ts-expect-error Indexing into dynamic section
const arr: BasePerson[] = data[section] || [];
    const idx = arr.findIndex(p => p.id === action.id);
origin/cursor/automate-test-improve-and-merge-code-2533
    if (idx === -1) return res.status(404).json({ error: 'Not found' });
    arr[idx] = { ...arr[idx], ...action.updates }
'
  if (action && action.type === 'promote') {}
=======
<<<<<<< HEAD
    return res.status(200).json({ ok: true })
  }
    const arr: BasePerson[] = data[section] || [], const idx = arr.findIndex((p) => p.id === action.id),
=======


  }

    const arr: BasePerson[] = data[section] || [], const idx = arr.findIndex((p) => p.id === action.id),

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    if (idx === -1) return res.status(404).json({ error: 'Not found' });
    arr[idx] = { ...arr[idx], ...action.updates }
  if (action && action.type === 'promote') {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    const section = action && action.section;
    // @ts-expect-error Indexing into dynamic section;
    const arr: BasePerson[] = data[section] || [];'
    const idx = arr && arr.findIndex(p => p && p.id === action && action.id);    if (idx === -1) return res && res.status(404).json({ error: 'Not found' });    const idx = arr && arr.findIndex((p) => p && p.id === action && action.id);'
    if (idx === -1) return res && res.status(404).json({ error: 'Not found' });
    arr[idx] = { ...arr[idx], ...action && action.updates };
<<<<<<< HEAD
    // @ts-expect-error write back dynamic section;
    data[section] = arr as any;
    writeOrgData(data);
return res.status(200).json({ ok: true });
  }
  if (action.type === 'deactivate') {
    const section = action.section;
    // @ts-expect-error Indexing into dynamic section
const arr: BasePerson[] = data[section] || [];
    const idx = arr.findIndex(p => p.id === action.id);
origin/cursor/automate-test-improve-and-merge-code-2533
=======
    // @ts-expect-error write back dynamic section
    data[section] = arr as any;
    writeOrgData(data);
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    return res.status(200).json({ ok: true })

  }

    const arr: BasePerson[] = data[section] || [], const idx = arr.findIndex((p) => p.id === action.id),

<<<<<<< HEAD
    return res.status(200).json({ ok: true })
  }
    const arr: BasePerson[] = data[section] || [], const idx = arr.findIndex((p) => p.id === action.id),
;
  const key = req.headers['x-admin-key'];
  if (key !== ADMIN_KEY) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  const action = req.body as AdminAction;
  const data = readOrgData();
  if (action.type === 'invite') {
    const section = action.section;
    // @ts-expect-error Indexing into dynamic section
    const arr: BasePerson[] = data[section] |[];
    // prevent duplicates
    if (arr.some(p => p.id === action.person.id)) {      return res.status(400).json({ error: 'ID already exists' });    if (arr.some((p) => p.id === action.person.id)) {
      return res.status(400).json({ error: 'ID already exists' });
    }
    arr.push({ ...action.person, active: true });
    // @ts-expect-error write back dynamic section
    data[section] = arr as any;
    writeOrgData(data);
    return res.status(200).json({ ok: true });  }    return res.status(200).json({ ok: true })
  }
  if (action.type === 'promote') {
    const section = action.section;
    // @ts-expect-error Indexing into dynamic section
    const arr: BasePerson[] = data[section] |[];
    const idx = arr.findIndex(p => p.id === action.id);    if (idx === -1) return res.status(404).json({ error: 'Not found' });    const idx = arr.findIndex((p) => p.id === action.id);
    if (idx === -1) return res.status(404).json({ error: 'Not found' });
    arr[idx] = { ...arr[idx], ...action.updates }
    // @ts-expect-error write back dynamic section
    data[section] = arr as any;
    writeOrgData(data);
    return res.status(200).json({ ok: true });  }    return res.status(200).json({ ok: true })
  }
  if (action.type === 'deactivate') {
    const section = action.section;
    // @ts-expect-error Indexing into dynamic section
    const arr: BasePerson[] = data[section] |[];
    const idx = arr.findIndex(p => p.id === action.id);    if (idx === -1) return res.status(404).json({ error: 'Not found' });    const idx = arr.findIndex((p) => p.id === action.id);
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    if (idx === -1) return res.status(404).json({ error: 'Not found' });
    arr[idx] = { ...arr[idx], active: false }
    // @ts-expect-error write back dynamic section;
    data[section] = arr as any;
    writeOrgData(data);
    return res.status(200).json({ ok: true });
<<<<<<< HEAD
  }
return res.status(200).json({ ok: true });
=======

<<<<<<< HEAD
}
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  }

  return res.status(400).json({ error: 'Unknown action' });
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
  }
  }'
return res.status(400).json({ error: 'Unknown action' });    return res.status(200).json({ ok: true })
  }'
  return res.status(400).json({ error: 'Unknown action' });
}
'
  if (action && action.type === 'deactivate') {}
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  if (action && action.type === 'deactivate') {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    const section = action && action.section;
    // @ts-expect-error Indexing into dynamic section;
    const arr: BasePerson[] = data[section] || [];'
    const idx = arr && arr.findIndex(p => p && p.id === action && action.id);    if (idx === -1) return res && res.status(404).json({ error: 'Not found' });    const idx = arr && arr.findIndex((p) => p && p.id === action && action.id);'
    if (idx === -1) return res && res.status(404).json({ error: 'Not found' });
    arr[idx] = { ...arr[idx], active: false };
    // @ts-expect-error write back dynamic section;
    data[section] = arr as any;
    writeOrgData(data);
<<<<<<< HEAD
  }
'
  return res && res.status(400).json({ error: 'Unknown action' });    return res && res.status(200).json({ ok: true })
  }
'
  return res && res.status(400).json({ error: 'Unknown action' });
}
=======
<<<<<<< HEAD
    return res.status(200).json({ ok: true })
  }
  return res && res.status(400).json({ error: 'Unknown action' });
}
=======

  }
  return res && res.status(400).json({ error: 'Unknown action' });
}


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
;
export default /**;
 * handler - Function description;
 */
function handler() {}
  // Check condition;
if ( {) {}
  $2;
}'
    return res.status (405).json ({ error: 'Method not allowed' });  }const ADMIN_KEY = process.env.ORG_ADMIN_KEY || 'dev - admin - key';
type AdminAction =;'
  | { type: 'invite', section: keyof OrgData, person: BasePerson }'
  | { type: 'promote', section: keyof OrgData, id: string, updates: Partial < BasePerson> }'
  | { type: 'deactivate', section: keyof OrgData, id: string }
;
export default /**;
 * handler - Function description;
 */
function handler() {}
  // Check condition;
if ( {) {}
  $2;
}'
    return res.status (405).json ({ error: 'Method not allowed' });
  }'
  const key = req.headers['x - admin - key'];
  // Check condition;
if ( {) {}
  $2;
}'
    return res.status (401).json ({ error: 'Unauthorized' });
  }
  const action = req.body as AdminAction;
  const data = readOrgData ();
;
  // Check condition;
if ( {) {}
  $2;
}
    const section = action.section;
    // @ts - expect - error Indexing into dynamic section;
    const arr: BasePerson[] = data[section] || [];
    // prevent duplicates;'
    if () {      return res.status (400).json ({ error: 'ID already exists' })) {}
  $2;
}    if (=> p.id === action.person.id)) {) {}
  $2;
}'
      return res.status (400).json ({ error: 'ID already exists' });
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST) {
    return res.status(405).json({ error: Method not allowed' })
  }
<<<<<<< HEAD
=======
<<<<<<< HEAD

  const key = req.headers['x-admin-key'];
  if (key !== ADMIN_KEY) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const action: AdminAction = req.body;
  const data = readOrgData();

  if (action.type === 'invite') {
    const section = action.section;
    // @ts-expect-error Indexing into dynamic section
    const arr: BasePerson[] = data[section] || [];
    // prevent duplicates
    if (arr.some(p => p.id === action.person.id)) {
      return res.status(400).json({ error: 'ID already exists' });
    }
    arr.push({ ...action.person, active: true });
=======
>>>>>>> origin/resolved-merge-conflicts
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {}
  if (req.method !== 'POST') {}
    return res.status(405).json({ error: 'Method not allowed' })}


const key = req.headers['x-admin-key'];
>>>>>>> origin/chore/fix-lint-and-merge

const key = req && req.headers['x-admin-key'];
  if (key !== ADMIN_KEY) {}
    return res && res.status(401).json({ error: 'Unauthorized',}
});
  }
<<<<<<< HEAD

const arr: BasePerson[] = data[section] || [];
    // prevent duplicates
    if (arr.some(p => p.id === action.person.id)) {
      return res.status(400).json({ error: 'ID already exists' });
>>>>>>> merged-prs-20250907-203621

  const action = $2;
  const data = readOrgData($2);
  if (action.type = $2;
    // @ts-expect-error Indexing into dynamic section
    const arr: BasePerson[] = data[section] || [],
    // prevent duplicates
    if (arr.some((p) => p.id === action.person.id)) {
      return res.status(400).json({ error: 'ID already exists' })
    }
    arr.push($2);
    // @ts-expect-error write back dynamic section
<<<<<<< HEAD
    data[section] = arr as any,
    writeOrgData($2);
    return res.status(200).json({ ok: true})
=======
  }
    if (idx === -1) return res.status(404).json({ error: 'Not found' });
    arr[idx] = { ...arr[idx], ...action.updates }
    data[section] = arr as any,
    writeOrgData($2);
    return res.status(200).json({ ok: true})
  }

  if (action.type = $2;
    // @ts-expect-error Indexing into dynamic section
  | { type: 'deactivate'; section: keyof OrgData; id: string }if (req && req.method !== 'POST') {return res && res.status(405).json({ error: 'Method not allowed' })}const ADMIN_KEY  = process && process.env.ORG_ADMIN_KEY || 'dev-admin-key';if (req.method !== 'POST') {return res.status(405).json({ error: 'Method not allowed' })}const ADMIN_KEY  = process.env.ORG_ADMIN_KEY || 'dev-admin-key';const ADMIN_KEY = process.env.ORG_ADMIN_KEY || 'dev-admin-key';
type AdminAction =;
  | { type: 'invite', section: keyof OrgData, person: BasePerson }
  | { type: 'promote', section: keyof OrgData, id: string, updates: Partial<BasePerson> }
  | { type: 'deactivate', section: keyof OrgData, id: string }export default function handler() {if (req.method !== 'POST') {return res.status(405).json({ error: 'Method not allowed' })}const key  = req.headers['x-admin-key'];const key = req && req.headers['x-admin-key'];
  if (key !== ADMIN_KEY) {return res && res.status(401).json({ error: 'Unauthorized' })}
    // @ts-expect-error Indexing into dynamic section;
const arr: BasePerson[] = data[section] || [];
    // prevent duplicates;
    if (arr.some(p => p.id === action.person.id)) {return res.status(400).json({ error: 'ID already exists' })}
    arr && arr.push({ ...action && action.person, active: true })// @ts-expect-error write back dynamic section;
    data[section] = arr as any;
    writeOrgData(data)}return res.status(200).json({ ok: true })}
  if (action.type === 'promote') {const section = action.section;
=======
    // @ts-expect-error Indexing into dynamic section;
const arr: BasePerson[] = data[section] || [];
    // prevent duplicates;
if (arr.some(p = > p.id === action.person.id)) {
     ;}
  return res.status(400).json({ error: 'ID already exists',}
});
>>>>>>> origin/chore/fix-lint-and-merge
    }
    arr && arr.push({ ...action && action.person, active: true,}
});
    // @ts-expect-error write back dynamic section;
data[section] = arr as any;
    writeOrgData(data);

return res.status(200).json({ ok: true,}
});
  }
<<<<<<< HEAD
  // Check condition;
if ( {) {}
  $2;
}
    const section = action.section;
    // @ts - expect - error Indexing into dynamic section;
    const arr: BasePerson[] = data[section] || [];'
    const idx = arr.find_index (p => p.id === action.id);    if (return res.status (404).json ({ error: 'Not found' })) {}
  $2;
}    const idx = arr.find_index ((p) => p.id === action.id);'
    if (return res.status (404).json ({ error: 'Not found' })) {}
  $2;
}
    arr[idx] = { ...arr[idx], ...action.updates }

=======
  if (action.type = == 'promote') {
   ;
  const section = action.section;
    // @ts-expect-error Indexing into dynamic section;
const arr: BasePerson[] = data[section] || [];

const idx = arr.findIndex(p => p.id === action.id);
    if (idx = == -1);}
  return res.status(404).json({ error: 'Not found',}
});
    arr[idx] = { ...arr[idx], ...action.updates }

  if (action && action.type = == 'promote') {
   ;
  const section = action && action.section;
    // @ts-expect-error Indexing into dynamic section;
const arr: BasePerson[] = data[section] || [];

const idx = arr && arr.findIndex(p => p && p.id === action && action.id)if (idx === -1);}
  return res && res.status(404).json({ error: 'Not found',}
};
  const idx = arr && arr.findIndex((p) => p && p.id === action && action.id)if (idx === -1);
  return res && res.status(404).json({ error: 'Not found',}
>>>>>>> origin/chore/fix-lint-and-merge
})arr[idx] = { ...arr[idx], ...action && action.updates }// @ts-expect-error write back dynamic section;
    data[section] = arr as any;

    writeOrgData(data);

return res.status(200).json({ ok: true,}
});
  }
<<<<<<< HEAD
  // Check condition;
if ( {) {}
  $2;
}
    const section = action.section;
    // @ts - expect - error Indexing into dynamic section;
    const arr: BasePerson[] = data[section] || [];'
    const idx = arr.find_index (p => p.id === action.id);    if (return res.status (404).json ({ error: 'Not found' })) {}
  $2;
}    const idx = arr.find_index ((p) => p.id === action.id);'
    if (return res.status (404).json ({ error: 'Not found' })) {}
  $2;
}
    arr[idx] = { ...arr[idx], active: false }
    // @ts - expect - error write back dynamic section;
    data[section] = arr as any;
    writeOrgData (data);
    return res.status (200).json ({ ok: true });
  }'
return res.status (400).json ({ error: 'Unknown action' });    return res.status (200).json ({ ok: true });
  }'
  return res.status (400).json ({ error: 'Unknown action' });
    // @ts-expect-error Indexing into dynamic section
    const arr: BasePerson[] = data[section] || []
    // prevent duplicates
    if (arr.some((p) => p.id === action.person.id)) {
      return res.status(400).json({ error: 'ID already exists' })
    }
    arr.push({ ...action.person, active: true }),
    // @ts-expect-error write back dynamic section
    data[section] = arr as any,
    writeOrgData(data),
    return res.status(200).json({ ok: true })
  }

  if (action.type === 'promote') {
    const section = action.section
    // @ts-expect-error Indexing into dynamic section
    const arr: BasePerson[] = data[section] || []
    const idx = arr.findIndex((p) => p.id === action.id)
    if (idx === -1) return res.status(404).json({ error: 'Not found' }),
    arr[idx] = { ...arr[idx], ...action.updates },
    // @ts-expect-error write back dynamic section
    data[section] = arr as any,
    writeOrgData(data),
    return res.status(200).json({ ok: true })
  }

  if (action.type === 'deactivate') {
    const section = action.section
    // @ts-expect-error Indexing into dynamic section
    const arr: BasePerson[] = data[section] || []
    const idx = arr.findIndex((p) => p.id === action.id)
    if (idx === -1) return res.status(404).json({ error: 'Not found' }),
    arr[idx] = { ...arr[idx], active: false },

}
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/chore/fix-lint-and-merge
  if (action.type = == 'deactivate') {
   ;
  const section = action.section;
    // @ts-expect-error Indexing into dynamic section;
const arr: BasePerson[] = data[section] || [];
<<<<<<< HEAD
    const idx  = arr.findIndex(p => p.id === action.id)if (idx === -1) return res.status(404).json({ error: 'Not found' })arr[idx] = { ...arr[idx], ...action.updates }if (action && action.type === 'promote') {const section = action && action.section;
    // @ts-expect-error Indexing into dynamic section;
    const arr: BasePerson[] = data[section] || [];
    const idx = arr && arr.findIndex(p => p && p.id === action && action.id);    if (idx === -1) return res && res.status(404).json({ error: 'Not found' });    const idx = arr && arr.findIndex((p) => p && p.id === action && action.id);
    if (idx === -1) return res && res.status(404).json({ error: 'Not found' });
    arr[idx] = { ...arr[idx], ...action && action.updates };
    // @ts-expect-error write back dynamic section
    data[section] = arr as any;
=======
<<<<<<< HEAD

}

  }

  }
return res.status(400).json({ error: 'Unknown action' });    return res.status(200).json({ ok: true })
  }
  return res.status(400).json({ error: 'Unknown action' });
}
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======

const idx = arr.findIndex(p => p.id === action.id);
    if (idx = == -1);}
  return res.status(404).json({ error: 'Not found',}
});
    arr[idx] = { ...arr[idx], active: false,}
}
    // @ts-expect-error write back dynamic section;
data[section] = arr as any;
>>>>>>> origin/chore/fix-lint-and-merge
    writeOrgData(data);

return res.status(200).json({ ok: true,}
});
>>>>>>> merged-prs-20250907-203621
  }
<<<<<<< HEAD
  if (action.type === 'deactivate') {
  const action = req.body as AdminAction;
  const data = readOrgData();
  if (action.type === 'invite') {
    const section = action.section;
    // @ts-expect-error Indexing into dynamic section
const arr: BasePerson[] = data[section] || [];
    const idx = arr.findIndex(p => p.id === action.id);
    if (idx === -1) return res.status(404).json({ error: 'Not found' });
    arr[idx] = { ...arr[idx], active: false }
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
    // @ts-expect-error write back dynamic section
    data[section] = arr as any;
    writeOrgData(data);
    return res.status(200).json({ ok: true });
  }
return res.status(400).json({ error: 'Unknown action}
});    return res.status(200).json({ ok: true });
  }
<<<<<<< HEAD
=======
<<<<<<< HEAD

  if (action.type === 'deactivate') {
    const section = action.section;
    // @ts-expect-error Indexing into dynamic section
    const arr: BasePerson[] = data[section] || [];

    const idx = arr.findIndex(p => p.id === action.id);
    if (idx === -1) {
      return res.status(404).json({ error: 'Not found' });
    }
    arr[idx] = { ...arr[idx], active: false };
    // @ts-expect-error write back dynamic section
    data[section] = arr as any;
    writeOrgData(data);

    return res.status(200).json({ ok: true });
  }

  return res.status(400).json({ error: 'Unknown action' });
}
=======
>>>>>>> origin/resolved-merge-conflicts
  return res.status(400).json({ error: Unknown action'}
=======

<<<<<<< HEAD
  if (action.type = $2;
    // @ts-expect-error Indexing into dynamic section
    const arr: BasePerson[] = data[section] || [],
    const idx = $2;
    if (idx === -1) return res.status(404).json($2);
    arr[idx] = { ...arr[idx], ...action.updates },
    // @ts-expect-error write back dynamic section
    data[section] = arr as any,
    writeOrgData($2);
    return res.status(200).json({ ok: true})
  }

  if (action.type = $2;
    // @ts-expect-error Indexing into dynamic section
    const arr: BasePerson[] = data[section] || [],
    const idx = $2;
    if (idx === -1) return res.status(404).json($2);
    arr[idx] = { ...arr[idx], active: false},
    // @ts-expect-error write back dynamic section
    data[section] = arr as any,
    writeOrgData($2);
    return res.status(200).json({ ok: true})
  }

  return res.status(400).json({ error: 'Unknown action' })
}
=======
  return res.status(400).json({ error: 'Unknown action',}
});
  }
return res.status(400).json({ error: 'Unknown action',}
});    return res.status(200).json({ ok: true })
  }
  return res.status(400).json({ error: 'Unknown action',}
>>>>>>> origin/chore/fix-lint-and-merge
});
}

<<<<<<< HEAD

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
