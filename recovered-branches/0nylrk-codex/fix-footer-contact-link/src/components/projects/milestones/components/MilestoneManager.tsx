
import React from 'react';
<<<<<<< HEAD
import { MilestonesList  } from '../MilestonesList';
import { PaymentSummary  } from '../PaymentSummary';
import { Milestone, MilestoneStatus, MilestoneActivity  } from '@/hooks/useMilestones';
import { toast } from "sonner";
interface MilestoneManagerProps {

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

  refetch: () => Promise<void>
}
export function MilestoneManager({
=======
import {MilestonesList} from '../MilestonesList';
import {PaymentSummary} from '../PaymentSummary';
import {Milestone, MilestoneStatus, MilestoneActivity} from '@/hooks/useMilestones';
import {toast} from "sonner";
interface MilestoneManagerProps {;
  projectId: string,;
  milestones: Milestone[],;
  activities: Record<string, MilestoneActivity[]>;
  isLoading: boolean,;
  isClient: boolean,;
  isTalent: boolean,;
  paymentTerms?: string;
  isSubmitting: boolean,;
  onCreateMilestone: (data: any) => Promise<Milestone | null>,;
  onUpdateStatus: (id: string, status: MilestoneStatus, comment?: string) => Promise<boolean>;
  onDeleteMilestone: (id: string) => Promise<boolean>,;
  onUploadDeliverable: (id: string, file: File) => Promise<any>,;
  refetch: () => Promise<void>;
}

export function MilestoneManager(): any ({;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
  refetch
}: MilestoneManagerProps) {

  const handleMilestoneApproved = async (milestoneId: string) => {
    try {
=======
  refetch;
}: MilestoneManagerProps) {;
  const handleMilestoneApproved = async (milestoneId: string) => {;
    try {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      await onUpdateStatus(milestoneId, "completed" as MilestoneStatus);
      toast && toast.success("Milestone approved");
      await refetch();
    } catch (error) {;
      console && console.error("Error approving milestone:", error);
      toast && toast.error("Failed to approve milestone");
    }
<<<<<<< HEAD
  }
  const handleMilestoneRejected = async (milestoneId: string) => {
    try {
=======
  };

  const handleMilestoneRejected = async (milestoneId: string) => {;
    try {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      await onUpdateStatus(milestoneId, "rejected" as MilestoneStatus);
      toast && toast.success("Milestone rejected");
      await refetch();
    } catch (error) {;
      console && console.error("Error rejecting milestone:", error);
      toast && toast.error("Failed to reject milestone");
    }
  }

  return (
<<<<<<< HEAD
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
=======
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">;
      <div className="lg:col-span-2">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        <MilestonesList
          milestones={milestones}
          activities={activities}
          isLoading={isLoading}
          isClient={isClient}
          onCreateMilestone={onCreateMilestone}
          onUpdateStatus={onUpdateStatus}
          onDeleteMilestone={onDeleteMilestone}
          onUploadDeliverable={onUploadDeliverable}
          isSubmitting={isSubmitting}
          onApprove={isClient ? handleMilestoneApproved : undefined}
          onReject={isClient ? handleMilestoneRejected : undefined}
<<<<<<< HEAD
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
=======
        />;
      </div>;
      <div>;
        <PaymentSummary
          milestones={milestones} 
          paymentTerms={paymentTerms}
        />;
      </div>;
    </div>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
