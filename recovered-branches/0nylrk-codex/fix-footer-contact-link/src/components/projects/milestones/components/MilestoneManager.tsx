
import React from 'react';
import { MilestonesList } from '../MilestonesList';
import { PaymentSummary } from '../PaymentSummary';
import { Milestone, MilestoneStatus, MilestoneActivity } from '@/hooks/useMilestones';
import { toast } from &quot;sonner&quot;;

interface MilestoneManagerProps {
  projectId: string;
  milestones: Milestone[];
  activities: Record<string, MilestoneActivity[]>;
  isLoading: boolean;
  isClient: boolean;
  isTalent: boolean;
  paymentTerms?: string;
  isSubmitting: boolean;
  onCreateMilestone: (data: any) => Promise<Milestone | null>;
  onUpdateStatus: (id: string, status: MilestoneStatus, comment?: string) => Promise<boolean>;
  onDeleteMilestone: (id: string) => Promise<boolean>;
  onUploadDeliverable: (id: string, file: File) => Promise<any>;
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
      await onUpdateStatus(milestoneId, &quot;completed&quot; as MilestoneStatus);
      toast.success(&quot;Milestone approved&quot;);
      await refetch();
    } catch (error) {
      console.error(&quot;Error approving milestone:&quot;, error);
      toast.error(&quot;Failed to approve milestone&quot;);
    }
  };
  
  const handleMilestoneRejected = async (milestoneId: string) => {
    try {
      await onUpdateStatus(milestoneId, &quot;rejected&quot; as MilestoneStatus);
      toast.success(&quot;Milestone rejected&quot;);
      await refetch();
    } catch (error) {
      console.error(&quot;Error rejecting milestone:&quot;, error);
      toast.error(&quot;Failed to reject milestone&quot;);
    }
  };

  return (
    <div className=&quot;grid grid-cols-1 lg:grid-cols-3 gap-6&quot;>
      <div className=&quot;lg:col-span-2&quot;>
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
