<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
export type MilestoneStatus = 'pending' | 'in_progress' | 'submitted' | 'completed' | 'rejected' | 'paid' | 'approved';
;

=======
<<<<<<< HEAD

import {supabase} from '@/integrations/supabase/client';
export type MilestoneStatus = 'pending' | 'in_progress' | 'submitted' | 'completed' | 'rejected' | 'paid' | 'approved';
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import {supabase} from '@/integrations / supabase / client';
export type MilestoneStatus = 'pending' | 'in_progress' | 'submitted' | 'completed' | 'rejected' | 'paid' | 'approved';
;
=======
import { supabase } from "@/integrations/supabase/client";
export type MilestoneStatus =
  | "pending"
  | "in_progress"
  | "submitted"
  | "completed"
  | "rejected"
  | "paid"
  | "approved";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export interface Milestone {
import {supabase} from '@/integrations/supabase/client';
export type MilestoneStatus = 'pending' | 'in_progress' | 'submitted' | 'completed' | 'rejected' | 'paid' | 'approved';

export interface Milestone {;
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
export interface Milestone {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  id: string;
  project_id: string;
  title: string;
  description?: string;
  due_date?: string;
  amount: number;
  status: MilestoneStatus;
  created_at: string;
  updated_at: string;
<<<<<<< HEAD

  created_by: string,
  deliverables?: any[];

}
export interface MilestoneActivity {
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  created_by: string;
  deliverables?: any[];
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
}


export interface MilestoneActivity {;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  created_by: string
  deliverables?: any[]
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export interface MilestoneActivity {

export interface MilestoneActivity {;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
export interface MilestoneActivity {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  id: string;
  milestone_id: string;
  user_id: string;
  action: string;
  previous_status?: string;
  new_status: string;
  comment?: string;
  created_at: string;
  created_by_profile?: {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

    display_name: string,
    avatar_url?: string;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
    display_name: string

    avatar_url?: string
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
import { supabase } from '@/integrations/supabase/client',;
export type MilestoneStatus = 'pending' | 'in_progress' | 'submitted' | 'completed' | 'rejected' | 'paid' | 'approved',;
export interface Milestone {;
  id: string,;
  project_id: string,;
  title: string,;
  description?: string,;
  due_date?: string,;
  amount: number,;
  status: MilestoneStatus,;
  created_at: string,;
  updated_at: string,;
  created_by: string,;
  deliverables?: any[];
}
;
export interface MilestoneActivity {;
  id: string,;
  milestone_id: string,;
  user_id: string,;
  action: string,;
  previous_status?: string,;
  new_status: string,;
  comment?: string,;
  created_at: string;
  created_by_profile?: {;
    display_name: string;
    avatar_url?: string;
    display_name: string,
    avatar_url?: string;

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }
}
=======
    display_name: string;
    avatar_url?: string;
  };
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
