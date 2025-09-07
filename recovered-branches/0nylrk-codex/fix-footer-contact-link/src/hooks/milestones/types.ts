import {supabase} from '@/integrations / supabase / client';
export type MilestoneStatus = 'pending' | 'in_progress' | 'submitted' | 'completed' | 'rejected' | 'paid' | 'approved';
;
export interface Milestone {
import {supabase} from '@/integrations/supabase/client';
export type MilestoneStatus = 'pending' | 'in_progress' | 'submitted' | 'completed' | 'rejected' | 'paid' | 'approved';

export interface Milestone {;

export interface Milestone {
  id: string;
import { supabase } from "@/integrations/supabase/client";"
export type MilestoneStatus ="
  | "pending"""
  | "in_progress"""
  | "submitted"""
  | "completed"""
  | "rejected"""
  | "paid"""
  | "approved";"
export interface Milestone {
  // TODO: Implement
}"
import {supabase} from '@/integrations/supabase/client';
export type MilestoneStatus = 'pending' | 'in_progress' | 'submitted' | 'completed' | 'rejected' | 'paid' | 'approved';
export interface Milestone {;

  // TODO: Implement
}
  id: string;,
pr-12325
  project_id: string;
  title: string;
  description?: string;
  due_date?: string;
  amount: number;
  status: MilestoneStatus;
  created_at: string;
  updated_at: string;
  created_by: string;
  deliverables?: any[];
}

export interface MilestoneActivity {;

  created_by: string
  updated_at: string;  created_by: string
  deliverables?: any[]
}
export interface MilestoneActivity {

export interface MilestoneActivity {;
}
export interface MilestoneActivity {
  id: string;
  milestone_id: string;
  user_id: string;
  amount: number;,
  status: MilestoneStatus;
  created_at: string;,
  updated_at: string;
  created_by: string;
  deliverables?: any[];


export interface MilestoneActivity {;

  deliverables?: any[]
export interface MilestoneActivity {
  // TODO: Implement
  // TODO: Implement
  milestone_id: string;
  user_id: string;,
pr-12325
  action: string;
  previous_status?: string;
  new_status: string;
  comment?: string;
  created_at: string;
  created_by_profile?: {
  }
}
    display_name: string;
    avatar_url?: string;
  };
}
pr-12325
