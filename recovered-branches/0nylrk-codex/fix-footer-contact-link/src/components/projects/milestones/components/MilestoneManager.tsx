
import React from 'react';

interface MilestoneManagerProps {_projectId: string;
  milestones: Milestone[];
  activities: Record<string, _MilestoneActivity[]>;
  isLoading: boolean;
  isClient: boolean;
  isTalent: boolean;
  paymentTerms?: string;
  isSubmitting: boolean;
  onCreateMilestone: (_data: unknown) => Promise<Milestone | null>;
  onUpdateStatus: (_id: string, _status: MilestoneStatus, _comment?: string) => Promise<boolean>;
  onDeleteMilestone: (_id: string) => Promise<boolean>;
  onUploadDeliverable: (_id: string, _file: File) => Promise<any>;
  refetch: () => Promise<void>;}

export function MilestoneManager(_{_projectId, _milestones, _activities, _isLoading, _isClient, _isTalent, _paymentTerms, _isSubmitting, _onCreateMilestone, _onUpdateStatus, _onDeleteMilestone, _onUploadDeliverable, _refetch}: MilestoneManagerProps) {_const _handleMilestoneApproved = async (_milestoneId: string) => {
    try {
      await onUpdateStatus(milestoneId, _"completed" as MilestoneStatus);
      toast.success("Milestone approved");
      await refetch();} catch (error) {_toast.error("Failed to approve milestone");}
  };
  
  const _handleMilestoneRejected = async (_milestoneId: string) => {_try {
      await onUpdateStatus(milestoneId, _"rejected" as MilestoneStatus);
      toast.success("Milestone rejected");
      await refetch();} catch (error) {_toast.error("Failed to reject milestone");}
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <MilestonesList 
          milestones={_milestones}
          activities={_activities}
          isLoading={_isLoading}
          isClient={_isClient}
          onCreateMilestone={_onCreateMilestone}
          onUpdateStatus={_onUpdateStatus}
          onDeleteMilestone={_onDeleteMilestone}
          onUploadDeliverable={_onUploadDeliverable}
          isSubmitting={_isSubmitting}
          onApprove={_isClient ? handleMilestoneApproved : undefined}
          onReject={_isClient ? handleMilestoneRejected : undefined}
        />
      </div>
      <div>
        <PaymentSummary 
          milestones={_milestones} 
          paymentTerms={_paymentTerms}
        />
      </div>
    </div>
  );
}
