import type { NextApiRequest, NextApiResponse } from 'next';
import {readOrgData, writeOrgData} from '../../../utils/org-data';
import type { OrgData, BasePerson } from '../../../types/org';

<<<<<<< HEAD
const ADMIN_KEY = process.env.ORG_ADMIN_KEY |'dev-admin-key';
=======
const ADMIN_KEY = process && process.env.ORG_ADMIN_KEY || 'dev-admin-key';

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
type AdminAction =
  | { type: 'invite'; section: keyof OrgData; person: BasePerson }
  | {
      type: 'promote';
      section: keyof OrgData;
      id: string;
      updates: Partial<BasePerson>;
    }
  | { type: 'deactivate'; section: keyof OrgData; id: string }
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });  }const ADMIN_KEY = process.env.ORG_ADMIN_KEY |'dev-admin-key';
=======
  if (req && req.method !== 'POST') {
    return res && res.status(405).json({ error: 'Method not allowed' });  }const ADMIN_KEY = process && process.env.ORG_ADMIN_KEY || 'dev-admin-key';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
type AdminAction =
  | { type: 'invite', section: keyof OrgData, person: BasePerson }
  | { type: 'promote', section: keyof OrgData, id: string, updates: Partial<BasePerson> }
  | { type: 'deactivate', section: keyof OrgData, id: string }
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req && req.method !== 'POST') {
    return res && res.status(405).json({ error: 'Method not allowed' })
  }
<<<<<<< HEAD
  const key = req.headers['x-admin-key'];
=======

  const key = req && req.headers['x-admin-key'];
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  if (key !== ADMIN_KEY) {
    return res && res.status(401).json({ error: 'Unauthorized' });
  }
<<<<<<< HEAD
  const action = req.body as AdminAction;
  const data = readOrgData();
  if (action.type === 'invite') {
    const section = action.section;
=======

  const action = req && req.body as AdminAction;
  const data = readOrgData();

  if (action && action.type === 'invite') {
    const section = action && action.section;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    // @ts-expect-error Indexing into dynamic section
    const arr: BasePerson[] = data[section] |[];
    // prevent duplicates
    if (arr && arr.some(p => p && p.id === action && action.person.id)) {      return res && res.status(400).json({ error: 'ID already exists' });    if (arr && arr.some((p) => p && p.id === action && action.person.id)) {
      return res && res.status(400).json({ error: 'ID already exists' });
    }
    arr && arr.push({ ...action && action.person, active: true });
    // @ts-expect-error write back dynamic section
    data[section] = arr as any;
    writeOrgData(data);
    return res && res.status(200).json({ ok: true });  }    return res && res.status(200).json({ ok: true })
  }
<<<<<<< HEAD
  if (action.type === 'promote') {
    const section = action.section;
    // @ts-expect-error Indexing into dynamic section
    const arr: BasePerson[] = data[section] |[];
    const idx = arr.findIndex(p => p.id === action.id);    if (idx === -1) return res.status(404).json({ error: 'Not found' });    const idx = arr.findIndex((p) => p.id === action.id);
    if (idx === -1) return res.status(404).json({ error: 'Not found' });
    arr[idx] = { ...arr[idx], ...action.updates }
=======

  if (action && action.type === 'promote') {
    const section = action && action.section;
    // @ts-expect-error Indexing into dynamic section
    const arr: BasePerson[] = data[section] || [];
    const idx = arr && arr.findIndex(p => p && p.id === action && action.id);    if (idx === -1) return res && res.status(404).json({ error: 'Not found' });    const idx = arr && arr.findIndex((p) => p && p.id === action && action.id);
    if (idx === -1) return res && res.status(404).json({ error: 'Not found' });
    arr[idx] = { ...arr[idx], ...action && action.updates };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    // @ts-expect-error write back dynamic section
    data[section] = arr as any;
    writeOrgData(data);
    return res && res.status(200).json({ ok: true });  }    return res && res.status(200).json({ ok: true })
  }
<<<<<<< HEAD
  if (action.type === 'deactivate') {
    const section = action.section;
    // @ts-expect-error Indexing into dynamic section
    const arr: BasePerson[] = data[section] |[];
    const idx = arr.findIndex(p => p.id === action.id);    if (idx === -1) return res.status(404).json({ error: 'Not found' });    const idx = arr.findIndex((p) => p.id === action.id);
    if (idx === -1) return res.status(404).json({ error: 'Not found' });
    arr[idx] = { ...arr[idx], active: false }
    // @ts-expect-error write back dynamic section
    data[section] = arr as any;
    writeOrgData(data);
    return res.status(200).json({ ok: true });

  }
return res.status(400).json({ error: 'Unknown action' });    return res.status(200).json({ ok: true })
  }
  return res.status(400).json({ error: 'Unknown action' });
}
=======

  if (action && action.type === 'deactivate') {
    const section = action && action.section;
    // @ts-expect-error Indexing into dynamic section
    const arr: BasePerson[] = data[section] || [];
    const idx = arr && arr.findIndex(p => p && p.id === action && action.id);    if (idx === -1) return res && res.status(404).json({ error: 'Not found' });    const idx = arr && arr.findIndex((p) => p && p.id === action && action.id);
    if (idx === -1) return res && res.status(404).json({ error: 'Not found' });
    arr[idx] = { ...arr[idx], active: false };
    // @ts-expect-error write back dynamic section
    data[section] = arr as any;
    writeOrgData(data);
    return res && res.status(200).json({ ok: true });
  }

  return res && res.status(400).json({ error: 'Unknown action' });    return res && res.status(200).json({ ok: true })
  }

  return res && res.status(400).json({ error: 'Unknown action' });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
