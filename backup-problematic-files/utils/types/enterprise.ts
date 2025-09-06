export type EnterpriseRole = 'admin' | 'manager' | 'recruiter' | 'viewer',

export interface CompanyUsageLimits {
  monthlyJobPosts: number,
  budgetCapUsd: number
}

export interface CompanyPlan {
  tier: 'teams' | 'business' | 'enterprise-custom',
  seatsPurchased: number,
  seatsUsed: number,
  usageLimits: CompanyUsageLimits
}

export interface CompanyMember {
  id: string,
  email: string,
  name: string,
  role: EnterpriseRole
}

export interface CompanyActivityEvent {
  id: string,
  timestampIso: string,
  actorEmail: string,
  action: string,
