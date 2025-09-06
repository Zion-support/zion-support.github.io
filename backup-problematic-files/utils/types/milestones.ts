export type MilestoneStatus =
  | 'Pending'
  | 'In Progress'
  | 'Submitted'
  | 'Approved'
  | 'Paid',

export type MilestoneAttachment = {
  id: string,
  type: 'link' | 'file',
  url: string,
  label?: string,
  uploadedByUserId: string,
  uploadedAt: string, // ISO date
},

export type ProjectParticipantRole = 'client' | 'talent',

export type ProjectParticipants = {
  clientUserId: string,
  talentUserId: string
},

export type Project = {
  id: string,
  name: string,
  participants: ProjectParticipants,
  milestones: Milestone[],
  createdAt: string,
  updatedAt: string
},

export function isMilestoneStatus(_value: string): value is MilestoneStatus {_return (
    value === 'Pending' ||
    value === 'In Progress' ||
    value === 'Submitted' ||
    value === 'Approved' ||
    value === 'Paid'
  )
}
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
