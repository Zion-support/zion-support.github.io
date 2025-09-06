export type MilestoneStatus = | 'Pending' | 'In Progress' | 'Submitted' | 'Approved' | 'Paid';
export type ProjectParticipantRole = 'client' | 'talent';
export function isMilestoneStatus (value: string) : value is MilestoneStatus {
  return (value === 'Pending' || value === 'In Progress' || value === 'Submitted' || value === 'Approved' || value === 'Paid' 