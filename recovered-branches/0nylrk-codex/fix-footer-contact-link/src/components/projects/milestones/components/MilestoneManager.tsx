<<<<<<< HEAD

<<<<<<< HEAD
import React from 'react';
import { MilestonesList  } from '../MilestonesList';
import { PaymentSummary  } from '../PaymentSummary';
import { Milestone, MilestoneStatus, MilestoneActivity  } from '@/hooks/useMilestones';
import { toast } from "sonner";
interface MilestoneManagerProps {
=======
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

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
import {Milestone, MilestoneStatus, MilestoneActivity} from '@/hooks/useMilestones';
import {toast} from "sonner";
=======


=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import React from 'react',
import { MilestonesList } from '../MilestonesList',
import { PaymentSummary } from '../PaymentSummary',
import { Milestone, MilestoneStatus, MilestoneActivity } from '@/hooks/useMilestones',
import { toast } from "sonner",
<<<<<<< HEAD
=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
<<<<<<< HEAD

export function MilestoneManager({;
=======
import React from 'react';
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
<<<<<<< HEAD
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
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  refetch
}: MilestoneManagerProps) {

  const handleMilestoneApproved = async (milestoneId: string) => {
    try {

  refetch;
}: MilestoneManagerProps) {;
  const handleMilestoneApproved = async (milestoneId: string) => {;
    try {;

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
=======
      await onUpdateStatus(milestoneId, "completed" as MilestoneStatus),
      toast.success("Milestone approved"),
      await refetch()
    } catch (error) {
      console.error("Error approving milestone:", error),
      toast.error("Failed to approve milestone")
    }
  }
  },
  
  const handleMilestoneRejected = async (milestoneId: string) => {
    try {
      await onUpdateStatus(milestoneId, "rejected" as MilestoneStatus),
      toast.success("Milestone rejected"),
      await refetch()
    } catch (error) {
      console.error("Error rejecting milestone:", error),
      toast.error("Failed to reject milestone")
    }
  }
  },

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <MilestonesList
        <MilestonesList 
<<<<<<< HEAD
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
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
          milestones={milestones}
          activities={activities}
          is_loading={is_loading}
          is_client={is_client}
          onCreateMilestone={onCreateMilestone}
          onUpdateStatus={onUpdateStatus}
          onDeleteMilestone={onDeleteMilestone}
          onUploadDeliverable={onUploadDeliverable}
<<<<<<< HEAD
          isSubmitting={isSubmitting}
          onApprove={isClient ? handleMilestoneApproved : undefined}
          onReject={isClient ? handleMilestoneRejected : undefined}
        />
      </div>
      <div>
        <PaymentSummary
          milestones={milestones}
          paymentTerms={paymentTerms}
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

=======
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
}
<<<<<<< HEAD

=======
;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
