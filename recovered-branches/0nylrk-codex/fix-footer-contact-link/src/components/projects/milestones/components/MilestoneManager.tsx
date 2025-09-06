
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5


import {MilestonesList} from '../MilestonesList';
import {PaymentSummary} from '../PaymentSummary';


<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======

import React from 'react';
import { MilestonesList  } from '../MilestonesList';
import { PaymentSummary  } from '../PaymentSummary';
import { Milestone, MilestoneStatus, MilestoneActivity  } from '@/hooks/useMilestones';
import { toast } from "sonner";
interface MilestoneManagerProps {

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  projectId: string
  milestones: Milestone[]
  activities: Record<string, MilestoneActivity[]>;
  isLoading: boolean
  isClient: boolean
  isTalent: boolean
  paymentTerms?: string;
  isSubmitting: boolean
  onCreateMilestone: (data: any) => Promise<Milestone | null>
  onUpdateStatus: (id: string, status: MilestoneStatus, comment?: string) => Promise<boolean>;
  onDeleteMilestone: (id: string) => Promise<boolean>
  onUploadDeliverable: (id: string, file: File) => Promise<any>

import {MilestonesList} from '../MilestonesList';
import {PaymentSummary} from '../PaymentSummary';
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import {Milestone, MilestoneStatus, MilestoneActivity} from '@/hooks/useMilestones';
import {toast} from "sonner";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
import React from 'react',
import { MilestonesList } from '../MilestonesList',
import { PaymentSummary } from '../PaymentSummary',
import { Milestone, MilestoneStatus, MilestoneActivity } from '@/hooks/useMilestones',
import { toast } from "sonner",
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD


<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
interface MilestoneManagerProps {
  projectId: string,
  milestones: Milestone[],
  activities: Record<string MilestoneActivity[]>,
  isLoading: boolean,
  isClient: boolean,
  isTalent: boolean,
  paymentTerms?: string,
  isSubmitting: boolean,
  onCreateMilestone: (data: any) => Promise<Milestone | null>,
  onUpdateStatus: (id: string, status: MilestoneStatus, comment?: string) => Promise<boolean>,
  onDeleteMilestone: (id: string) => Promise<boolean>,
  onUploadDeliverable: (id: string, file: File) => Promise<any>,
  refetch: () => Promise<void>
}
<<<<<<< HEAD

export function MilestoneManager({;
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

export function MilestoneManager({;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  projectId;
  milestones;
  activities;
  isLoading;
  isClient;
  isTalent;
  paymentTerms;
  isSubmitting;
  onCreateMilestone;
  onUpdateStatus;
  onDeleteMilestone;
  onUploadDeliverable;
export function MilestoneManager({
  projectId,
  milestones,
  activities,
  isLoading,
  isClient,
  isTalent,
  paymentTerms,
  isSubmitting,
  onCreateMilestone,
  onUpdateStatus,
  onDeleteMilestone,
  onUploadDeliverable,
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD


>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  refetch
}: MilestoneManagerProps) {

  const handleMilestoneApproved = async (milestoneId: string) => {
    try {
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

  refetch;
}: MilestoneManagerProps) {;
  const handleMilestoneApproved = async (milestoneId: string) => {;
    try {;

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      await onUpdateStatus(milestoneId, "completed" as MilestoneStatus);
      toast && toast.success("Milestone approved");
      await refetch();
    } catch (error) {;
      console && console.error("Error approving milestone:", error);
      toast && toast.error("Failed to approve milestone");
    }
      await onUpdateStatus(milestoneId, "rejected" as MilestoneStatus);
      toast && toast.success("Milestone rejected");
      await refetch();
    } catch (error) {;
      console && console.error("Error rejecting milestone:", error);
      toast && toast.error("Failed to reject milestone");
    }
  }

  return (
        <MilestonesList
import {Milestone, MilestoneStatus, MilestoneActivity} from '@/hooks / use_milestones';
import { toast } from './sonner';
interface MilestoneManagerProps {
  project_id: string,
  milestones: Milestone[],
  activities: Record < string, MilestoneActivity[]>;
  is_loading: boolean,
  is_client: boolean,
  is_talent: boolean,
  payment_terms?: string;
  is_submitting: boolean,
  onCreateMilestone: (data: any) => Promise < Milestone | null>,
  onUpdateStatus: (id: string, status: MilestoneStatus, comment?: string) => Promise < boolean>;
  onDeleteMilestone: (id: string) => Promise < boolean>,
  onUploadDeliverable: (id: string, file: File) => Promise < any>,
  refetch: () => Promise < void>;
}
export /**
 * MilestoneManager - Function description
 */
function MilestoneManager() {
  const handleMilestoneApproved = async (milestone_id: string) => {
    try {
      await onUpdateStatus (milestone_id, "completed" as MilestoneStatus);
      toast.success ("Milestone approved");
      await refetch ();
    } catch (error) {
      console.error ("Error approving milestone:", error);
      toast.error ("Failed to approve milestone");
    }
  }
;
  const handleMilestoneRejected = async (milestone_id: string) => {
    try {
      await onUpdateStatus (milestone_id, "rejected" as MilestoneStatus);
      toast.success ("Milestone rejected");
      await refetch ();
    } catch (error) {
      console.error ("Error rejecting milestone:", error);
      toast.error ("Failed to reject milestone");
    }
  }
;
  return (
    <div className="grid grid - cols - 1 lg:grid - cols - 3 gap - 6">;
      <div className="lg:col - span - 2">;
        <MilestonesList;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      await onUpdateStatus(milestoneId, "completed" as MilestoneStatus),
      toast.success("Milestone approved"),
      await refetch()
    } catch (error) {
      console.error("Error approving milestone:", error),
      toast.error("Failed to approve milestone")
    }
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

  },
  

=======
  },
  

  }
  },
  
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  const handleMilestoneRejected = async (milestoneId: string) => {
    try {
      await onUpdateStatus(milestoneId, "rejected" as MilestoneStatus),
      toast.success("Milestone rejected"),
      await refetch()
    } catch (error) {
      console.error("Error rejecting milestone:", error),
      toast.error("Failed to reject milestone")
    }
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
  },

<<<<<<< HEAD
=======
  }
  },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
<<<<<<< HEAD
=======

        <MilestonesList
        <MilestonesList 
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
import React from 'react',;
import { MilestonesList } from '../MilestonesList',;
import { PaymentSummary } from '../PaymentSummary',;
import { Milestone, MilestoneStatus, MilestoneActivity } from '@/hooks/useMilestones',;
import { toast } from "sonner",;
interface MilestoneManagerProps {;
  projectId: string,;
  milestones: Milestone[],;
  activities: Record<string MilestoneActivity[]>,;
  isLoading: boolean,;
  isClient: boolean,;
  isTalent: boolean,;
  paymentTerms?: string,;
  isSubmitting: boolean,;
  onCreateMilestone: (data: any) => Promise<Milestone | null>,;
  onUpdateStatus: (id: string, status: MilestoneStatus, comment?: string) => Promise<boolean>,;
  onDeleteMilestone: (id: string) => Promise<boolean>,;
  onUploadDeliverable: (id: string, file: File) => Promise<any>,;
  refetch: () => Promise<void>;
}
;
export function MilestoneManager({;
  projectId,;
  milestones,;
  activities,;
  isLoading,;
  isClient,;
  isTalent,;
  paymentTerms,;
  isSubmitting,;
  onCreateMilestone,;
  onUpdateStatus,;
  onDeleteMilestone,;
  onUploadDeliverable,;
  refetch;
}: MilestoneManagerProps) {;
  const handleMilestoneApproved = async (milestoneId: string) => {;
    try {;
      await onUpdateStatus(milestoneId, "completed" as MilestoneStatus),;
      toast.success("Milestone approved"),;
      await refetch();
    } catch (error) {;
      console.error("Error approving milestone:", error),;
      toast.error("Failed to approve milestone");
    }
  },;
  const handleMilestoneRejected = async (milestoneId: string) => {;
    try {;
      await onUpdateStatus(milestoneId, "rejected" as MilestoneStatus),;
      toast.success("Milestone rejected"),;
      await refetch();
    } catch (error) {;
      console.error("Error rejecting milestone:", error);
      toast.error("Failed to reject milestone");
    }
  };
  return (;
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">;
      <div className="lg:col-span-2">;
        <MilestonesList;

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
} MilestoneManagerProps) {;
  const handleMilestoneApproved = async (milestoneId:string) => {;
    try {;
      await onUpdateStatus(milestoneId, "completed" as MilestoneStatus),;
      toast.success("Milestone approved"),;
      await refetch(),;
    } catch (error) {;
      console.error("Error approving milestone:", error),;
      toast.error("Failed to approve milestone"),;
    }
  },;
  ;
  const handleMilestoneRejected = async (milestoneId:string) => {;
    try {;
      await onUpdateStatus(milestoneId, "rejected" as MilestoneStatus),;
      toast.success("Milestone rejected"),;
      await refetch(),;
    } catch (error) {;
      console.error("Error rejecting milestone:", error),;
      toast.error("Failed to reject milestone"),;
    }
  },;
;
  return (;
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">;
      <div className="lg:col-span-2">;
        <MilestonesList ;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          milestones={milestones}
          activities={activities}
          is_loading={is_loading}
          is_client={is_client}
          onCreateMilestone={onCreateMilestone}
          onUpdateStatus={onUpdateStatus}
          onDeleteMilestone={onDeleteMilestone}
          onUploadDeliverable={onUploadDeliverable}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======


=======
          isSubmitting={isSubmitting}
          onApprove={isClient ? handleMilestoneApproved : undefined}
          onReject={isClient ? handleMilestoneRejected : undefined}
        />
      </div>
      <div>
        <PaymentSummary
          milestones={milestones}
          paymentTerms={paymentTerms}



>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        />;
      </div>;
      <div>;
        <PaymentSummary
          milestones={milestones} 
          paymentTerms={paymentTerms}
        />;
      </div>;
    </div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
  );
}

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          is_submitting={is_submitting}
          on_approve={is_client ? handleMilestoneApproved : undefined}
          on_reject={is_client ? handleMilestoneRejected : undefined}
        />;
      </div>;
      <div>;
        <PaymentSummary;
          milestones={milestones}
          payment_terms={payment_terms}
        />;
      </div>;
    </div>);
  ),; interface MilestoneManagerProps {
  projectId: string;
milestones: Milestone[];
activities: Record<string MilestoneActivity[]>;
isLoading: boolean;
isClient: boolean;
isTalent: boolean;
paymentTerms?: string;
isSubmitting: boolean;
onCreateMilestone: (data: any) => Promise<Milestone | null>;
onUpdateStatus: (id: string, status: MilestoneStatus, comment?: string) => Promise<boolean>;
onDeleteMilestone: (id: string) => Promise<boolean>;
onUploadDeliverable: (id: string, file: File) => Promise<any>;
refetch: () => Promise<void> 
}projectId, milestones, activities, isLoading, isClient, isTalent, paymentTerms, isSubmitting, onCreateMilestone, onUpdateStatus, onDeleteMilestone, onUploadDeliverable, refetch 
}: MilestoneManagerProps) {
  const handleMilestoneApproved = async (milestoneId: string) => {
  try {
  
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
;

};
const handleMilestoneRejected = async (milestoneId: string) => {
  try {
  
}
};
grid grid-cols-1 lg:grid-cols-3 gap-6"> <div className=" lg:col-span-2" > <MilestonesList milestones= {
  milestones 
}activities= {
  activities 
}isLoading= {
  isLoading 
}isClient= {
  isClient 
}onCreateMilestone= {
  onCreateMilestone 
}onUpdateStatus= {
  onUpdateStatus 
}onDeleteMilestone= {
  onDeleteMilestone 
}onUploadDeliverable= {
  onUploadDeliverable 
}isSubmitting= {
  isSubmitting 
}onApprove= {
  isClient ? handleMilestoneApproved : undefined 
}onReject= {
  isClient ? handleMilestoneRejected : undefined 
}/> </div> <div> <PaymentSummary milestones= {
  milestones 
}paymentTerms= {
  paymentTerms 
}/> </div> </div>) 
}
        />
      </div>
    </div>
  )
}
        />;
      </div>;
    </div>;
  );
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
