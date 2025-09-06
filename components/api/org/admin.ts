import type { NextApiRequest, NextApiResponse } from 'next';
import { readOrgData, writeOrgData } from '../../../utils/org-data';
import type { OrgData, BasePerson } from '../../../types/org';
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
const ADMIN_KEY = process.env.ORG_ADMIN_KEY || 'dev-admin-key';

type AdminAction =
  | { type: 'invite'; section: keyof OrgData; person: BasePerson }
  | {
      type: 'promote';
      section: keyof OrgData;
      id: string;
      updates: Partial<BasePerson>;
    }
  | { type: 'deactivate'; section: keyof OrgData; id: string };

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
<<<<<<< HEAD
    return res.status(405).json({ error: 'Method not allowed' });  }
=======
<<<<<<< HEAD
    return res.status(405).json({ error: 'Method not allowed' });
=======
const ADMIN_KEY = process.env.ORG_ADMIN_KEY || 'dev-admin-key';
type AdminAction =
  | { type: 'invite', section: keyof OrgData, person: BasePerson }
  | { type: 'promote', section: keyof OrgData, id: string, updates: Partial<BasePerson> }
  | { type: 'deactivate', section: keyof OrgData, id: string };

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    return res.status(405).json({ error: 'Method not allowed' })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  const key = req.headers['x-admin-key'];
  if (key !== ADMIN_KEY) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const action = req.body as AdminAction;
  const data = readOrgData();

  if (action.type === 'invite') {
    const section = action.section;
    // @ts-expect-error Indexing into dynamic section
    const arr: BasePerson[] = data[section] || [];
    // prevent duplicates
<<<<<<< HEAD
    if (arr.some(p => p.id === action.person.id)) {      return res.status(400).json({ error: 'ID already exists' });
=======
<<<<<<< HEAD
    if (arr.some(p => p.id === action.person.id)) {
=======
    const arr: BasePerson[] = data[section] || [],
    // prevent duplicates
    if (arr.some((p) => p.id === action.person.id)) {
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    if (arr.some((p) => p.id === action.person.id)) {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      return res.status(400).json({ error: 'ID already exists' });
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    }
    arr.push({ ...action.person, active: true });
    // @ts-expect-error write back dynamic section
    data[section] = arr as any;
    writeOrgData(data);
<<<<<<< HEAD
    return res.status(200).json({ ok: true });  }
=======
<<<<<<< HEAD
<<<<<<< HEAD
    return res.status(200).json({ ok: true });
=======
    return res.status(200).json({ ok: true })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    return res.status(200).json({ ok: true })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  if (action.type === 'promote') {
    const section = action.section;
    // @ts-expect-error Indexing into dynamic section
    const arr: BasePerson[] = data[section] || [];
<<<<<<< HEAD
    const idx = arr.findIndex(p => p.id === action.id);    if (idx === -1) return res.status(404).json({ error: 'Not found' });
=======
<<<<<<< HEAD
    const idx = arr.findIndex(p => p.id === action.id);
=======
    const arr: BasePerson[] = data[section] || [], const idx = arr.findIndex((p) => p.id === action.id),
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    const idx = arr.findIndex((p) => p.id === action.id);
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    if (idx === -1) return res.status(404).json({ error: 'Not found' });
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    arr[idx] = { ...arr[idx], ...action.updates };
    // @ts-expect-error write back dynamic section
    data[section] = arr as any;
    writeOrgData(data);
<<<<<<< HEAD
    return res.status(200).json({ ok: true });  }
=======
<<<<<<< HEAD
<<<<<<< HEAD
    return res.status(200).json({ ok: true });
=======
    return res.status(200).json({ ok: true })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    return res.status(200).json({ ok: true })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  if (action.type === 'deactivate') {
    const section = action.section;
    // @ts-expect-error Indexing into dynamic section
    const arr: BasePerson[] = data[section] || [];
<<<<<<< HEAD
    const idx = arr.findIndex(p => p.id === action.id);    if (idx === -1) return res.status(404).json({ error: 'Not found' });
=======
<<<<<<< HEAD
    const idx = arr.findIndex(p => p.id === action.id);
=======
    const arr: BasePerson[] = data[section] || [], const idx = arr.findIndex((p) => p.id === action.id),
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    const idx = arr.findIndex((p) => p.id === action.id);
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    if (idx === -1) return res.status(404).json({ error: 'Not found' });
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    arr[idx] = { ...arr[idx], active: false };
    // @ts-expect-error write back dynamic section
    data[section] = arr as any;
    writeOrgData(data);
<<<<<<< HEAD
    return res.status(200).json({ ok: true });
  }

  return res.status(400).json({ error: 'Unknown action' });
=======
<<<<<<< HEAD
<<<<<<< HEAD
    return res.status(200).json({ ok: true });
  }

  return res.status(400).json({ error: 'Unknown action' });
=======
    return res.status(200).json({ ok: true })
  }

  return res.status(400).json({ error: 'Unknown action' });
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    return res.status(200).json({ ok: true })
  }

  return res.status(400).json({ error: 'Unknown action' });
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
