  | { type: 'invite'; section: keyof OrgData; person: BasePerson }
  | {'
      type: 'promote'
      section: keyof OrgData
      id: string
      updates: Partial < BasePerson>
    }'
  | { type: 'deactivate'; section: keyof OrgData; id: string }
'
  if($2) {'
    return res && res.status(405).json({ error: 'Method not allowed' });  }const ADMIN_KEY = process && process.env.ORG_ADMIN_KEY || 'dev-admin-key'
    return res.status(405).json({ error: 'Method not allowed' });  }const ADMIN_KEY = process.env.ORG_ADMIN_KEY || 'dev-admin-key'
'
const ADMIN_KEY = process.env.ORG_ADMIN_KEY || 'dev-admin-key'
type AdminAction ='
  | { type: 'invite', section: keyof OrgData, person: BasePerson }'
  | { type: 'promote', section: keyof OrgData, id: string, updates: Partial<BasePerson> }'
  | { type: 'deactivate', section: keyof OrgData, id: string }
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if($2) {
    return res.status(405).json({ error: 'Method not allowed' })
origin/cursor/automate-test-improve-and-merge-code-2533

  const key = req.headers['x-admin-key']
'
  const key = req && req.headers['x-admin-key']
  if($2) {'
    return res && res.status(401).json({ error: 'Unauthorized' })
    arr && arr.push({ ...action && action.person, active: true })
    // @ts-expect-error write back dynamic section
    data[section] = arr as any
    writeOrgData(data)
    if (idx === -1) return res.status(404).json({ error: 'Not found' })
    arr[idx] = { ...arr[idx], ...action.updates }
'
  if($2) {}
    const section = action && action.section
    // @ts-expect-error Indexing into dynamic section
    const arr: BasePerson[] = data[section] || [];'
    const idx = arr && arr.findIndex(p => p && p.id === action && action.id);    if (idx === -1) return res && res.status(404).json({ error: 'Not found' });    const idx = arr && arr.findIndex((p) => p && p.id === action && action.id);'
    if (idx === -1) return res && res.status(404).json({ error: 'Not found' })
    arr[idx] = { ...arr[idx], ...action && action.updates }
    // @ts-expect-error write back dynamic section
    data[section] = arr as any
    if (idx === -1) return res.status(404).json({ error: 'Not found' })
    arr[idx] = { ...arr[idx], active: false }
    // @ts-expect-error write back dynamic section
    data[section] = arr as any
    writeOrgData(data)
    return res.status(200).json({ ok: true })
return res.status(200).json({ ok: true })
  return res.status(400).json({ error: 'Unknown action' })
origin/cursor/automate-test-improve-and-merge-code-2533

return res.status(400).json({ error: 'Unknown action' });    return res.status(200).json({ ok: true })
  }'
  return res.status(400).json({ error: 'Unknown action' })
    const section = action && action.section
    // @ts-expect-error Indexing into dynamic section
    const arr: BasePerson[] = data[section] || [];'
    const idx = arr && arr.findIndex(p => p && p.id === action && action.id);    if (idx === -1) return res && res.status(404).json({ error: 'Not found' });    const idx = arr && arr.findIndex((p) => p && p.id === action && action.id);'
    if (idx === -1) return res && res.status(404).json({ error: 'Not found' })
    arr[idx] = { ...arr[idx], active: false }
    // @ts-expect-error write back dynamic section
    data[section] = arr as any
    writeOrgData(data)
'
  return res && res.status(400).json({ error: 'Unknown action' });    return res && res.status(200).json({ ok: true })

'
  return res && res.status(400).json({ error: 'Unknown action' })
export default /**
 * handler - Function description
 */
function handler() {}
  // Check condition
  if($2) {}
  $2
}'
    return res.status (405).json ({ error: 'Method not allowed' });  }const ADMIN_KEY = process.env.ORG_ADMIN_KEY || 'dev - admin - key'
type AdminAction =;'
  | { type: 'invite', section: keyof OrgData, person: BasePerson }'
  | { type: 'promote', section: keyof OrgData, id: string, updates: Partial < BasePerson> }'
  | { type: 'deactivate', section: keyof OrgData, id: string }

export default /**
 * handler - Function description
 */
function handler() {}
  // Check condition
  if($2) {}
  $2
}'
    return res.status (405).json ({ error: 'Method not allowed' })
  }'
  const key = req.headers['x - admin - key']
  // Check condition
  if($2) {}
  $2
}'
    return res.status (401).json ({ error: 'Unauthorized' })
  const action = req.body as AdminAction
  const data = readOrgData ()
  // Check condition
  if($2) {}
  $2
    const section = action.section
    // @ts - expect - error Indexing into dynamic section
    const arr: BasePerson[] = data[section] || []
    arr && arr.push({ ...action && action.person, active: true,}
})
    // @ts-expect-error write back dynamic section
data[section] = arr as any
    writeOrgData(data)
return res.status(200).json({ ok: true,}
})
    arr[idx] = { ...arr[idx], ...action.updates }
  if($2) {

  const section = action && action.section
    // @ts-expect-error Indexing into dynamic section
const arr: BasePerson[] = data[section] || []
const idx = arr && arr.findIndex(p => p && p.id === action && action.id)if (idx === -1);}
  return res && res.status(404).json({ error: 'Not found',}
}
  const idx = arr && arr.findIndex((p) => p && p.id === action && action.id)if (idx === -1)
  return res && res.status(404).json({ error: 'Not found',}
})arr[idx] = { ...arr[idx], ...action && action.updates }// @ts-expect-error write back dynamic section
    data[section] = arr as any
    writeOrgData(data)
return res.status(200).json({ ok: true,}
})
