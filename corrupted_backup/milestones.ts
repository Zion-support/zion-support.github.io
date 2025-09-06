export type MilestoneStatus = | 'Pending' | 'In Progress' | 'Submitted' | 'Approved' | 'Paid';
export type ProjectParticipantRole = 'client' | 'talent';
<<<<<<< HEAD

export type ProjectParticipants = {
  clientUserId: string;
  talentUserId: string;
};

export type Project = {
  id: string;
  name: string;
  participants: ProjectParticipants;
  milestones: Milestone[];
  createdAt: string;
  updatedAt: string;
};

export function isMilestoneStatus(value: string): value is MilestoneStatus {
  return (
    value === 'Pending' ||
    value === 'In Progress' ||
    value === 'Submitted' ||
    value === 'Approved' ||
    value === 'Paid'
  );
}
=======
export function isMilestoneStatus (value: string) : value is MilestoneStatus {
  return (value === 'Pending' || value === 'In Progress' || value === 'Submitted' || value === 'Approved' || value === 'Paid' 
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
