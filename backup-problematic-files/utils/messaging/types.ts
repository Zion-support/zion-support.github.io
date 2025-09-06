export type UserRole = 'client' | 'talent' | 'admin',

export interface UserSummary {
  id: string,
  name: string,
  role: UserRole,
  avatarUrl?: string
