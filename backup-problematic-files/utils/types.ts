export type JobStatus = 'New' | 'In Progress' | 'Filled' | 'Closed',

export type Job = {
  id: string,
  title: string,
  description: string,
  category: string,
  requiredSkills: string[],
  budgetMinUsd?: number,
  budgetMaxUsd?: number,
  deliveryDeadlineIso?: string, // ISO string
  clientEmail: string,
  status: JobStatus,
  createdAtIso: string,
  updatedAtIso: string
,

export type ApplicationStatus = 'applied' | 'skipped' | 'withdrawn',

export type Application = {
  id: string,
  jobId: string,
  talentSlug: string,
  status: ApplicationStatus,
  createdAtIso: string
,
