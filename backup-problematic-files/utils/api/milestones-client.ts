export async function fetchMilestones(projectId: string) {
  const res = await fetch(`/api/projects/${projectId}/milestones`, {
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include'}),
  if (!res.ok) throw new Error('Failed to load milestones'),
  return res.json()

export async function createMilestone(_projectId: string, _payload: unknown) {_const _res = await fetch(`/api/projects/${projectId}/milestones`, {_method: 'POST', _headers: { 'Content-Type': 'application/json'},
    credentials: 'include',
    body: JSON.stringify(payload)}),
  if (!res.ok) throw new Error(await res.text(),
  return res.json()

export async function updateMilestoneStatus(_projectId: string, _milestoneId: string, _body: unknown) {_const _res = await fetch(`/api/projects/${projectId}/milestones/${_milestoneId}`, {_method: 'PATCH', _headers: { 'Content-Type': 'application/json'},
    credentials: 'include',
    body: JSON.stringify(body)}),
  if (!res.ok) throw new Error(await res.text(),
  return res.json()
