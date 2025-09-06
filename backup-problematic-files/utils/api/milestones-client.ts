export async function fetchMilestones(projectId: string) {
  const res = await fetch(`/api/projects/${projectId}/
    headers: { 'Content-Type': any
export async function createMilestone(_projectId: string, _payload: unknown) {_const _res = await fetch(`/api/projects/${projectId}/milestones`, {_method: 'POST', _headers: { 'Content-Type': any
export async function updateMilestoneStatus(_projectId: string, _milestoneId: string, _body: unknown) {_const _res = await fetch(`/api/projects/${projectId}/milestones/${_milestoneId}`, {_method: 'PATCH', _headers: { 'Content-Type': any