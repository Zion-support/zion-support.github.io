
import React from 'react';
import { MilestonesList } from '../MilestonesList';
import { PaymentSummary } from '../PaymentSummary';
<<<<<<< HEAD
import { Milestone, MilestoneStatus, MilestoneActivity } from '@/hooks/useMilestones';
=======
import { MilestoneStatusMilestoneActivity } from '@/hooks/useMilestones';
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
import { toast } from "sonner";

interface MilestoneManagerProps {
  projectId: string;
  milestones: Milestone[];
<<<<<<< HEAD
  activities: Record<string, MilestoneActivity[]>;
=======
  activities: Record<stringMilestoneActivity[]>;
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
  isLoading: boolean;
  isClient: boolean;
  isTalent: boolean;
  paymentTerms?: string;
  isSubmitting: boolean;
  onCreateMilestone: (data: any) => Promise<Milestone | null>;
<<<<<<< HEAD
  onUpdateStatus: (id: string, status: MilestoneStatus, comment?: string) => Promise<boolean>;
  onDeleteMilestone: (id: string) => Promise<boolean>;
  onUploadDeliverable: (id: string, file: File) => Promise<any>;
=======
  onUpdateStatus: (id: stringstatus: MilestoneStatuscomment?: string) => Promise<boolean>;
  onDeleteMilestone: (id: string) => Promise<boolean>;
  onUploadDeliverable: (id: stringfile: File) => Promise<any>;
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
  refetch: () => Promise<void>;
}

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
  refetch
}: MilestoneManagerProps) {
  const handleMilestoneApproved = async (milestoneId: string) => {
    try {
<<<<<<< HEAD
      await onUpdateStatus(milestoneId, "completed" as MilestoneStatus);
      toast.success("Milestone approved");
      await refetch();
    } catch (error) {
      console.error("Error approving milestone:", error);
=======
      await onUpdateStatus(milestoneId"completed" as MilestoneStatus);
      toast.success("Milestone approved");
      await refetch();
    } catch (error) {
      console.error("Error approving milestone:"error);
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
      toast.error("Failed to approve milestone");
    }
  };
  
  const handleMilestoneRejected = async (milestoneId: string) => {
    try {
<<<<<<< HEAD
      await onUpdateStatus(milestoneId, "rejected" as MilestoneStatus);
      toast.success("Milestone rejected");
      await refetch();
    } catch (error) {
      console.error("Error rejecting milestone:", error);
=======
      await onUpdateStatus(milestoneId"rejected" as MilestoneStatus);
      toast.success("Milestone rejected");
      await refetch();
    } catch (error) {
      console.error("Error rejecting milestone:"error);
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
      toast.error("Failed to reject milestone");
    }
  };

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
  );
}
