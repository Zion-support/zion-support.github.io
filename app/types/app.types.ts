// Type definitions for app types

export interface AppTypes {
  id: string;
  name: string;
  description?: string;
}

export type AppTypesStatus = 'active' | 'inactive' | 'pending';