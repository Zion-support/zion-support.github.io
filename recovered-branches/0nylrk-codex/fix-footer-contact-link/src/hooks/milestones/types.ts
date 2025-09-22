<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
export type MilestoneStatus = 'pending' | 'in_progress' | 'submitted' | 'completed' | 'rejected' | 'paid' | 'approved';
;
import {supabase} from '@/integrations / supabase / client';
export type MilestoneStatus = 'pending' | 'in_progress' | 'submitted' | 'completed' | 'rejected' | 'paid' | 'approved';
;
=======
import { supabase } from "@/integrations/supabase/client";
export type MilestoneStatus ="
  | "pending""
  | "in_progress""
  | "submitted""
  | "completed""
  | "rejected""
  | "paid"";
  | "approved";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import {supabase} from '@/integrations / supabase / client';
export type MilestoneStatus = 'pending' | 'in_progress' | 'submitted' | 'completed' | 'rejected' | 'paid' | 'approved';
;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export interface Milestone {
import {supabase} from '@/integrations/supabase/client';
export type MilestoneStatus = 'pending' | 'in_progress' | 'submitted' | 'completed' | 'rejected' | 'paid' | 'approved';

export interface Milestone {;
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
export interface Milestone {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
export interface Milestone {};
import {supabase} from '@/integrations/supabase/client';'
export type MilestoneStatus = 'pending' | 'in_progress' | 'submitted' | 'completed' | 'rejected' | 'paid' | 'approved';

export interface Milestone {;

export interface Milestone {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
export interface Milestone {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  id: string;
  project_id: string;
  title: string;
  description?: string;
  due_date?: string;
  amount: number;
  status: MilestoneStatus;
  created_at: string;
<<<<<<< HEAD
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
  updated_at: string;
  created_by: string;
  deliverables?: any[];
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}

export interface MilestoneActivity {;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  created_by: string
=======
  updated_at: string;  created_by: string
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  created_by: string
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  deliverables?: any[]
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export interface MilestoneActivity {

export interface MilestoneActivity {;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

  created_by: string;
  deliverables?: any[]
}
export interface MilestoneActivity {};
export interface MilestoneActivity {;

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}
export interface MilestoneActivity {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD

    display_name: string,
    avatar_url?: string;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }
}
=======
=======
  created_by_profile?: {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

  }
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    display_name: string;
    avatar_url?: string;
  };
}
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
