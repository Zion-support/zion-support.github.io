
import React from 'react';
import { MilestonesList  } from '../MilestonesList';
import { PaymentSummary  } from '../PaymentSummary';
import { Milestone, MilestoneStatus, MilestoneActivity  } from '@/hooks/useMilestones';
import { toast } from "sonner";
interface MilestoneManagerProps {
<<<<<<< HEAD
  projectId: string;
  milestones: Milestone[];
  activities: Record<string, MilestoneActivity[]>,
  isLoading: boolean;
  isClient: boolean;
  isTalent: boolean;
  paymentTerms?: string;
  isSubmitting: boolean;
  onCreateMilestone: (data: any) => Promise<Milestone | null>;
  onUpdateStatus: (id: string, status: MilestoneStatus, comment?: string) => Promise<boolean>,
  onDeleteMilestone: (id: string) => Promise<boolean>;
  onUploadDeliverable: (id: string, file: File) => Promise<any>;
<<<<<<< HEAD
=======
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
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  refetch: () => Promise<void>
}
=======
  refetch: () => Promise<void>;
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export function MilestoneManager({
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
  refetch
}: MilestoneManagerProps) {
<<<<<<< HEAD
  const handleMilestoneApproved = null;
=======
  const handleMilestoneApproved = async (milestoneId: string) => {
    try {
      await onUpdateStatus(milestoneId, "completed" as MilestoneStatus);
      toast.success("Milestone approved");
      await refetch()
    } catch (error) {
      console.error("Error approving milestone:", error);
      toast.error("Failed to approve milestone")
    }
  }
  const handleMilestoneRejected = async (milestoneId: string) => {
    try {
      await onUpdateStatus(milestoneId, "rejected" as MilestoneStatus);
      toast.success("Milestone rejected");
      await refetch()
    } catch (error) {
      console.error("Error rejecting milestone:", error);
      toast.error("Failed to reject milestone")
    }
  }
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
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