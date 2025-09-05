import type {_NextApiRequest, _NextApiResponse} from 'next';
import type {_OrgData, _BasePerson} from '../../../types/org';

const _ADMIN_KEY = process.env.ORG_ADMIN_KEY || 'dev-admin-key';

type AdminAction =
  | {_type: 'invite'; section: keyof OrgData; person: BasePerson}
  | {_type: 'promote'; section: keyof OrgData; id: string; updates: Partial<BasePerson>}
  | {_type: 'deactivate'; section: keyof OrgData; id: string};

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed'});
  }

  const _key = req.headers['x-admin-key'];
  if (key !== ADMIN_KEY) {_return res.status(401).json({ error: 'Unauthorized'});
  }

  const _action = req.body as AdminAction;
  const _data = readOrgData();

  if (action.type === 'invite') {_const _section = action.section;
    // @ts-expect-error Indexing into dynamic section
    const arr: BasePerson[] = data[section] || [];
    // prevent duplicates
    if (_arr.some((p) => p.id === action.person.id)) {
      return res.status(400).json({ error: 'ID already exists'});
    }
    arr.push({_...action.person, _active: true});
    // @ts-expect-error write back dynamic section
    data[section] = arr as any;
    writeOrgData(data);
    return res.status(200).json({_ok: true});
  }

  if (action.type === 'promote') {_const _section = action.section;
    // @ts-expect-error Indexing into dynamic section
    const arr: BasePerson[] = data[section] || [];
    const _idx = arr.findIndex(_(p) => p.id === action.id);
    if (idx === -1) return res.status(404).json({ error: 'Not found'});
    arr[idx] = {_...arr[idx], _...action.updates};
    // @ts-expect-error write back dynamic section
    data[section] = arr as any;
    writeOrgData(data);
    return res.status(200).json({_ok: true});
  }

  if (action.type === 'deactivate') {_const _section = action.section;
    // @ts-expect-error Indexing into dynamic section
    const arr: BasePerson[] = data[section] || [];
    const _idx = arr.findIndex(_(p) => p.id === action.id);
    if (idx === -1) return res.status(404).json({ error: 'Not found'});
    arr[idx] = {_...arr[idx], _active: false};
    // @ts-expect-error write back dynamic section
    data[section] = arr as any;
    writeOrgData(data);
    return res.status(200).json({_ok: true});
  }

  return res.status(400).json({_error: 'Unknown action'});
}